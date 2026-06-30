import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SeminarList } from "@/components/seminar-list";
import { EventsGrid } from "@/components/events-grid";
import { NewsFeed } from "@/components/news-feed";
import { events } from "@/data/activity";
import { seminars } from "@/data/seminars";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Activity",
  description: "Data Analytics Lab activity — news, events, and the weekly seminar series.",
};

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
          <Reveal>
            <NewsFeed items={news} />
          </Reveal>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-index">02</span>
            <h2 className="section-title">Events</h2>
          </Reveal>
          <Reveal>
            <EventsGrid events={events} />
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
            <SeminarList seminars={seminars} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
