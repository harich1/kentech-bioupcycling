import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function IndustryPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 산업협력" title="산업협력" subtitle="기술이전, 공동 실증, 스핀오프 — 함께 청정에너지 미래를 만듭니다" />

      {/* 협력 분야 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>협력 대상 분야</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            {[
              { label: "에너지·유틸리티", icon: "⚡" },
              { label: "가스 기업", icon: "🔥" },
              { label: "수소 기업", icon: "💧" },
              { label: "폐기물 관리", icon: "♻️" },
              { label: "농업 분야", icon: "🌾" },
              { label: "스타트업·사업화", icon: "🚀" },
            ].map((s) => (
              <div key={s.label} className="p-5 rounded-lg text-center border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-xs font-medium" style={{ color: "var(--primary)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* 협력 유형 */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "기술이전", desc: "센터에서 개발한 핵심 특허 기술을 기업에 이전하여 상용화 가속화", icon: "📄" },
              { title: "공동 실증", desc: "기업의 현장에서 센터 기술을 함께 실증하고 최적화하는 협력 프로그램", icon: "🔬" },
              { title: "스핀오프", desc: "연구 성과를 바탕으로 창업·사업화를 지원하는 스핀오프 파트너십", icon: "🚀" },
            ].map((item) => (
              <div key={item.title} className="p-7 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greeneple */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>그리니플(Greeneple)</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              그리니플(Greeneple) 주식회사는 KENTECH 바이오업사이클링 센터의 공식 사업화 파트너입니다.
              기술이전, 스핀오프, 공동 실증을 통해 연구 성과를 시장으로 연결합니다.
            </p>
            <p className="text-sm mb-5" style={{ color: "var(--text-mid)" }}>
              <span className="font-medium" style={{ color: "var(--primary)" }}>이메일:</span>{" "}
              <a href="mailto:contact@greeneple.com" className="hover:underline" style={{ color: "var(--accent)" }}>
                contact@greeneple.com
              </a>
            </p>
            <ImagePlaceholder description="Greeneple 로고 (200×80px, PNG/SVG 투명배경)" height="80px" className="max-w-xs" />
          </div>
          <ImagePlaceholder description="협약 체결 또는 미팅 장면 사진 (1200×800px)" height="300px" />
        </div>
      </section>

      {/* 글로벌 파트너십 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>글로벌 파트너십</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "국내외 대학", desc: "공동 연구 및 학생 교류 프로그램", imgDesc: "협력 대학 로고 모음 (각 200×80px)" },
              { title: "연구기관", desc: "국내외 정부·민간 연구기관과의 기술 협력 네트워크", imgDesc: "협력 연구기관 로고 모음 (각 200×80px)" },
              { title: "기후·에너지 네트워크", desc: "글로벌 기후·청정에너지 네트워크, 정책 포럼 참여", imgDesc: "국제 네트워크 행사 또는 참여 사진 (800×600px)" },
            ].map((p) => (
              <div key={p.title} className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>{p.title}</h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-mid)" }}>{p.desc}</p>
                <ImagePlaceholder description={p.imgDesc} height="110px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">파트너십을 제안하고 싶으신가요?</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>기술협력, 공동 R&D, 기술이전 등 다양한 형태의 협력을 환영합니다</p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 px-6 py-3 rounded text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors">
            협력 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
