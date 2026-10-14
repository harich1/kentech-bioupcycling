import assert from "node:assert/strict";
import fs from "node:fs";
const base = process.env.TEST_BASE_URL || "http://localhost:3102";
const paths = [
  "",
  "about",
  "research",
  "technology",
  "network",
  "projects",
  "projects/naju",
  "projects/gangjin",
  "pilot",
  "facilities",
  "industry",
  "education",
  "achievements",
  "news",
  "contact",
];
const pages = new Map();
let checks = 0;
for (const lang of ["ko", "en"])
  for (const path of paths) {
    const url = `/${lang}${path ? "/" + path : ""}`;
    const res = await fetch(base + url);
    assert.equal(res.status, 200, url);
    const html = await res.text();
    pages.set(url, html);
    assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, url + " h1");
    assert.ok(
      html.includes(
        `href="/${lang === "ko" ? "en" : "ko"}${path ? "/" + path : ""}"`,
      ),
      url + " language destination",
    );
    assert.match(html, /rel="canonical"/);
    assert.ok(
      !/XXX-XXXX|XX편|XX건|그리니플|한국수자력원자력/.test(html),
      url + " placeholders",
    );
    checks++;
  }
const redirects = {
  "/": "/ko",
  "/about": "/ko/about",
  "/research": "/ko/research",
  "/technology": "/ko/technology",
  "/pilot": "/ko/pilot",
  "/projects": "/ko/projects",
  "/industry": "/ko/industry",
  "/facilities": "/ko/facilities",
  "/education": "/ko/education",
  "/achievements": "/ko/achievements",
  "/contact": "/ko/contact",
  "/news": "/ko/news",
  "/projects/naju": "/ko/projects/naju",
  "/projects/gangjin": "/ko/projects/gangjin",
};
for (const [src, dest] of Object.entries(redirects)) {
  const r = await fetch(base + src, { redirect: "manual" });
  assert.equal(r.status, 308, src);
  assert.equal(new URL(r.headers.get("location"), base).pathname, dest);
  checks++;
}
const coverage = {
  research: [
    "혐기소화",
    "LOHC",
    "금속수소화물",
    "PHA",
    "바이오플라스틱",
    "대사체",
    "LCA",
    "SMR",
  ],
  technology: ["가축분뇨", "디지털 트윈", "도시가스망", "바이오차", "영양염"],
  network: ["AX", "CCU", "혐기소화", "실시간 분석"],
  pilot: ["TRL 1–3", "TRL 4–6", "TRL 7–9", "연속 운전"],
  facilities: ["GC", "반응", "정제", "모니터링"],
  industry: ["기술이전", "스핀오프", "국제", "EPC", "CHP", "IDPP"],
  education: ["인턴십", "RNG", "수소", "탄소중립"],
  achievements: ["논문", "특허", "수상", "미디어"],
  "projects/naju": [
    "MATERIAL FLOW",
    "DATA &amp; ASSESSMENT",
    "공정 안정성",
    "원료 적용성",
    "볏짚",
    "커피박",
    "폐목재",
    "2028",
    "한국전력공사",
    "롯데건설",
    "그리네플",
  ],
  "projects/gangjin": ["왕겨", "볏짚", "배치식", "연속식", "2025", "2026"],
};
for (const [path, terms] of Object.entries(coverage)) {
  const rendered = pages
    .get("/ko/" + path)
    .replace(/<script[\s\S]*?<\/script>/g, "");
  for (const term of terms)
    assert.ok(rendered.includes(term), path + " missing " + term);
  checks++;
}
for (const path of ["/fr", "/ko/missing", "/en/projects/missing"]) {
  assert.equal((await fetch(base + path)).status, 404, path);
  checks++;
}
const links = new Set();
for (const html of pages.values())
  for (const m of html.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)) {
    if (m[1].startsWith("/") && !m[1].startsWith("/_next")) links.add(m[1]);
  }
for (const url of links) {
  if (!pages.has(url)) {
    const r = await fetch(base + url);
    assert.equal(r.status, 200, url);
    checks++;
  }
}
for (const path of ["/sitemap.xml", "/robots.txt"]) {
  assert.equal((await fetch(base + path)).status, 200);
  checks++;
}
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
for (const lang of ["ko", "en"])
  for (const path of paths)
    assert.ok(
      sitemap.includes(`/${lang}${path ? "/" + path : ""}</loc>`),
      "sitemap " + path,
    );
checks++;
const invalid = await fetch(base + "/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: "{}",
});
assert.equal(invalid.status, 400);
checks++;
const report = {
  base,
  languagePages: pages.size,
  checks,
  coverage: Object.keys(coverage),
  note: "PASS. Route, redirect, semantic content preservation, metadata, sitemap and invalid inquiry checks. No real email sent.",
};
console.log(JSON.stringify(report, null, 2));
fs.mkdirSync("../work/restoration-review", { recursive: true });
fs.writeFileSync(
  "../work/restoration-review/http-checks.json",
  JSON.stringify(report, null, 2),
);
