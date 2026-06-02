import ImagePlaceholder from "@/components/ImagePlaceholder";

const inquiryTypes = [
  "연구 협력 문의",
  "산업 파트너십",
  "대학원·포스트닥 지원",
  "기술 이전·라이선스",
  "미디어·언론",
  "기타 문의",
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-green-400 mb-2">홈 &gt; 문의하기</div>
          <h1 className="text-4xl font-bold text-white mb-3">문의하기</h1>
          <p className="text-green-300">협력 문의, 연구 제안, 채용 지원 모두 환영합니다</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }}></div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>KENTECH 캠퍼스</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex gap-3">
                    <span className="text-lg">🏛️</span>
                    <div>
                      <div className="font-medium">한국에너지공과대학교 (KENTECH)</div>
                      <div className="text-sm">전라남도 나주시 에너지로 200</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg">✉️</span>
                    <a href="mailto:bioupcycling@kentech.ac.kr"
                      className="hover:underline" style={{ color: "var(--accent)" }}>
                      bioupcycling@kentech.ac.kr
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg">📞</span>
                    <span>+82-61-XXX-XXXX</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg">🌐</span>
                    <span>kentech.ac.kr</span>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>Greeneple 사무소</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex gap-3">
                    <span className="text-lg">🏢</span>
                    <div>
                      <div className="font-medium">그리니플(Greeneple) 주식회사</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg">✉️</span>
                    <a href="mailto:contact@greeneple.com"
                      className="hover:underline" style={{ color: "var(--accent)" }}>
                      contact@greeneple.com
                    </a>
                  </div>
                </div>
              </div>

              <ImagePlaceholder
                description="건물 입구 또는 센터 위치 사진 (1200×500px)"
                height="220px"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>문의 양식</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                    style={{ focusRingColor: "var(--accent)" } as React.CSSProperties}
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">소속 기관</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-sm"
                    placeholder="회사 / 대학교 / 기관명"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 유형 *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-sm text-gray-700">
                    <option value="">문의 유형을 선택해 주세요</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-sm resize-none"
                    placeholder="문의하실 내용을 자유롭게 작성해 주세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}>
                  문의 보내기
                </button>
                <p className="text-xs text-gray-400 text-center">
                  ※ 이 양식은 정적 사이트입니다. 실제 전송 기능은 Formspree 또는 이메일 서비스 연동 필요
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>빠른 협력 문의</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["연구 협력", "산업 파트너십", "팀 합류", "언론·미디어"].map((label) => (
              <a key={label}
                href="mailto:bioupcycling@kentech.ac.kr"
                className="py-3 rounded-xl text-center text-sm font-medium border transition-colors hover:bg-white"
                style={{ borderColor: "var(--accent)", color: "var(--primary)" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
