"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { nav, site } from "@/data/site";
import { asset } from "@/lib/asset";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // adopt the theme the inline boot script already applied to <html>
  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as "light" | "dark") || "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href !== "/" && pathname.startsWith(href.replace(/#.*$/, ""));

  // Next.js makes a link to the current route a no-op. Give same-route clicks a
  // behaviour: an in-page anchor (/activity/#seminar) scrolls to that section,
  // a plain same-page link scrolls to the top, and the home logo refreshes.
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  const onNavClick = (href: string) => (e: MouseEvent) => {
    const i = href.indexOf("#");
    const path = i >= 0 ? href.slice(0, i) : href;
    const hash = i >= 0 ? href.slice(i + 1) : "";
    if (norm(path) !== norm(pathname)) return; // different page → let Next navigate
    e.preventDefault();
    setOpen(false);
    const el = hash ? document.getElementById(hash) : null;
    if (el) {
      const headerH = (document.querySelector(".site-header") as HTMLElement | null)?.offsetHeight ?? 0;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - 12, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const onLogoClick = (e: MouseEvent) => {
    if (norm(pathname) !== "/") return;
    e.preventDefault();
    window.location.reload();
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__bar">
        <Link href="/" className="site-brand" aria-label={site.name} onClick={onLogoClick}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(site.logo)} alt="" className="site-brand__mark" />
          <span className="site-brand__text">
            <span className="site-brand__name">{site.name}</span>
            <span className="site-brand__org mono">UNIST IE</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li
                key={item.label}
                className={`site-nav__item ${item.children ? "has-dd" : ""}`}
              >
                <Link
                  href={item.href}
                  className={`site-nav__link ${isActive(item.href) ? "is-active" : ""}`}
                  onClick={onNavClick(item.href)}
                >
                  {item.label}
                  {item.children && <span className="site-nav__caret" aria-hidden>▾</span>}
                </Link>
                {item.children && (
                  <ul className="site-nav__dd">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} onClick={onNavClick(c.href)}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="site-theme-btn"
          aria-label="다크 모드 전환"
          title="Theme"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="4.2" />
              <path strokeLinecap="round" d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinejoin="round" strokeLinecap="round" d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
            </svg>
          )}
        </button>

        <button
          className="site-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger ${open ? "is-open" : ""}`} />
        </button>
      </div>

      {/* mobile panel */}
      <div className={`site-mobile ${open ? "is-open" : ""}`}>
        <ul>
          {nav.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="site-mobile__link" onClick={onNavClick(item.href)}>
                {item.label}
              </Link>
              {item.children && (
                <ul className="site-mobile__sub">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <Link href={c.href} onClick={onNavClick(c.href)}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
