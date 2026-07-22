export const site = {
  name: "Auto Glass Marketing Pros",
  shortName: "AGMP",
  domain: "autoglassmarketingpros.com",
  url: "https://autoglassmarketingpros.com",
  tagline: "Get more auto glass jobs. Not clicks. Not empty calls.",
  description:
    "The only marketing agency built exclusively for auto glass repair & replacement shops. We turn your shop from invisible to fully booked with local SEO, Google Ads, and high-converting websites.",
  email: "matt@autoglassmarketingpros.com",
  phone: "(555) 010-2025",
  phoneHref: "tel:+15550102025",
  owner: "Matt Lubbes",
  startingPrice: "$99",
  ctaText: "Book a Free Growth Call",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
};

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
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Resources", href: "/blog" },
];

export const services = [
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Own the Map Pack & AI search",
    icon: "map",
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
    name: "Shop Directory",
    short: "Get found in our driver directory",
    icon: "list",
    tagline: "Extra visibility where drivers are already looking.",
    summary:
      "Get listed in the Auto Glass Marketing Pros shop directory — a discovery channel built to send local drivers straight to your booking line.",
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

export const clientLogos = [
  "Speedy Windshield Repair",
  "Noble Glass",
  "American Auto Glass",
  "A1 Windshield",
  "ClearView Auto Glass",
  "Precision Glass Co.",
  "Summit Windshield",
  "Coastal Auto Glass",
];
