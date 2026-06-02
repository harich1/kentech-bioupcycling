"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "센터 소개", href: "/about" },
  { label: "연구", href: "/research" },
  { label: "기술 플랫폼", href: "/technology" },
  { label: "파일럿 & 스케일업", href: "/pilot" },
  { label: "프로젝트", href: "/projects" },
  { label: "산업협력", href: "/industry" },
  { label: "연구성과", href: "/achievements" },
  { label: "시설 & 장비", href: "/facilities" },
  { label: "교육·채용", href: "/education" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: "var(--primary-dark)" }}>
      {/* Logo bar */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "var(--accent)" }}>
              BUC
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm">KENTECH 바이오업사이클링 센터</div>
              <div className="text-xs" style={{ color: "var(--accent-light)" }}>Bio-Upcycling Research Center</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>한국에너지공과대학교</span>
            <span>|</span>
            <a href="mailto:bioupcycling@kentech.ac.kr" className="hover:text-white transition-colors">
              bioupcycling@kentech.ac.kr
            </a>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <nav className="hidden lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white text-xs px-3 py-4 border-b-2 border-transparent hover:border-white/60 hover:bg-white/5 transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>

          <Link href="/contact"
            className="hidden lg:block text-xs px-4 py-2 my-2 rounded font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--accent)" }}>
            협력 문의
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "var(--primary-dark)" }} className="lg:hidden border-t border-white/10">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="block px-6 py-3 text-sm text-white/80 hover:text-white border-b border-white/5"
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
