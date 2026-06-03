import Image from "next/image";
import Link from "next/link";

const researchLinks = [
  "바이오가스 & 혐기성 소화",
  "재생천연가스(RNG)",
  "RNG 기반 수소 생산",
  "실시간 분석 & AX",
  "CCU & 탄소 순환",
  "Metabolomics",
];

const quickLinks = [
  { label: "센터 소개", href: "/about" },
  { label: "프로젝트", href: "/projects" },
  { label: "산업협력", href: "/industry" },
  { label: "연구성과", href: "/achievements" },
  { label: "교육·채용", href: "/education" },
  { label: "문의하기", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2440] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo-white.png"
            alt="KENTECH 바이오업사이클링 센터"
            width={190}
            height={54}
            className="mb-5 h-auto w-[180px] object-contain"
            style={{ height: "auto" }}
          />
          <p className="max-w-xl text-sm leading-7 text-white/65">
            바이오매스를 청정에너지와 순환 탄소 솔루션으로 전환하는 연구·실증·스케일업 플랫폼입니다.
          </p>
          <div className="mt-5 space-y-1.5 text-xs leading-6 text-white/45">
            <div>전라남도 나주시 켄텍길 21 한국에너지공과대학교</div>
            <div>bioupcycling@kentech.ac.kr | +82-61-XXX-XXXX</div>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/85">Research</h4>
          <ul className="space-y-2.5 text-xs text-white/55">
            {researchLinks.map((label) => (
              <li key={label}>
                <Link href="/research" className="transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/85">Quick Links</h4>
          <ul className="space-y-2.5 text-xs text-white/55">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-white/35 sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>© 2026 KENTECH 바이오업사이클링 센터. All rights reserved.</span>
          <span>Korea Institute of Energy Technology</span>
        </div>
      </div>
    </footer>
  );
}
