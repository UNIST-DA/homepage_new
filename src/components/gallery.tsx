"use client";

import { useEffect, useRef } from "react";
import { galleryPhotos } from "@/data/site";
import { asset } from "@/lib/asset";
import { smoothScrollByX } from "@/lib/smooth-scroll";

// Three concatenated copies form an endless track. We keep the viewport inside
// the middle copy; whenever it drifts into a side copy we shift scrollLeft by
// exactly one copy-width — invisible, because the copies are identical — so the
// band loops continuously in whichever direction you go.
const TRACK = [0, 1, 2].flatMap((c) =>
  galleryPhotos.map((p) => ({ ...p, key: `${c}-${p.src}` })),
);

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scroll: 0 });
  const settle = useRef<number | undefined>(undefined);

  const copyWidth = () => {
    const el = ref.current;
    if (!el) return 0;
    const n = galleryPhotos.length;
    const items = el.children;
    return (
      (items[n] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
    );
  };

  const recenter = () => {
    const el = ref.current;
    if (!el) return;
    const c = copyWidth();
    if (!c) return;
    if (el.scrollLeft >= c * 2) el.scrollLeft -= c;
    else if (el.scrollLeft < c) el.scrollLeft += c;
  };

  // start in the middle copy, and recenter once scrolling settles
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollLeft = copyWidth();
    const onScroll = () => {
      window.clearTimeout(settle.current);
      settle.current = window.setTimeout(() => {
        if (!drag.current.down) recenter();
      }, 120);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.clearTimeout(settle.current);
    };
  }, []);

  const page = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    smoothScrollByX(el, dir * el.clientWidth * 0.8);
  };

  const onDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, scroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    el.scrollLeft = drag.current.scroll - (e.clientX - drag.current.startX);
  };
  const onUp = () => {
    drag.current.down = false;
    recenter();
  };

  return (
    <div className="gallery-wrap">
      <div
        className="gallery"
        ref={ref}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        {TRACK.map((p) => (
          <figure key={p.key} className="gallery__item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(p.src)} alt={p.caption} loading="lazy" draggable={false} />
            <figcaption className="gallery__cap">{p.caption}</figcaption>
          </figure>
        ))}
      </div>

      <button
        className="gallery__nav gallery__nav--prev"
        aria-label="이전 사진"
        onClick={() => page(-1)}
      >
        ‹
      </button>
      <button
        className="gallery__nav gallery__nav--next"
        aria-label="다음 사진"
        onClick={() => page(1)}
      >
        ›
      </button>
    </div>
  );
}
