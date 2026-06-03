import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="홈 > 문의하기"
        title="문의하기"
        subtitle="협력 문의, 연구 제안, 채용 지원을 기다립니다."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <ScrollReveal className="space-y-8">
            <ImagePlaceholder src="/kentech-sub-visual.jpg" description="KENTECH 캠퍼스 전경" height="300px" />
            <div>
              <h2 className="text-xl font-black mb-5" style={{ color: "var(--primary)" }}>KENTECH 바이오업사이클링 센터</h2>
              <div className="space-y-3 text-sm" style={{ color: "var(--text-mid)" }}>
                <p>전라남도 나주시 켄텍길 21 한국에너지공과대학교</p>
                <p>
                  <a href="mailto:bioupcycling@kentech.ac.kr" className="hover:underline" style={{ color: "var(--accent)" }}>
                    bioupcycling@kentech.ac.kr
                  </a>
                </p>
                <p>+82-61-XXX-XXXX</p>
              </div>
            </div>
            <div className="asset-card">
              <div className="asset-card-body">
                <p className="section-kicker mb-3">Greeneple Office</p>
                <h3 className="text-lg font-black mb-3" style={{ color: "var(--primary)" }}>그리니플(Greeneple) 주식회사</h3>
                <p className="text-sm leading-7 mb-4" style={{ color: "var(--text-mid)" }}>
                  바이오업사이클링 사업화 파트너로서 기술이전, 공동 실증, 사업화 논의를 함께 연결합니다.
                </p>
                <a href="mailto:contact@greeneple.com" className="text-sm font-bold hover:underline" style={{ color: "var(--accent)" }}>
                  contact@greeneple.com
                </a>
              </div>
            </div>
            <div className="asset-card">
              <div className="asset-card-body">
                <p className="section-kicker mb-3">Quick Partnership</p>
                <h3 className="text-lg font-black mb-4" style={{ color: "var(--primary)" }}>빠른 협력 문의</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["연구 협력", "산업 파트너십", "팀 합류", "언론·미디어"].map((item) => (
                    <div key={item} className="rounded border px-3 py-2 text-center text-xs font-bold" style={{ borderColor: "var(--line)", color: "var(--primary)" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="asset-card">
              <div className="asset-card-body">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
