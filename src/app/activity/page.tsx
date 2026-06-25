import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SeminarList } from "@/components/seminar-list";
import { events } from "@/data/activity";
import { news } from "@/data/news";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Activity",
  description: "Data Analytics Lab activity — news, events, and the weekly seminar series.",
};

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

const md = (iso: string) => {
  const d = new Date(iso + "T00:00:00");
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

// group news into [{ year, items }] preserving order (already reverse-chronological)
const newsYears = news.reduce<{ year: number; items: typeof news }[]>((acc, n) => {
  const year = Number(n.date.slice(0, 4));
  const last = acc[acc.length - 1];
  if (last && last.year === year) last.items.push(n);
  else acc.push({ year, items: [n] });
  return acc;
}, []);

export default function ActivityPage() {
  return (
    <>
      <PageHero
        crumb="Activity"
        title="Activity"
        lead="연구실의 소식과 행사, 그리고 매주 진행하는 세미나·논문 리뷰입니다."
      />

      {/* News */}
      <section id="news" className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">01</span>
            <h2 className="section-title">News</h2>
          </Reveal>
          {newsYears.map((g) => (
            <Reveal key={g.year}>
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">02</span>
            <h2 className="section-title">Events</h2>
          </Reveal>
          <Reveal className="events">
            {events.map((e) => (
              <div key={e.date + e.title} className="event">
                {e.image && (
                  <div className="event__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(e.image)} alt={e.title} loading="lazy" />
                  </div>
                )}
                <div className="event__body">
                  <span className="event__date">{fmt(e.date)}</span>
                  <div className="event__title">{e.title}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Seminar — emphasized in-page */}
      <section id="seminar" className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">03</span>
            <h2 className="section-title">Seminar</h2>
            <span className="section-title-en">&amp; Paper Review · weekly</span>
          </Reveal>
          <Reveal>
            <SeminarList />
          </Reveal>
        </div>
      </section>
    </>
  );
}
