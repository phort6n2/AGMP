import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceSlugs } from "@/lib/services-content";
import { getArticles } from "@/lib/blog-source";

// Regenerate so newly auto-published articles enter the sitemap.
export const revalidate = 600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/audit",
    "/framework",
    "/services",
    "/about",
    "/reviews",
    "/blog",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      path === "" ? 1 : path === "/audit" || path === "/framework" ? 0.9 : 0.7,
  }));

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articles = await getArticles();
  const postRoutes = articles.map((post) => {
    const d = new Date(post.date);
    return {
      url: `${base}/blog/${post.slug}`,
      lastModified: Number.isNaN(d.getTime()) ? now : d,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
