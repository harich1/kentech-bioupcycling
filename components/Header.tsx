"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "센터 소개", href: "/about" },
  { label: "연구", href: "/research" },
  { label: "기술 플랫폼", href: "/technology" },
  { label: "파일럿", href: "/pilot" },
  { label: "프로젝트", href: "/projects" },
  { label: "산업협력", href: "/industry" },
  { label: "시설", href: "/facilities" },
  { label: "교육·채용", href: "/education" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-5">
          <Link href="/" className="flex min-w-0 items-center" aria-label="홈으로 이동">
            <Image
              src="/logo-transparent.png"
              alt="KENTECH 바이오업사이클링 센터"
              width={184}
              height={52}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary ml-3">
              협력 문의
            </Link>
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="메뉴 열기"
          >
            <span className="sr-only">메뉴</span>
            <span className={`hamburger ${menuOpen ? "is-open" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-2 justify-center" onClick={() => setMenuOpen(false)}>
              협력 문의
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
