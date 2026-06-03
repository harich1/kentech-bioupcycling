import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  ["폐기물에서 에너지로", "유기성 폐기물을 바이오가스, RNG, 수소로 전환하는 순환 에너지 모델을 구축합니다."],
  ["캠퍼스 기반 실증", "KENTECH의 연구 인프라와 산업 파트너십을 연결해 실험실 성과를 빠르게 검증합니다."],
  ["지역 에너지 자립", "도시와 농촌의 바이오매스를 지역 에너지 자원으로 되돌리는 분산형 플랫폼을 지향합니다."],
  ["탄소중립 사업화", "기술 개발, 실증, 이전, 창업까지 이어지는 탄소중립 사업화 흐름을 만듭니다."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 센터 소개"
        title="센터 소개"
        subtitle="KENTECH 바이오업사이클링 센터는 바이오매스와 유기성 폐기물을 청정에너지와 소재로 전환하는 실증형 연구 허브입니다."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="section-kicker">Vision</p>
            <h2 className="text-3xl font-black leading-tight mb-5" style={{ color: "var(--primary)" }}>
              폐기물 자원을 에너지와 소재로 되돌리는 탄소중립 연구 허브
            </h2>
            <p className="text-sm leading-8 mb-8" style={{ color: "var(--text-mid)" }}>
              센터는 바이오가스 생산, 재생천연가스 고도화, 수소 전환, 탄소 순환, 바이오소재화까지
              하나의 플랫폼 안에서 연결합니다. 연구의 끝을 논문에 두지 않고 파일럿 검증과 산업 적용까지
              이어가는 것이 핵심 방향입니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map(([title, desc]) => (
                <div key={title} className="asset-card">
                  <div className="asset-card-body">
                    <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>{title}</h3>
                    <p className="text-xs leading-6" style={{ color: "var(--text-mid)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120} className="space-y-5">
            <ImagePlaceholder src="/kentech-campus-2.png" description="KENTECH 캠퍼스 전경" height="330px" />
            <ImagePlaceholder src="/photo-partner-meeting.png" description="바이오업사이클링 산학 연구 협의 장면" height="220px" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <ImagePlaceholder src="/greeneple-circular-rng.png" description="자원순환 재생천연가스 플랫폼 자료" height="360px" />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="section-kicker">Mission</p>
            <h2 className="text-2xl font-black mb-5" style={{ color: "var(--primary)" }}>센터의 실행 과제</h2>
            <ul className="space-y-4">
              {[
                "바이오가스 기반 RNG 및 청정수소 생산 기술 고도화",
                "원료 수급, 소화, 정제, 저장, 공급을 잇는 통합 플랫폼을 설계합니다",
                "기업·지자체와 연계한 파일럿 및 실증 사업 추진",
                "전과정 평가와 탄소 감축 효과 검증으로 사업화 근거를 확보합니다",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7" style={{ color: "var(--text-mid)" }}>
                  <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
