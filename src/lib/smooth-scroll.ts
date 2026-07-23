"use client";

// Programmatic smooth scrolling that works regardless of the OS "reduce motion"
// setting. Browsers turn scrollTo/scrollBy({behavior:"smooth"}) into an INSTANT
// jump when prefers-reduced-motion is on (common on Windows), which made section
// navigation feel like flipping PPT slides. These animate manually with rAF so
// the glide is identical everywhere. Each per-frame scroll is a plain instant
// scroll, so `scroll-behavior: smooth` must NOT be set in CSS (it would fight
// this by re-easing every frame).

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let pageRaf = 0;

/** Smoothly scroll the window to an absolute Y position. */
export function smoothScrollTo(targetY: number, duration = 620) {
  cancelAnimationFrame(pageRaf);
  const startY = window.scrollY;
  const dist = targetY - startY;
  if (Math.abs(dist) < 2) {
    window.scrollTo(0, targetY);
    return;
  }
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, Math.round(startY + dist * easeInOutCubic(p)));
    if (p < 1) pageRaf = requestAnimationFrame(step);
  };
  pageRaf = requestAnimationFrame(step);
}

let elRaf = 0;

/** Smoothly scroll an element horizontally by a delta (for carousels). */
export function smoothScrollByX(el: HTMLElement, dx: number, duration = 520) {
  cancelAnimationFrame(elRaf);
  const startX = el.scrollLeft;
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    el.scrollLeft = Math.round(startX + dx * easeInOutCubic(p));
    if (p < 1) elRaf = requestAnimationFrame(step);
  };
  elRaf = requestAnimationFrame(step);
}
