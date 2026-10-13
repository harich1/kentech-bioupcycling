import type { MetadataRoute } from "next";
import { languages, paths } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kentech-bioupcycling.vercel.app";
  return languages.flatMap((lang) =>
    paths.map((path) => ({
      url: `${base}/${lang}${path ? `/${path}` : ""}`,
      alternates: {
        languages: {
          ko: `${base}/ko${path ? `/${path}` : ""}`,
          en: `${base}/en${path ? `/${path}` : ""}`,
        },
      },
    })),
  );
}
