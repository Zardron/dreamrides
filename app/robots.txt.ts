export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://dreamrides-dubai.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
