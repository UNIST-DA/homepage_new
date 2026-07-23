import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "지원 안내",
  description: "Data Analytics Lab 대학원 지원 안내 — 컨택 절차와 준비 서류.",
};

const mailto =
  `mailto:${site.email}` +
  `?subject=${encodeURIComponent("[DA-Lab] 대학원 지원 서류 제출")}`;

const IconInfo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 11v5M12 7.6h.01" />
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
    <path strokeLinejoin="round" d="M6 3h8l4 4v14H6z" />
    <path strokeLinejoin="round" d="M14 3v4h4" />
    <path strokeLinecap="round" d="M9 12.5h6M9 16h6" />
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
    <path strokeLinejoin="round" d="M4 5h16v11H9l-4 3v-3H4z" />
    <path strokeLinecap="round" d="M8 9.5h8M8 12.5h5" />
  </svg>
);

export default function ApplyPage() {
  return (
    <>
      <PageHero
        crumb="Contact · Apply"
        title="Apply"
        lead="데이터 분석·머신러닝·산업통계에 관심 있는 예비 대학원생을 환영합니다."
      />

      <section className="section">
        <div className="container">
          {/* 먼저 알아두세요 */}
          <Reveal className="g-card g-card--note">
            <div className="g-card__head">
              <span className="g-ic"><IconInfo /></span>
              <h2 className="g-card__title">먼저 알아두세요</h2>
            </div>
            <p className="prose">
              컨택은 <strong>입학 합격과 별개</strong>입니다. 우리 연구실 진학을 위해서는{" "}
              <strong>UNIST 대학원 입시에 별도로 지원·합격</strong>하셔야 합니다. 지도교수 컨택은
              합격했을 때 우리 연구실에서 지도 학생으로 받을지를 논의하는 과정이며,{" "}
              <span className="muted">지도교수가 입학 합격 여부를 결정하지는 않습니다.</span>
            </p>
          </Reveal>

          {/* 서류 접수 */}
          <Reveal className="g-card">
            <div className="g-card__head">
              <span className="g-ic"><IconDoc /></span>
              <h2 className="g-card__title">서류 접수</h2>
            </div>
            <p className="prose">
              아래 서류를 준비해 <strong>지도교수 이메일</strong>로 보내주세요. 교수님이 검토 후 회신드립니다.
            </p>
            <p className="apply-mailline">
              지도교수 이메일: <a href={mailto}>{site.email}</a>
            </p>

            <div className="g-docs">
              <div className="g-doc">
                <span className="g-chip g-chip--req">필수</span>
                <ul>
                  <li>자기소개서 — 지원 동기 · 관심 연구 · 향후 계획</li>
                  <li>CV / 이력서</li>
                  <li>성적증명서 (편입생은 전적대 성적 포함)</li>
                </ul>
              </div>
              <div className="g-doc">
                <span className="g-chip">선택</span>
                <ul>
                  <li>연구 활동 링크 (GitHub · 블로그 · 샘플 프로젝트)</li>
                  <li>논문 · 수상 등 본인의 강점을 보여줄 자료</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 지원 전 상담 */}
          <Reveal className="g-card g-consult">
            <div className="g-consult__body">
              <div className="g-card__head">
                <span className="g-ic"><IconChat /></span>
                <h2 className="g-card__title">지원 전 상담</h2>
              </div>
              <p className="prose">
                지원을 고민 중이라면, 교수님께 메일 보내기 전에 재학 중인 대학원생에게
                연구실 분위기·연구 주제를 편하게 물어봐도 좋습니다.
              </p>
            </div>
            <Link href="/members/students/" className="btn btn-ghost">
              재학생 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
