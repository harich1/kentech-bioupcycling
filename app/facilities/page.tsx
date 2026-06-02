import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const equipment = [
  ["GC·가스 분석 장비", "가스 조성 분석과 운전 조건 검증", "/photo-analysis-lab.png"],
  ["혐기성 소화 반응기", "건식·고율 소화 반응 평가", "/photo-lab-reactors.png"],
  ["가스 정제·고도화 시스템", "바이오가스에서 RNG로 전환", "/photo-pilot-plant.png"],
  ["실증 로드맵 장비군", "벤치에서 파일럿까지 확장 가능한 설비 구성", "/greeneple-ados-roadmap.png"],
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 시설 & 장비"
        title="시설 & 장비"
        subtitle="연구부터 파일럿 실증까지 지원하는 바이오업사이클링 연구 인프라"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal>
            <p className="section-kicker">Infrastructure</p>
            <h2 className="text-3xl font-black mb-5" style={{ color: "var(--primary)" }}>분석, 반응, 정제, 제어를 한 공간에서 검증합니다</h2>
            <ul className="space-y-3">
              {[
                "혐기성 소화 시스템 및 파일럿 반응기",
                "촉매 반응 시스템과 가스 정제 장비",
                "GC 기반 가스 조성 분석 장비",
                "스마트 모니터링 및 제어 데이터 수집 환경",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                  <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ImagePlaceholder src="/photo-lab-reactors.png" description="바이오업사이클링 반응기 실험실" height="360px" />
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map(([name, desc, src], index) => (
            <ScrollReveal key={name} delay={index * 70}>
              <article className="asset-card h-full">
                <ImagePlaceholder src={src} description={name} height="190px" className="!rounded-none" />
                <div className="asset-card-body">
                  <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>{name}</h3>
                  <p className="text-xs leading-6" style={{ color: "var(--text-mid)" }}>{desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
