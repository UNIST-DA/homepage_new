"use client";

import { useEffect, useState } from "react";

type Res = { label: string; tag: string; hit?: boolean };
type Scenario = { query: string; results: Res[] };

// A live index of the lab's real publications, grouped by research topic.
// Each query surfaces actual papers (title · venue); the flagship is flagged.
const SCENARIOS: Scenario[] = [
  {
    query: "irregular time-series",
    results: [
      { label: "Stable Neural SDE", tag: "ICLR'24 ★", hit: true },
      { label: "Continuum Dropout for NDE", tag: "AAAI'26" },
      { label: "Review of Neural DEs", tag: "IJCAI'25" },
      { label: "FlowPath · invertible flows", tag: "AAAI'26" },
    ],
  },
  {
    query: "maritime anomaly detection",
    results: [
      { label: "Grid Bayesian Bootstrap (AIS)", tag: "IEEE T-ASE", hit: true },
      { label: "VAE monitoring for AIS", tag: "MPM'25" },
      { label: "Astronomical Neural SDDE", tag: "CIKM'25" },
      { label: "vessel anomaly detection", tag: "patent" },
    ],
  },
  {
    query: "quality engineering",
    results: [
      { label: "Functional outlier detection", tag: "CIE'24", hit: true },
      { label: "Multichannel CNN · gas", tag: "Ann. OR" },
      { label: "Sensor drift compensation", tag: "QREI'23" },
      { label: "TAOD-Net · orbitopathy", tag: "CIE'25" },
    ],
  },
  {
    query: "forecasting & demand",
    results: [
      { label: "MAPE for intermittent demand", tag: "IJF'16", hit: true },
      { label: "Maximum feasibility est.", tag: "Inf. Sci.'21" },
      { label: "Household characteristics", tag: "Inf. Sci.'19" },
      { label: "Lifelog data fusion", tag: "Inf. Fusion'24" },
    ],
  },
];

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function HeroConsole() {
  const [si, setSi] = useState(0);
  const [text, setText] = useState(SCENARIOS[0].query);
  const [vis, setVis] = useState(SCENARIOS[0].results.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let i = 0;

    (async () => {
      while (!cancelled) {
        await sleep(2900); // hold the current result set
        if (cancelled) return;
        setVis(0); // clear results
        await sleep(240);

        const q = SCENARIOS[i].query; // erase the query
        for (let k = q.length; k >= 0; k--) {
          if (cancelled) return;
          setText(q.slice(0, k));
          await sleep(14);
        }
        await sleep(220);

        i = (i + 1) % SCENARIOS.length; // next scenario
        setSi(i);
        const nq = SCENARIOS[i].query; // type it
        for (let k = 1; k <= nq.length; k++) {
          if (cancelled) return;
          setText(nq.slice(0, k));
          await sleep(34);
        }
        await sleep(180);

        for (let r = 1; r <= SCENARIOS[i].results.length; r++) {
          if (cancelled) return;
          setVis(r); // reveal results one by one
          await sleep(165);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const scn = SCENARIOS[si];

  return (
    <aside className="console" aria-hidden>
      <div className="console__bar">
        <span>da-lab · publications</span>
        <span className="console__dots">
          <i /><i /><i />
        </span>
      </div>
      <div className="console__body">
        <div className="console__search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="q-text">
            {text}
            <span className="q-caret" />
          </span>
        </div>
        <div className="console__results">
          {scn.results.slice(0, vis).map((r) => (
            <div key={scn.query + r.label} className={`cres ${r.hit ? "cres--hit" : ""}`}>
              <span className="cres__l">
                <span className="cres__dot">{r.hit ? "●" : "◦"}</span>
                {r.label}
              </span>
              <span className="cres__tag">{r.tag}</span>
            </div>
          ))}
        </div>
        <div className="console__foot">
          <span>selected publications</span>
          <span>2016 — 2026</span>
        </div>
      </div>
    </aside>
  );
}
