import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";

const stages = [
  {
    trl: "TRL 1–3", label: "벤치 스케일",
    items: ["핵심 기술 타당성 검증", "공정 파라미터 최적화", "소재 스크리닝"],
    imgDesc: "실험실 벤치 스케일 반응기 또는 소형 실험 장비 사진 (800×600px)",
    accent: "var(--accent-pale)", text: "var(--primary)",
  },
  {
    trl: "TRL 4–6", label: "파일럿 스케일",
    items: ["시스템 통합 테스트", "연속 운전 시험", "성능 벤치마킹"],
    imgDesc: "파일럿 플랜트 전체 뷰 또는 규모감 있는 설비 사진 (1200×800px)",
    accent: "var(--accent-light)", text: "var(--primary)",
  },
  {
    trl: "TRL 7–9", label: "실증 스케일",
    items: ["산업 현장 통합", "모듈형 보급 배치", "상업 운전 전환"],
    imgDesc: "실증 규모 파일럿 플랜트 또는 현장 설치 사진 (1200×800px)",
    accent: "var(--accent)", text: "white",
  },
];

export default function PilotPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 파일럿 & 스케일업" title="파일럿 & 스케일업" subtitle="벤치에서 실증까지 — TRL 기반 체계적 스케일업 로드맵" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>TRL 기반 로드맵</h2>
          <p className="text-sm mb-10" style={{ color: "var(--text-mid)" }}>기술준비수준(TRL) 1단계부터 9단계까지 전 주기 실증 역량 보유</p>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage) => (
              <div key={stage.trl} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <div className="p-5" style={{ backgroundColor: stage.accent }}>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: stage.text, opacity: 0.7 }}>{stage.trl}</div>
                  <h3 className="text-lg font-bold" style={{ color: stage.text }}>{stage.label}</h3>
                </div>
                <div className="p-5 bg-white">
                  <ul className="space-y-2 mb-4">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-mid)" }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ImagePlaceholder description={stage.imgDesc} height="160px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>테스트베드 원료 공급원</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-mid)" }}>다양한 바이오매스 원료를 활용한 실증 테스트베드를 운영합니다</p>
            <div className="grid grid-cols-2 gap-3">
              {["농업부산물", "음식물폐기물", "가축분뇨", "도시 유기성 폐기물"].map((f) => (
                <div key={f} className="bg-white p-4 rounded-lg text-center text-sm font-medium border border-gray-100 shadow-sm"
                  style={{ color: "var(--primary)" }}>{f}</div>
              ))}
            </div>
          </div>
          <ImagePlaceholder description="테스트베드 전경 또는 원료 투입 공정 사진 (1200×800px)" height="300px" />
        </div>
      </section>
    </>
  );
}
