import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const researchDomains = [
  { title: "바이오가스 & 혐기성 소화", desc: "건식·고율 혐기성 소화, 유기성 폐기물 자원화", icon: "🌿", href: "/research" },
  { title: "재생천연가스 (RNG)", desc: "바이오가스 정제·고도화, 도시가스망 연계", icon: "⚡", href: "/research" },
  { title: "RNG 기반 수소 생산", desc: "수증기 메탄 개질(SMR), 열촉매 수소 생산", icon: "💧", href: "/research" },
  { title: "수소 저장 & 운송", desc: "LOHC, 금속수소화물, 수소 혼입 기술", icon: "🔋", href: "/research" },
  { title: "탄소 순환", desc: "CCU, 바이오차, 영양염 회수, LCA", icon: "♻️", href: "/research" },
  { title: "바이오소재", desc: "PHA, 바이오플라스틱, 폐기물→소재 전환", icon: "🧪", href: "/research" },
];

const stats = [
  { value: "6대", label: "연구 도메인" },
  { value: "TRL 1-9", label: "전 단계 실증 역량" },
  { value: "RNG·H₂", label: "청정에너지 기술" },
  { value: "글로벌", label: "파트너십 네트워크" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center" style={{ backgroundColor: "var(--primary-dark)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <ImagePlaceholder
            description="홈 메인 배너 — 연구 현장 전경 또는 파일럿 설비 항공 사진 (1920×1080px, 가로형)"
            width="100%"
            height="100%"
            className="!rounded-none !border-0 opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-white">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: "var(--accent)", color: "white" }}>
              KENTECH Bio-Upcycling Research Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              바이오매스를<br />
              <span style={{ color: "var(--accent-light)" }}>청정에너지</span>와<br />
              순환 탄소 솔루션으로
            </h1>
            <p className="text-lg text-green-200 mb-8 leading-relaxed">
              연구 · 실증 · 스케일업 · 사업화 · 탄소중립 플랫폼
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/research"
                className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-colors"
                style={{ backgroundColor: "var(--accent)" }}>
                연구 분야 보기
              </Link>
              <Link href="/contact"
                className="px-6 py-3 rounded-lg font-semibold text-sm border border-green-400 text-green-300 hover:bg-white/10 transition-colors">
                협력 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "var(--primary)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-green-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Bio-Upcycling */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 mb-4" style={{ backgroundColor: "var(--accent)" }}></div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                왜 바이오업사이클링인가?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                폐기물을 에너지와 소재로 전환하는 업사이클링 기술로 탄소 배출을 대폭 감축하고
                지속 가능한 순환 경제를 실현합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "폐기물 → 에너지", desc: "폐기물을 에너지와 소재로 전환" },
                  { title: "탄소 감축", desc: "바이오가스 활용으로 탄소 배출 대폭 감축" },
                  { title: "순환 경제", desc: "자원 순환 구조로 지속 가능한 성장" },
                  { title: "지역 에너지 자립", desc: "스마트 에너지 플랫폼 구축" },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-white rounded-xl shadow-sm border border-green-100">
                    <div className="font-semibold text-sm mb-1" style={{ color: "var(--primary)" }}>{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImagePlaceholder
                description="센터 소개 이미지 — 연구진 단체사진 또는 파일럿 플랜트 전경 (1200×800px)"
                height="380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>6대 통합 연구 도메인</h2>
            <p className="text-gray-500">원료부터 에너지·소재 생산까지 엔드투엔드 연구 역량</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchDomains.map((domain) => (
              <Link key={domain.title} href={domain.href}
                className="group p-6 rounded-xl border border-gray-100 hover:border-green-300 shadow-sm hover:shadow-md transition-all bg-white">
                <div className="text-3xl mb-3">{domain.icon}</div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--primary)" }}>{domain.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{domain.desc}</p>
                <div className="mt-3 text-xs font-medium" style={{ color: "var(--accent)" }}>
                  자세히 보기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform Preview */}
      <section className="py-20" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent-light)" }}></div>
            <h2 className="text-3xl font-bold mb-3 text-white">통합 기술 플랫폼</h2>
            <p className="text-green-300">폐기물 → 가스 → 수소 → 저장 → 활용 — 엔드투엔드 순환 에너지</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: "01", label: "원료 플랫폼", sub: "농업부산물·음식물폐기물" },
              { step: "02", label: "바이오가스", sub: "혐기성 소화·RNG 정제" },
              { step: "03", label: "수소 생산", sub: "SMR·LOHC" },
              { step: "04", label: "저장·운송", sub: "수소 혼입·도시가스망" },
              { step: "05", label: "스마트 모니터링", sub: "디지털 트윈·AI" },
              { step: "06", label: "탄소 순환", sub: "CCU·바이오차·LCA" },
            ].map((item) => (
              <div key={item.step} className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <div className="text-xs font-bold mb-1" style={{ color: "var(--accent-light)" }}>{item.step}</div>
                <div className="text-white font-semibold text-xs mb-1">{item.label}</div>
                <div className="text-green-300 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/technology"
              className="inline-block px-6 py-3 rounded-lg text-sm font-semibold border border-green-400 text-green-300 hover:bg-white/10 transition-colors">
              기술 플랫폼 상세 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--primary)" }}>함께 연구합시다</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "산업 파트너십", desc: "기술이전, 공동 실증, 스핀오프 협력을 원하는 기업·기관", href: "/industry", cta: "협력 문의" },
              { title: "대학원 & 채용", desc: "박사·석사·포스트닥·산업체 연구원 포지션 모집 중", href: "/education", cta: "채용 공고" },
              { title: "연구 협력", desc: "국내외 대학·연구기관과의 공동연구 및 학술 교류", href: "/industry", cta: "자세히 보기" },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--primary)" }}>{card.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">{card.desc}</p>
                <Link href={card.href}
                  className="inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: "var(--accent)" }}>
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
