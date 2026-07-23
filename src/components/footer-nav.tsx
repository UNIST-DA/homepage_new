"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { nav } from "@/data/site";
import { smoothScrollTo } from "@/lib/smooth-scroll";

// Same-route links are a no-op in Next.js — make footer sitemap links scroll to
// the top when you're already on that page.
export function FooterNav() {
  const pathname = usePathname();
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  const onClick = (href: string) => (e: MouseEvent) => {
    const i = href.indexOf("#");
    const path = i >= 0 ? href.slice(0, i) : href;
    const hash = i >= 0 ? href.slice(i + 1) : "";
    if (norm(path) !== norm(pathname)) return;
    e.preventDefault();
    const el = hash ? document.getElementById(hash) : null;
    if (el) {
      const headerH = (document.querySelector(".site-header") as HTMLElement | null)?.offsetHeight ?? 0;
      smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - headerH - 12);
    } else {
      smoothScrollTo(0);
    }
  };

  return (
    <ul className="site-footer__links">
      {nav.map((n) => (
        <li key={n.label}>
          <Link href={n.href} onClick={onClick(n.href)}>
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
