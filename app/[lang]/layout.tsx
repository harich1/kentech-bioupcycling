import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { copy, isLang } from "@/lib/content";
import "../globals.css";
const font = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://kentech-bioupcycling.vercel.app"),
  icons: { icon: "/favicon.ico" },
};
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${font.className} ${font.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          {copy[lang].skip}
        </a>
        <SiteHeader lang={lang} />
        <main id="main-content">{children}</main>
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
