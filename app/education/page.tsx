import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const programs = [
  ["재생천연가스(RNG)", "바이오가스 정제·고도화 및 도시가스 연계 연구"],
  ["바이오 수소 시스템", "바이오매스 기반 수소 생산과 저장·운송 연구"],
  ["탄소중립 공학", "CCU, LCA, 바이오차 등 탄소 순환 기술 연구"],
  ["학부생 인턴십", "방학 중 단기 연구 참여와 실험실 실습"],
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 교육·채용"
        title="교육 & 채용"
        subtitle="청정에너지와 바이오업사이클링의 다음 세대를 함께 키웁니다."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="section-kicker">People</p>
            <h2 className="text-3xl font-black mb-5" style={{ color: "var(--primary)" }}>실험, 데이터, 사업화를 함께 경험하는 연구 교육 프로그램</h2>
            <p className="text-sm leading-8 mb-8" style={{ color: "var(--text-mid)" }}>
              학생과 연구자는 실험실 장비 운용, 분석 데이터 해석, 파일럿 스케일 검증, 산업 파트너와의 협업을
              하나의 연구 과정 안에서 경험합니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {programs.map(([title, desc]) => (
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
            <ImagePlaceholder src="/photo-analysis-lab.png" description="학생 연구원이 분석 장비를 사용하는 실험실" height="390px" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          {[
            ["/kentech-campus-2.png", "KENTECH 캠퍼스", "에너지 특화 연구 환경에서 대학원 연구를 수행합니다."],
            ["/photo-lab-reactors.png", "실험실 연구", "반응기와 분석 장비를 직접 다루는 실험 중심 교육을 제공합니다."],
            ["/photo-partner-meeting.png", "산업 협업", "기업·기관 파트너와 실증 과제를 함께 논의합니다."],
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
