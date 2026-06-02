import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const positions = [
  { badge: "PhD", type: "박사 과정", desc: "바이오업사이클링 핵심 분야 박사 연구원 모집", reqs: ["관련 분야 석사 학위 또는 동등 경력", "영어 논문 작성 능력", "팀 협업 능력"] },
  { badge: "MS", type: "석사 과정", desc: "청정수소·바이오매스 분야 석사 연구원 모집", reqs: ["관련 분야 학사 학위", "기초 실험 능력", "성실한 연구 태도"] },
  { badge: "Post-Doc", type: "박사 후 연구원", desc: "포스트닥 연구원 포지션 모집", reqs: ["관련 분야 박사 학위", "SCI 논문 실적", "독립적 연구 수행 능력"] },
  { badge: "Industry", type: "산업체 연구원", desc: "산업체 연구원 공동 협력 포지션", reqs: ["관련 분야 경력 보유", "산업 현장 경험 우대"] },
];

export default function EducationPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 교육·채용" title="교육 & 채용" subtitle="청정에너지 미래를 함께 만들어갈 인재를 모집합니다" />

      {/* 대학원 프로그램 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>대학원 연구 프로그램</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-mid)" }}>다양한 청정에너지 분야의 심화 연구 기회를 제공합니다</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { label: "재생천연가스 (RNG)", desc: "바이오가스 정제·고도화 및 도시가스 연계 연구" },
              { label: "바이오 수소(BioH₂) 시스템", desc: "바이오매스 기반 수소 생산 기술 연구" },
              { label: "탄소중립 공학", desc: "탄소 포집·활용·저장 기술 및 LCA 연구" },
              { label: "전과정 평가 (LCA)", desc: "에너지 시스템의 환경영향 평가 방법론 연구" },
              { label: "수소 저장 & 운송 시스템", desc: "LOHC, 금속수소화물 등 수소 저장 기술 연구" },
              { label: "학부생 인턴십 프로그램", desc: "방학 중 단기 연구 참여 및 실습 기회 제공" },
            ].map((p) => (
              <div key={p.label} className="p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--primary)" }}>{p.label}</h3>
                <p className="text-xs" style={{ color: "var(--text-mid)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ImagePlaceholder description="인턴·학생 연구 활동 장면 사진 (800×600px)" height="260px" />
            <ImagePlaceholder description="외국인 유학생 또는 연구팀 활동 사진 (800×600px)" height="260px" />
          </div>
        </div>
      </section>

      {/* 채용 공고 */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>채용 공고</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {positions.map((pos) => (
              <div key={pos.type} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold text-white"
                    style={{ backgroundColor: "var(--primary)" }}>{pos.badge}</span>
                  <h3 className="font-bold" style={{ color: "var(--primary)" }}>{pos.type}</h3>
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--text-mid)" }}>{pos.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {pos.reqs.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-mid)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-xs font-semibold hover:underline" style={{ color: "var(--accent)" }}>
                  지원 문의 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--primary)" }}>지원 및 문의</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-mid)" }}>포지션 문의 및 지원서는 이메일 또는 문의 양식을 통해 접수해 주세요</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-6 py-2.5 rounded text-sm font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
              지원 문의하기
            </Link>
            <a href="mailto:bioupcycling@kentech.ac.kr"
              className="px-6 py-2.5 rounded text-sm font-semibold border"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              이메일 보내기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
