import Link from "next/link";
import { copy, type Lang } from "@/lib/content";
import { sections, subnav } from "@/lib/center";
export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const ix = lang === "ko" ? 1 : 2;
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-top">
        <div>
          <p className="footer-name">
            KENTECH
            <br />
            {t.name}
          </p>
          <p>
            {lang === "ko"
              ? "바이오매스에서 에너지와 소재까지. 연구·실증·산업협력을 연결합니다."
              : "From biomass to energy and materials. Connecting research, demonstration and collaboration."}
          </p>
        </div>
        <div>
          <p>{t.address}</p>
          <a href="mailto:bioupcycling@kentech.ac.kr">
            bioupcycling@kentech.ac.kr ↗
          </a>
        </div>
      </div>
      <nav
        className="section-wrap footer-links"
        aria-label={lang === "ko" ? "전체 페이지" : "All pages"}
      >
        {sections.map((s, i) => (
          <div key={s[0]}>
            <strong>{s[ix]}</strong>
            {subnav[i].map((x) => (
              <Link key={x[0]} href={`/${lang}/${x[0]}`}>
                {x[ix]}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <div className="section-wrap footer-bottom">
        © 2026 KENTECH Bio-Upcycling Center
      </div>
    </footer>
  );
}
