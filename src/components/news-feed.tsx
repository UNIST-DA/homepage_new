"use client";

import { useMemo, useState } from "react";
import type { NewsItem } from "@/data/news";

const md = (iso: string) => {
  const d = new Date(iso + "T00:00:00");
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

export function NewsFeed({ items }: { items: NewsItem[] }) {
  const years = useMemo(
    () => Array.from(new Set(items.map((n) => n.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a)),
    [items],
  );
  // one year at a time (newest first) — no all-at-once dump, no expand toggle
  const [year, setYear] = useState<string>(() => years[0] ?? "");

  const shown = items.filter((n) => n.date.slice(0, 4) === year);

  return (
    <>
      <div className="tabs" style={{ marginBottom: 28 }}>
        {years.map((y) => (
          <button key={y} className={`tab ${year === y ? "is-active" : ""}`} onClick={() => setYear(y)}>
            {y}
          </button>
        ))}
      </div>

      <div className="news-feed">
        {shown.map((n) => (
          <div key={n.date + n.title} className="nrow">
            <span className="nrow__date">{md(n.date)}</span>
            <span className={`nbadge nbadge--${n.tag.toLowerCase()}`}>{n.tag}</span>
            <span className="nrow__title">{n.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
