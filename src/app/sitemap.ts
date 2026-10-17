import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { localePath, locales } from "@/i18n/config";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${base}${localePath(locale, "/")}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: locale === "tr" ? 1 : 0.9,
      alternates: {
        languages: {
          tr: `${base}/`,
          en: `${base}/en`,
          "x-default": `${base}/`,
        },
      },
    });

    for (const project of projects) {
      const path = `/projeler/${project.slug}`;
      entries.push({
        url: `${base}${localePath(locale, path)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            tr: `${base}${path}`,
            en: `${base}/en${path}`,
            "x-default": `${base}${path}`,
          },
        },
      });
    }
  }

  return entries;
}
