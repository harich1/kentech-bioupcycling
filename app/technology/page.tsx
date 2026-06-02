import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";

const platforms = [
  { step: "01", label: "원료 플랫폼", sub: "농업부산물, 음식물폐기물, 가축분뇨, 도시폐기물" },
  { step: "02", label: "바이오가스 플랫폼", sub: "혐기성 소화, 바이오가스 정제, RNG" },
  { step: "03", label: "수소 플랫폼", sub: "SMR, LOHC, 수소 혼입, 금속수소화물" },
  { step: "04", label: "에너지 배급 플랫폼", sub: "도시가스망, 수소 수송, 분산에너지" },
  { step: "05", label: "스마트 모니터링", sub: "디지털 트윈, AI 제어, IoT 센서" },
  { step: "06", label: "탄소 순환 플랫폼", sub: "CCU, 바이오차, LCA, 영양염 회수" },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 기술 플랫폼" title="기술 플랫폼" subtitle="폐기물에서 에너지·소재까지 엔드투엔드 순환 플랫폼" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>통합 기술 플랫폼 구조</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-mid)" }}>폐기물 → 가스 → 수소 → 저장 → 활용</p>
          <ImagePlaceholder
            description="기술 흐름도 인포그래픽 — 원료→바이오가스→수소→저장→활용 순환 에너지 플랫폼 다이어그램 (디자이너 제작 필요, 약 1600×600px)"
            height="280px" className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <div key={p.step} className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold mb-2" style={{ color: "var(--accent)" }}>{p.step}</div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--primary)" }}>{p.label}</h3>
                <p className="text-sm" style={{ color: "var(--text-mid)" }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>디지털 트윈 / AI 제어 시스템</h2>
            <div className="space-y-4">
              {[
                { title: "실시간 공정 모니터링", desc: "Real-time Process Monitoring — 전체 공정 상태를 실시간으로 모니터링" },
                { title: "AI 기반 자율운전", desc: "AI-based Autonomous Operation — 인공지능 기반 자율 공정 제어" },
                { title: "스마트 압력·가스 제어", desc: "Smart Pressure & Gas Control — 정밀 압력·가스 농도 제어 시스템" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--primary)" }}>{item.title}</h4>
                  <p className="text-xs" style={{ color: "var(--text-mid)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <ImagePlaceholder description="디지털 트윈 대시보드 또는 AI 모니터링 시스템 화면 (1200×800px)" height="340px" />
        </div>
      </section>
    </>
  );
}
