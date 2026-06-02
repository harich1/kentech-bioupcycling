import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--primary-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="mb-5">
            <Image
              src="/logo.png"
              alt="KENTECH 바이오업사이클링 센터"
              width={180}
              height={50}
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
            바이오매스를 청정에너지와 순환 탄소 솔루션으로 전환하는<br />
            탄소중립 기반 글로벌 연구 허브
          </p>
          <div className="space-y-1.5 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            <div>전라남도 나주시 에너지로 200, 한국에너지공과대학교</div>
            <div>bioupcycling@kentech.ac.kr &nbsp;|&nbsp; +82-61-XXX-XXXX</div>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">연구 분야</h4>
          <ul className="space-y-2.5 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {["바이오가스 & 혐기성 소화", "재생천연가스 (RNG)", "RNG 기반 수소 생산", "탄소 순환", "바이오소재"].map(l => (
              <li key={l}><Link href="/research" className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">바로가기</h4>
          <ul className="space-y-2.5 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {[
              { label: "센터 소개", href: "/about" },
              { label: "프로젝트", href: "/projects" },
              { label: "산업협력", href: "/industry" },
              { label: "연구성과", href: "/achievements" },
              { label: "교육·채용", href: "/education" },
              { label: "문의하기", href: "/contact" },
            ].map(l => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          <span>© 2025 KENTECH 바이오업사이클링 센터. All rights reserved.</span>
          <span>한국에너지공과대학교 (KENTECH) · kentech.ac.kr</span>
        </div>
      </div>
    </footer>
  );
}
