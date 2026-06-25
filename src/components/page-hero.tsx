import Link from "next/link";
import { Reveal } from "@/components/reveal";

// Shared header band for inner pages: breadcrumb + big title (KR + EN) + lead.
export function PageHero({
  crumb,
  title,
  titleEn,
  lead,
}: {
  crumb: string;
  title: string;
  titleEn?: string;
  lead?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal as="div" className="page-hero__crumb">
          <Link href="/">Home</Link>
          <span aria-hidden>·</span>
          <span>{crumb}</span>
        </Reveal>
        <Reveal as="h1" className="page-hero__title" delay={0.05}>
          {title}
          {titleEn && <span className="page-hero__en">{titleEn}</span>}
        </Reveal>
        {lead && (
          <Reveal as="p" className="page-hero__lead" delay={0.1}>
            {lead}
          </Reveal>
        )}
      </div>
    </section>
  );
}
