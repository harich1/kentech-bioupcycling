import ImagePlaceholder from "@/components/ImagePlaceholder";

const domains = [
  {
    id: "biogas",
    title: "바이오가스 & 혐기성 소화",
    icon: "🌿",
    topics: ["건식 혐기성 소화 기술", "고율 혐기성 소화 공정", "유기성 폐기물 자원화", "농업 바이오매스 처리"],
    imgDesc: "혐기성 소화 반응기 설비 사진 (800×600px)",
  },
  {
    id: "rng",
    title: "재생천연가스 (RNG)",
    icon: "⚡",
    topics: ["바이오가스 정제·고도화", "메탄 순도 향상 공정", "도시가스망 연계 플랫폼"],
    imgDesc: "RNG 정제 설비 또는 가스 압축 장비 사진 (800×600px)",
  },
  {
    id: "hydrogen",
    title: "RNG 기반 수소 생산",
    icon: "💧",
    topics: ["수증기 메탄 개질 (SMR)", "열촉매 수소 생산 기술"],
    imgDesc: "수소 생산 장치 또는 SMR 반응기 사진 (800×600px)",
  },
  {
    id: "storage",
    title: "수소 저장 & 운송",
    icon: "🔋",
    topics: ["수소 혼입 기술 (Blending)", "도시가스 공급망 기반 수송", "LOHC (액상유기수소화물)", "금속수소화물 시스템"],
    imgDesc: "가스 저장 설비 또는 수소 탱크 사진 (800×600px)",
  },
  {
    id: "carbon",
    title: "탄소 순환",
    icon: "♻️",
    topics: ["탄소 포집·활용 (CCU)", "영양염 회수 기술", "바이오차(Biochar) 생산", "전과정 평가 (LCA)"],
    imgDesc: "탄소 순환 공정 또는 바이오차 생산 설비 사진 (800×600px)",
  },
  {
    id: "biomaterial",
    title: "바이오소재",
    icon: "🧪",
    topics: ["PHA (폴리하이드록시알카노에이트)", "바이오플라스틱", "폐기물→소재 전환 기술"],
    imgDesc: "바이오소재 시제품 또는 실험실 사진 (800×600px)",
  },
];

export default function ResearchPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-green-400 mb-2">홈 &gt; 연구</div>
          <h1 className="text-4xl font-bold text-white mb-3">연구</h1>
          <p className="text-green-300">6대 통합 연구 도메인 — 바이오매스에서 청정에너지·소재까지</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>6대 통합 연구 도메인</h2>
            <p className="text-gray-500">원료부터 에너지·소재 생산까지 엔드투엔드 연구 역량을 갖추고 있습니다</p>
          </div>

          <div className="space-y-16">
            {domains.map((domain, i) => (
              <div key={domain.id} id={domain.id}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-4xl mb-4">{domain.icon}</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>{domain.title}</h3>
                  <ul className="space-y-2">
                    {domain.topics.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }}></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <ImagePlaceholder description={domain.imgDesc} height="280px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
