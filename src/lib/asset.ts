// Prefix an absolute in-app path (e.g. "/assets/x.jpg") with the deploy
// basePath, so files resolve under a GitHub Pages project subpath
// (username.github.io/homepage_new/...). A no-op at the site root (custom
// domain) and for external (http...) URLs.
export const asset = (p: string): string =>
  p.startsWith("/") ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + p : p;
