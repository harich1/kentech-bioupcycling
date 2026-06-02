import ImagePlaceholder from "@/components/ImagePlaceholder";

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
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-green-400 mb-2">홈 &gt; 시설</div>
          <h1 className="text-4xl font-bold text-white mb-3">시설 & 장비</h1>
          <p className="text-green-300">연구부터 실증까지 갖춰진 세계적 수준의 연구 인프라</p>
        </div>
      </section>

      {/* Lab Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-12 h-1 mb-4" style={{ backgroundColor: "var(--accent)" }}></div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>연구 시설</h2>
              <div className="space-y-3">
                {[
                  "혐기성 소화 시스템 (건식·고율 파일럿 반응기)",
                  "촉매 반응 시스템 (SMR, 열촉매)",
                  "가스 분석 장비 (GC, 질량분석기)",
                  "파일럿 반응기 군 (5L ~ 500L)",
                  "고압 수소 저장 및 테스트 설비",
                  "스마트 모니터링 제어실",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }}></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ImagePlaceholder
              description="실험실 전경 또는 파일럿 플랜트 내부 사진 (1200×800px)"
              height="340px"
            />
          </div>

          {/* Equipment Grid */}
          <div className="text-center mb-10">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>주요 장비</h2>
            <p className="text-gray-500">각 장비 사진은 정면 컷, 배경 깔끔하게 준비 필요</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq) => (
              <div key={eq.name} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <ImagePlaceholder description={eq.imgDesc} height="200px" className="!rounded-none" />
                <div className="p-5">
                  <h3 className="font-bold mb-1" style={{ color: "var(--primary)" }}>{eq.name}</h3>
                  <p className="text-sm text-gray-500">{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Plant */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-12 h-1 mb-4 mx-auto" style={{ backgroundColor: "var(--accent)" }}></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--primary)" }}>파일럿 플랜트</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ImagePlaceholder description="파일럿 플랜트 전체 뷰 — 규모감 있는 설비 (1200×800px)" height="280px" />
            <ImagePlaceholder description="파일럿 플랜트 세부 설비 또는 공정 라인 사진 (1200×800px)" height="280px" />
          </div>
        </div>
      </section>
    </>
  );
}
