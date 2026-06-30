// Build-time loaders for the CMS-editable JSON content under web/content/.
// Server-only (uses node:fs) — import only from Server Components / data modules.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const CONTENT = join(process.cwd(), "content");

// Minimal frontmatter parser for our controlled format: `key: value` lines,
// with `keywords` as a comma-separated list. (No YAML dependency needed.)
function parseFrontmatter(block: string): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const line of block.split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim();
    data[key] = key === "keywords" ? val.split(",").map((s) => s.trim()).filter(Boolean) : val;
  }
  return data;
}

export function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(CONTENT, file), "utf8")) as T;
}

// All .json entries in a content subfolder; `slug` is the filename without extension.
export function readJsonDir<T>(sub: string): { slug: string; data: T }[] {
  return readdirSync(join(CONTENT, sub))
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ slug: f.replace(/\.json$/, ""), data: readJson<T>(`${sub}/${f}`) }));
}

// All .md entries in a content subfolder: YAML frontmatter (`data`) + markdown
// `body`. Lets researchers edit one file and just type the write-up below ---.
export function readMarkdownDir<T>(sub: string): { slug: string; data: T; body: string }[] {
  return readdirSync(join(CONTENT, sub))
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = readFileSync(join(CONTENT, sub, f), "utf8");
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      const data = (m ? parseFrontmatter(m[1]) : {}) as T;
      const body = (m ? m[2] : raw).trim();
      return { slug: f.replace(/\.md$/, ""), data, body };
    });
}
