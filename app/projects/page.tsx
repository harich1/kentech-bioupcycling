import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const projects = [
  { id: 1, title: "바이오수소 프로젝트", desc: "고급 촉매 개질을 통한 바이오매스 유래 수소 생산 — 파일럿 실증까지 스케일업", tags: ["수소", "SMR", "파일럿"], imgDesc: "수소 생산 파일럿 설비 또는 촉매 반응기 사진 (800×600px)" },
  { id: 2, title: "RNG 플랫폼", desc: "도시가스 배급망과 연계된 바이오가스→RNG 정제 플랫폼 구축", tags: ["RNG", "바이오가스", "도시가스"], imgDesc: "RNG 정제 시스템 또는 도시가스망 연계 설비 사진 (800×600px)" },
  { id: 3, title: "순환 탄소 네트워크", desc: "CCU 기반 산업·농업 섹터 연계 순환 탄소 경제 실증", tags: ["CCU", "탄소순환", "LCA"], imgDesc: "탄소 포집 설비 또는 CCU 공정 사진 (800×600px)" },
  { id: 4, title: "수소 혼입 실증", desc: "천연가스 파이프라인 수소 혼입 — 안전성 검증 및 규제 경로 개발", tags: ["수소혼입", "파이프라인", "규제"], imgDesc: "수소 혼입 테스트 설비 또는 파이프라인 사진 (800×600px)" },
  { id: 5, title: "스마트 바이오리파이너리", desc: "디지털 트윈 기반 AI 구동 스마트 바이오리파이너리 자율 공정 최적화", tags: ["디지털트윈", "AI", "자율운전"], imgDesc: "스마트 바이오리파이너리 제어 시스템 또는 모니터링 화면 (800×600px)" },
  { id: 6, title: "정부 R&D 과제", desc: "국토부·기후부·산업부·TIPS 프로그램 및 국제협력 네트워크 지원 과제", tags: ["정부과제", "국제협력", "TIPS"], imgDesc: "연구팀 발표 또는 정부기관 협약 체결 장면 사진 (800×600px)" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 프로젝트" title="프로젝트" subtitle="진행 중인 주요 연구 프로젝트" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <ImagePlaceholder description={p.imgDesc} height="190px" className="!rounded-none" />
                <div className="p-5">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs"
                        style={{ backgroundColor: "var(--accent-pale)", color: "var(--accent)" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">공동 연구를 제안하고 싶으신가요?</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>산업 파트너, 정부기관, 대학·연구소와의 협력 과제를 환영합니다</p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 px-6 py-3 rounded text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors">
            협력 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
