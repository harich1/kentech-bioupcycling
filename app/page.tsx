import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <>
      {/* ── Hero (BRIC 스타일: 풀사이즈 이미지 + 텍스트 오버레이) ── */}
      <section className="relative min-h-[560px] flex items-end" style={{ backgroundColor: "var(--primary-dark)" }}>
        <div className="absolute inset-0">
          <ImagePlaceholder
            description="홈 메인 배너 — 파일럿 플랜트 전경 또는 연구진 활동 장면 (1920×1080px, 가로형, 고해상도)"
            width="100%" height="100%"
            className="!rounded-none !border-0 opacity-25"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              바이오업사이클링<br />연구·실증·사업화
            </h1>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              KENTECH 바이오업사이클링 센터는 바이오매스를 청정에너지와 순환 탄소 솔루션으로 전환하는
              글로벌 연구·실증·스케일업 플랫폼입니다.
            </p>
            <Link href="/about"
              className="inline-block px-6 py-3 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}>
              센터 소개 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 소개 텍스트 (BRIC 스타일: 흰 배경 + 본문 설명) ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: "var(--text-mid)" }}>
            KENTECH 바이오업사이클링 센터는 농업부산물·음식물폐기물·가축분뇨 등 유기성 폐기물을
            바이오가스·청정수소·RNG·바이오소재로 전환하는 엔드투엔드 연구 인프라를 보유한
            세계적 수준의 파일럿 스케일 연구·실증 시설입니다.
            투자자, 정부기관, 산업 파트너 대상 기술이전·공동 실증·사업화 협력을 적극 환영합니다.
          </p>
        </div>
      </section>

      {/* ── 3대 핵심 섹션 카드 (BRIC: Innovation / Equipment / People 구조) ── */}
      <section className="py-14" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "연구 & 기술",
              desc: "6대 통합 연구 도메인 — 바이오가스·RNG·수소·탄소순환·바이오소재",
              href: "/research",
              imgDesc: "연구 실험실 또는 파일럿 반응기 사진 (800×600px)",
            },
            {
              title: "파일럿 & 실증",
              desc: "TRL 1–9 전 단계 스케일업 역량 — 벤치에서 실증까지",
              href: "/pilot",
              imgDesc: "파일럿 플랜트 전체 뷰 또는 설비 사진 (800×600px)",
            },
            {
              title: "산업 협력",
              desc: "기술이전·공동실증·스핀오프 — 그리니플(Greeneple) 사업화 파트너십",
              href: "/industry",
              imgDesc: "협약 체결 또는 산업 파트너 미팅 장면 (800×600px)",
            },
          ].map((card) => (
            <Link key={card.title} href={card.href} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <ImagePlaceholder description={card.imgDesc} height="200px" className="!rounded-none" />
              <div className="p-5">
                <h3 className="font-bold mb-2 text-base group-hover:underline" style={{ color: "var(--primary)" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 6대 연구 도메인 (BRIC: Research Areas 카드 구조) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text)" }}>6대 통합 연구 도메인</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "바이오가스 & 혐기성 소화", imgDesc: "혐기성 소화 반응기 사진 (800×600px)" },
              { title: "재생천연가스 (RNG)", imgDesc: "RNG 정제 설비 사진 (800×600px)" },
              { title: "RNG 기반 수소 생산", imgDesc: "수소 생산 장치 사진 (800×600px)" },
              { title: "수소 저장 & 운송", imgDesc: "가스 저장 설비 사진 (800×600px)" },
              { title: "탄소 순환", imgDesc: "탄소 순환 공정 사진 (800×600px)" },
              { title: "바이오소재", imgDesc: "바이오소재 시제품 또는 실험실 사진 (800×600px)" },
            ].map((d) => (
              <Link key={d.title} href="/research"
                className="group text-center hover:opacity-90 transition-opacity">
                <ImagePlaceholder description={d.imgDesc} height="130px" className="mb-2" />
                <p className="text-xs font-semibold leading-tight group-hover:underline"
                  style={{ color: "var(--primary)" }}>{d.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 기술 플랫폼 흐름 ── */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>통합 기술 플랫폼</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-mid)" }}>폐기물 → 가스 → 수소 → 저장 → 활용 — 엔드투엔드 순환 에너지 플랫폼</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: "01", label: "원료 플랫폼", sub: "농업부산물·음식물폐기물·가축분뇨·도시폐기물" },
              { step: "02", label: "바이오가스 플랫폼", sub: "혐기성 소화·바이오가스 정제·RNG" },
              { step: "03", label: "수소 플랫폼", sub: "SMR·LOHC·수소 혼입·금속수소화물" },
              { step: "04", label: "에너지 배급 플랫폼", sub: "도시가스망·수소 수송·분산에너지" },
              { step: "05", label: "스마트 모니터링", sub: "디지털 트윈·AI 제어·IoT 센서" },
              { step: "06", label: "탄소 순환 플랫폼", sub: "CCU·바이오차·LCA·영양염 회수" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="text-lg font-bold mb-1" style={{ color: "var(--accent)" }}>{item.step}</div>
                <div className="text-xs font-semibold mb-1" style={{ color: "var(--primary)" }}>{item.label}</div>
                <div className="text-xs leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/technology" className="text-sm font-semibold hover:underline" style={{ color: "var(--accent)" }}>
              기술 플랫폼 상세 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 주요 프로젝트 프리뷰 ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>주요 프로젝트</h2>
            <Link href="/projects" className="text-sm font-semibold hover:underline" style={{ color: "var(--accent)" }}>
              전체 보기 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "바이오수소 프로젝트", desc: "고급 촉매 개질을 통한 바이오매스 유래 수소 생산 — 파일럿 실증까지 스케일업", tag: "수소" },
              { title: "RNG 플랫폼", desc: "도시가스 배급망과 연계된 바이오가스→RNG 정제 플랫폼 구축", tag: "RNG" },
              { title: "스마트 바이오리파이너리", desc: "디지털 트윈 기반 AI 구동 스마트 바이오리파이너리 자율 공정 최적화", tag: "AI·디지털트윈" },
            ].map((p) => (
              <div key={p.title} className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3"
                  style={{ backgroundColor: "var(--accent-pale)", color: "var(--accent)" }}>
                  {p.tag}
                </span>
                <h3 className="font-bold mb-2" style={{ color: "var(--primary)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work With Us (BRIC 스타일: 다크 CTA 섹션) ── */}
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">함께 연구합시다</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              산업 파트너십, 공동 R&D, 기술이전, 대학원 지원 — 모든 형태의 협력을 환영합니다
            </p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 px-7 py-3 rounded text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors whitespace-nowrap">
            협력 문의하기
          </Link>
        </div>
      </section>

      {/* ── 채용·교육 프리뷰 ── */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>교육 & 채용</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-mid)" }}>청정에너지 미래를 함께 만들어갈 인재를 모집합니다</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { badge: "PhD", label: "박사 과정", desc: "바이오업사이클링 핵심 분야 박사 연구원" },
              { badge: "MS", label: "석사 과정", desc: "청정수소·바이오매스 분야 석사 연구원" },
              { badge: "Post-Doc", label: "박사 후 연구원", desc: "독립 연구 수행 포스트닥 포지션" },
              { badge: "Intern", label: "학부 인턴십", desc: "방학 중 단기 연구 참여 프로그램" },
            ].map((pos) => (
              <div key={pos.label} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-bold text-white mb-3"
                  style={{ backgroundColor: "var(--primary)" }}>{pos.badge}</span>
                <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--primary)" }}>{pos.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-mid)" }}>{pos.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/education" className="text-sm font-semibold hover:underline" style={{ color: "var(--accent)" }}>
              채용 공고 전체 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
