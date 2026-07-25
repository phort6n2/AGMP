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
    shops: "300+",
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
        desc: "Own the Map Pack & AI search",
      },
      {
        label: "Google Ads",
        href: "/services/google-ads",
        desc: "Calls from ready-to-book drivers",
      },
      {
        label: "Web Design",
        href: "/services/web-design",
        desc: "Sites that turn clicks into jobs",
      },
      {
        label: "Shop Directory",
        href: "/services/directory",
        desc: "Get found in our driver directory",
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
    short: "Own the Map Pack & AI search",
    icon: "map",
    badge: "Includes AI visibility",
    tagline: "Show up first when a cracked windshield needs you.",
    summary:
      "We get your shop ranking in the Google Map Pack, organic results, and AI answers like ChatGPT — so the next driver with a chip finds you before your competitors.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Calls from ready-to-book drivers",
    icon: "target",
    tagline: "Pay for booked jobs, not busy work.",
    summary:
      "Tightly targeted paid search campaigns that put your shop at the top the moment someone searches 'windshield replacement near me' — engineered for phone calls, not clicks.",
  },
  {
    slug: "web-design",
    name: "Web Design",
    short: "Sites that turn clicks into jobs",
    icon: "layout",
    tagline: "A website that actually books the appointment.",
    summary:
      "Fast, mobile-first websites built to convert. Click-to-call, instant quote forms, and trust signals that turn a curious visitor into a scheduled job.",
  },
  {
    slug: "directory",
    name: "Directory Placement",
    short: "Featured on Windshield Repair HQ",
    icon: "list",
    tagline: "Get featured on the directory we operate.",
    summary:
      "We place and promote your shop on Windshield Repair HQ — the consumer auto glass directory we operate, used by drivers across all 50 states. Real, inspectable proof, and another channel sending drivers straight to your booking line.",
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
