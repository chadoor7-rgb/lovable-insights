import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// دامنه اصلی سایت
const BASE_URL = "https://chadooor.ir";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
          },

          {
            path: "/about",
            changefreq: "monthly",
            priority: "0.7",
          },

          {
            path: "/products",
            changefreq: "weekly",
            priority: "0.9",
          },

          {
            path: "/services",
            changefreq: "weekly",
            priority: "0.9",
          },

          {
            path: "/services/tent-repair",
            changefreq: "monthly",
            priority: "0.8",
          },

          {
            path: "/services/spring-repair",
            changefreq: "monthly",
            priority: "0.8",
          },

          {
            path: "/services/tent-production",
            changefreq: "monthly",
            priority: "0.9",
          },

          {
            path: "/services/canvas-production",
            changefreq: "monthly",
            priority: "0.8",
          },

          {
            path: "/services/tear-repair",
            changefreq: "monthly",
            priority: "0.8",
          },

          {
            path: "/services/amol",
            changefreq: "monthly",
            priority: "0.9",
          },

          {
            path: "/blog",
            changefreq: "weekly",
            priority: "0.8",
          },

          {
            path: "/blog/tent-repair-guide",
            changefreq: "monthly",
            priority: "0.7",
          },

          {
            path: "/blog/canvas-tent",
            changefreq: "monthly",
            priority: "0.7",
          },

          {
            path: "/contact",
            changefreq: "yearly",
            priority: "0.6",
          },
        ];

        const urls = entries.map((entry) =>
          [
            "  <url>",
            `    <loc>${BASE_URL}${entry.path}</loc>`,
            entry.lastmod
              ? `    <lastmod>${entry.lastmod}</lastmod>`
              : null,
            entry.changefreq
              ? `    <changefreq>${entry.changefreq}</changefreq>`
              : null,
            entry.priority
              ? `    <priority>${entry.priority}</priority>`
              : null,
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
        ].join("\n");

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
