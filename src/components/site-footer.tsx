import { externalLinks, site } from "@/data/site";
import { FooterNav } from "./footer-nav";

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
            <FooterNav />
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
        </div>
      </div>
    </footer>
  );
}
