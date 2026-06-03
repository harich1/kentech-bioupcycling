import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const researchAreas = [
  ["바이오가스 & 혐기성 소화", "유기성 폐기물의 고효율 전환과 안정적 바이오가스 생산"],
  ["재생천연가스(RNG)", "정제·고도화 공정을 통한 도시가스망 연계 가능성 검증"],
  ["RNG 기반 수소 생산", "SMR 및 열촉매 기술을 활용한 청정수소 생산"],
  ["실시간 분석 & AX", "AI 전환과 실시간 분석으로 공정 운전 최적화"],
  ["CCU & 탄소 순환", "탄소 포집·활용과 바이오차, LCA 기반 순환 설계"],
  ["Metabolomics", "대사체 분석 기반 바이오공정 해석과 성능 진단"],
];

const conceptNodes = [
  ["AX", "안수명 교수"],
  ["실시간 분석", "김우열 교수"],
  ["CCU", "탄제완 교수"],
  ["Metabolomics", "유근제 교수 · 한국해양대"],
  ["Anaerobic Digestion", "이창수 교수 · UNIST"],
  ["Power & IDPP", "한국전력"],
  ["EPC", "롯데건설"],
  ["CHP", "한국수자력원자력"],
];

const platformSteps = [
  ["01", "Feedstock", "농업부산물, 음식물폐기물, 가축분뇨"],
  ["02", "Biogas", "혐기성 소화, 정제, RNG 전환"],
  ["03", "Hydrogen", "촉매 개질, 수소 생산, 저장 연계"],
  ["04", "Digital Control", "AX, 실시간 분석, AI 운전 최적화"],
  ["05", "Carbon Loop", "CCU, 바이오차, 영양염 회수, LCA"],
];

const projects = [
  ["바이오수소 파일럿", "바이오매스 유래 수소 생산 공정의 파일럿 실증과 성능 검증"],
  ["RNG 플랫폼", "바이오가스 정제·고도화와 전력·가스 인프라 연계 모델 구축"],
  ["AI 바이오전력 네트워크", "교수진과 산업 파트너의 전문성을 연결하는 융합 연구 플랫폼"],
];

const stats = [
  ["8", "Research & Industry Tracks"],
  ["2026.08", "Website Platform Launch"],
  ["TRL 1-9", "Scale-up Roadmap"],
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="section-wrap relative grid items-center gap-10 py-12 sm:py-14 lg:min-h-[680px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:py-16">
          <div className="animate-enter">
            <p className="eyebrow">KENTECH Bio-Upcycling Center</p>
            <h1 className="mt-5 max-w-4xl text-[36px] font-bold leading-[1.18] text-white sm:hidden">
              <span className="block">바이오매스를</span>
              <span className="block">청정수소와</span>
              <span className="block">순환 탄소 솔루션으로</span>
              <span className="block">전환합니다</span>
            </h1>
            <h1 className="mt-5 hidden max-w-4xl font-bold leading-[1.16] text-white sm:block sm:text-5xl lg:text-[52px]">
              <span className="block">바이오매스를 청정수소와</span>
              <span className="block">순환 탄소 솔루션으로</span>
              <span className="block">전환합니다</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              KENTECH 바이오업사이클링 센터는 유기성 폐기물에서 바이오가스, RNG, 수소,
              바이오소재까지 이어지는 연구·실증·스케일업 플랫폼입니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/research" className="btn btn-primary justify-center">
                연구 분야 보기
              </Link>
              <Link href="/contact" className="btn btn-secondary-dark justify-center">
                협력 문의
              </Link>
            </div>
          </div>

          <div className="animate-enter delay-150">
            <ImagePlaceholder
              src="/kentech-sub-visual.jpg"
              logoSrc="/logo-white.png"
              height="470px"
              eyebrow="Waste to Hydrogen"
              description="KENTECH campus-based research platform"
              className="hero-art shadow-2xl shadow-slate-950/30"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="section-wrap grid gap-4 py-7 sm:grid-cols-3">
          {stats.map(([value, label], index) => (
            <ScrollReveal key={label} delay={index * 80}>
              <div className="stat-item">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <p className="section-kicker">Center Overview</p>
            <h2 className="section-title">연구실을 넘어 실증과 사업화까지 연결하는 센터</h2>
            <p className="section-copy mt-5">
              유기성 자원을 에너지·소재 자원으로 전환하고, 그 기술을 산업 현장에서 검증 가능한 수준까지 끌어올립니다.
              2026년 8월까지 웹사이트와 연구협력 플랫폼을 고도화해 참여 연구진과 기관별 연구 방향을 단계적으로 공개할 예정입니다.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["연구", "/research"],
                ["파일럿 실증", "/pilot"],
                ["산업협력", "/industry"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="mini-card">
                  <span>{label}</span>
                  <small>자세히 보기</small>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <ImagePlaceholder
              src="/kentech-campus-2.png"
              height="420px"
              eyebrow="Research Infrastructure"
              description="Campus-based research infrastructure"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="section-wrap">
          <ScrollReveal className="section-heading section-heading-wide">
            <p className="section-kicker">Research Concept Map</p>
            <h2 className="section-title concept-title">AI 바이오전력·업사이클링 융합 연구 네트워크</h2>
            <p className="section-copy concept-copy md:whitespace-nowrap">
              교수진의 연구 방향과 기관별 실증 역할을 하나의 컨셉 맵으로 연결해 센터가 추구하는 연구 생태계를 보여줍니다.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <ScrollReveal>
              <div className="concept-core">
                <p>KENTECH</p>
                <h3>Bio-Upcycling Center</h3>
                <span>AX · Analysis · CCU · AD · IDPP · EPC · CHP</span>
              </div>
            </ScrollReveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {conceptNodes.map(([field, owner], index) => (
                <ScrollReveal key={field} delay={index * 45}>
                  <Link href={index < 5 ? "/research" : "/industry"} className="concept-node">
                    <strong>{field}</strong>
                    <span>{owner}</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-wrap">
          <ScrollReveal className="section-heading section-heading-wide">
            <p className="section-kicker">Research Areas</p>
            <h2 className="section-title">6대 통합 연구 도메인</h2>
            <p className="section-copy research-area-copy text-[15px] md:whitespace-nowrap">
              BRIC형 연구센터 구조를 따라 핵심 연구 분야를 빠르게 훑고 상세 페이지로 이동할 수 있게 구성했습니다.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map(([title, desc], index) => (
              <ScrollReveal key={title} delay={index * 70}>
                <Link href="/research" className="research-card">
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <ScrollReveal>
            <p className="section-kicker">Technology Platform</p>
            <h2 className="section-title">
              <span className="block">자원에서 전력·열·수소까지</span>
              <span className="block">이어지는 순환 에너지 흐름</span>
            </h2>
            <p className="section-copy mt-5">
              원료, 바이오가스, 수소, 디지털 제어, 탄소순환을 하나의 플랫폼으로 묶고 산업 파트너의 인프라와 연결합니다.
            </p>
            <Link href="/technology" className="btn btn-outline mt-7">
              기술 플랫폼 자세히 보기
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div className="flow-panel flow-panel-compact">
              {platformSteps.map(([num, title, desc]) => (
                <div key={num} className="flow-step">
                  <span>{num}</span>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-[#0f2440] text-white">
        <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <ScrollReveal>
            <ImagePlaceholder
              src="/pilot-campus-energy.jpg"
              height="380px"
              eyebrow="Pilot & Facilities"
              description="Scale-up and implementation milestone"
            />
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="section-kicker text-emerald-200">Pilot Scale-up</p>
            <h2 className="section-title !text-white text-white">벤치 스케일에서 산업 실증까지</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              파일럿과 시설 정보는 연구센터의 신뢰도를 만드는 핵심입니다. TRL 로드맵, 주요 장비,
              테스트베드 원료를 첫 화면에서 바로 인지할 수 있도록 배치했습니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pilot" className="btn btn-primary justify-center">
                파일럿 보기
              </Link>
              <Link href="/facilities" className="btn btn-secondary-dark justify-center">
                시설 보기
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-wrap">
          <ScrollReveal className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Projects & Partnership</p>
              <h2 className="section-title">협력으로 이어지는 대표 프로젝트</h2>
            </div>
            <Link href="/projects" className="text-sm font-bold text-emerald-700 hover:text-emerald-800">
              전체 프로젝트 보기
            </Link>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-[1fr_1.2fr]">
            <ScrollReveal>
              <ImagePlaceholder
                src="/kentech-campus-3.png"
                height="100%"
                eyebrow="Industry Partnership"
                description="Joint R&D and field demonstration"
                className="h-full"
              />
            </ScrollReveal>
            <div className="grid gap-5">
              {projects.map(([title, desc], index) => (
                <ScrollReveal key={title} delay={index * 80}>
                  <article className="project-card min-h-0">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <ScrollReveal className="section-wrap flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Work With Us</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">공동 R&D, 기술이전, 실증 협력을 시작하세요</h2>
          </div>
          <Link href="/contact" className="btn btn-primary justify-center">
            문의하기
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
