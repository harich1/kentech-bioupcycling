import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  ["바이오수소 프로젝트", "고급 촉매 개질로 바이오매스 유래 수소 생산을 파일럿까지 검증합니다", "/photo-lab-reactors.png", ["수소", "SMR", "파일럿"]],
  ["RNG 플랫폼", "바이오가스를 재생천연가스로 고도화하고 도시가스망 연계 가능성을 검증", "/greeneple-circular-rng.png", ["RNG", "바이오가스", "도시가스"]],
  ["순환 탄소 네트워크", "CCU, 바이오차, 영양염 회수를 묶어 순환 탄소 경제를 실증합니다", "/greeneple-ados-innovation.png", ["CCU", "탄소순환", "LCA"]],
  ["수소 혼입 실증", "천연가스 파이프라인 기반 수소 혼입 안전성과 운전 조건을 평가합니다", "/photo-pilot-plant.png", ["수소혼입", "파이프라인", "안전성"]],
  ["스마트 바이오리파이너리", "디지털 트윈과 분석 데이터를 활용한 공정 최적화", "/photo-analysis-lab.png", ["AI", "디지털트윈", "자율운전"]],
  ["정부 R&D 및 산업협력", "국토부·기후부·산업부·TIPS 프로그램 및 국제협력 네트워크 지원 과제", "/photo-partner-meeting.png", ["국토부", "기후부", "산업부", "TIPS"]],
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 프로젝트"
        title="프로젝트"
        subtitle="현재 추진 중인 주요 연구·실증 프로젝트 포트폴리오"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(([title, desc, src, tags], index) => (
              <ScrollReveal key={title as string} delay={index * 70}>
                <article className="asset-card h-full">
                  <ImagePlaceholder src={src as string} description={title as string} height="210px" className="!rounded-none" />
                  <div className="asset-card-body">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(tags as string[]).map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: "var(--accent-pale)", color: "var(--accent)" }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-black mb-3" style={{ color: "var(--primary)" }}>{title}</h3>
                    <p className="text-sm leading-7" style={{ color: "var(--text-mid)" }}>{desc}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
