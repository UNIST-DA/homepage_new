import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { HomeMorph } from "@/components/home-morph";
import { ScrollDeck } from "@/components/scroll-deck";
import { ScrollCue } from "@/components/scroll-cue";
import { Gallery } from "@/components/gallery";
import { SiteFooter } from "@/components/site-footer";
import { RotatingWord } from "@/components/rotating-word";
import { PublicationsConsole } from "@/components/publications-console";
import { interests, researchAreas } from "@/data/site";
import { events, seminars } from "@/data/activity";
import { news } from "@/data/news";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

export default function Home() {
  return (
    <>
      <ScrollDeck />
      {/* ===== Morph intro (first screen) ===== */}
      <HomeMorph />

      {/* ===== Hero (second screen) ===== */}
      <section className="hero">
        <div className="container hero__center">
          <span className="kicker">Data Analytics Lab · UNIST IE</span>
          <h1 className="stmt">
            <span className="stmt__line">
              <span className="stmt__in" style={{ animationDelay: "0.08s" }}>We find the</span>
            </span>
            <span className="stmt__line">
              <span className="stmt__in" style={{ animationDelay: "0.2s" }}>
                <RotatingWord />
              </span>
            </span>
            <span className="stmt__line">
              <span className="stmt__in" style={{ animationDelay: "0.32s" }}>in industrial data.</span>
            </span>
          </h1>
          <Reveal as="p" className="hero__lead" delay={0.5}>
            산업 통계와 딥러닝/기계학습으로, 노이즈 속에서<br />
            신호·이상·구조를 찾아 신뢰할 수 있는 결정으로 만듭니다.
          </Reveal>
          <Reveal className="hero__cta" delay={0.58}>
            <Link href="/research/" className="btn btn-primary">
              연구 살펴보기 <span aria-hidden>→</span>
            </Link>
            <Link href="/about/" className="btn btn-ghost">
              연구실 소개 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="scrollcue" aria-hidden>
          SCROLL
          <span className="scrollcue__line" />
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="section section--full">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">01</span>
            <h2 className="section-title">About</h2>
            <Link href="/about/" className="section-more">
              자세히 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal className="about__grid">
            <div className="about__main">
              <span className="kicker">About the Lab</span>
              <p className="about__lead">
                산업 통계와 딥러닝을 결합해{" "}
                <strong>복잡한 공학 문제를 푸는 방법론</strong>을 연구합니다.{" "}
                <span className="muted">
                  특히 제조·물류 분야의 품질 향상, 시스템 모니터링·이상 탐지,
                  시계열 표현학습을 중심으로 품질 공학의 실제 문제 해결에
                  집중합니다.
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "28px",
                }}
              >
                {interests.map((i) => (
                  <span key={i} className="chip chip--mono">
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__side">
              <span className="kicker">Research Areas</span>
              <div className="area-list" style={{ marginTop: "20px" }}>
                {researchAreas.map((a) => (
                  <div key={a.code} className="area">
                    <span className="area__code">{a.code}</span>
                    <div>
                      <div className="area__title">{a.title}</div>
                      <div className="area__title-en">{a.titleEn}</div>
                      <div className="area__desc">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <ScrollCue />
      </section>

      {/* ===== Research (publications search) ===== */}
      <section id="research" className="section section--full">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">02</span>
            <h2 className="section-title">Research</h2>
            <Link href="/research/" className="section-more">
              프로젝트 전체 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal>
            <PublicationsConsole />
          </Reveal>
        </div>
        <ScrollCue />
      </section>

      {/* ===== Activity ===== */}
      <section id="activity" className="section section--full">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">03</span>
            <h2 className="section-title">Activity</h2>
            <Link href="/activity/" className="section-more">
              전체 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal className="grid-3">
            <div className="glow act" style={{ background: "var(--bg)" }}>
              <div className="act__h">
                News <span className="act__tag">latest</span>
              </div>
              <ul className="act__list">
                {news.slice(0, 4).map((n) => (
                  <li key={n.date + n.title} className="act__item">
                    <span className="act__date">{fmtDate(n.date)}</span>
                    <span className="act__title">{n.title}</span>
                  </li>
                ))}
              </ul>
              <Link href="/activity/#news" className="act__more">
                전체 보기 →
              </Link>
            </div>

            <div className="glow act" style={{ background: "var(--bg)" }}>
              <div className="act__h">
                Events <span className="act__tag">recent</span>
              </div>
              <ul className="act__list">
                {events.slice(0, 4).map((e) => (
                  <li key={e.date + e.title} className="act__item">
                    <span className="act__date">{fmtDate(e.date)}</span>
                    <span className="act__title">{e.title}</span>
                  </li>
                ))}
              </ul>
              <Link href="/activity/#events" className="act__more">
                전체 보기 →
              </Link>
            </div>

            <div className="glow act" style={{ background: "var(--bg)" }}>
              <div className="act__h">
                Seminar <span className="act__tag">weekly</span>
              </div>
              <ul className="act__list">
                {seminars.slice(0, 4).map((s) => (
                  <li key={s.date + s.title} className="act__item">
                    <span className="act__date">{fmtDate(s.date)}</span>
                    <span className="act__title">{s.title}</span>
                  </li>
                ))}
              </ul>
              <Link href="/activity/#seminar" className="act__more">
                전체 보기 →
              </Link>
            </div>
          </Reveal>
        </div>
        <ScrollCue />
      </section>

      {/* ===== Lab Life + footer (one final screen) ===== */}
      <section id="life" className="section section--full section--life">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">04</span>
            <h2 className="section-title">Lab Life</h2>
          </Reveal>
        </div>
        <Reveal>
          <Gallery />
        </Reveal>
        <SiteFooter />
      </section>
    </>
  );
}
