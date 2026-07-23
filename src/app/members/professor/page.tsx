import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { professor } from "@/data/members";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Professor",
  description: "Prof. Sungil Kim — Data Analytics Lab, UNIST Industrial Engineering.",
};

const patents = [
  "Human activity recognition through hybrid fusion of dynamic and static data (10-2932931, 2026)",
  "Apparatus for generating target gas detection model based on CNN learning (10-2811004, 2025)",
  "Method of anomaly detection of vessels applying Bayesian bootstrap (10-2534357, 2023)",
];


export default function ProfessorPage() {
  return (
    <>
      {/* hero */}
      <section className="prof-hero">
        <div className="container">
          <div className="page-hero__crumb" style={{ marginBottom: 18 }}>
            <Link href="/">Home</Link>
            <span aria-hidden>·</span>
            <span>Members</span>
            <span aria-hidden>·</span>
            <span>Professor</span>
          </div>

          <Reveal className="prof-hero__grid">
            <div className="prof-hero__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(professor.photo)} alt={professor.name} />
            </div>
            <div className="prof-hero__body">
              <span className="kicker">Data Analytics Lab</span>
              <h1 className="prof-hero__name">
                {professor.name} <span className="prof-hero__ko">({professor.nameKo})</span>
              </h1>
              <ul className="prof-hero__affil">
                <li>{professor.title}</li>
                {professor.affiliations.map((a) => (
                  <li key={a.label}>
                    <a href={a.url} target="_blank" rel="noopener noreferrer">{a.label} ↗</a>
                  </li>
                ))}
              </ul>
              <span className="prof-hero__role">{professor.role}</span>
              <ul className="prof-hero__contact">
                <li><b>Office</b> · {professor.office}</li>
                <li><b>Tel</b> · {professor.tel}</li>
                <li><b>Email</b> · <a href={`mailto:${professor.email}`}>{professor.email}</a></li>
              </ul>
              <div className="prof-hero__links">
                {professor.links.map((l) => (
                  <a key={l.label} href={asset(l.url)} target="_blank" rel="noopener noreferrer">{l.label}</a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* biography */}
      <section className="section">
        <div className="container">
          <Reveal className="btitle"><span className="btitle__n">01</span><span className="btitle__t">Biography</span></Reveal>
          <Reveal as="p" className="bio-text">{professor.bio}</Reveal>
        </div>
      </section>

      {/* research */}
      <section className="section">
        <div className="container">
          <Reveal className="btitle"><span className="btitle__n">02</span><span className="btitle__t">Research</span></Reveal>
          <Reveal className="rt-grid">
            <div className="rt-col">
              <h4>RESEARCH FIELDS</h4>
              <ul>{professor.researchFields.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <div className="rt-col">
              <h4>RESEARCH TOPICS</h4>
              <ul>{professor.researchTopics.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* career & education */}
      <section className="section">
        <div className="container">
          <Reveal className="btitle"><span className="btitle__n">03</span><span className="btitle__t">Career &amp; Education</span></Reveal>
          <Reveal className="cve">
            <div className="cve__col">
              <h4 className="cve__h">Career</h4>
              <ul className="cve__list">
                {professor.employment.map((e) => (
                  <li key={e.title} className="cve__item">
                    <span className="cve__time">{e.time}</span>
                    <div>
                      <span className="cve__title">{e.title}</span>
                      <span className="cve__sub">{e.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cve__col">
              <h4 className="cve__h">Education</h4>
              <ul className="cve__list">
                {professor.education.map((e) => (
                  <li key={e.title} className="cve__item">
                    <span className="cve__time">{e.time}</span>
                    <div>
                      <span className="cve__title">{e.title}</span>
                      <span className="cve__sub">{e.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* patents */}
      <section className="section">
        <div className="container">
          <Reveal className="btitle"><span className="btitle__n">04</span><span className="btitle__t">Patents</span></Reveal>
          <Reveal className="numcards">
            {patents.map((p, i) => (
              <div key={p} className="numcard">
                <span className="numcard__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="numcard__t">{p}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* awards */}
      <section className="section">
        <div className="container">
          <Reveal className="btitle"><span className="btitle__n">05</span><span className="btitle__t">Awards · Honors · Memberships</span></Reveal>
          <Reveal as="ul" className="award-list">
            {professor.awards.map((a) => <li key={a}>{a}</li>)}
          </Reveal>
        </div>
      </section>
    </>
  );
}
