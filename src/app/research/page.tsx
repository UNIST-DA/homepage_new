import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "연구",
  description: "Data Analytics Lab 연구 프로젝트 — 품질공학, 이상탐지, 시계열, 해양·물류 등.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        crumb="Research"
        title="Research"
        lead="제조·물류·의료·교통 등 다양한 산업 도메인에서 진행한 데이터 분석·머신러닝 연구 프로젝트입니다."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: 24 }}>
            <span className="section-index mono">{String(projects.length).padStart(2, "0")} projects</span>
            <Link href="/research/publications/" className="section-more">
              논문 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal className="grid-3">
            {projects.map((p) => (
              <Link key={p.slug} href={`/research/${p.slug}/`} className="glow proj" style={{ background: "var(--bg)" }}>
                <div className="proj__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(p.image)} alt={p.title} loading="lazy" />
                </div>
                <div className="proj__body">
                  <span className="proj__period">{p.period}</span>
                  <span className="proj__title">{p.title}</span>
                  <span className="proj__summary">{p.summary}</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
