import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { students, ROLE_ORDER, hasDetail, type Student } from "@/data/members";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Students",
  description: "Data Analytics Lab graduate students and interns.",
};

function MemberCard({ s }: { s: Student }) {
  const inner = (
    <>
      <div className="member__photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(s.photo)} alt={s.name} loading="lazy" />
      </div>
      <div className="member__body">
        <span className="member__name">{s.name}</span>
        <span className="member__period">{s.period}</span>
        {s.tags.length > 0 && (
          <div className="member__tags">
            {s.tags.slice(0, 3).map((t) => <span key={t} className="member__tag">{t}</span>)}
          </div>
        )}
        {hasDetail(s) && <span className="member__arrow">Profile →</span>}
      </div>
    </>
  );

  return hasDetail(s) ? (
    <Link href={`/members/students/${s.slug}/`} className="member is-link glow" style={{ background: "var(--bg)" }}>
      {inner}
    </Link>
  ) : (
    <div className="member">{inner}</div>
  );
}

export default function StudentsPage() {
  return (
    <>
      <PageHero
        crumb="Members · Students"
        title="Students"
        lead="데이터 애널리틱스 연구실의 대학원생과 인턴 연구원입니다."
      />

      <section className="section">
        <div className="container">
          {ROLE_ORDER.map((role) => {
            const group = students.filter((s) => s.role === role);
            if (group.length === 0) return null;
            return (
              <div key={role}>
                <Reveal className="level-head">
                  <span className="level-head__t">{role}</span>
                  <span className="level-head__c">{String(group.length).padStart(2, "0")}</span>
                  <span className="level-head__line" />
                </Reveal>
                <Reveal className="member-grid">
                  {group.map((s) => <MemberCard key={s.slug} s={s} />)}
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
