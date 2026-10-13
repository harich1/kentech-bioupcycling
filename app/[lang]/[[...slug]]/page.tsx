import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { copy, isLang, languages, paths, type Lang } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

type Params = { lang: string; slug?: string[] };
export function generateStaticParams() {
  return languages.flatMap((lang) =>
    paths.map((path) => ({ lang, slug: path ? path.split("/") : [] })),
  );
}
function getTitle(lang: Lang, path: string) {
  const t = copy[lang];
  return (
    (
      {
        about: t.nav[0],
        research: t.nav[1],
        projects: t.nav[2],
        "projects/naju": t.najuTitle,
        "projects/gangjin": t.gangjinTitle,
        news: t.nav[3],
        contact: t.nav[4],
      } as Record<string, string>
    )[path] || t.name
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
  const title = `${getTitle(lang, path)} | KENTECH`;
  const description =
    path === "projects/naju"
      ? copy[lang].najuSummary
      : path === "projects/gangjin"
        ? copy[lang].gangjinSummary
        : copy[lang].intro;
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${suffix}`,
      languages: { ko: `/ko${suffix}`, en: `/en${suffix}` },
    },
    openGraph: {
      title,
      description,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      images: ["/logo.png"],
    },
  };
}
function Hero({
  lang,
  title,
  subtitle,
  kicker,
}: {
  lang: Lang;
  title: string;
  subtitle: string;
  kicker: string;
}) {
  return (
    <section className="detail-hero">
      <div className="section-wrap">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link href={`/${lang}`}>{copy[lang].home} ↗</Link>
      </div>
    </section>
  );
}
function Cards({ items }: { items: string[][] }) {
  return (
    <div className="info-grid">
      {items.map(([title, body], i) => (
        <article className="info-card" key={title}>
          <span className="number">0{i + 1}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
function Facts({ items }: { items: string[][] }) {
  return (
    <dl className="facts">
      {items.map(([title, value]) => (
        <div key={title}>
          <dt>{title}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
function Process({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <figure className="process">
      <ol>
        {t.tech.map(([name], i) => (
          <li key={name}>
            <span>0{i + 1}</span>
            <strong>{name}</strong>
            {i < 3 && <b aria-hidden="true">→</b>}
          </li>
        ))}
      </ol>
      <figcaption>{t.processCaption}</figcaption>
    </figure>
  );
}
function Projects({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="project-grid">
      {[
        ["naju", t.najuType, t.najuTitle, t.najuSummary, "NAJU"],
        ["gangjin", t.gangjinType, t.gangjinTitle, t.gangjinSummary, "GANGJIN"],
      ].map(([slug, type, title, summary, city]) => (
        <Link
          className={`case-card case-${slug}`}
          href={`/${lang}/projects/${slug}`}
          key={slug}
        >
          <div className="case-visual" aria-hidden="true">
            <span>{city}</span>
            <div className="vessels">
              <i />
              <i />
              <i />
            </div>
            <small>{slug === "naju" ? "01" : "02"}</small>
          </div>
          <div className="case-body">
            <p className="tag">{type}</p>
            <h3>{title}</h3>
            <p>{summary}</p>
            <span className="text-link">
              {t.more} <span aria-hidden="true">↗</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
function CTA({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="cta">
      <div className="section-wrap">
        <h2>{t.cta}</h2>
        <Link className="button" href={`/${lang}/contact`}>
          {t.inquiry} ↗
        </Link>
      </div>
    </section>
  );
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const path = slug?.join("/") || "";
  if (!paths.includes(path)) notFound();
  const t = copy[lang];
  if (!path)
    return (
      <>
        <section className="home-hero">
          <div className="section-wrap hero-grid">
            <div>
              <p className="eyebrow">KENTECH · BIO-UPCYCLING CENTER</p>
              <h1>{t.tagline}</h1>
              <p className="hero-description">{t.intro}</p>
              <Link className="button" href={`/${lang}/projects`}>
                {t.heroButton} ↗
              </Link>
            </div>
            <figure className="campus-visual">
              <Image
                src="/kentech-sub-visual.jpg"
                alt={
                  lang === "ko"
                    ? "한국에너지공과대학교 캠퍼스"
                    : "Korea Institute of Energy Technology campus"
                }
                fill
                priority
                sizes="(max-width: 800px) 100vw, 48vw"
              />
              <figcaption>Korea Institute of Energy Technology</figcaption>
            </figure>
          </div>
        </section>
        <section className="section-wrap content-section overview">
          <p className="eyebrow">RESEARCH · DEMONSTRATION · COLLABORATION</p>
          <h2>{t.overviewTitle}</h2>
          <p className="lead">{t.overview}</p>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <p className="eyebrow">RESEARCH & TECHNOLOGY</p>
            <h2>{t.researchTitle}</h2>
            <Process lang={lang} />
            <Link className="text-link" href={`/${lang}/research`}>
              {t.nav[1]} ↗
            </Link>
          </div>
        </section>
        <section className="section-wrap content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED PROJECTS</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <Link className="text-link" href={`/${lang}/projects`}>
              {t.all} ↗
            </Link>
          </div>
          <Projects lang={lang} />
        </section>
        <section className="section-wrap news-home">
          <p className="eyebrow">LATEST UPDATE</p>
          <Link href={`/${lang}/news`}>
            <time dateTime="2026-10-13">2026.10.13</time>
            <h3>{t.newsHeading}</h3>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "about")
    return (
      <>
        <Hero
          lang={lang}
          title={t.aboutTitle}
          subtitle={t.aboutIntro}
          kicker="ABOUT THE CENTER"
        />
        <section className="section-wrap content-section">
          <p className="lead">{t.overview}</p>
          <Cards items={t.aboutRoles} />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <h2>{t.networkTitle}</h2>
            <p className="lead">{t.networkText}</p>
            <p>{t.networkNote}</p>
            <Cards items={t.partners} />
            <Link className="text-link" href={`/${lang}/projects/naju`}>
              {t.najuTitle} ↗
            </Link>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "research")
    return (
      <>
        <Hero
          lang={lang}
          title={t.researchTitle}
          subtitle={t.researchIntro}
          kicker="RESEARCH & TECHNOLOGY"
        />
        <section className="section-wrap content-section">
          <Process lang={lang} />
          <Cards items={t.tech} />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <h2>{t.projectsTitle}</h2>
            <Projects lang={lang} />
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "projects")
    return (
      <>
        <Hero
          lang={lang}
          title={t.projectsTitle}
          subtitle={t.projectsIntro}
          kicker="PROJECTS"
        />
        <section className="section-wrap content-section">
          <Projects lang={lang} />
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "projects/naju")
    return (
      <>
        <Hero
          lang={lang}
          title={t.najuTitle}
          subtitle={t.najuOfficial}
          kicker="PROJECT 01 · NAJU"
        />
        <article>
          <section className="section-wrap content-section project-intro">
            <div>
              <p className="tag">{t.najuType}</p>
              <p className="lead">{t.najuBody}</p>
              <p className="updated">{t.updated}</p>
            </div>
            <Facts items={t.najuFacts} />
          </section>
          <section className="muted-section">
            <div className="section-wrap content-section">
              <h2>{t.processTitle}</h2>
              <Process lang={lang} />
              <h3>{t.feedTitle}</h3>
              <p className="reading-width">{t.feedBody}</p>
            </div>
          </section>
          <section className="section-wrap content-section">
            <h2>{t.networkTitle}</h2>
            <p>{t.networkNote}</p>
            <Cards items={t.partners} />
            <h2>{t.scheduleTitle}</h2>
            <ol className="timeline">
              {t.schedule.map(([date, status]) => (
                <li key={date}>
                  <strong>{date}</strong>
                  <span>{status}</span>
                </li>
              ))}
            </ol>
            <p className="updated">{t.scheduleNote}</p>
            <aside className="scope-note">
              <h3>{t.scopeTitle}</h3>
              <p>{t.scopeBody}</p>
            </aside>
          </section>
        </article>
        <CTA lang={lang} />
      </>
    );
  if (path === "projects/gangjin")
    return (
      <>
        <Hero
          lang={lang}
          title={t.gangjinTitle}
          subtitle={t.gangjinSummary}
          kicker="PROJECT 02 · GANGJIN"
        />
        <article>
          <section className="section-wrap content-section project-intro">
            <div>
              <p className="tag">{t.gangjinType}</p>
              <p className="lead">{t.gangjinBody}</p>
            </div>
            <Facts items={t.gangjinFacts} />
          </section>
          <section className="muted-section">
            <div className="section-wrap content-section">
              <Cards items={t.gangjinFocus} />
              <aside className="scope-note">
                <p>{t.gangjinScope}</p>
              </aside>
            </div>
          </section>
        </article>
        <CTA lang={lang} />
      </>
    );
  if (path === "news")
    return (
      <>
        <Hero
          lang={lang}
          title={t.newsTitle}
          subtitle={t.newsIntro}
          kicker="NEWS & ACTIVITIES"
        />
        <section className="section-wrap content-section">
          <article className="news-item">
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
        </section>
        <CTA lang={lang} />
      </>
    );
  return (
    <>
      <Hero
        lang={lang}
        title={t.contactTitle}
        subtitle={t.contactIntro}
        kicker="CONTACT"
      />
      <section className="section-wrap content-section contact-grid">
        <div>
          <h2>{t.name}</h2>
          <p>{t.contactText}</p>
          <address>{t.address}</address>
          <a className="contact-email" href="mailto:bioupcycling@kentech.ac.kr">
            bioupcycling@kentech.ac.kr ↗
          </a>
        </div>
        <div className="contact-panel">
          {process.env.RESEND_API_KEY &&
          process.env.CONTACT_TO_EMAIL &&
          process.env.CONTACT_FROM_EMAIL ? (
            <ContactForm lang={lang} />
          ) : (
            <>
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
