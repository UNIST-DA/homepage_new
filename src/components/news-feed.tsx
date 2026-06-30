"use client";

import { useState } from "react";
import type { NewsItem } from "@/data/news";

const LIMIT = 6;

const md = (iso: string) => {
  const d = new Date(iso + "T00:00:00");
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

export function NewsFeed({ items }: { items: NewsItem[] }) {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? items : items.slice(0, LIMIT);

  // group the shown items by year (already reverse-chronological)
  const years: { year: number; items: NewsItem[] }[] = [];
  for (const n of shown) {
    const year = Number(n.date.slice(0, 4));
    const last = years[years.length - 1];
    if (last && last.year === year) last.items.push(n);
    else years.push({ year, items: [n] });
  }

  return (
    <>
      {years.map((g) => (
        <div key={g.year}>
          <div className="news-year">
            <span className="news-year__n">{g.year}</span>
            <span className="news-year__line" />
          </div>
          <div className="news-feed">
            {g.items.map((n) => (
              <div key={n.date + n.title} className="nrow">
                <span className="nrow__date">{md(n.date)}</span>
                <span className={`nbadge nbadge--${n.tag.toLowerCase()}`}>{n.tag}</span>
                <span className="nrow__title">{n.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {items.length > LIMIT && (
        <div className="more-wrap">
          <button className="more-btn" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "접기" : `전체 보기 (${items.length})`}
          </button>
        </div>
      )}
    </>
  );
}
