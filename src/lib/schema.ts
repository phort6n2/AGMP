import { site } from "./site";

/**
 * Stable @ids for the site's structured data, so every page points at the
 * same Organization, WebSite and founder instead of describing a new,
 * unlinked organization each time. The full nodes live in app/layout.tsx.
 */
export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;
export const FOUNDER_ID = `${site.url}/#founder`;

export const orgRef = { "@id": ORG_ID };
export const websiteRef = { "@id": WEBSITE_ID };

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

/** Server-rendered JSON-LD block. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
