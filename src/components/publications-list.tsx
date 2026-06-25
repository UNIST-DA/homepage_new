"use client";

import { useMemo, useState } from "react";
import { publications, type Publication } from "@/data/publications";

type Filter = "all" | "journal" | "conference";
const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "journal", label: "Journal" },
  { key: "conference", label: "Conference" },
];

function groupByYear(list: Publication[]) {
  const groups: { year: number; items: Publication[] }[] = [];
  for (const p of list) {
    const last = groups[groups.length - 1];
    if (last && last.year === p.year) last.items.push(p);
    else groups.push({ year: p.year, items: [p] });
  }
  return groups;
}

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={a + i}>
          <span className={a === "Sungil Kim" ? "me" : undefined}>{a}</span>
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}

export function PublicationsList() {
  const [filter, setFilter] = useState<Filter>("all");
  const groups = useMemo(
    () =>
      groupByYear(
        filter === "all" ? publications : publications.filter((p) => p.type === filter),
      ),
    [filter],
  );

  return (
    <div>
      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`tab ${filter === t.key ? "is-active" : ""}`}
            onClick={() => setFilter(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {groups.map((g) => (
        <div key={g.year}>
          <div className="pub-year">
            <span className="pub-year__n">{g.year}</span>
            <span className="pub-year__line" />
          </div>
          {g.items.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="pub">
              <span className={`pub__type ${p.type === "conference" ? "pub__type--conf" : ""}`}>
                {p.type === "conference" ? "Conf" : "Journal"}
              </span>
              <div>
                <div className="pub__title">{p.title}</div>
                <div className="pub__authors">
                  <Authors authors={p.authors} /> · <span className="pub__venue">{p.venue}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
