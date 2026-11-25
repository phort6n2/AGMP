export const site = {
  name: "Auto Glass Marketing Pros",
  shortName: "AGMP",
  domain: "autoglassmarketingpros.com",
  url: "https://autoglassmarketingpros.com",
  tagline: "Get more auto glass jobs. Not clicks. Not empty calls.",
  description:
    "The only marketing agency built exclusively for auto glass repair & replacement shops. We turn your shop from invisible to fully booked with local SEO, Google Ads, and high-converting websites.",
  email: "matt@autoglassmarketingpros.com",
  phone: "(855) 712-8500",
  // We answer texts fast — outreach CTAs point to SMS, not a phone call.
  smsHref:
    "sms:+18557128500?&body=Hi%20Matt%2C%20I%27d%20like%20help%20getting%20more%20auto%20glass%20jobs.",
  owner: "Matt Lubbes",
  ctaText: "Get Your Free Audit",
  // The consumer directory AGMP operates — our real, verifiable proof asset.
  directory: {
    name: "Windshield Repair HQ",
    url: "https://windshieldrepairhq.com",
    reach: "all 50 states",
  },
  // Real profile URLs only — these feed schema.org `sameAs`, which search
  // engines and LLMs use to resolve the AGMP entity. Placeholder or generic
  // links (e.g. "https://facebook.com") assert the wrong identity, so empty
  // values are filtered out instead. Fill each in as the profile goes live.
  social: {
    facebook: "https://www.facebook.com/autoglassmarketingpros",
    twitter: "https://x.com/autoglassppc",
    youtube: "https://www.youtube.com/@autoglassmarketingpros",
    poyst: "https://www.poyst.com/business/auto-glass-marketing-pros",
  },
};

/** Real social profile URLs, in a form safe to emit as schema.org `sameAs`. */
export const socialProfiles = Object.values(site.social).filter(Boolean);

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Local SEO",
        href: "/services/local-seo",
        desc: "Google Maps, Search and AI answers",
      },
      {
        label: "Google Ads",
        href: "/services/google-ads",
        desc: "Search ads in your own account",
      },
      {
        label: "Web Design",
        href: "/services/web-design",
        desc: "A site built from your material",
      },
      {
        label: "Shop Directory",
        href: "/services/directory",
        desc: "Partner listing on Windshield Repair HQ",
      },
      {
        label: "Your Shop Portal",
        href: "/platform",
        desc: "Every lead and report on your phone",
      },
    ],
  },
  { label: "Framework", href: "/framework" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Resources", href: "/blog" },
  // "Free Audit" is intentionally absent — the navbar renders it as a CTA
  // button beside the nav, so listing it here duplicated the link.
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  tagline: string;
  summary: string;
  badge?: string;
};

export const services: Service[] = [
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Google Maps, Search and AI answers",
    icon: "map",
    badge: "Includes AI visibility",
    tagline: "The work behind getting found on Maps, Search and AI answers.",
    summary: "We build your shop's business record across the directories that matter, publish articles to your site, earn links and post to your Google Business Profile on a schedule. You see where you rank on Google Maps from a grid around your shop each week, and your monthly report shows how often AI assistants name your shop.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Search ads in your own account",
    icon: "target",
    tagline: "Built in your own Google Ads account, checked daily.",
    summary: "We build your campaigns in your own Google Ads account to one standard: calls count only after 60 seconds, settings that waste money are switched off at launch, and the account is checked every day. Calls to your tracking number are recorded and coached, and we send your booked jobs back to Google so it learns which clicks became paying work.",
  },
  {
    slug: "web-design",
    name: "Web Design",
    short: "A site built from your material",
    icon: "layout",
    tagline: "Your photos, warranty and reviews, on your own domain.",
    summary: "We build and host a site with a page for each service you sell and each town you serve, made from your own photos, your warranty and your real Google reviews. Every page has click-to-call and a quote form that takes a damage photo, and every lead lands in your shop portal.",
  },
  {
    slug: "directory",
    name: "Directory Placement",
    short: "Partner listing on Windshield Repair HQ",
    icon: "list",
    tagline: "Included with Local SEO: top of your city page.",
    summary: "Local SEO clients get a Partner listing at the top of their city page on Windshield Repair HQ, the auto glass directory we operate, covering all 50 states, with their logo, Google rating, quote form and a link to their site. Quote requests go straight to the shop and are never resold, and we keep the listing up to date from the shop record.",
  },
];

export const stages = [
  {
    n: "01",
    name: "Invisible",
    desc: "No online presence. You live and die by referrals and hope the phone rings.",
  },
  {
    n: "02",
    name: "Visible",
    desc: "You show up on Google Maps, but the pipeline is inconsistent and unpredictable.",
  },
  {
    n: "03",
    name: "Growing",
    desc: "Strong call volume, optimized conversions, and a calendar that fills itself.",
  },
  {
    n: "04",
    name: "Dominant",
    desc: "You're the shop drivers find first. Consistent, high-quality jobs on repeat.",
  },
];

// Types of auto glass shops AGMP is built to serve — honest descriptors,
// not client names. Swap for real client logos once available.
export const shopTypes = [
  "Mobile windshield repair",
  "Single-location shops",
  "Multi-location chains",
  "Same-day replacement",
  "ADAS calibration",
  "Insurance & cash jobs",
  "Chip & crack repair",
  "Fleet glass services",
];
