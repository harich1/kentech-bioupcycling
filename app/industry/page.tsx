import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const collaboration = [
  ["기술이전", "센터에서 검증한 핵심 기술을 기업 적용 조건에 맞게 이전합니다."],
  ["공동 실증", "기업 현장과 KENTECH 테스트베드를 연결해 공정 성능을 함께 검증합니다."],
  ["사업화·스핀오프", "연구 성과를 창업, 라이선스, 공동사업 모델로 확장합니다."],
];

const partnerRoles = [
  {
    name: "한국전력",
    role: "전력공급 및 IDPP",
    desc: "전력 인프라와 분산형 전력 플랫폼 관점에서 바이오전력 실증 모델을 연결합니다.",
  },
  {
    name: "롯데건설",
    role: "EPC",
    desc: "파일럿·실증 설비의 설계, 조달, 시공 관점에서 현장 구축 가능성을 검토합니다.",
  },
  {
    name: "한국수자력원자력",
    role: "CHP",
    desc: "열병합 활용과 에너지 공급 안정성 관점에서 바이오가스 및 RNG 기반 에너지 활용 모델을 확장합니다.",
  },
];

export default function IndustryPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 산업협력"
        title="산업협력"
        subtitle="기술이전, 공동 실증, 사업화 파트너십을 통해 청정에너지 전환을 앞당깁니다."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="section-kicker">Partnership</p>
            <h2 className="text-3xl font-black mb-5" style={{ color: "var(--primary)" }}>산업 현장과 연구실 사이의 거리를 줄입니다</h2>
            <p className="text-sm leading-8 mb-8" style={{ color: "var(--text-mid)" }}>
              에너지·유틸리티, 가스, 수소, 폐기물 관리, 농업, 스타트업 파트너와 함께
              실증 가능한 기술 패키지를 설계합니다.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {collaboration.map(([title, desc]) => (
                <div key={title} className="asset-card">
                  <div className="asset-card-body">
                    <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>{title}</h3>
                    <p className="text-xs leading-6" style={{ color: "var(--text-mid)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ImagePlaceholder src="/photo-partner-meeting.png" description="산학 협력 회의 이미지" height="390px" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-10">
            <p className="section-kicker">Demonstration Partners</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>전력·EPC·CHP 실증 파트너십</h2>
            <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>
              연구성과가 실제 인프라로 이어질 수 있도록 전력공급, 설비 구축, 열병합 활용까지 역할을 분담하는
              산업협력 구조를 구축합니다.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerRoles.map((partner, index) => (
              <ScrollReveal key={partner.name} delay={index * 90}>
                <article className="asset-card h-full">
                  <div className="asset-card-body">
                    <p className="text-xs font-black mb-2" style={{ color: "var(--accent)" }}>{partner.role}</p>
                    <h3 className="text-xl font-black mb-3" style={{ color: "var(--primary)" }}>{partner.name}</h3>
                    <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>{partner.desc}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          {[
            ["/kentech-campus-3.png", "KENTECH 협력 네트워크", "KENTECH의 교육·연구 네트워크를 기반으로 파트너십을 확장합니다."],
            ["/greeneple-technology-features.png", "사업화 기술 자료", "기업 미팅에서 바로 논의할 수 있는 기술 특성과 적용 포인트를 시각화합니다."],
            ["/photo-pilot-plant.png", "파일럿 실증", "플랜트형 설비 이미지를 통해 실증 단계의 규모감을 전달합니다."],
          ].map(([src, title, desc], index) => (
            <ScrollReveal key={title} delay={index * 90}>
              <article className="asset-card h-full">
                <ImagePlaceholder src={src} description={title} height="230px" className="!rounded-none" />
                <div className="asset-card-body">
                  <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>{title}</h3>
                  <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>{desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
