// Sync seminars from a Notion database into web/content/seminars/*.md.
//
// Lab members edit the Notion DB (title / date / presenter / category /
// keywords, and the write-up in the page body). A GitHub Action runs this on a
// schedule and on demand; it regenerates the seminars folder and commits, which
// auto-deploys. The Notion DB is the single source of truth — do NOT hand-edit
// files in content/seminars/.
//
// Notion DB property names (reuse the lab's existing seminar DB):
//   Title (title) · Date (date) · Presenter (people|rich_text) ·
//   Category (select|multi_select) · Keywords (multi_select|rich_text) ·
//   Published (checkbox)
//
// Env: NOTION_TOKEN, NOTION_SEMINAR_DB_ID
// Usage: node scripts/sync-seminars.mjs            # sync
//        node scripts/sync-seminars.mjs --selftest # offline logic check

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "content", "seminars");
const IMG_DIR = path.join(ROOT, "public", "assets", "seminars");
const IMG_URL_BASE = "/assets/seminars";

// Notion property names — change here if the DB uses different column names.
const F = {
  title: "Title",
  date: "Date",
  presenter: "Presenter",
  category: "Category",
  keywords: "Keywords",
  published: "Published",
};

// ---------- pure helpers (covered by --selftest) ----------

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/['".,()]/g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "untitled";

const oneLine = (s) => String(s ?? "").replace(/\s+/g, " ").trim();

const readProp = (prop) => {
  if (!prop) return "";
  const t = prop.type;
  if (t === "title" || t === "rich_text")
    return (prop[t] || []).map((x) => x.plain_text).join("").trim();
  if (t === "select") return prop.select?.name || "";
  if (t === "multi_select") return (prop.multi_select || []).map((x) => x.name).join(", ");
  if (t === "people") return (prop.people || []).map((p) => p.name || p.person?.email || "").join(", ");
  if (t === "date") {
    const s = prop.date?.start || "";
    return s.includes("T") ? s.slice(0, 10) : s;
  }
  if (t === "checkbox") return prop.checkbox;
  return "";
};

const keywordsFrom = (prop) => {
  if (!prop) return [];
  if (prop.type === "multi_select") return (prop.multi_select || []).map((x) => x.name);
  if (prop.type === "rich_text") return readProp(prop).split(/[,\n]/).map((s) => s.trim()).filter(Boolean);
  return [];
};

const notionUrl = (pageId) => `https://www.notion.so/${String(pageId).replace(/-/g, "")}`;

// Build a seminar .md file (frontmatter matches web/src/lib/content.ts parser:
// `key: value` lines, keywords comma-separated, body after the second `---`).
function buildMarkdown({ date, title, category, presenter, url, keywords, body }) {
  const fm = [
    "---",
    `date: ${oneLine(date)}`,
    `title: ${oneLine(title)}`,
    `category: ${oneLine(category) || "Lab Seminar"}`,
    `presenter: ${oneLine(presenter)}`,
    `url: ${oneLine(url)}`,
    `keywords: ${keywords.map(oneLine).filter(Boolean).join(", ")}`,
    "---",
    "",
  ].join("\n");
  return fm + (body?.trim() ? body.trimEnd() + "\n" : "");
}

// Parse frontmatter the same way the site does — used to validate our output.
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim();
    data[key] = key === "keywords" ? val.split(",").map((s) => s.trim()).filter(Boolean) : val;
  }
  return { data, body: m[2] };
}

// ---------- selftest ----------

function selftest() {
  const assert = (cond, msg) => {
    if (!cond) throw new Error("selftest failed: " + msg);
  };
  assert(slugify("NEURAL DELAY DIFFERENTIAL EQUATIONS") === "neural-delay-differential-equations", "slug basic");
  assert(slugify("A/B: Test (v2)") === "a-b-test-v2", "slug punctuation");
  assert(slugify("불규칙 시계열") === "불규칙-시계열", "slug korean");

  // field parsers over mock Notion props
  assert(readProp({ type: "select", select: { name: "Paper Review" } }) === "Paper Review", "select");
  assert(readProp({ type: "people", people: [{ name: "Kim" }, { name: "Lee" }] }) === "Kim, Lee", "people");
  assert(readProp({ type: "date", date: { start: "2026-06-19T00:00:00" } }) === "2026-06-19", "date iso");
  assert(JSON.stringify(keywordsFrom({ type: "multi_select", multi_select: [{ name: "ODE" }, { name: "GRU" }] })) === '["ODE","GRU"]', "keywords");

  // round-trip: build → parse yields the same controlled fields
  const md = buildMarkdown({
    date: "2026-06-19",
    title: "Neural Delay: Differential Equations",
    category: "Lab Seminar",
    presenter: "SeungSu Kam",
    url: "https://www.notion.so/abc",
    keywords: ["Neural Differential Equation", "ODE"],
    body: "line one\n\n---\n\nline two",
  });
  const parsed = parseFrontmatter(md);
  assert(parsed, "parses");
  assert(parsed.data.title === "Neural Delay: Differential Equations", "title round-trip (keeps colon)");
  assert(parsed.data.category === "Lab Seminar", "category round-trip");
  assert(parsed.data.keywords.length === 2 && parsed.data.keywords[0] === "Neural Differential Equation", "keywords round-trip");
  assert(parsed.body.includes("line two"), "body preserved incl. --- rule");

  console.log("✓ selftest passed");
}

// ---------- image download (Notion file URLs expire → localize) ----------

async function downloadImage(url, slug, idx) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`image fetch ${res.status} for ${url}`);
  const ct = res.headers.get("content-type") || "";
  const extFromCt = ct.split("/")[1]?.split(";")[0];
  const extFromUrl = new URL(url).pathname.split(".").pop();
  const ext = (extFromCt || extFromUrl || "png").replace(/[^a-z0-9]/gi, "").slice(0, 4) || "png";
  const dir = path.join(IMG_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = `${idx}.${ext}`;
  fs.writeFileSync(path.join(dir, file), Buffer.from(await res.arrayBuffer()));
  return `${IMG_URL_BASE}/${slug}/${file}`;
}

// ---------- sync ----------

async function sync() {
  const { Client } = await import("@notionhq/client");
  const { NotionToMarkdown } = await import("notion-to-md");

  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_SEMINAR_DB_ID;
  if (!token || !dbId) {
    console.error("Missing NOTION_TOKEN or NOTION_SEMINAR_DB_ID env.");
    process.exit(1);
  }

  const notion = new Client({ auth: token });
  const n2m = new NotionToMarkdown({ notionClient: notion, config: { parseChildPages: false } });

  // PDF / bookmark / embed / file blocks → a clean "material" link instead of
  // a raw `[bookmark](url)` or a broken embed. Notion-hosted file URLs expire,
  // so those become a plain note (the "내부 노션에서 보기" link covers the full page).
  const isEphemeral = (u) => /amazonaws\.com|notion-static|secure\.notion|X-Amz-/i.test(u);
  const linkBlock = (label) => (block) => {
    const b = block[block.type] || {};
    const url = b.url || b.external?.url || b.file?.url || "";
    const cap = (b.caption || []).map((c) => c.plain_text).join("").trim();
    if (!url) return "";
    if (isEphemeral(url)) return `\n📄 ${cap || label} (노션 원문 참고)\n`;
    return `\n[📄 ${cap || label} ↗](${url})\n`;
  };
  n2m.setCustomTransformer("bookmark", linkBlock("자료 링크"));
  n2m.setCustomTransformer("embed", linkBlock("자료"));
  n2m.setCustomTransformer("pdf", linkBlock("PDF 자료"));
  n2m.setCustomTransformer("link_preview", linkBlock("링크"));
  n2m.setCustomTransformer("file", linkBlock("첨부파일"));

  // fetch all published rows
  const pages = [];
  let cursor;
  do {
    const resp = await notion.databases.query({
      database_id: dbId,
      filter: { property: F.published, checkbox: { equals: true } },
      start_cursor: cursor,
    });
    pages.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : undefined;
  } while (cursor);

  if (pages.length === 0) {
    console.error("Notion returned 0 published seminars — aborting without touching files (check token / DB / Published checkbox).");
    process.exit(1);
  }

  // build files in memory first
  const files = new Map(); // filename -> content
  const usedSlugs = new Set();

  for (const page of pages) {
    const p = page.properties;
    const title = oneLine(readProp(p[F.title])) || "Untitled";
    const date = readProp(p[F.date]) || "";
    const category = oneLine(readProp(p[F.category])) || "Lab Seminar";
    const presenter = oneLine(readProp(p[F.presenter]));
    const keywords = keywordsFrom(p[F.keywords]);

    let slug = slugify(title);
    while (usedSlugs.has(slug)) slug = slug + "-2";
    usedSlugs.add(slug);
    const filename = `${date || "0000-00-00"}-${slug}.md`;

    // page body → markdown, with images downloaded to /public/assets/seminars/<slug>/
    let imgIdx = 0;
    n2m.setCustomTransformer("image", async (block) => {
      const img = block.image;
      const src = img?.type === "external" ? img.external?.url : img?.file?.url;
      if (!src) return false;
      const alt = (img.caption || []).map((c) => c.plain_text).join("").trim();
      try {
        const local = await downloadImage(src, slug, imgIdx++);
        return `![${alt}](${local})`;
      } catch (e) {
        console.warn(`  ! image skipped (${e.message})`);
        return `![${alt}]()`;
      }
    });

    let body = "";
    try {
      const blocks = await n2m.pageToMarkdown(page.id);
      body = n2m.toMarkdownString(blocks).parent || "";
    } catch (e) {
      console.warn(`  ! body conversion failed for "${title}" (${e.message})`);
    }

    files.set(
      filename,
      buildMarkdown({ date, title, category, presenter, url: notionUrl(page.id), keywords, body }),
    );
  }

  // regenerate the directory (Notion is the source of truth)
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.endsWith(".md")) fs.rmSync(path.join(OUT_DIR, f));
  }
  for (const [name, content] of files) {
    fs.writeFileSync(path.join(OUT_DIR, name), content, "utf8");
  }

  // validate every written file parses back cleanly
  let bad = 0;
  for (const [name, content] of files) {
    const parsed = parseFrontmatter(content);
    if (!parsed || !parsed.data.title || !parsed.data.date) {
      console.error(`  ✗ invalid frontmatter: ${name}`);
      bad++;
    }
  }
  if (bad) process.exit(1);

  console.log(`✓ synced ${files.size} seminars → content/seminars/`);
}

// ---------- entry ----------

if (process.argv.includes("--selftest")) {
  selftest();
} else {
  sync().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
