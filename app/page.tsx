import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const researchAreas = [
  ["바이오가스 & 혐기성 소화", "유기성 폐기물의 고효율 전환과 안정적 바이오가스 생산"],
  ["재생천연가스(RNG)", "정제·고도화 공정을 통한 도시가스망 연계 가능성 검증"],
  ["RNG 기반 수소 생산", "SMR 및 열촉매 기술을 활용한 청정수소 생산"],
  ["수소 저장 & 운송", "LOHC, 금속수소화물, 수소 혼입 기반 인프라 연구"],
  ["탄소 순환", "CCU, 바이오차, 영양염 회수, LCA 기반 탄소 계정"],
  ["바이오소재", "PHA와 바이오플라스틱 등 폐기물 유래 소재 전환"],
];

const platformSteps = [
  ["01", "Feedstock", "농업부산물·음식물폐기물·가축분뇨"],
  ["02", "Biogas", "혐기성 소화·정제·RNG 전환"],
  ["03", "Hydrogen", "SMR·열촉매·수소 혼입"],
  ["04", "Storage", "LOHC·금속수소화물·분산 저장"],
  ["05", "Carbon Loop", "CCU·바이오차·영양염 회수"],
];

const projects = [
  ["바이오수소 파일럿", "바이오매스 유래 수소 생산 공정의 파일럿 실증과 성능 검증"],
  ["RNG 플랫폼", "바이오가스 정제·고도화와 도시가스 배급망 연계 모델 구축"],
  ["스마트 바이오리파이너리", "디지털 트윈과 AI 제어를 활용한 공정 최적화"],
];

const stats = [
  ["6", "Research Domains"],
  ["TRL 1-9", "Scale-up Roadmap"],
  ["End-to-End", "Circular Energy Platform"],
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="section-wrap relative grid items-center gap-10 py-12 sm:py-14 lg:min-h-[680px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:py-16">
          <div className="animate-enter">
            <p className="eyebrow">KENTECH Bio-Upcycling Center</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.16] text-white sm:text-5xl lg:text-6xl">
              바이오매스를 청정수소와 순환 탄소 솔루션으로 전환합니다
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              KENTECH 바이오업사이클링 센터는 유기성 폐기물에서 바이오가스, RNG, 수소, 바이오소재까지 이어지는
              연구·실증·스케일업 플랫폼입니다.
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
              유기성 폐기물을 에너지·소재 자원으로 전환하고, 그 기술을 산업 현장에서 검증 가능한 수준까지 끌어올립니다.
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
          <ScrollReveal className="section-heading">
            <p className="section-kicker">Research Areas</p>
            <h2 className="section-title">6대 통합 연구 도메인</h2>
            <p className="section-copy">
              BRIC형 연구센터 구조를 따라 핵심 연구 분야를 빠르게 훑고, 상세 페이지로 이동할 수 있게 구성했습니다.
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
        <div className="section-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <ScrollReveal>
            <p className="section-kicker">Technology Platform</p>
            <h2 className="section-title">폐기물에서 수소까지 이어지는 순환 에너지 흐름</h2>
            <p className="section-copy mt-5">
              무거운 영상이나 3D 대신 CSS 기반의 가벼운 단계형 애니메이션으로 기술 스택을 보여줍니다.
            </p>
            <Link href="/technology" className="btn btn-outline mt-7">
              기술 플랫폼 상세 보기
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div className="flow-panel">
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
              src="/kentech-campus-1.png"
              height="380px"
              eyebrow="Pilot & Facilities"
              description="Scale-up and implementation milestone"
            />
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="section-kicker text-emerald-200">Pilot Scale-up</p>
            <h2 className="section-title text-white">벤치 스케일에서 산업 실증까지</h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              파일럿과 시설 정보는 연구센터의 신뢰도를 만드는 핵심입니다. MVP에서는 TRL 로드맵, 주요 장비,
              테스트베드 원료를 첫 화면에서 바로 인지할 수 있도록 배치합니다.
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
