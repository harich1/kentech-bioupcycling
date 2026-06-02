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
  { label: "시설", href: "/facilities" },
  { label: "교육·채용", href: "/education" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: "var(--primary-dark)" }}>
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--primary)" }} className="py-1 px-4 text-xs text-green-200 text-right hidden md:block">
        한국에너지공과대학교 (KENTECH) — 전라남도 나주시 에너지로 200
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: "var(--accent)" }}
          >
            K
          </div>
          <div>
            <div className="text-white font-semibold text-sm leading-tight">KENTECH</div>
            <div className="text-green-300 text-xs leading-tight">바이오업사이클링 센터</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-green-100 hover:text-white text-xs px-2.5 py-2 rounded transition-colors hover:bg-white/10 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "var(--primary)" }} className="lg:hidden px-4 pb-4 border-t border-green-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-green-100 hover:text-white py-2.5 text-sm border-b border-green-800"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
