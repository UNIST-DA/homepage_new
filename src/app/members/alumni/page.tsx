import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { alumni, type Alumnus } from "@/data/members";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Data Analytics Lab alumni and where they are now.",
};

// Display order of degree groups.
const GROUPS: { role: string; label: string }[] = [
  { role: "Ph.D.", label: "Ph.D." },
  { role: "M.S.", label: "M.S." },
];

function AlumniCard({ a }: { a: Alumnus }) {
  const card = (
    <>
      <div className="acard__photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(a.photo)} alt={a.name} loading="lazy" />
      </div>
      <span className="acard__role">Class of {a.gradYear}</span>
      <span className="acard__name">{a.name}</span>
      <span className="acard__pos">{a.position}</span>
      {a.link && <span className="acard__link">View ↗</span>}
    </>
  );
  return a.link ? (
    <a href={a.link} target="_blank" rel="noopener noreferrer" className="acard">{card}</a>
  ) : (
    <div className="acard">{card}</div>
  );
}

export default function AlumniPage() {
  return (
    <>
      <PageHero
        crumb="Members · Alumni"
        title="Alumni"
        lead="연구실을 거쳐 산업·학계 곳곳에서 활약하고 있는 졸업생들입니다."
      />

      <section className="section">
        <div className="container">
          {GROUPS.map(({ role, label }) => {
            const group = alumni
              .filter((a) => a.role === role)
              .sort((a, b) => b.gradYear - a.gradYear);
            if (group.length === 0) return null;
            return (
              <div key={role}>
                <Reveal className="level-head">
                  <span className="level-head__t">{label}</span>
                  <span className="level-head__c">{String(group.length).padStart(2, "0")}</span>
                  <span className="level-head__line" />
                </Reveal>
                <Reveal className="alumni-grid">
                  {group.map((a) => (
                    <AlumniCard key={a.name + a.gradYear} a={a} />
                  ))}
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
