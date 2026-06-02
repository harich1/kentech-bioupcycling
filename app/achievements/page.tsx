import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const achievements = [
  ["논문", "바이오가스, 수소, 순환 탄소 분야 국제 저널 성과를 정리합니다.", "/photo-analysis-lab.png"],
  ["특허", "공정, 장치, 운전 제어 관련 지식재산 포트폴리오를 축적합니다.", "/greeneple-ados-innovation.png"],
  ["학술 발표", "국내외 청정에너지 학회와 컨퍼런스에서 연구 성과를 공유합니다.", "/kentech-campus-1.png"],
  ["기술 실증", "파일럿 운전 데이터와 사업화 검증 자료를 단계적으로 공개합니다.", "/greeneple-ados-roadmap.png"],
];

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 연구성과"
        title="연구성과"
        subtitle="논문, 특허, 실증 데이터, 산학협력 성과를 한눈에 정리합니다."
      />

      <section style={{ backgroundColor: "var(--accent)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            ["XX편", "SCI 논문"],
            ["XX건", "특허"],
            ["XX회", "학술 발표"],
            ["XX건", "실증 성과"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-black">{value}</div>
              <div className="text-sm mt-1 opacity-80">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-3 text-white/70">실제 수치 확정 후 업데이트 예정</p>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {achievements.map(([title, desc, src], index) => (
            <ScrollReveal key={title} delay={index * 80}>
              <article className="asset-card h-full">
                <ImagePlaceholder src={src} description={title} height="250px" className="!rounded-none" />
                <div className="asset-card-body">
                  <h3 className="text-xl font-black mb-3" style={{ color: "var(--primary)" }}>{title}</h3>
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
