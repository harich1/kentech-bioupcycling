import ImagePlaceholder from "@/components/ImagePlaceholder";

const categories = [
  {
    title: "SCI 논문",
    icon: "📄",
    desc: "바이오가스, 수소, 순환 탄소 분야 최상위 국제 저널 게재 논문",
    items: [
      "※ 실제 논문 목록으로 업데이트 필요 — 저널명, 저자, 발행연도, DOI 포함",
      "예시: Journal of Cleaner Production, Bioresource Technology, International Journal of Hydrogen Energy 등",
    ],
    imgDesc: "논문 표지 또는 게재 저널 로고 이미지 (800×400px)",
  },
  {
    title: "특허",
    icon: "🏛️",
    desc: "바이오업사이클링 핵심 기술 관련 국내외 등록 특허",
    items: [
      "※ 실제 특허 목록으로 업데이트 필요 — 특허번호, 발명의 명칭, 등록일 포함",
    ],
    imgDesc: "특허 등록증 이미지 또는 관련 도면 (800×600px)",
  },
  {
    title: "학술 발표",
    icon: "🎤",
    desc: "주요 국제 청정에너지 컨퍼런스 발표 및 프로시딩",
    items: [
      "※ 실제 학술대회 발표 목록으로 업데이트 필요",
    ],
    imgDesc: "국제 학술대회 발표 장면 또는 포스터 사진 (800×600px)",
  },
  {
    title: "수상 & 표창",
    icon: "🏆",
    desc: "청정에너지·순환경제 분야 연구 우수성·혁신 인정",
    items: [
      "※ 실제 수상 이력으로 업데이트 필요 — 수상명, 수여기관, 연도 포함",
    ],
    imgDesc: "수상 트로피 또는 시상식 장면 사진 (800×600px)",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-green-400 mb-2">홈 &gt; 연구성과</div>
          <h1 className="text-4xl font-bold text-white mb-3">연구성과</h1>
          <p className="text-green-300">논문, 특허, 학술 발표, 수상 이력</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "var(--accent)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: "XX편", label: "SCI 논문" },
            { value: "XX건", label: "등록 특허" },
            { value: "XX회", label: "국제 발표" },
            { value: "XX건", label: "수상 이력" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm opacity-80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white/70 mt-4">※ 실제 수치로 업데이트 필요</p>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>{cat.title}</h2>
                  <p className="text-sm text-gray-500">{cat.desc}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div key={item} className="p-4 rounded-lg text-sm text-gray-600 border border-gray-100 bg-gray-50">
                      {item}
                    </div>
                  ))}
                </div>
                <ImagePlaceholder description={cat.imgDesc} height="200px" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>미디어 갤러리</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ImagePlaceholder description="파일럿 영상 썸네일 (800×600px)" height="160px" />
            <ImagePlaceholder description="실험실 연구 사진 (800×600px)" height="160px" />
            <ImagePlaceholder description="공정 애니메이션 캡처 (800×600px)" height="160px" />
            <ImagePlaceholder description="드론 촬영 — 캠퍼스 또는 파일럿 플랜트 전경 (800×600px)" height="160px" />
          </div>
        </div>
      </section>
    </>
  );
}
