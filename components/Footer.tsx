import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--primary-dark)" }} className="text-green-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: "var(--accent)" }}
            >
              K
            </div>
            <div>
              <div className="text-white font-semibold text-sm">KENTECH 바이오업사이클링 센터</div>
              <div className="text-green-400 text-xs">Bio-Upcycling Research Center</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-green-300 max-w-xs">
            바이오매스를 청정에너지와 순환 탄소 솔루션으로 전환하는 글로벌 연구 허브
          </p>
          <div className="mt-4 text-xs text-green-400 space-y-1">
            <div>전라남도 나주시 에너지로 200</div>
            <div>bioupcycling@kentech.ac.kr</div>
            <div>+82-61-XXX-XXXX</div>
          </div>
        </div>

        {/* Research Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">연구 분야</h4>
          <ul className="space-y-2 text-xs text-green-300">
            <li><Link href="/research" className="hover:text-white transition-colors">바이오가스 & 혐기성 소화</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">재생천연가스 (RNG)</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">수소 생산</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">탄소 순환</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">바이오소재</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">바로가기</h4>
          <ul className="space-y-2 text-xs text-green-300">
            <li><Link href="/about" className="hover:text-white transition-colors">센터 소개</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">프로젝트</Link></li>
            <li><Link href="/achievements" className="hover:text-white transition-colors">연구성과</Link></li>
            <li><Link href="/industry" className="hover:text-white transition-colors">산업협력</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ backgroundColor: "var(--primary)" }} className="py-3 px-4 text-center text-xs text-green-400">
        © 2025 KENTECH 바이오업사이클링 센터. All rights reserved. &nbsp;|&nbsp; 청정에너지 연구로 만들어진 사이트
      </div>
    </footer>
  );
}
