"use client";

import { useMemo, useState } from "react";
import { seminars, type SeminarItem } from "@/data/activity";

type Filter = "all" | "Lab Seminar" | "Paper Review";
const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "Lab Seminar", label: "Lab Seminar" },
  { key: "Paper Review", label: "Paper Review" },
];

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

function Badge({ c }: { c: SeminarItem["category"] }) {
  return <span className={`sem-badge ${c === "Paper Review" ? "sem-badge--review" : ""}`}>{c}</span>;
}

export function SeminarList() {
  const [filter, setFilter] = useState<Filter>("all");
  const featured = seminars[0];
  const list = useMemo(
    () => (filter === "all" ? seminars : seminars.filter((s) => s.category === filter)),
    [filter],
  );

  return (
    <div>
      {/* featured latest */}
      <a href={featured.url} target="_blank" rel="noopener noreferrer" className="sem-featured" style={{ display: "block" }}>
        <div className="sem-top">
          <Badge c={featured.category} />
          <span className="sem-date">{fmt(featured.date)}</span>
          <span className="sem-featured__label">LATEST SEMINAR</span>
        </div>
        <div className="sem-featured__title">{featured.title}</div>
        <div className="sem-featured__meta">Presented by {featured.presenter}</div>
        <div className="sem-kw-row">
          {featured.keywords.map((k) => <span key={k} className="sem-kw">{k}</span>)}
        </div>
      </a>

      {/* tabs */}
      <div className="tabs" style={{ marginTop: 36 }}>
        {TABS.map((t) => (
          <button key={t.key} className={`tab ${filter === t.key ? "is-active" : ""}`} onClick={() => setFilter(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="sem-grid">
        {list.map((s) => (
          <a key={s.date + s.title} href={s.url} target="_blank" rel="noopener noreferrer" className="sem-card glow">
            <div className="sem-top">
              <Badge c={s.category} />
              <span className="sem-date">{fmt(s.date)}</span>
            </div>
            <div className="sem-card__title">{s.title}</div>
            <div className="sem-card__presenter">{s.presenter}</div>
            <div className="sem-card__kw">
              {s.keywords.slice(0, 3).map((k) => <span key={k} className="sem-kw">{k}</span>)}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
