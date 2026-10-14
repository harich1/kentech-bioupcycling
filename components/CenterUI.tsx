import Link from "next/link";
import Image from "next/image";
import { copy, type Lang } from "@/lib/content";
import { tr, domains, roadmap, subnav, type Text } from "@/lib/center";
export function Photo({
  src,
  caption,
  priority = false,
  contain = false,
}: {
  src: string;
  caption: string;
  priority?: boolean;
  contain?: boolean;
}) {
  return (
    <figure className={`photo ${contain ? "contain" : ""}`}>
      <div>
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}
export function Cards({ lang, items }: { lang: Lang; items: Text[][] }) {
  return (
    <div className="info-grid">
      {items.map(([title, body], i) => (
        <article className="info-card" key={title[0]}>
          <span className="number">{String(i + 1).padStart(2, "0")}</span>
          <h3>{tr(lang, title)}</h3>
          <p>{tr(lang, body)}</p>
        </article>
      ))}
    </div>
  );
}
export function pageTitle(lang: Lang, path: string) {
  const item = subnav.flat().find((x) => x[0] === path);
  return item ? item[lang === "ko" ? 1 : 2] : copy[lang].name;
}
export function Hero({
  lang,
  path,
  title,
  subtitle,
  kicker,
}: {
  lang: Lang;
  path: string;
  title: string;
  subtitle: string;
  kicker: string;
}) {
  const group = subnav.find((g) => g.some((x) => x[0] === path));
  return (
    <>
      <section className="detail-hero">
        <div className="section-wrap">
          <nav
            className="breadcrumb"
            aria-label={tr(lang, ["현재 위치", "Breadcrumb"])}
          >
            <Link href={`/${lang}`}>{copy[lang].home}</Link>
            <span>/</span>
            <span>{pageTitle(lang, path)}</span>
          </nav>
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
        </div>
        <span className="hero-orbit" aria-hidden="true" />
      </section>
      {group && group.length > 1 && (
        <nav
          className="section-tabs"
          aria-label={tr(lang, ["관련 페이지", "Related pages"])}
        >
          <div className="section-wrap">
            {group.map(([url, ko, en]) => (
              <Link
                key={url}
                href={`/${lang}/${url}`}
                aria-current={path === url ? "page" : undefined}
              >
                {lang === "ko" ? ko : en}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
export function CTA({
  lang,
  project = false,
}: {
  lang: Lang;
  project?: boolean;
}) {
  return (
    <section className="cta">
      <div className="section-wrap">
        <div>
          <p className="eyebrow">CONNECT WITH US</p>
          <h2>
            {tr(
              lang,
              project
                ? [
                    "이 프로젝트에 대해 더 알고 싶으신가요?",
                    "Want to explore this project further?",
                  ]
                : [
                    "다음 가능성을 함께 연구합니다",
                    "Explore the next possibilities with us",
                  ],
            )}
          </h2>
          <p>
            {tr(lang, [
              "공동연구부터 현장 실증, 기술 적용과 연구 참여까지.",
              "From joint research to field trials, technology applications and research participation.",
            ])}
          </p>
        </div>
        <Link className="button" href={`/${lang}/contact`}>
          {copy[lang].inquiry} ↗
        </Link>
      </div>
    </section>
  );
}
export function Research({
  lang,
  full = false,
}: {
  lang: Lang;
  full?: boolean;
}) {
  return (
    <div className={`research-grid ${full ? "full" : ""}`}>
      {domains.map((d, i) => (
        <article id={d.id} className="research-card" key={d.id}>
          <div className="card-top">
            <span className="number">0{i + 1}</span>
            <span>{d.code}</span>
          </div>
          <h3>{tr(lang, d.title)}</h3>
          <p>{tr(lang, d.body)}</p>
          {full ? (
            <p className="topic-line">{tr(lang, d.topics)}</p>
          ) : (
            <Link className="text-link" href={`/${lang}/research#${d.id}`}>
              {copy[lang].more} ↗
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
export function Projects({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="project-grid">
      {[
        ["naju", "NAJU", t.najuTitle, t.najuSummary, t.najuType],
        ["gangjin", "GANGJIN", t.gangjinTitle, t.gangjinSummary, t.gangjinType],
      ].map(([slug, city, title, summary, state], i) => (
        <Link
          href={`/${lang}/projects/${slug}`}
          className={`case-card case-${slug}`}
          key={slug}
        >
          <div className="case-visual">
            <span className="case-city">{city}</span>
            <span className="tag">{state}</span>
            <div className="case-art" aria-hidden="true">
              <i />
              <i />
              <i />
              <b>↗</b>
            </div>
            <small>
              {tr(lang, ["공정 개념 이미지", "Process concept illustration"])}
            </small>
          </div>
          <div className="case-body">
            <p className="eyebrow">PROJECT 0{i + 1}</p>
            <h3>{title}</h3>
            <p>{summary}</p>
            <div className="case-meta">
              <span>
                {i === 0
                  ? tr(lang, ["볏짚 · 시스템 제작", "Rice straw · Fabrication"])
                  : tr(lang, [
                      "왕겨 → 볏짚 · 파일럿 운영",
                      "Rice husk → rice straw · Pilot",
                    ])}
              </span>
              <strong aria-hidden="true">↗</strong>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Partners({ lang }: { lang: Lang }) {
  return (
    <div className="partner-list">
      {copy[lang].partners.map(([name, role], i) => (
        <div key={name}>
          <span>0{i + 1}</span>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      ))}
    </div>
  );
}
export function Facts({ items }: { items: string[][] }) {
  return (
    <dl className="facts">
      {items.map(([key, value]) => (
        <div key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
export function Process({ lang }: { lang: Lang }) {
  const labels: Text[] = [
    ["볏짚", "Rice straw"],
    ["전처리", "Pretreatment"],
    ["건식 혐기소화", "Dry anaerobic digestion"],
    ["바이오가스", "Biogas"],
    ["고질화", "Upgrading"],
  ];
  return (
    <figure className="process-diagram">
      <div className="diagram-heading">
        <span className="eyebrow">MATERIAL FLOW</span>
        <strong>
          {tr(lang, ["원료에서 바이오가스로", "From feedstock to biogas"])}
        </strong>
      </div>
      <ol className="material-flow">
        {labels.map((x, i) => (
          <li key={x[0]}>
            <span className="number">0{i + 1}</span>
            <strong>{tr(lang, x)}</strong>
            {i < 4 && <b aria-hidden="true">→</b>}
          </li>
        ))}
      </ol>
      <div className="data-connector">
        ↓{" "}
        {tr(lang, [
          "각 공정의 운전데이터",
          "Operating data from the process stages",
        ])}
      </div>
      <div className="data-flow">
        <span className="eyebrow">DATA & ASSESSMENT</span>
        <strong>
          {tr(lang, ["데이터 수집·분석", "Data collection & analysis"])}
        </strong>
        <span aria-hidden="true">→</span>
        <strong>
          {tr(lang, ["CO₂ 발생량 평가", "CO₂ emissions assessment"])}
        </strong>
      </div>
      <figcaption>
        {tr(lang, [
          "공정 개념도. 데이터 흐름은 물질 처리 공정과 별개입니다. CO₂ 발생량 평가는 검증된 온실가스 감축 실적을 뜻하지 않습니다.",
          "Process concept. The data pathway is separate from material processing. CO₂ emissions assessment does not establish verified greenhouse gas reductions.",
        ])}
      </figcaption>
    </figure>
  );
}
export function Platform({ lang }: { lang: Lang }) {
  return (
    <div className="platform-map">
      <div className="platform-label">BIO-UPCYCLING PLATFORM</div>
      <div className="platform-path">
        {[
          ["바이오매스", "Biomass"],
          ["전환·회수", "Conversion · Recovery"],
          ["에너지·소재", "Energy · Materials"],
          ["저장·공급·활용", "Storage · Supply · Use"],
        ].map((x, i) => (
          <div key={x[0]}>
            <span>0{i + 1}</span>
            <strong>{tr(lang, [x[0], x[1]])}</strong>
            {i < 3 && <b aria-hidden="true">→</b>}
          </div>
        ))}
      </div>
      <div className="platform-support">
        {tr(lang, ["분석·AX·공정 제어", "Analysis · AX · Process control"])}
        <span>＋</span>
        {tr(lang, [
          "탄소순환·자원 회수·LCA",
          "Carbon circularity · Recovery · LCA",
        ])}
      </div>
      <p>
        {tr(lang, [
          "센터의 통합 연구 방향을 나타냅니다. 모든 기술이 나주 또는 강진 설비에 적용된다는 의미는 아닙니다.",
          "An overview of the center’s research directions. It does not imply that every technology is implemented at Naju or Gangjin.",
        ])}
      </p>
    </div>
  );
}
export function Roadmap({ lang }: { lang: Lang }) {
  return (
    <div className="roadmap">
      {roadmap.map(([trl, title, body]) => (
        <article key={trl[0]}>
          <span className="tag">{tr(lang, trl)}</span>
          <h3>{tr(lang, title)}</h3>
          <p>{tr(lang, body)}</p>
        </article>
      ))}
    </div>
  );
}
export function Resources({ lang }: { lang: Lang }) {
  return (
    <div className="resource-list">
      {[
        [
          "projects/naju",
          "나주 실증 소개",
          "Naju project profile",
          "PROJECT / NAJU",
        ],
        [
          "projects/gangjin",
          "강진 파일럿 소개",
          "Gangjin pilot profile",
          "PROJECT / GANGJIN",
        ],
        [
          "technology",
          "통합 기술 플랫폼",
          "Integrated technology platform",
          "TECHNOLOGY",
        ],
        [
          "pilot",
          "스케일업 연구 로드맵",
          "Scale-up research roadmap",
          "ROADMAP",
        ],
      ].map(([url, ko, en, label]) => (
        <Link key={url} href={`/${lang}/${url}`}>
          <span className="eyebrow">{label}</span>
          <h3>{lang === "ko" ? ko : en}</h3>
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
    </div>
  );
}
