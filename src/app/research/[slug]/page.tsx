import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return projects
    .filter((p) => projectDetails[p.slug])
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title ?? "Project", description: p?.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  const d = projectDetails[slug];
  if (!p || !d) notFound();

  return (
    <section className="prof-hero">
      <div className="container">
        <div className="page-hero__crumb" style={{ marginBottom: 18 }}>
          <Link href="/">Home</Link>
          <span aria-hidden>·</span>
          <Link href="/research/">Research</Link>
          <span aria-hidden>·</span>
          <span>Project</span>
        </div>

        <Reveal>
          <h1 className="page-hero__title" style={{ marginTop: 8 }}>{p.title}</h1>
          <p className="page-hero__lead" style={{ marginTop: 14 }}>{p.summary}</p>

          <div className="pmeta">
            <span className="metapill">{d.organizer}</span>
            <span className="metapill metapill--ghost">{d.category}</span>
          </div>
          <div className="pperiod">
            <span aria-hidden>▦</span> {p.period}
          </div>
          <div className="ptags">
            {d.tags.map((t) => <span key={t} className="chip chip--mono">{t}</span>)}
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 36, borderTop: "1px solid var(--border-strong)" }}>
          {d.sections.map((s) => (
            <div key={s.heading} className="psection">
              <div className="btitle" style={{ marginBottom: 14 }}>
                <span className="btitle__n">·</span>
                <span className="btitle__t" style={{ fontSize: 20 }}>{s.heading}</span>
              </div>
              {s.body.length > 1 ? (
                <ul>{s.body.map((b) => <li key={b}>{b}</li>)}</ul>
              ) : (
                <p>{s.body[0]}</p>
              )}
            </div>
          ))}
        </Reveal>

        {d.figures.length > 0 && (
          <Reveal className="pfigs" style={{ marginTop: 24 }}>
            {d.figures.map((f) => (
              <figure key={f.src} className="pfig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(f.src)} alt={f.caption ?? p.title} loading="lazy" />
                {f.caption && <figcaption>{f.caption}</figcaption>}
              </figure>
            ))}
          </Reveal>
        )}

        <Reveal style={{ marginTop: 32 }}>
          <Link href="/research/" className="btn btn-ghost">← All projects</Link>
        </Reveal>
      </div>
    </section>
  );
}
