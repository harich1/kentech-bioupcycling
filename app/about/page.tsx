import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-14 border-b border-gray-200" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>홈 &gt; 센터 소개</p>
          <h1 className="text-4xl font-bold text-white mb-2">센터 소개</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>KENTECH 바이오업사이클링 센터의 비전과 미션</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--primary)" }}>비전</h2>
            <ul className="space-y-3 mb-10">
              {[
                "탄소중립 기반 바이오업사이클링 글로벌 연구 허브",
                "바이오매스 기반 에너지·소재 순환 플랫폼 구축",
                "청정수소·RNG 기술 분야 글로벌 선도 기관",
              ].map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                  {v}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--primary)" }}>미션</h2>
            <ul className="space-y-3">
              {[
                "바이오가스를 청정수소·RNG·바이오소재로 전환",
                "도시–농촌 에너지 순환망 구축",
                "산업 실증 및 사업화 연계 추진",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder description="건물 외관 또는 KENTECH 캠퍼스 전경 (1200×800px)" height="240px" />
            <ImagePlaceholder description="연구진 단체사진 — 가로형 (1200×600px)" height="180px" />
          </div>
        </div>
      </section>

      {/* Why Bio-Upcycling */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>왜 바이오업사이클링인가?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "폐기물 → 에너지", desc: "폐기물을 에너지와 소재로 전환하는 업사이클링 기술", icon: "♻️" },
              { title: "탄소 감축", desc: "바이오가스 활용으로 탄소 배출 대폭 감축 실현", icon: "🌿" },
              { title: "순환 경제", desc: "자원 순환 구조를 통한 지속 가능한 성장 모델", icon: "🔄" },
              { title: "지역 에너지 자립", desc: "지역 에너지 자립 기반 스마트 에너지 플랫폼", icon: "⚡" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--primary)" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>연혁</h2>
          <div className="space-y-0">
            {[
              { year: "2024", events: ["KENTECH 바이오업사이클링 센터 설립", "파일럿 스케일 혐기성 소화 시스템 구축"] },
              { year: "2023", events: ["바이오수소 R&D 과제 착수", "그리니플(Greeneple) 기술이전 협약 체결"] },
              { year: "2022", events: ["한국에너지공과대학교 개교", "청정에너지 연구 인프라 구축 시작"] },
            ].map((row) => (
              <div key={row.year} className="flex gap-8 pb-6">
                <div className="w-12 flex-shrink-0 pt-1">
                  <span className="font-bold text-sm" style={{ color: "var(--accent)" }}>{row.year}</span>
                </div>
                <div className="flex-1 border-l pl-6 pb-6" style={{ borderColor: "var(--accent-pale)" }}>
                  {row.events.map((e) => (
                    <p key={e} className="text-sm mb-1.5" style={{ color: "var(--text-mid)" }}>· {e}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>※ 연혁 내용은 실제 데이터로 업데이트 필요</p>
        </div>
      </section>
    </>
  );
}
