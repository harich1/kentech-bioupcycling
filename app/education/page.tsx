import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";

const programs = [
  { label: "재생천연가스 (RNG)", desc: "바이오가스 정제·고도화 및 도시가스 연계 연구" },
  { label: "바이오 수소(BioH₂) 시스템", desc: "바이오매스 기반 수소 생산 기술 연구" },
  { label: "탄소중립 공학", desc: "탄소 포집·활용·저장 기술 및 LCA 연구" },
  { label: "전과정 평가 (LCA)", desc: "에너지 시스템의 환경영향 평가 방법론 연구" },
  { label: "수소 저장 & 운송 시스템", desc: "LOHC, 금속수소화물 등 수소 저장 기술 연구" },
  { label: "학부생 인턴십 프로그램", desc: "방학 중 단기 연구 참여 및 실습 기회 제공" },
];

const positions = [
  {
    type: "박사 과정",
    badge: "PhD",
    desc: "바이오업사이클링 핵심 분야 박사 연구원 모집",
    requirements: ["관련 분야 석사 학위 또는 동등 경력", "영어 논문 작성 능력", "팀 협업 능력"],
    color: "var(--primary)",
  },
  {
    type: "석사 과정",
    badge: "MS",
    desc: "청정수소·바이오매스 분야 석사 연구원 모집",
    requirements: ["관련 분야 학사 학위", "기초 실험 능력", "성실한 연구 태도"],
    color: "var(--primary-mid)",
  },
  {
    type: "박사 후 연구원",
    badge: "Post-Doc",
    desc: "포스트닥 연구원 포지션 모집",
    requirements: ["관련 분야 박사 학위", "SCI 논문 실적", "독립적 연구 수행 능력"],
    color: "var(--accent)",
  },
  {
    type: "산업체 연구원",
    badge: "Industry",
    desc: "산업체 연구원 공동 협력 포지션",
    requirements: ["관련 분야 경력 보유", "산업 현장 경험 우대"],
    color: "#6b7280",
  },
];

export default function EducationPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-green-400 mb-2">홈 &gt; 교육·채용</div>
          <h1 className="text-4xl font-bold text-white mb-3">교육 & 채용</h1>
          <p className="text-green-300">청정에너지 미래를 함께 만들어갈 인재를 모집합니다</p>
        </div>
      </section>

      {/* Graduate Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>대학원 연구 프로그램</h2>
            <p className="text-gray-500">다양한 청정에너지 분야의 심화 연구 기회를 제공합니다</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {programs.map((p) => (
              <div key={p.label} className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-1 text-sm" style={{ color: "var(--primary)" }}>{p.label}</h3>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ImagePlaceholder description="인턴·학생 연구 활동 장면 사진 (800×600px)" height="280px" />
            <ImagePlaceholder description="외국인 유학생 또는 연구팀 활동 사진 (800×600px)" height="280px" />
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>채용 공고</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((pos) => (
              <div key={pos.type} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: pos.color }}>
                    {pos.badge}
                  </span>
                  <h3 className="font-bold" style={{ color: "var(--primary)" }}>{pos.type}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{pos.desc}</p>
                <ul className="space-y-1 mb-4">
                  {pos.requirements.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }}></span>
                      {r}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
                  지원 문의 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>지원 및 문의</h2>
          <p className="text-gray-500 mb-6">포지션 문의 및 지원서는 이메일 또는 문의 양식을 통해 접수해 주세요</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--accent)" }}>
              지원 문의하기
            </Link>
            <a href="mailto:bioupcycling@kentech.ac.kr"
              className="px-6 py-3 rounded-lg text-sm font-semibold border"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              이메일 보내기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
