import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const stages = [
  ["TRL 1-3", "벤치 스케일", "/photo-lab-reactors.png", "반응기 조건, 원료 조성, 촉매 성능을 실험실 단위에서 검증합니다."],
  ["TRL 4-6", "파일럿 스케일", "/photo-pilot-plant.png", "연속 운전과 시스템 통합을 통해 현장 적용 전 성능을 확인합니다."],
  ["TRL 7-9", "실증 스케일", "/greeneple-ados-roadmap.png", "산업 현장 적용성과 상업 운전 전환 가능성을 검증합니다."],
];

export default function PilotPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 파일럿 & 스케일업"
        title="파일럿 & 스케일업"
        subtitle="벤치 연구에서 실증 운전까지 이어지는 TRL 기반 스케일업 로드맵"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-10">
            <p className="section-kicker">Scale-up Roadmap</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>검증 단계마다 다른 이미지와 자료를 배치했습니다</h2>
            <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
              파일럿 페이지는 기술의 성숙도를 보여주는 곳이므로, 실험실 사진과 플랜트 사진, 로드맵 자료가
              단계적으로 이어지도록 구성했습니다.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map(([trl, label, src, desc], index) => (
              <ScrollReveal key={trl} delay={index * 90}>
                <article className="asset-card h-full">
                  <ImagePlaceholder src={src} description={`${label} 이미지`} height="230px" className="!rounded-none" />
                  <div className="asset-card-body">
                    <p className="text-xs font-bold mb-1" style={{ color: "var(--accent)" }}>{trl}</p>
                    <h3 className="text-xl font-black mb-3" style={{ color: "var(--primary)" }}>{label}</h3>
                    <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>{desc}</p>
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
