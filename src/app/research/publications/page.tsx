import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PublicationsList } from "@/components/publications-list";

export const metadata: Metadata = {
  title: "논문",
  description: "Data Analytics Lab 논문 목록 — 저널 및 학회 발표.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        crumb="Research · Publications"
        title="Publications"
        lead="연구실의 저널 및 국제학회 논문입니다."
      />
      <section className="section">
        <div className="container">
          <PublicationsList />
        </div>
      </section>
    </>
  );
}
