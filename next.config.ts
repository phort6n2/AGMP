import type { NextConfig } from "next";

// 301 redirects from the current (WordPress) site's URLs to the new structure,
// so existing Google rankings and inbound links don't 404 at launch.
const redirectMap: Record<string, string> = {
  // Service pages (were at the root, now under /services)
  "/local-seo": "/services/local-seo",
  "/google-ads": "/services/google-ads",
  "/web-design": "/services/web-design",
  "/auto-glass-shop-directory": "/services/directory",

  // Lead / legal pages
  "/get-started": "/audit",
  "/ranking-roadmap-auto-glass-kings": "/audit",
  // All lead collection funnels to the audit page
  "/contact": "/audit",
  "/terms-conditions": "/terms",
  "/privacy-policy": "/privacy",

  // Old blog posts -> closest matching new article
  "/blog/auto-glass-ppc-strategies": "/blog/google-ads-mistakes-auto-glass-shops",
  "/blog/google-ads": "/blog/google-ads-mistakes-auto-glass-shops",
  "/blog/effective-advertising-with-google-ads": "/blog/google-ads-mistakes-auto-glass-shops",
  "/blog/targeting-local-customers-with-google-ads": "/blog/google-ads-mistakes-auto-glass-shops",
  "/blog/google-ads-campaign-management-for-auto-glass-businesses": "/blog/google-ads-mistakes-auto-glass-shops",
  "/blog/google-ads-for-auto-glass-business": "/blog/google-ads-mistakes-auto-glass-shops",
  "/blog/the-local-visibility-mistake-everyone-makes": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/local-search": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/rank-your-auto-glass-business": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/rank-your-auto-glass-business-2": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/google-business-profile": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/your-google-business-profile-is-more-important-than-your-website-in-2023": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/business-listing": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/online-presence": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/customer-reviews": "/blog/rank-in-google-map-pack-auto-glass",
  "/blog/your-5-000-website-isn-t-broken-your-operations-are": "/blog/auto-glass-website-that-books-jobs",
  "/blog/how-small-auto-glass-shops-beat-national-chains": "/blog/invisible-to-fully-booked-framework",
  "/blog/while-ford-bleeds-60-000-per-empty-bay-independent-shops-are-building-what-consolidators-can-t-buy": "/blog/invisible-to-fully-booked-framework",
  "/blog/why-most-local-businesses-fail-online-and-what-actually-works": "/blog/invisible-to-fully-booked-framework",
  "/blog/why-generalist-seo-agencies-are-failing-fast": "/blog/invisible-to-fully-booked-framework",
  "/blog/the-9-marketing-methods-that-actually-work-for-auto-glass-shops": "/blog/invisible-to-fully-booked-framework",
  "/blog/auto-glass-repair-business": "/blog/invisible-to-fully-booked-framework",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(redirectMap).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
