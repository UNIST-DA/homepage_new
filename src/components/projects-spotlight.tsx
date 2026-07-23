"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { asset } from "@/lib/asset";

// Rotation of a hand-picked set of projects (the ones with the strongest
// figures) — the left half of "Projects & Papers". Image-led (the project page
// gallery, moving); the shared `tick` keeps it in lockstep with the
// publications console on the right. Order below is the display order.
const FEATURED = [
  "scsc-ais-risk", // Risk-Aware Imitation Learning with Environmental Context for AIS
  "scsc-fuel-pred", // Physics-Informed AI for Robust Ship Fuel Consumption Prediction
  "lg-lqc", // Fault Detection via Domain-Knowledge-Based Training Data Refinement
  "lqc-od", // Domain Knowledge-Informed Functional Outlier Detection for LQC
  "traffic-cong", // Prediction of Traffic Congestion Propagation
];
const ORDER = FEATURED.map((s) => projects.find((p) => p.slug === s)).filter(
  (p): p is (typeof projects)[number] => Boolean(p),
);

export function ProjectsSpotlight({ tick }: { tick: number }) {
  const i = ((tick % ORDER.length) + ORDER.length) % ORDER.length;
  const p = ORDER[i] ?? ORDER[0];

  return (
    <div className="spotlight">
      <Link key={i} href={`/research/${p.slug}/`} className="spotlight__card">
        <div className="spotlight__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(p.image)} alt={p.title} loading="lazy" />
        </div>
        <div className="spotlight__cap">
          <span className="spotlight__index" aria-hidden>
            {String(i + 1).padStart(2, "0")}
            <span className="spotlight__index-total"> / {String(ORDER.length).padStart(2, "0")}</span>
          </span>
          <h3 className="spotlight__title">{p.title}</h3>
        </div>
        <p className="spotlight__summary">{p.summary}</p>
      </Link>
    </div>
  );
}
