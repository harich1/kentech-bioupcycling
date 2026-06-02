import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const platforms = [
  ["01", "원료 플랫폼", "농업부산물, 음식물폐기물, 가축분뇨, 도시 유기성 폐기물"],
  ["02", "바이오가스 플랫폼", "혐기성 소화, 바이오가스 정제, RNG 고도화"],
  ["03", "수소 플랫폼", "촉매 개질, 수소 생산, 저장·운송 연계"],
  ["04", "디지털 제어", "센서, 데이터 수집, AI 운전 최적화"],
  ["05", "탄소 순환", "CCU, 바이오차, LCA, 영양염 회수"],
  ["06", "실증·사업화", "파일럿 운전, 산업 현장 적용, 기술 이전"],
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 기술 플랫폼"
        title="기술 플랫폼"
        subtitle="폐기물에서 에너지·소재까지 이어지는 엔드투엔드 바이오업사이클링 플랫폼"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-10">
            <p className="section-kicker">Platform Architecture</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>통합 기술 플랫폼 구조</h2>
            <ImagePlaceholder src="/greeneple-circular-rng.png" description="바이오매스 자원순환 RNG 플랫폼 구조" height="420px" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map(([step, label, sub], index) => (
              <ScrollReveal key={step} delay={index * 60}>
                <div className="asset-card h-full">
                  <div className="asset-card-body">
                    <div className="text-2xl font-black mb-3" style={{ color: "var(--accent)" }}>{step}</div>
                    <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>{label}</h3>
                    <p className="text-sm leading-6" style={{ color: "var(--text-mid)" }}>{sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <article className="asset-card h-full">
              <ImagePlaceholder src="/greeneple-technology-features.png" description="그리네플 기술 특성 자료" height="300px" className="!rounded-none" />
              <div className="asset-card-body">
                <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>기술 특성</h3>
                <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
                  공정 효율, 경제성, 탄소 감축 효과를 함께 검증하는 기술 비교 자료를 플랫폼 설명에 배치했습니다.
                </p>
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <article className="asset-card h-full">
              <ImagePlaceholder src="/photo-analysis-lab.png" description="분석 장비 기반 공정 검증 실험실" height="300px" className="!rounded-none" />
              <div className="asset-card-body">
                <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>디지털·분석 기반 제어</h3>
                <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
                  가스 성분 분석과 실시간 공정 데이터를 활용해 파일럿 운전 조건을 지속적으로 보정합니다.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
