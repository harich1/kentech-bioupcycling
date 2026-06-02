import ImagePlaceholder from "@/components/ImagePlaceholder";

const stages = [
  {
    trl: "TRL 1–3",
    label: "벤치 스케일",
    color: "var(--accent-pale)",
    textColor: "var(--primary)",
    items: ["핵심 기술 타당성 검증", "공정 파라미터 최적화", "소재 스크리닝"],
    imgDesc: "실험실 벤치 스케일 반응기 또는 소형 실험 장비 사진 (800×600px)",
  },
  {
    trl: "TRL 4–6",
    label: "파일럿 스케일",
    color: "var(--accent-light)",
    textColor: "var(--primary-dark)",
    items: ["시스템 통합 테스트", "연속 운전 시험", "성능 벤치마킹"],
    imgDesc: "파일럿 플랜트 전체 뷰 또는 규모감 있는 설비 사진 (1200×800px)",
  },
  {
    trl: "TRL 7–9",
    label: "실증 스케일",
    color: "var(--accent)",
    textColor: "white",
    items: ["산업 현장 통합", "모듈형 보급 배치", "상업 운전 전환"],
    imgDesc: "실증 규모 파일럿 플랜트 또는 현장 설치 사진 (1200×800px)",
  },
];

export default function PilotPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-green-400 mb-2">홈 &gt; 파일럿 & 스케일업</div>
          <h1 className="text-4xl font-bold text-white mb-3">파일럿 & 스케일업</h1>
          <p className="text-green-300">벤치에서 실증까지 — TRL 기반 체계적 스케일업 로드맵</p>
        </div>
      </section>

      {/* TRL Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>TRL 기반 로드맵</h2>
            <p className="text-gray-500">기술준비수준(TRL) 1단계부터 9단계까지 전 주기 실증 역량 보유</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage) => (
              <div key={stage.trl} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="p-6" style={{ backgroundColor: stage.color }}>
                  <div className="text-sm font-bold mb-1" style={{ color: stage.textColor, opacity: 0.7 }}>{stage.trl}</div>
                  <h3 className="text-xl font-bold" style={{ color: stage.textColor }}>{stage.label}</h3>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2 mb-4">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ImagePlaceholder description={stage.imgDesc} height="180px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedstock */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 mb-4" style={{ backgroundColor: "var(--accent)" }}></div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>테스트베드 원료 공급원</h2>
              <p className="text-gray-600 mb-6">다양한 바이오매스 원료를 활용한 실증 테스트베드를 운영합니다</p>
              <div className="grid grid-cols-2 gap-4">
                {["농업부산물", "음식물폐기물", "가축분뇨", "도시 유기성 폐기물"].map((f) => (
                  <div key={f} className="bg-white p-4 rounded-xl text-center shadow-sm border border-green-100 font-medium text-sm"
                    style={{ color: "var(--primary)" }}>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImagePlaceholder
                description="테스트베드 전경 또는 원료 투입 공정 사진 (1200×800px)"
                height="320px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
