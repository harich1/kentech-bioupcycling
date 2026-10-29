import Collaborators from "@/components/Collaborators";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { copy, isLang, languages, paths, type Lang } from "@/lib/content";
import {
  tr,
  crosscut,
  equipment,
  projectDirections,
  goals,
} from "@/lib/center";
import {
  Photo,
  Heading,
  Cards,
  Hero,
  CTA,
  Research,
  Projects,
  Partners,
  Facts,
  Process,
  Platform,
  Roadmap,
  Resources,
  pageTitle,
} from "@/components/CenterUI";
import ContactForm from "@/components/ContactForm";
import ExtraPages from "@/components/ExtraPages";
type Params = { lang: string; slug?: string[] };
export function generateStaticParams() {
  return languages.flatMap((lang) =>
    paths.map((path) => ({ lang, slug: path ? path.split("/") : [] })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const path = slug?.join("/") || "";
  if (!paths.includes(path)) notFound();
  const suffix = path ? `/${path}` : "";
  const title = `${pageTitle(lang, path)} | KENTECH`;
  const description =
    path === "projects/naju"
      ? copy[lang].najuSummary
      : path === "projects/gangjin"
        ? copy[lang].gangjinSummary
        : tr(lang, [
            "바이오매스에서 에너지와 소재까지. 연구, 기술 플랫폼, 현장 실증과 산업협력을 연결합니다.",
            "From biomass to energy and materials. Connecting research, technology, field demonstration and collaboration.",
          ]);
  return {
    title,
    description,
    robots:
      process.env.SITE_PREVIEW === "1"
        ? { index: false, follow: false }
        : undefined,
    alternates: {
      canonical: `/${lang}${suffix}`,
      languages: { ko: `/ko${suffix}`, en: `/en${suffix}` },
    },
    openGraph: {
      title,
      description,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      images: ["/kentech-sub-visual.jpg"],
    },
  };
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const path = slug?.join("/") || "";
  if (!paths.includes(path)) notFound();
  const t = copy[lang];
  const L = (ko: string, en: string) => tr(lang, [ko, en]);
  const concept = L(
    "연구 환경 설명용 이미지 · 실제 센터 보유 장비나 특정 현장의 기록 사진이 아닙니다.",
    "Illustrative research image · Not a record of center-owned equipment or a specific project site.",
  );
  const hero = (title: string, subtitle: string, kicker: string) => (
    <Hero
      lang={lang}
      path={path}
      title={title}
      subtitle={subtitle}
      kicker={kicker}
    />
  );
  if (!path)
    return (
      <>
        <section className="home-hero">
          <div className="section-wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">KENTECH · BIO-UPCYCLING CENTER</p>
              <h1>
                {L(
                  "바이오매스에서 시작하는\n에너지와 자원의 미래",
                  "A new future for\nbiomass, energy\nand resources",
                )}
              </h1>
              <p className="hero-description">
                {L(
                  "바이오가스에서 수소와 소재까지. 연구·실증·산업협력을 연결해 바이오매스의 다음 가능성을 엽니다.",
                  "From biogas to hydrogen and materials. Connecting research, demonstration and industry to explore the next possibilities of biomass.",
                )}
              </p>
              <div className="button-row">
                <Link className="button" href={`/${lang}/research`}>
                  {L("연구 분야 살펴보기", "Explore our research")} ↗
                </Link>
                <Link className="button ghost" href={`/${lang}/projects`}>
                  {L("실증 프로젝트", "View projects")} →
                </Link>
              </div>
            </div>
            <div className="hero-art">
              <Photo
                src="/kentech-sub-visual.jpg"
                caption={L(
                  "한국에너지공과대학교 캠퍼스",
                  "Korea Institute of Energy Technology campus",
                )}
                priority
              />
              <div className="hero-index">
                <span>RESEARCH</span>
                <span>DEMONSTRATION</span>
                <span>COLLABORATION</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom section-wrap">
            <span>BIOMASS → BIOGAS → ENERGY & MATERIALS</span>
            <Link href={`/${lang}/about`}>
              {L("센터의 비전", "Our vision")} ↗
            </Link>
          </div>
        </section>
        <Collaborators lang={lang} />
        <section className="section-wrap content-section intro-split">
          <Heading
            eyebrow="OUR PURPOSE"
            title={L(
              "연구의 깊이,\n현장으로 이어지는 가능성",
              "Research with depth.\nA pathway to practice.",
            )}
          />
          <div>
            <p className="lead">
              {L(
                "유기성 자원의 전환부터 에너지 고도화, 탄소순환과 소재 활용까지. 센터는 개별 기술을 연결하고, 현장에서 확인할 질문을 함께 설계합니다.",
                "From organic-resource conversion to energy upgrading, carbon circularity and materials. The center connects disciplines and frames the questions to be tested in practice.",
              )}
            </p>
            <div className="purpose-points">
              <span>
                {L("연구 · 공정과 분석", "Research · Processes & analysis")}
              </span>
              <span>
                {L(
                  "실증 · 조건과 성능 검증",
                  "Demonstration · Conditions & performance",
                )}
              </span>
              <span>
                {L(
                  "협력 · 적용과 사업화",
                  "Collaboration · Application & translation",
                )}
              </span>
            </div>
          </div>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="RESEARCH AREAS"
              title={L(
                "에너지와 소재를 잇는 연구",
                "Research across energy and materials",
              )}
              text={L(
                "센터의 연구 주제와 추진 방향입니다. 개별 사업의 수행 범위와 성과는 프로젝트별로 구분합니다.",
                "Research topics and directions. Project scopes and validated results are identified separately.",
              )}
            />
            <Research lang={lang} />
            <div className="cross-strip">
              <strong>AX · ANALYSIS · METABOLOMICS</strong>
              <p>
                {L(
                  "데이터·실시간 분석·대사체 해석이 각 연구 분야를 연결합니다.",
                  "Data, real-time analysis and metabolomics connect the research areas.",
                )}
              </p>
              <Link className="text-link" href={`/${lang}/network`}>
                {L("연구 네트워크", "Research network")} ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="INTEGRATED PLATFORM"
            title={L(
              "하나의 공정을 넘어,\n연결되는 자원순환",
              "Beyond a single process.\nTowards connected circularity.",
            )}
          />
          <Platform lang={lang} />
          <Link className="text-link spaced" href={`/${lang}/technology`}>
            {L("기술 플랫폼 자세히 보기", "Explore the technology platform")} ↗
          </Link>
        </section>
        <section className="dark-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="IN THE FIELD"
              title={L(
                "현장에서 구체화되는 연구",
                "Research taking shape in the field",
              )}
              text={L(
                "나주와 강진. 서로 다른 단계와 조건에서 기술의 적용 가능성을 살펴봅니다.",
                "Naju and Gangjin. Exploring applications at different stages and under different conditions.",
              )}
            />
            <Projects lang={lang} />
          </div>
        </section>
        <section className="section-wrap content-section split-layout">
          <Photo src="/photo-lab-reactors.png" caption={concept} />
          <div>
            <Heading
              eyebrow="RESEARCH INFRASTRUCTURE"
              title={L(
                "분석에서 반응,\n공정 검증까지",
                "From analysis and reaction\nto process evaluation.",
              )}
              text={L(
                "가스 조성 분석, 반응·소화 시험, 정제와 모니터링을 연결하는 연구 인프라의 역할을 소개합니다.",
                "Explore the roles of gas analysis, reaction and digestion testing, upgrading and monitoring.",
              )}
            />
            <Link className="button outline" href={`/${lang}/facilities`}>
              {L("시설·시험 역량", "Facilities & testing")} ↗
            </Link>
          </div>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="COLLABORATION"
              title={L(
                "전문성을 연결하고,\n적용의 범위를 넓힙니다",
                "Connecting expertise.\nExpanding possibilities.",
              )}
              text={L(
                "나주 실증 과제의 수행기관과 역할입니다. 센터의 전체 소속기관 목록과는 구분됩니다.",
                "Organisations and roles in the Naju project, distinct from the center’s institutional affiliations.",
              )}
            />
            <Partners lang={lang} />
            <div className="button-row">
              <Link className="text-link" href={`/${lang}/industry`}>
                {L("산업협력", "Industry collaboration")} ↗
              </Link>
              <Link className="text-link" href={`/${lang}/education`}>
                {L("교육·연구 참여", "Education & participation")} ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="NEWS & RESOURCES"
            title={L("연구의 움직임과 공개자료", "Updates and open resources")}
          />
          <Link className="news-row" href={`/${lang}/news`}>
            <time>2026.10.13</time>
            <h3>{t.newsHeading}</h3>
            <span>↗</span>
          </Link>
          <Resources lang={lang} />
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "research")
    return (
      <>
        {hero(
          L(
            "에너지와 소재를 잇는\n바이오업사이클링 연구",
            "Bio-upcycling research\nacross energy and materials",
          ),
          L(
            "연구 주제와 추진 방향을 소개합니다. 개별 과제의 수행 범위와 검증된 성과는 구분합니다.",
            "Research topics and directions, distinguished from project scopes and validated results.",
          ),
          "RESEARCH AREAS",
        )}
        <section className="section-wrap content-section">
          <Research lang={lang} full />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="CROSS-CUTTING SCIENCE"
              title={L(
                "연구 분야를 연결하는 분석과 데이터",
                "Analysis and data across disciplines",
              )}
            />
            <Cards lang={lang} items={crosscut} />
            <Link className="text-link spaced" href={`/${lang}/network`}>
              {L("연구 네트워크 살펴보기", "Explore the research network")} ↗
            </Link>
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="FROM RESEARCH TO PRACTICE"
            title={L(
              "통합 플랫폼에서 현장으로",
              "From an integrated platform to the field",
            )}
          />
          <Platform lang={lang} />
          <div className="button-row">
            <Link className="button outline" href={`/${lang}/technology`}>
              {L("기술 플랫폼", "Technology platform")} ↗
            </Link>
            <Link className="text-link" href={`/${lang}/projects`}>
              {L("실증 사례 보기", "View demonstration projects")} ↗
            </Link>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "projects")
    return (
      <>
        {hero(
          L(
            "현장에서 확인하는\n기술의 가능성",
            "Testing possibilities\nin the field",
          ),
          t.projectsIntro,
          "DEMONSTRATION & PROJECTS",
        )}
        <section className="section-wrap content-section">
          <Projects lang={lang} />
          <div className="comparison-wrap">
            <table>
              <caption>
                {L(
                  "나주와 강진의 적용 범위 비교",
                  "Naju and Gangjin at a glance",
                )}
              </caption>
              <thead>
                <tr>
                  <th>{L("구분", "Aspect")}</th>
                  <th>{L("나주", "Naju")}</th>
                  <th>{L("강진", "Gangjin")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{L("현재 단계", "Stage")}</th>
                  <td>
                    {L(
                      "설비 제작 · 2026년 10월",
                      "Equipment fabrication · Oct 2026",
                    )}
                  </td>
                  <td>{L("파일럿 운영", "Pilot operation")}</td>
                </tr>
                <tr>
                  <th>{L("원료", "Feedstock")}</th>
                  <td>
                    {L(
                      "초기 시운전 볏짚 예정",
                      "Rice straw planned for commissioning",
                    )}
                  </td>
                  <td>
                    {L(
                      "왕겨 배치식 → 볏짚 연속식",
                      "Rice husk batch → rice straw continuous",
                    )}
                  </td>
                </tr>
                <tr>
                  <th>{L("주요 목적", "Focus")}</th>
                  <td>
                    {L(
                      "전환 시스템·CO₂ 평가 연계",
                      "Conversion system and CO₂ assessment",
                    )}
                  </td>
                  <td>
                    {L(
                      "소화 공정의 운전 조건·생산 특성",
                      "Digestion conditions and gas characteristics",
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="RESEARCH DIRECTIONS"
              title={L(
                "다음 적용을 위한 연구 주제",
                "Research themes for future applications",
              )}
              text={L(
                "개별 사업 실적과 구분되는 연구·협력 방향입니다.",
                "Research and collaboration directions, separate from established project results.",
              )}
            />
            <Cards lang={lang} items={projectDirections} />
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="SCALE-UP"
            title={L(
              "벤치에서 산업 적용까지",
              "From bench scale to deployment",
            )}
          />
          <Roadmap lang={lang} />
          <Link className="text-link spaced" href={`/${lang}/pilot`}>
            {L("단계별 검증 항목 보기", "See the evaluation roadmap")} ↗
          </Link>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "projects/naju")
    return (
      <>
        {hero(
          L(
            "나주 바이오매스 잔재물\n바이오가스 전환 실증",
            "Naju biomass residues-to-biogas\ndemonstration",
          ),
          L(
            "저활용 바이오매스의 에너지 활용과 전환 공정의 CO₂ 발생량 평가를 함께 추진합니다. 초기 원료는 볏짚입니다.",
            "Connecting energy recovery from underused biomass with assessment of process CO₂ emissions. Rice straw is the initial feedstock.",
          ),
          "PROJECT 01 · NAJU",
        )}
        <article>
          <section className="section-wrap content-section">
            <p className="tag">
              {t.najuType} · {t.updated}
            </p>
            <Heading
              eyebrow="THE CHALLENGE"
              title={L(
                "에너지로 활용하고,\n공정의 배출을 이해합니다",
                "Recover energy.\nUnderstand process emissions.",
              )}
              text={L(
                "저활용 바이오매스 잔재물은 원료의 성상과 처리 조건에 맞는 활용 경로가 필요합니다. 에너지 전환의 가능성과 함께 공정에서 발생하는 CO₂를 데이터에 기반해 살펴보는 것이 이 과제의 목적입니다.",
                "Underused biomass residues need conversion pathways suited to their characteristics and treatment conditions. This project explores energy recovery while using data to assess process CO₂ emissions.",
              )}
            />
            <p className="reading-width">
              {L(
                "볏짚을 대상으로 전처리, 건식 혐기소화, 바이오가스 고질화를 연계하고 공정별 운전데이터를 수집·분석하는 시스템을 구축합니다. 커피박과 폐목재는 향후 적용성 검토 대상입니다.",
                "The project is developing a system combining rice-straw pretreatment, dry anaerobic digestion, biogas upgrading and collection and analysis of operating data. Spent coffee grounds and waste wood are subjects for future suitability assessment.",
              )}
            </p>
          </section>
          <section className="muted-section">
            <div className="section-wrap content-section">
              <Heading
                eyebrow="THE SOLUTION"
                title={L(
                  "물질의 흐름과 데이터의 흐름",
                  "Material and data pathways",
                )}
              />
              <Process lang={lang} />
              <div className="feedstock-note">
                <h3>{t.feedTitle}</h3>
                <p>{t.feedBody}</p>
              </div>
            </div>
          </section>
          <section className="section-wrap content-section">
            <Heading
              eyebrow="PROJECT FACTS"
              title={L(
                "실증 개요와 수행기관",
                "Project overview and organisations",
              )}
              text={t.najuOfficial}
            />
            <Facts items={t.najuFacts} />
            <Partners lang={lang} />
          </section>
          <section className="muted-section">
            <div className="section-wrap content-section">
              <Heading
                eyebrow="VALIDATION OBJECTIVES"
                title={L(
                  "이 실증에서 확인할 네 가지",
                  "Four questions for validation",
                )}
              />
              <Cards lang={lang} items={goals} />
              <p className="scope-note">{t.scopeBody}</p>
            </div>
          </section>
          <section className="section-wrap content-section">
            <Heading eyebrow="PROGRESS" title={t.scheduleTitle} />
            <ol className="timeline">
              {t.schedule.map(([date, state]) => (
                <li key={date}>
                  <strong>{date}</strong>
                  <span>{state}</span>
                </li>
              ))}
            </ol>
            <p className="updated">{t.scheduleNote}</p>
            <div className="project-visual-note">
              <span className="eyebrow">PROJECT VISUALS</span>
              <h3>
                {L(
                  "공정의 구성은 위 개념도로 확인할 수 있습니다",
                  "Explore the system through the process diagram above",
                )}
              </h3>
              <p>
                {L(
                  "현재 이 페이지에는 나주 현장 사진을 게시하지 않았습니다. 제작·설치 사진은 공개 가능한 자료가 확보되면 촬영일과 설명을 함께 제공합니다.",
                  "No Naju site photographs are published on this page yet. Fabrication and installation photographs will be added with dates and captions when material is available for public release.",
                )}
              </p>
            </div>
            <div className="project-contact">
              <div>
                <p className="eyebrow">PROJECT ENQUIRIES</p>
                <h3>{L("나주 과제 관련 문의", "Naju project enquiries")}</h3>
                <p>
                  {L(
                    "센터 공통 문의처입니다. 문의 제목에 ‘나주 실증’을 적어 주세요.",
                    "Center contact address. Please include “Naju demonstration” in your subject line.",
                  )}
                </p>
              </div>
              <a
                className="text-link"
                href="mailto:bioupcycling@kentech.ac.kr?subject=Naju%20demonstration"
              >
                bioupcycling@kentech.ac.kr ↗
              </a>
            </div>
          </section>
        </article>
        <CTA lang={lang} project />
      </>
    );
  if (path === "projects/gangjin")
    return (
      <>
        {hero(t.gangjinTitle, t.gangjinSummary, "PROJECT 02 · GANGJIN")}
        <section className="section-wrap content-section project-intro">
          <div>
            <p className="tag">{t.gangjinType}</p>
            <h2>
              {L(
                "운전 경험을 다음 검증으로",
                "From experience to further validation",
              )}
            </h2>
            <p className="lead">{t.gangjinBody}</p>
          </div>
          <Facts items={t.gangjinFacts} />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="OPERATING PATHWAY"
              title={L(
                "원료와 운전 방식의 전환",
                "Feedstock and operating-mode transition",
              )}
            />
            <div className="phase-grid">
              <article>
                <span>01 / BATCH</span>
                <h3>
                  {L("왕겨 원물 · 배치식", "Rice husk · Batch operation")}
                </h3>
                <p>2025.11 — 2026.03</p>
              </article>
              <article>
                <span>02 / CONTINUOUS</span>
                <h3>
                  {L(
                    "볏짚 분쇄물 · 연속식",
                    "Milled rice straw · Continuous operation",
                  )}
                </h3>
                <p>{L("2026.04부터", "From April 2026")}</p>
              </article>
            </div>
            <Cards
              lang={lang}
              items={t.gangjinFocus.map(([a, b]) => [
                [a, a],
                [b, b],
              ])}
            />
            <p className="scope-note">{t.gangjinScope}</p>
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="EVIDENCE & CONTEXT"
            title={L(
              "운전 조건과 함께 읽는 결과",
              "Results in their operating context",
            )}
            text={L(
              "원료의 성상, 투입 방식과 소화액 순환 조건을 함께 살펴야 합니다. 공개 검증자료가 없는 정량 성능은 이 페이지에서 제시하지 않습니다.",
              "Results should be read alongside feedstock properties, feeding mode and recirculation conditions. Quantitative performance without public validation evidence is not presented here.",
            )}
          />
          <Link className="text-link" href={`/${lang}/pilot`}>
            {L("스케일업 검증 로드맵", "Scale-up evaluation roadmap")} ↗
          </Link>
        </section>
        <CTA lang={lang} project />
      </>
    );
  if (path === "facilities")
    return (
      <>
        {hero(
          L(
            "분석·반응·정제를 연결하는\n연구 인프라",
            "Research infrastructure\nfor analysis, reaction and upgrading",
          ),
          L(
            "연구와 파일럿 검증에 필요한 시험·분석 기능을 소개합니다.",
            "Functions that support research and pilot evaluation.",
          ),
          "RESEARCH INFRASTRUCTURE",
        )}
        <section className="section-wrap content-section split-layout">
          <Photo src="/photo-analysis-lab.png" caption={concept} />
          <div>
            <Heading
              eyebrow="ANALYSE · TEST · VALIDATE"
              title={L(
                "측정에서 이해로,\n이해에서 검증으로",
                "From measurement to insight.\nFrom insight to evaluation.",
              )}
              text={L(
                "가스 분석, 반응 시험과 공정 모니터링을 함께 살펴 원료·운전 조건에 따른 변화를 해석합니다.",
                "Combining gas analysis, reaction testing and process monitoring to interpret changes across feedstocks and conditions.",
              )}
            />
            <p className="scope-note">
              {L(
                "연구에 필요한 인프라 기능의 소개입니다. 실제 보유 장비, 모델·사양, 이용 가능 여부는 문의를 통해 확인해 주세요.",
                "These describe research infrastructure functions. Please enquire about actual equipment, specifications and availability.",
              )}
            </p>
          </div>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Cards lang={lang} items={equipment} />
          </div>
        </section>
        <section className="section-wrap content-section split-layout">
          <div>
            <Heading
              eyebrow="FROM LAB TO PILOT"
              title={L(
                "규모와 목적에 맞는 시험 설계",
                "Testing designed for scale and purpose",
              )}
              text={L(
                "벤치 반응, 파일럿 통합, 현장 실증은 각각 다른 검증 질문을 갖습니다. 시험 목적과 원료를 먼저 정리해 필요한 분석·설비 조건을 논의합니다.",
                "Bench reactions, pilot integration and field demonstration address different questions. Define feedstock and objectives to discuss suitable analysis and equipment.",
              )}
            />
            <Link className="button outline" href={`/${lang}/pilot`}>
              {L("검증 로드맵", "Evaluation roadmap")} ↗
            </Link>
          </div>
          <Photo src="/photo-lab-reactors.png" caption={concept} />
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "news")
    return (
      <>
        {hero(
          t.newsTitle,
          L(
            "프로젝트의 진행과 공개자료를 전합니다.",
            "Project progress and public resources.",
          ),
          "NEWS & ACTIVITIES",
        )}
        <section className="section-wrap content-section">
          <article className="news-article">
            <time dateTime="2026-10-13">2026.10.13</time>
            <div>
              <p className="tag">{t.najuType}</p>
              <h2>{t.newsHeading}</h2>
              <p>{t.newsText}</p>
              <Link className="text-link" href={`/${lang}/projects/naju`}>
                {t.more} ↗
              </Link>
            </div>
          </article>
          <Heading
            eyebrow="OPEN RESOURCES"
            title={L(
              "프로젝트와 기술을 더 자세히",
              "Explore projects and technology",
            )}
          />
          <Resources lang={lang} />
          <Link className="text-link spaced" href={`/${lang}/achievements`}>
            {L("성과·자료 안내", "Results & resources")} ↗
          </Link>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path !== "contact") return <ExtraPages lang={lang} path={path} />;
  return (
    <>
      {hero(t.contactTitle, t.contactIntro, "CONTACT")}
      <section className="section-wrap content-section contact-grid">
        <div>
          <h2>{t.name}</h2>
          <p>{t.contactText}</p>
          <address>{t.address}</address>
          <a className="contact-email" href="mailto:bioupcycling@kentech.ac.kr">
            bioupcycling@kentech.ac.kr ↗
          </a>
          <div className="contact-topics">
            {[
              L("공동연구·실증", "Joint research & trials"),
              L("기술이전·산업협력", "Technology transfer & collaboration"),
              L("교육·연구 참여", "Education & research participation"),
              L("언론·자료 문의", "Media & information"),
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <p>
            {L(
              "관심 원료·현장 조건·협력 목적을 적어 주세요. 나주 과제 문의는 제목에 ‘나주 실증’을 표시해 주세요.",
              "Include feedstock, site conditions and collaboration objectives. For Naju enquiries, add “Naju demonstration” to the subject.",
            )}
          </p>
        </div>
        <div className="contact-panel">
          {process.env.RESEND_API_KEY &&
          process.env.CONTACT_TO_EMAIL &&
          process.env.CONTACT_FROM_EMAIL ? (
            <ContactForm lang={lang} />
          ) : (
            <>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>{t.email}</h2>
              <p>{t.formFallback}</p>
              <a className="button" href="mailto:bioupcycling@kentech.ac.kr">
                {t.inquiry} ↗
              </a>
            </>
          )}
        </div>
      </section>
    </>
  );
}
