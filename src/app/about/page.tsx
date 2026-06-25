import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { interests, researchAreas } from "@/data/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "소개",
  description:
    "UNIST 산업공학과 데이터 애널리틱스 연구실 소개 — 산업통계와 딥러닝 기반의 품질공학·이상탐지·시계열 연구.",
};

const approach = [
  { n: "01", t: "방법론으로서의 통계", d: "Statistics as a research methodology" },
  { n: "02", t: "실제 데이터에서 출발", d: "Motivation from real data" },
  { n: "03", t: "산업 현장으로의 적용", d: "Applications to industry" },
];

const photos = [
  { src: "/assets/about/homecoming_2024.webp", cap: "Lab Homecoming" },
  { src: "/assets/about/spring_2025.webp", cap: "UNIST Spring" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="About"
        lead="산업 통계와 딥러닝/기계학습을 기반으로, 다양한 산업 현장의 복잡한 공학 문제를 해결하는 통계·데이터 사이언스 방법론을 연구합니다."
      />

      <section className="section">
        <div className="container">
          <Reveal className="card glow" style={{ padding: "clamp(24px,3vw,40px)" }}>
            <span className="kicker">Data Analytics Lab</span>
            <p className="lead-p" style={{ margin: "18px 0 0" }}>
              UNIST 산업공학과 데이터 애널리틱스 연구실은{" "}
              <strong>산업 통계</strong>와 <strong>딥러닝/기계학습</strong>을
              기반으로, 제조와 물류 분야의 <strong>품질 향상</strong>,{" "}
              <strong>시스템 모니터링·이상 탐지</strong>,{" "}
              <strong>시계열 표현학습</strong>을 중심으로 품질 공학의 실제 문제
              해결에 집중합니다.
            </p>
            <div className="prose" style={{ marginTop: "20px" }}>
              <p>
                Our research focuses on developing novel statistical and data
                science methodologies based on industrial statistics and deep
                learning to solve complex engineering problems across various
                industrial domains. We pursue leading-edge research in quality
                engineering — with emphasis on quality improvement, system
                monitoring &amp; anomaly detection, and time-series
                representation learning — in the era of Industry 4.0.
              </p>
            </div>
          </Reveal>

          <Reveal className="cards-2" style={{ marginTop: "20px" }}>
            <div className="infocard">
              <span className="kicker">Interests</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {interests.map((i) => (
                  <span key={i} className="chip chip--mono">{i}</span>
                ))}
              </div>
            </div>
            <div className="infocard">
              <span className="kicker">Research Areas</span>
              <div className="numlist" style={{ marginTop: 12 }}>
                {researchAreas.map((a) => (
                  <div key={a.code} className="numlist__row">
                    <span className="numlist__n">{a.code}</span>
                    <div>
                      <div className="numlist__t">{a.title}</div>
                      <div className="numlist__d">{a.titleEn}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="infocard" style={{ border: "1px solid var(--border-subtle)", marginTop: "20px" }}>
            <span className="kicker">Our Approach</span>
            <div className="numlist" style={{ marginTop: 12 }}>
              {approach.map((a) => (
                <div key={a.n} className="numlist__row">
                  <span className="numlist__n">{a.n}</span>
                  <div>
                    <div className="numlist__t">{a.t}</div>
                    <div className="numlist__d">{a.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="cards-2" style={{ marginTop: "20px", border: 0, background: "transparent", gap: "20px" }}>
            {photos.map((p) => (
              <figure key={p.src} className="card" style={{ overflow: "hidden", margin: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.src)} alt={p.cap} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }} />
                <figcaption className="mono" style={{ padding: "10px 14px", fontSize: 12, color: "var(--text-helper)" }}>
                  {p.cap}
                </figcaption>
              </figure>
            ))}
          </Reveal>

          <Reveal style={{ marginTop: "28px" }}>
            <Link href="/research/" className="btn btn-ghost">
              연구 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
