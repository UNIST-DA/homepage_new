// One-off: resize + recompress all raster images in public/assets in place
// (same filenames → no reference changes). Run from web/:
//   node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "public/assets";
const MAX = 1600; // max longest side in px — plenty for any on-screen use (incl. retina)
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let n = 0, before = 0, after = 0, skipped = 0;
for await (const f of walk(ROOT)) {
  const ext = extname(f).toLowerCase();
  if (!EXTS.has(ext)) continue;
  const s0 = (await stat(f)).size;
  try {
    const img = sharp(f, { failOn: "none" }).rotate(); // honor EXIF orientation
    const meta = await img.metadata();
    let pipe = img;
    if (Math.max(meta.width || 0, meta.height || 0) > MAX) {
      pipe = pipe.resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
    }
    if (ext === ".png") pipe = pipe.png({ compressionLevel: 9, palette: true, quality: 80 });
    else if (ext === ".webp") pipe = pipe.webp({ quality: 80 });
    else pipe = pipe.jpeg({ quality: 80, mozjpeg: true });

    const tmp = f + ".opt";
    await pipe.toFile(tmp);
    const s1 = (await stat(tmp)).size;
    if (s1 < s0) { await rename(tmp, f); after += s1; n++; }
    else { await unlink(tmp); after += s0; skipped++; } // already optimal — keep original
  } catch (err) {
    console.warn("skip", f, err.message);
    after += s0; skipped++;
  }
  before += s0;
}
console.log(
  `optimized ${n} files (kept ${skipped}): ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`,
);
