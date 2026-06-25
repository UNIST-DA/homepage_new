import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { students, hasDetail } from "@/data/members";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return students.filter(hasDetail).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = students.find((x) => x.slug === slug);
  return { title: s ? s.name : "Student", description: s?.about };
}

export default async function StudentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = students.find((x) => x.slug === slug);
  if (!s || !hasDetail(s)) notFound();

  const milestones = [...(s.milestones ?? [])].sort((a, b) =>
    b.start.localeCompare(a.start),
  );

  return (
    <section className="prof-hero">
      <div className="container">
        <div className="page-hero__crumb" style={{ marginBottom: 18 }}>
          <Link href="/">Home</Link>
          <span aria-hidden>·</span>
          <Link href="/members/students/">Students</Link>
          <span aria-hidden>·</span>
          <span>{s.name}</span>
        </div>

        <Reveal className="sdetail">
          <aside className="sdetail__side">
            <div className="sdetail__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(s.photo)} alt={s.name} />
            </div>
            <div className="sdetail__role">{s.role}</div>
            <div className="sdetail__name">{s.name}</div>
            <div className="sdetail__period">{s.period}</div>
            {s.tags.length > 0 && (
              <div className="member__tags" style={{ marginTop: 14 }}>
                {s.tags.map((t) => <span key={t} className="member__tag">{t}</span>)}
              </div>
            )}
            <div className="sdetail__links">
              {s.email && <a href={`mailto:${s.email}`}>✉ {s.email}</a>}
              {s.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
              ))}
            </div>
          </aside>

          <div className="sdetail__main">
            {s.about && (
              <div>
                <div className="btitle"><span className="btitle__n">·</span><span className="btitle__t" style={{ fontSize: 20 }}>About</span></div>
                <p className="prose" style={{ maxWidth: "48em" }}>{s.about}</p>
              </div>
            )}

            {s.interests && s.interests.length > 0 && (
              <div>
                <div className="btitle"><span className="btitle__n">·</span><span className="btitle__t" style={{ fontSize: 20 }}>Research Interests</span></div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {s.interests.map((i) => (
                    <li key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--border-subtle)", fontSize: 15 }}>
                      <span style={{ color: "var(--blue)" }}>→ </span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.current && s.current.length > 0 && (
              <div>
                <div className="btitle"><span className="btitle__n">·</span><span className="btitle__t" style={{ fontSize: 20 }}>Current Work</span></div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-secondary)", lineHeight: 1.9 }}>
                  {s.current.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            )}

            {milestones.length > 0 && (
              <div>
                <div className="btitle"><span className="btitle__n">·</span><span className="btitle__t" style={{ fontSize: 20 }}>Milestones</span></div>
                <ul className="rail">
                  {milestones.map((m) => (
                    <li key={m.start + m.title}>
                      <span className="rail__dot" aria-hidden />
                      <span className="rail__time">
                        {m.start}{m.end ? <><br />– {m.end}</> : <> –</>}
                      </span>
                      <div>
                        <div className="rail__title">{m.title}</div>
                        {m.note && <div className="rail__note">{m.note}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 24 }}>
          <Link href="/members/students/" className="btn btn-ghost">← All students</Link>
        </Reveal>
      </div>
    </section>
  );
}
