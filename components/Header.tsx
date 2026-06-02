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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* 로고 */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="KENTECH 바이오업사이클링 센터"
              width={170}
              height={46}
              className="object-contain"
              priority
            />
          </Link>

          {/* 데스크탑 네비게이션 — 로고와 동일 선상 */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[14px] font-medium px-3.5 py-2 transition-colors"
                style={{ color: "var(--primary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--primary)")}
              >
                {item.label}
              </Link>
            ))}

            {/* 협력 문의 버튼 */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded text-[14px] font-semibold text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--accent)" }}
            >
              협력 문의
            </Link>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3.5 text-[15px] border-b border-gray-100 transition-colors"
              style={{ color: "var(--primary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/contact"
              className="block text-center py-3 rounded text-[15px] font-semibold text-white"
              style={{ backgroundColor: "var(--accent)" }}
              onClick={() => setMenuOpen(false)}
            >
              협력 문의
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
