"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { publications, type Publication } from "@/data/publications";

// Research themes — a professional display label paired with the term that
// actually matches the lab's papers. The console auto-cycles through them,
// showing the real matching publications. Empty themes are dropped.
const TOPICS: { label: string; q: string }[] = [
  { label: "Irregular Time-Series Modeling", q: "irregular" },
  { label: "Neural ODEs / Differential Equations", q: "differential" },
  { label: "Maritime Anomaly Detection", q: "AIS" },
  { label: "Time-Series Anomaly Detection", q: "anomaly" },
  { label: "Time-Series Classification", q: "classification" },
  { label: "Gas Sensor Analytics", q: "gas" },
  { label: "Demand Forecasting", q: "demand" },
  { label: "Quality & Reliability Engineering", q: "quality" },
];

const matches = (p: Publication, q: string) => {
  const s = q.toLowerCase();
  return p.title.toLowerCase().includes(s) || p.venue.toLowerCase().includes(s);
};

const QUERIES = TOPICS.map(({ label, q }) => ({
  label,
  list: publications.filter((p) => matches(p, q)),
})).filter((x) => x.list.length >= 1);

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

export function PublicationsConsole() {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % QUERIES.length), 2500);
    return () => clearInterval(id);
  }, []);

  const cur = QUERIES[i] ?? QUERIES[0];
  const shown = cur.list.slice(0, 3);

  // typewriter — type the current theme out, character by character
  useEffect(() => {
    const full = cur.label;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setTyped(full); return; }
    setTyped("");
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setTyped(full.slice(0, n));
      if (n >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [cur.label]);

  return (
    <div className="pubsearch">
      <div className="pubsearch__bar" aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.2-3.2" />
        </svg>
        <span className="pubsearch__q">
          {typed}
          <span className="pubsearch__caret" />
        </span>
      </div>

      <div className="pubsearch__meta">{cur.list.length} related publications</div>

      <div key={`l${i}`} className="pubsearch__list pubsearch__fade">
        {shown.map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="pub">
            <span className={`pub__type ${p.type === "conference" ? "pub__type--conf" : ""}`}>
              {p.type === "conference" ? "Conf" : "Journal"}
            </span>
            <div>
              <div className="pub__title">{p.title}</div>
              <div className="pub__authors">
                <Authors authors={p.authors} /> · <span className="pub__venue">{p.venue}</span> · {p.year}
              </div>
            </div>
          </a>
        ))}
      </div>

      <Link href="/research/publications/" className="pubsearch__all">
        전체 논문 보기 <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
