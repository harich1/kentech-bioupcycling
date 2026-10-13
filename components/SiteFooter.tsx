import Link from "next/link";
import { copy, type Lang } from "@/lib/content";
export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-grid">
        <div>
          <p className="footer-name">
            KENTECH
            <br />
            {t.name}
          </p>
          <p>{t.footer}</p>
        </div>
        <div>
          <p>{t.address}</p>
          <a href="mailto:bioupcycling@kentech.ac.kr">
            bioupcycling@kentech.ac.kr
          </a>
        </div>
        <div>
          <Link href={`/${lang}/projects`}>{t.nav[2]}</Link>
          <Link href={`/${lang}/contact`}>{t.inquiry}</Link>
        </div>
      </div>
      <div className="section-wrap footer-bottom">
        © 2026 KENTECH Bio-Upcycling Center
      </div>
    </footer>
  );
}
