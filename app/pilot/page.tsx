import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

type Stage = [trl: string, label: string, src: string, items: string[]];

const stages: Stage[] = [
  ["TRL 1-3", "벤치 스케일", "/photo-lab-reactors.png", ["실험실 규모의 핵심 기술 개념 검증", "핵심 기술 타당성 검증", "공정 파라미터 최적화", "소재 스크리닝"]],
  ["TRL 4-6", "파일럿 스케일", "/photo-pilot-plant.png", ["파일럿 시설에서 통합 시스템 시험", "시스템 통합 테스트", "연속 운전 시험", "성능 벤치마킹"]],
  ["TRL 7-9", "실증 스케일", "/greeneple-ados-roadmap.png", ["완전한 산업 실증 및 사업화", "산업 현장 통합", "모듈형 보급 배치", "상업 운전 전환"]],
];

export default function PilotPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 파일럿 & 스케일업"
        title="파일럿 & 스케일업"
        subtitle="벤치 스케일 실험부터 완전한 상업 실증까지 TRL 기반 로드맵"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-10">
            <p className="section-kicker">Scale-up Roadmap</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>실험실에서 산업 규모까지</h2>
            <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
              KENTECH 바이오업사이클링 센터는 벤치 스케일의 핵심 기술 검증에서 파일럿 시설 통합 시험,
              산업 현장 실증과 상업 운전 전환까지 이어지는 단계형 스케일업 구조를 제시합니다.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map(([trl, label, src, items], index) => (
              <ScrollReveal key={trl} delay={index * 90}>
                <article className="asset-card h-full">
                  <ImagePlaceholder src={src} description={`${label} 이미지`} height="230px" className="!rounded-none" />
                  <div className="asset-card-body">
                    <p className="text-xs font-bold mb-1" style={{ color: "var(--accent)" }}>{trl}</p>
                    <h3 className="text-xl font-black mb-3" style={{ color: "var(--primary)" }}>{label}</h3>
                    <ul className="space-y-2">
                      {(items as string[]).map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-6" style={{ color: "var(--text-mid)" }}>
                          <span className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <ImagePlaceholder src="/kentech-campus-1.png" description="KENTECH 실증 협력 행사 이미지" height="340px" />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="section-kicker">Testbed Sources</p>
            <h2 className="text-2xl font-black mb-5" style={{ color: "var(--primary)" }}>테스트베드 원료 공급원</h2>
            <div className="grid grid-cols-2 gap-3">
              {["농업부산물", "음식물폐기물", "가축분뇨", "도시 유기성 폐기물"].map((item) => (
                <div key={item} className="asset-card">
                  <div className="asset-card-body text-center text-sm font-bold" style={{ color: "var(--primary)" }}>{item}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
