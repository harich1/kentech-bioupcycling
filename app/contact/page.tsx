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
