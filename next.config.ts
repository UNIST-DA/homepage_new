import type { NextConfig } from "next";
import path from "node:path";

// A custom-domain (root) deploy needs no basePath. For a GitHub Pages *project*
// URL (username.github.io/homepage_new/), set PAGES_BASE_PATH="/homepage_new".
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // This app lives in web/ next to the legacy Jekyll site; pin the root so
  // Turbopack doesn't pick the outer lockfile.
  turbopack: { root: path.resolve() },
  // Static HTML export for GitHub Pages. `out/` is deployed as-is.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // default optimizer needs a server; export ships raw files
  ...(basePath && {
    basePath,
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
  }),
};

export default nextConfig;
