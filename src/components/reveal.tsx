"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger in seconds */
  delay?: number;
  style?: React.CSSProperties;
};

/**
 * Fades + lifts its content into view once, the first time it intersects.
 * Falls back to visible immediately if IntersectionObserver is unavailable
 * (and CSS handles prefers-reduced-motion).
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  );
}
