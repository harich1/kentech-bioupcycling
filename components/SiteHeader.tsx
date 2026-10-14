"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { copy, type Lang } from "@/lib/content";
import { sections, subnav } from "@/lib/center";
export default function SiteHeader({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<number | null>(null);
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(ko|en)/, "");
  const ix = lang === "ko" ? 1 : 2;
  const close = () => {
    setOpen(false);
    setGroup(null);
  };
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      <div className="site-header-inner">
        <Link
          className="brand"
          href={`/${lang}`}
          aria-label={`${copy[lang].name} · ${copy[lang].home}`}
          onClick={close}
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
        <nav
          className="desktop-nav"
          aria-label={lang === "ko" ? "주 메뉴" : "Main navigation"}
        >
          {sections.map((s, i) => (
            <div
              className="nav-group"
              key={s[0]}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setGroup(null);
              }}
            >
              <Link
                href={`/${lang}/${s[0]}`}
                onClick={close}
                aria-current={
                  subnav[i].some((x) => suffix === `/${x[0]}`)
                    ? "page"
                    : undefined
                }
              >
                {s[ix]}
              </Link>
              {subnav[i].length > 1 && (
                <>
                  <button
                    aria-label={`${s[ix]} ${lang === "ko" ? "하위 메뉴" : "submenu"}`}
                    aria-expanded={group === i}
                    aria-controls={`nav-group-${i}`}
                    onClick={() => setGroup(group === i ? null : i)}
                  >
                    ⌄
                  </button>
                  {group === i && (
                    <div className="nav-dropdown" id={`nav-group-${i}`}>
                      {subnav[i].map((x) => (
                        <Link
                          key={x[0]}
                          href={`/${lang}/${x[0]}`}
                          onClick={close}
                        >
                          {x[ix]}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
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
            <span>/</span>
            <a
              href={`/en${suffix}`}
              hrefLang="en"
              lang="en"
              aria-current={lang === "en" ? "page" : undefined}
            >
              English
            </a>
          </nav>
          <Link className="header-contact" href={`/${lang}/contact`}>
            {copy[lang].inquiry} ↗
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open
              ? lang === "ko"
                ? "닫기 ×"
                : "Close ×"
              : lang === "ko"
                ? "메뉴 ☰"
                : "Menu ☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label={lang === "ko" ? "모바일 메뉴" : "Mobile navigation"}
        >
          {sections.map((s, i) => (
            <div className="mobile-group" key={s[0]}>
              <Link href={`/${lang}/${s[0]}`} onClick={close}>
                {s[ix]}
              </Link>
              <div>
                {subnav[i].map((x) => (
                  <Link key={x[0]} href={`/${lang}/${x[0]}`} onClick={close}>
                    {x[ix]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
