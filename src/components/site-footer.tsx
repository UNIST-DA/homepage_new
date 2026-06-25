import Link from "next/link";
import { externalLinks, nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand display">{site.name}</div>
            <p className="site-footer__org mono">{site.org}</p>
            <p className="site-footer__addr">{site.address}</p>
            <a className="site-footer__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <div>
            <h4 className="site-footer__h">사이트맵</h4>
            <ul className="site-footer__links">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="site-footer__h">바로가기</h4>
            <ul className="site-footer__links">
              {externalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__base mono">
          <span>© {new Date().getFullYear()} {site.name}, UNIST</span>
          <span>산업통계 · 품질공학 · 시계열</span>
        </div>
      </div>
    </footer>
  );
}
