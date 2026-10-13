import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://localhost:3100";
const paths = [
  "",
  "/about",
  "/research",
  "/projects",
  "/projects/naju",
  "/projects/gangjin",
  "/news",
  "/contact",
];
let count = 0;
for (const lang of ["ko", "en"]) {
  for (const path of paths) {
    const response = await fetch(`${base}/${lang}${path}`);
    assert.equal(response.status, 200, `${lang}${path}`);
    const html = await response.text();
    assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`));
    assert.ok(
      html.includes(`href="/${lang === "ko" ? "en" : "ko"}${path}"`),
      "matching language destination",
    );
    assert.match(html, /rel="canonical"/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, "one page heading");
    assert.ok(
      !/XXX-XXXX|XX편|XX건|WEBSITE PLATFORM LAUNCH|그리니플|한국수자력원자력/.test(
        html,
      ),
      "no obsolete public placeholders",
    );
    count++;
  }
}
const redirects = {
  "/": "/ko",
  "/about": "/ko/about",
  "/research": "/ko/research",
  "/technology": "/ko/research",
  "/pilot": "/ko/projects/gangjin",
  "/projects": "/ko/projects",
  "/industry": "/ko/about",
  "/facilities": "/ko/research",
  "/education": "/ko/contact",
  "/achievements": "/ko/projects",
  "/contact": "/ko/contact",
};
for (const [old, destination] of Object.entries(redirects)) {
  const response = await fetch(base + old, { redirect: "manual" });
  assert.equal(response.status, 308, old);
  assert.equal(
    new URL(response.headers.get("location"), base).pathname,
    destination,
  );
  count++;
}
for (const path of ["/fr", "/ko/missing", "/en/projects/missing"]) {
  assert.equal((await fetch(base + path)).status, 404, path);
  count++;
}
for (const path of [
  "/logo.png",
  "/kentech-sub-visual.jpg",
  "/sitemap.xml",
  "/robots.txt",
]) {
  assert.equal((await fetch(base + path)).status, 200, path);
  count++;
}
const invalid = await fetch(base + "/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: "{}",
});
assert.equal(
  invalid.status,
  400,
  "invalid enquiry rejected before email delivery",
);
count++;
console.log(
  `PASS: ${count} HTTP, language, metadata, redirect, asset and validation checks. No email sent.`,
);
