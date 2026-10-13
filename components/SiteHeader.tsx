"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { copy, type Lang } from "@/lib/content";

export default function SiteHeader({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const suffix = pathname.replace(/^\/(ko|en)/, "");
  const items = ["about", "research", "projects", "news", "contact"];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href={`/${lang}`}
          className="brand"
          aria-label={`${t.name} · ${t.home}`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-transparent.png"
            alt="KENTECH"
            width={210}
            height={64}
            priority
            className="brand-logo"
          />
          {lang === "en" && (
            <span className="brand-english">Bio-Upcycling Center</span>
          )}
        </Link>
        <nav className="desktop-nav" aria-label={t.menu}>
          {items.map((item, i) => (
            <Link
              key={item}
              href={`/${lang}/${item}`}
              aria-current={suffix.startsWith(`/${item}`) ? "page" : undefined}
            >
              {t.nav[i]}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <nav
            className="language-switch"
            aria-label={lang === "ko" ? "언어 선택" : "Select language"}
          >
            <a
              href={`/ko${suffix}`}
              hrefLang="ko"
              lang="ko"
              aria-current={lang === "ko" ? "page" : undefined}
            >
              국문
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={`/en${suffix}`}
              hrefLang="en"
              lang="en"
              aria-current={lang === "en" ? "page" : undefined}
            >
              English
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (lang === "ko" ? "닫기" : "Close") : t.menu}
            <span aria-hidden="true">{open ? " ×" : " ☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label={t.menu}>
          {items.map((item, i) => (
            <Link
              key={item}
              href={`/${lang}/${item}`}
              aria-current={suffix.startsWith(`/${item}`) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[i]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
