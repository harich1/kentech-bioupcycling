export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: "/bixpo-2026/forum.pdf",
      "Cache-Control": "no-store",
    },
  });
}
