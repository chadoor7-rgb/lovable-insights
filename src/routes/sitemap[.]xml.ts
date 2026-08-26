import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://chadooor.ir";

const SERVICE_SLUGS = [
  "tent-repair",
  "spring-repair",
  "tent-production",
  "canvas-production",
  "tear-repair",
  "amol",
];

interface SitemapEntry {
  path: string;
  changefreq?: string;
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: async () => {

        const staticPages: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
          },
          {
            path: "/services",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/about",
            changefreq: "monthly",
            priority: "0.7",
          },
          {
            path: "/contact",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/blog",
            changefreq: "weekly",
            priority: "0.8",
          },
        ];


        // ساخت خودکار صفحات خدمات
        const servicePages: SitemapEntry[] = SERVICE_SLUGS.map(
          (slug) => ({
            path: `/services/${slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })
        );


        const entries = [
          ...staticPages,
          ...servicePages,
        ];


        const urls = entries
          .map(
            (entry) => `
<url>
  <loc>${BASE_URL}${entry.path}</loc>
  ${
    entry.lastmod
      ? `<lastmod>${entry.lastmod}</lastmod>`
      : ""
  }
  ${
    entry.changefreq
      ? `<changefreq>${entry.changefreq}</changefreq>`
      : ""
  }
  ${
    entry.priority
      ? `<priority>${entry.priority}</priority>`
      : ""
  }
</url>`
          )
          .join("");


        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;


        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });

      },
    },
  },
});
