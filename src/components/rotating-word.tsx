"use client";

import { ROT_WORDS, useRotatingIndex } from "@/lib/rotating";

export function RotatingWord() {
  const i = useRotatingIndex();

  return (
    <span className="rot" aria-label={ROT_WORDS.join(", ")}>
      <span className="rot__list" style={{ transform: `translateY(calc(${i} * -1.4em))` }}>
        {ROT_WORDS.map((w) => (
          <span key={w} className="rot__item" aria-hidden>{w}</span>
        ))}
      </span>
    </span>
  );
}
