import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageHero from "@/components/PageHero";

const equipment = [
  { name: "GC (가스 크로마토그래피)", desc: "가스 성분 분석용 고성능 GC 시스템", imgDesc: "GC 장비 정면 컷 — 배경 깔끔하게 (800×600px)" },
  { name: "혐기성 소화 시스템", desc: "건식·고율 혐기성 소화 파일럿 반응기", imgDesc: "혐기성 소화 반응기 정면 사진 (800×600px)" },
  { name: "가스 정제·고도화 시스템", desc: "바이오가스→RNG 정제 및 고도화 장비", imgDesc: "가스 정제 장비 정면 컷 (800×600px)" },
  { name: "수소 저장 모듈", desc: "고압 수소 저장 및 운송용 모듈", imgDesc: "수소 저장 모듈 정면 사진 (800×600px)" },
  { name: "촉매 반응 시스템", desc: "SMR 및 열촉매 수소 생산용 반응기", imgDesc: "촉매 반응기 정면 컷 (800×600px)" },
  { name: "고성능 센서 어레이", desc: "공정 실시간 모니터링용 센서 시스템", imgDesc: "센서 어레이 또는 계측 장비 사진 (800×600px)" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero breadcrumb="홈 > 시설 & 장비" title="시설 & 장비" subtitle="연구부터 실증까지 갖춰진 세계적 수준의 연구 인프라" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--primary)" }}>연구 시설</h2>
              <ul className="space-y-3">
                {[
                  "혐기성 소화 시스템 (건식·고율 파일럿 반응기)",
                  "촉매 반응 시스템 (SMR, 열촉매)",
                  "가스 분석 장비 (GC, 질량분석기)",
                  "파일럿 반응기 군 (5L ~ 500L)",
                  "고압 수소 저장 및 테스트 설비",
                  "스마트 모니터링 제어실",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder description="실험실 전경 또는 파일럿 플랜트 내부 사진 (1200×800px)" height="320px" />
          </div>

          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>주요 장비</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-mid)" }}>각 장비 사진은 정면 컷, 배경 깔끔하게 준비 필요 (800×600px)</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipment.map((eq) => (
              <div key={eq.name} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <ImagePlaceholder description={eq.imgDesc} height="190px" className="!rounded-none" />
                <div className="p-5">
                  <h3 className="font-bold mb-1 text-sm" style={{ color: "var(--primary)" }}>{eq.name}</h3>
                  <p className="text-xs" style={{ color: "var(--text-mid)" }}>{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>파일럿 플랜트</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <ImagePlaceholder description="파일럿 플랜트 전체 뷰 — 규모감 있는 설비 (1200×800px)" height="260px" />
            <ImagePlaceholder description="파일럿 플랜트 세부 설비 또는 공정 라인 사진 (1200×800px)" height="260px" />
          </div>
        </div>
      </section>
    </>
  );
}
