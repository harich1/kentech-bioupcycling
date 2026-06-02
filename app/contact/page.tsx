import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";

const inquiryTypes = ["연구 협력 문의", "산업 파트너십", "대학원·포스트닥 지원", "기술 이전·라이선스", "미디어·언론", "기타 문의"];

export default function ContactPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 문의하기" title="문의하기" subtitle="협력 문의, 연구 제안, 채용 지원 모두 환영합니다" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--primary)" }}>KENTECH 캠퍼스</h2>
            <div className="space-y-4 mb-10">
              {[
                { icon: "🏛️", label: "한국에너지공과대학교 (KENTECH)", sub: "전라남도 나주시 에너지로 200" },
                { icon: "✉️", label: "bioupcycling@kentech.ac.kr", href: "mailto:bioupcycling@kentech.ac.kr" },
                { icon: "📞", label: "+82-61-XXX-XXXX" },
                { icon: "🌐", label: "kentech.ac.kr" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 text-sm">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div style={{ color: "var(--text-mid)" }}>
                    {item.href
                      ? <a href={item.href} className="hover:underline" style={{ color: "var(--accent)" }}>{item.label}</a>
                      : <div>{item.label}</div>}
                    {item.sub && <div className="text-xs mt-0.5">{item.sub}</div>}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>Greeneple 사무소</h2>
            <div className="flex gap-3 text-sm mb-8">
              <span className="text-lg">🏢</span>
              <div style={{ color: "var(--text-mid)" }}>
                <div>그리니플(Greeneple) 주식회사</div>
                <a href="mailto:contact@greeneple.com" className="text-xs hover:underline" style={{ color: "var(--accent)" }}>
                  contact@greeneple.com
                </a>
              </div>
            </div>

            <ImagePlaceholder description="건물 입구 또는 센터 위치 사진 (1200×500px)" height="200px" />
          </div>

          {/* 문의 양식 */}
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--primary)" }}>문의 양식</h2>
            <form className="space-y-4">
              {[
                { label: "이름 *", type: "text", placeholder: "홍길동" },
                { label: "이메일 *", type: "email", placeholder: "your@email.com" },
                { label: "소속 기관", type: "text", placeholder: "회사 / 대학교 / 기관명" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm focus:outline-none focus:ring-1"
                    style={{ focusRingColor: "var(--accent)" } as React.CSSProperties} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--text)" }}>문의 유형 *</label>
                <select className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm focus:outline-none"
                  style={{ color: "var(--text-mid)" }}>
                  <option value="">문의 유형을 선택해 주세요</option>
                  {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--text)" }}>문의 내용 *</label>
                <textarea rows={5} placeholder="문의하실 내용을 자유롭게 작성해 주세요"
                  className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm focus:outline-none resize-none" />
              </div>
              <button type="submit"
                className="w-full py-3 rounded text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--accent)" }}>
                문의 보내기
              </button>
              <p className="text-xs text-center" style={{ color: "#9CA3AF" }}>
                ※ 실제 전송 기능은 Formspree 등 이메일 서비스 연동 필요
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 빠른 문의 */}
      <section className="py-12" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-base font-bold mb-5" style={{ color: "var(--primary)" }}>빠른 협력 문의</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["연구 협력", "산업 파트너십", "팀 합류", "언론·미디어"].map((label) => (
              <a key={label} href="mailto:bioupcycling@kentech.ac.kr"
                className="py-3 rounded-lg text-center text-sm font-medium border bg-white hover:shadow-sm transition-shadow"
                style={{ borderColor: "var(--accent-light)", color: "var(--primary)" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
