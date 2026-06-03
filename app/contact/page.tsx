import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const inquiryTypes = ["연구 협력", "산업 파트너십", "대학원·포스트닥", "기술 이전", "미디어 문의", "기타 문의"];

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
                <h2 className="text-xl font-black mb-5" style={{ color: "var(--primary)" }}>문의 유형</h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {inquiryTypes.map((type) => (
                    <div key={type} className="rounded border border-gray-200 px-4 py-3 text-sm font-bold" style={{ color: "var(--primary)" }}>{type}</div>
                  ))}
                </div>
                <div className="rounded-md border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm leading-7 text-slate-700">
                  현재 웹사이트는 정적 안내 페이지로 운영되며, 별도의 서버에 개인정보를 저장하지 않습니다.
                  문의는 이메일 링크를 통해 보내 주세요.
                </div>
                <a href="mailto:bioupcycling@kentech.ac.kr" className="btn btn-primary mt-6 w-full justify-center">
                  이메일로 문의하기
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
