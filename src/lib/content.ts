// Build-time loaders for the CMS-editable JSON content under web/content/.
// Server-only (uses node:fs) — import only from Server Components / data modules.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const CONTENT = join(process.cwd(), "content");

export function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(CONTENT, file), "utf8")) as T;
}

// All .json entries in a content subfolder; `slug` is the filename without extension.
export function readJsonDir<T>(sub: string): { slug: string; data: T }[] {
  return readdirSync(join(CONTENT, sub))
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ slug: f.replace(/\.json$/, ""), data: readJson<T>(`${sub}/${f}`) }));
}
