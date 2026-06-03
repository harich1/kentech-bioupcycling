import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const domains = [
  {
    title: "바이오가스 & 혐기성 소화",
    src: "/photo-lab-reactors.png",
    topics: ["건식·고율 혐기성 소화", "농업 부산물 및 음식물 폐기물 처리", "소화조 운전 조건 최적화"],
  },
  {
    title: "재생천연가스(RNG)",
    src: "/photo-pilot-plant.png",
    topics: ["바이오가스 정제·고도화", "메탄 순도 향상", "도시가스망 연계 가능성 평가"],
  },
  {
    title: "RNG 기반 수소 생산",
    src: "/photo-analysis-lab.png",
    topics: ["촉매 개질 반응", "가스 조성 분석", "수소 생산 효율 평가"],
  },
  {
    title: "탄소 순환 & 바이오소재",
    src: "/greeneple-ados-innovation.png",
    topics: ["바이오차 및 영양염 회수", "CCU 연계", "바이오소재 전환 경로 탐색"],
  },
];

const researchNetwork = [
  {
    field: "AX / AI Transformation",
    owner: "안수명 교수",
    desc: "AI 전환 관점에서 바이오전력·업사이클링 공정의 데이터 기반 의사결정과 자동화 방향을 설계합니다.",
  },
  {
    field: "실시간 분석",
    owner: "김우열 교수",
    desc: "가스 조성, 반응 상태, 공정 이상 신호를 실시간으로 분석해 운전 안정성과 효율을 높입니다.",
  },
  {
    field: "CCU",
    owner: "탄제완 교수",
    desc: "탄소 포집·활용 기술을 바이오업사이클링 플랫폼과 연결해 탄소순환형 에너지 시스템으로 확장합니다.",
  },
  {
    field: "Metabolomics",
    owner: "유근제 교수 · 한국해양대",
    desc: "대사체 분석을 통해 미생물 반응과 바이오공정 성능을 정밀하게 해석합니다.",
  },
  {
    field: "Anaerobic Digestion",
    owner: "이창수 교수 · UNIST",
    desc: "유기성 폐기물의 혐기성 소화와 바이오가스 생산을 중심으로 원료 전환 효율을 고도화합니다.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 연구"
        title="연구"
        subtitle="바이오매스에서 청정에너지와 소재까지 이어지는 통합 연구 도메인"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-12">
            <p className="section-kicker">Research Domains</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>실험실 연구와 파일럿 검증을 한 흐름으로 연결합니다</h2>
            <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
              각 연구 도메인은 독립적인 기술 축이면서 동시에 하나의 순환 플랫폼으로 통합됩니다.
              원료 특성, 공정 운전, 가스 고도화, 수소 전환, 탄소 감축 효과를 함께 검증합니다.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-7">
            {domains.map((domain, index) => (
              <ScrollReveal key={domain.title} delay={index * 80}>
                <article className="asset-card h-full">
                  <ImagePlaceholder src={domain.src} description={domain.title} height="250px" className="!rounded-none" />
                  <div className="asset-card-body">
                    <h3 className="text-xl font-black mb-4" style={{ color: "var(--primary)" }}>{domain.title}</h3>
                    <ul className="space-y-2">
                      {domain.topics.map((topic) => (
                        <li key={topic} className="flex gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                          <span className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                          {topic}
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
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-10">
            <p className="section-kicker">Research Network</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>교수진 연구 방향을 연결하는 융합 연구축</h2>
            <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
              센터는 KENTECH 내부 연구 역량과 외부 우수 연구진의 전문성을 결합해, AI 바이오전력과 바이오업사이클링의
              임팩트를 키우는 개방형 연구 네트워크를 구축합니다.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchNetwork.map((item, index) => (
              <ScrollReveal key={item.field} delay={index * 70}>
                <article className="asset-card h-full">
                  <div className="asset-card-body">
                    <p className="text-xs font-black mb-2" style={{ color: "var(--accent)" }}>{item.field}</p>
                    <h3 className="text-lg font-black mb-3" style={{ color: "var(--primary)" }}>{item.owner}</h3>
                    <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>{item.desc}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <ImagePlaceholder src="/greeneple-circular-rng.png" description="자원순환 RNG 공정 개념도" height="360px" />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="section-kicker">Integrated Pathway</p>
            <h2 className="text-2xl font-black mb-5" style={{ color: "var(--primary)" }}>자원순환형 RNG·수소 연구 경로</h2>
            <p className="text-sm leading-8" style={{ color: "var(--text-mid)" }}>
              단순한 폐기물 처리 기술이 아니라, 바이오매스를 에너지 캐리어와 탄소 저감 자산으로 전환하는
              공정 전체를 연구합니다. 실제 사업화 자료와 공정 이미지를 함께 배치해 연구 방향이 더 직관적으로
              보이도록 구성했습니다.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
