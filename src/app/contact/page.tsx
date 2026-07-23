import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { externalLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "연락처",
  description: "Data Analytics Lab (UNIST 112동) 위치 및 연락처, 대학원 진학 안내.",
};

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729.7958112582595!2d129.1867358813372!3d35.57151354849208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35662fd1cdd3fc1b%3A0x83e4103bbbe213ee!2z7KCcNeqzte2Vmeq0gA!5e0!3m2!1sko!2skr!4v1755876524787!5m2!1sko!2skr";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Contact"
        lead="UNIST 제5공학관(112동)에 위치해 있습니다. 대학원 진학 및 협업 문의는 아래로 연락 주세요."
      />

      <section className="section">
        <div className="container">
          <Reveal className="cards-2">
            <div className="infocard">
              <span className="kicker">Address</span>
              <h3 style={{ marginTop: 16 }}>Data Analytics Lab · Rm. 302-5</h3>
              <p className="prose">
                울산광역시 울주군 언양읍 유니스트길 50, 제5공학관 112동 302-5호
                <br />
                <span style={{ color: "var(--text-helper)", fontSize: 13 }}>
                  Bldg. 112, Rm. 302-5, 50 UNIST-gil, Eonyang-eup, Ulju-gun, Ulsan 44919, Republic of Korea
                </span>
              </p>
              <h3 style={{ marginTop: 20 }}>Professor&apos;s Office · Rm. 301-8</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-secondary)", lineHeight: 1.9 }}>
                <li>Email · <a href={`mailto:${site.email}`} style={{ color: "var(--blue)" }}>{site.email}</a></li>
                <li>Tel · +82-52-217-3195</li>
              </ul>
            </div>

            <div className="infocard">
              <span className="kicker">For Prospective Students</span>
              <p className="prose" style={{ marginTop: 16 }}>
                데이터 분석·머신러닝·산업통계에 관심 있는 예비 대학원생을 환영합니다.
                지원 절차와 준비 서류는 지원 안내 페이지를 확인해주세요.
              </p>
              <Link href="/contact/apply/" className="btn btn-primary" style={{ marginTop: 4 }}>
                지원 안내 보기 <span aria-hidden>→</span>
              </Link>
              <h3 style={{ marginTop: 24 }}>Links</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-secondary)", lineHeight: 2 }}>
                {externalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal style={{ marginTop: "20px" }}>
            <div className="map-frame">
              <iframe
                src={MAP_SRC}
                title="UNIST 제5공학관(112동) 지도"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
