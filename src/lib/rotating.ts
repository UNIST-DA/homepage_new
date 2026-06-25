"use client";

import { useEffect, useState } from "react";

// The research concepts the hero cycles through.
export const ROT_WORDS = ["signal", "anomaly", "structure", "pattern"];

// Shared time origin so the word and the graphic stay perfectly in sync,
// even though they live in separate components.
let start = 0;

export function useRotatingIndex(period = 2400) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!start) start = performance.now();
    const tick = () =>
      setI(Math.floor((performance.now() - start) / period) % ROT_WORDS.length);
    tick();
    const id = setInterval(tick, 150);
    return () => clearInterval(id);
  }, [period]);

  return i;
}
