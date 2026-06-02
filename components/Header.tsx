"use client";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50">
      {/* ── 상단 흰 로고 바 (KENTECH 스타일) ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="KENTECH 바이오업사이클링 센터"
              width={220}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-5 text-sm text-gray-500">
            <span>한국에너지공과대학교</span>
            <span className="text-gray-300">|</span>
            <a href="mailto:bioupcycling@kentech.ac.kr"
              className="hover:text-gray-700 transition-colors">
              bioupcycling@kentech.ac.kr
            </a>
          </div>
          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── 하단 다크 네비 바 (BRIC 구조) ── */}
      <div className="hidden md:block" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <nav className="flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white text-sm px-3.5 py-4 border-b-2 border-transparent hover:border-white/50 hover:bg-white/5 transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact"
            className="text-sm px-5 py-2 my-2 rounded font-semibold text-white transition-opacity hover:opacity-85 whitespace-nowrap"
            style={{ backgroundColor: "var(--accent)" }}>
            협력 문의
          </Link>
        </div>
      </div>

      {/* ── 모바일 메뉴 ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="block px-6 py-3.5 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link href="/contact"
              className="block text-center py-2.5 rounded text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--accent)" }}
              onClick={() => setMenuOpen(false)}>
              협력 문의
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
