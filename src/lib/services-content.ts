export type ServiceContent = {
  slug: string;
  name: string;
  icon: string;
  eyebrow: string;
  hero: string;
  heroSub: string;
  problem: { title: string; body: string };
  features: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const servicesContent: Record<string, ServiceContent> = {
  "local-seo": {
    slug: "local-seo",
    name: "Local SEO",
    icon: "map",
    eyebrow: "Local SEO",
    hero: "Be the first shop drivers find — everywhere they look.",
    heroSub:
      "When someone cracks a windshield, they grab their phone and search. We make sure your shop owns the Google Map Pack, organic results, and AI answers — so the job is yours before a competitor even shows up.",
    problem: {
      title: "If you're not in the top 3, you're basically invisible.",
      body: "Most drivers never scroll past the Map Pack. If your shop isn't ranking there — and increasingly, inside AI answers like ChatGPT and Google's AI Overviews — you're handing those jobs to whoever is. Local SEO is how you claim that top spot and keep it.",
    },
    features: [
      {
        title: "Google Business Profile optimization",
        body: "We turn your profile into a lead machine — categories, services, photos, posts, and the review velocity Google rewards with higher rankings.",
      },
      {
        title: "Map Pack domination",
        body: "Targeted local optimization so your shop appears in the coveted 3-pack for 'windshield repair near me' across your entire service area.",
      },
      {
        title: "Local + service-area pages",
        body: "Purpose-built pages for every town and service you cover, so you rank for the exact searches drivers are typing.",
      },
      {
        title: "AI search visibility",
        body: "We structure your content and citations so AI assistants recommend your shop when drivers ask them where to get glass work done.",
      },
      {
        title: "Review generation system",
        body: "A simple, automated way to earn more 5-star reviews — the single biggest lever for local ranking and trust.",
      },
      {
        title: "Citations & consistency",
        body: "Accurate name, address, and phone across every directory that matters, so Google trusts your shop is the real deal.",
      },
    ],
    steps: [
      {
        title: "Audit & map your market",
        body: "We analyze your rankings, competitors, and the exact searches that drive glass jobs in your area.",
      },
      {
        title: "Optimize your foundation",
        body: "Profile, website, and local pages get tuned to signal relevance and authority to Google.",
      },
      {
        title: "Build authority & reviews",
        body: "Ongoing content, citations, and review generation compound your rankings month over month.",
      },
      {
        title: "Track jobs, not just ranks",
        body: "We tie rankings back to calls and booked jobs — and keep pushing on what's working.",
      },
    ],
    outcomes: [
      "Top-3 Map Pack visibility in your service area",
      "More calls from high-intent local searches",
      "Visibility inside AI search answers",
      "A steady stream of new 5-star reviews",
    ],
    faqs: [
      {
        q: "How long until I see results?",
        a: "Local SEO compounds, but many shops see meaningful movement in the Map Pack and a lift in calls within the first 30–90 days. We focus on quick foundational wins first, then build lasting authority.",
      },
      {
        q: "Do you guarantee #1 rankings?",
        a: "No honest agency can guarantee a specific rank — Google's algorithm decides. What we guarantee is a proven process and transparent reporting tied to the metric that matters: booked jobs.",
      },
      {
        q: "What if I only do mobile service?",
        a: "Perfect — service-area optimization is exactly how we get mobile-only shops ranking across every town they cover, even without a storefront address.",
      },
    ],
  },
  "google-ads": {
    slug: "google-ads",
    name: "Google Ads",
    icon: "target",
    eyebrow: "Google Ads",
    hero: "Put your shop at the top the moment a driver is ready to book.",
    heroSub:
      "Paid search is the fastest way to fill your calendar. We build tightly targeted campaigns that show up for high-intent searches and are engineered for one thing: phone calls from drivers who need glass work now.",
    problem: {
      title: "Most auto glass ad spend is quietly wasted.",
      body: "Broad keywords, no call tracking, and generic landing pages burn budget on clicks that never book. We do the opposite — surgical targeting, tight negative keyword lists, and conversion-first landing pages so every dollar works toward a job.",
    },
    features: [
      {
        title: "High-intent keyword targeting",
        body: "We bid on the searches that mean business — 'windshield replacement,' 'auto glass near me,' 'chip repair today' — and filter out the tire-kickers.",
      },
      {
        title: "Call-focused campaigns",
        body: "Call extensions, call-only ads, and click-to-call landing pages so the easiest action is dialing your shop.",
      },
      {
        title: "Conversion tracking that's real",
        body: "We track calls and form fills to the keyword level, so you see exactly which spend turns into booked jobs.",
      },
      {
        title: "Geo & schedule targeting",
        body: "Show up only in your service area, during your hours, where and when you can actually take the job.",
      },
      {
        title: "Landing pages built to book",
        body: "Fast, mobile-first pages with trust signals and instant quote forms — not your homepage, a page built to convert the ad click.",
      },
      {
        title: "Ongoing optimization",
        body: "We prune wasted spend, test ad copy, and shift budget to the campaigns booking the most jobs.",
      },
    ],
    steps: [
      {
        title: "Strategy & setup",
        body: "We map your service area, margins, and goals, then build the campaign structure and tracking around them.",
      },
      {
        title: "Launch high-intent campaigns",
        body: "Ads go live targeting ready-to-book searches with tight geo and negative keyword control.",
      },
      {
        title: "Optimize for calls",
        body: "We watch which keywords and ads produce real phone calls and double down on the winners.",
      },
      {
        title: "Scale profitably",
        body: "Once the numbers work, we scale budget so you can book as many jobs as your bays can handle.",
      },
    ],
    outcomes: [
      "Top-of-page visibility for ready-to-book searches",
      "More qualified phone calls, less wasted spend",
      "Clear cost-per-job you can actually trust",
      "Budget that scales with your capacity",
    ],
    faqs: [
      {
        q: "How much should I budget for ads?",
        a: "It depends on your market and the value of a job in your area. On your free growth call we'll recommend an ad budget based on what it actually takes to compete where you are — and we'll never push you to overspend.",
      },
      {
        q: "How fast will the phone ring?",
        a: "Google Ads is the fastest channel we offer — many shops start getting calls within days of launch once campaigns are approved and live.",
      },
      {
        q: "Who owns the ad account?",
        a: "You do, always. We build in your account so your data and history stay with you. No hostage situations.",
      },
    ],
  },
  "web-design": {
    slug: "web-design",
    name: "Web Design",
    icon: "layout",
    eyebrow: "Web Design",
    hero: "A website that actually books the appointment.",
    heroSub:
      "Your website is your hardest-working salesperson — if it's built right. We design fast, mobile-first sites for auto glass shops that turn a curious click into a scheduled job.",
    problem: {
      title: "A pretty website that doesn't convert is just an expensive brochure.",
      body: "Most shop websites are slow, hard to use on a phone, and bury the phone number. Drivers bounce and call the next shop. We build for the opposite outcome: instant clarity, one-tap calling, and quote forms that make booking effortless.",
    },
    features: [
      {
        title: "Conversion-first design",
        body: "Every page guides the visitor toward one thing: contacting your shop. Click-to-call, sticky buttons, and quote forms front and center.",
      },
      {
        title: "Blazing-fast & mobile-first",
        body: "Most glass searches happen on a phone. Your site loads instantly and looks flawless on every screen — which Google rewards too.",
      },
      {
        title: "Built-in SEO foundation",
        body: "Clean structure, service and location pages, and schema markup so your new site is ready to rank from day one.",
      },
      {
        title: "Trust signals that close",
        body: "Reviews, guarantees, insurance/OEM info, and service areas — the proof drivers need to choose you with confidence.",
      },
      {
        title: "Instant quote & booking forms",
        body: "Simple forms that capture the vehicle and glass details you need, so calls come in ready to schedule.",
      },
      {
        title: "Easy to update & own",
        body: "You get a site that's yours, easy to maintain, and ready to grow as we add SEO and ads on top.",
      },
    ],
    steps: [
      {
        title: "Discovery & plan",
        body: "We learn your services, service area, and what makes your shop the right call, then map the site around it.",
      },
      {
        title: "Design & build",
        body: "We design a clean, on-brand site engineered for speed and conversions — not a template dump.",
      },
      {
        title: "Launch & connect tracking",
        body: "We go live with call and form tracking wired in so you can see the site producing jobs.",
      },
      {
        title: "Optimize & grow",
        body: "Your site becomes the hub for SEO and ads, continually tuned to book more of the traffic it earns.",
      },
    ],
    outcomes: [
      "A site that turns visitors into phone calls",
      "Lightning-fast load times on mobile",
      "SEO-ready structure from launch",
      "Full ownership of a site you can grow",
    ],
    faqs: [
      {
        q: "Do I own the website?",
        a: "Yes. We build you a site you fully own. No holding your web presence hostage — that's not how we operate.",
      },
      {
        q: "Can you redesign my existing site?",
        a: "Absolutely. We'll audit what you have, keep what's working, and rebuild the rest around conversions and speed.",
      },
      {
        q: "Does the website include SEO?",
        a: "Every site ships with a solid on-page SEO foundation. For ongoing ranking growth, we pair it with our Local SEO service.",
      },
    ],
  },
  directory: {
    slug: "directory",
    name: "Shop Directory",
    icon: "list",
    eyebrow: "Shop Directory",
    hero: "Get found in the directory built for auto glass drivers.",
    heroSub:
      "The Auto Glass Marketing Pros directory is an extra discovery channel that sends local drivers straight to your booking line — more visibility, more shots at the job, with zero extra effort from you.",
    problem: {
      title: "More visibility means more chances to win the job.",
      body: "Drivers comparison-shop for glass work across Google, maps, and directories. Every quality listing you appear in is another door to your shop. Our directory is purpose-built for auto glass — no clutter, just shops ready to help drivers now.",
    },
    features: [
      {
        title: "A dedicated shop profile",
        body: "Your services, service area, hours, and reviews in a clean listing built to convert a browsing driver into a caller.",
      },
      {
        title: "Direct-to-you contact",
        body: "Click-to-call and quote requests route straight to your shop. We connect the driver, you book the job.",
      },
      {
        title: "Built for auto glass only",
        body: "No plumbers, no dentists. A focused directory drivers can trust to find real glass specialists.",
      },
      {
        title: "SEO-boosting citation",
        body: "A consistent, authoritative listing that reinforces your local search presence at the same time.",
      },
      {
        title: "Service-area coverage",
        body: "Get listed everywhere you work — ideal for mobile shops covering multiple towns.",
      },
      {
        title: "Simple, low-cost visibility",
        body: "An affordable way to add another lead channel on top of your search and ads presence.",
      },
    ],
    steps: [
      {
        title: "Claim your listing",
        body: "We set up and optimize your profile with everything a driver needs to choose you.",
      },
      {
        title: "Get discovered",
        body: "Drivers browsing the directory in your area find your shop and reach out directly.",
      },
      {
        title: "Book the job",
        body: "Calls and quote requests come straight to you — no middleman, no lead resale.",
      },
    ],
    outcomes: [
      "An extra channel of local visibility",
      "Direct calls, no shared or resold leads",
      "A stronger local SEO citation profile",
      "Simple, affordable coverage of your area",
    ],
    faqs: [
      {
        q: "Do you resell my leads to other shops?",
        a: "Never. Every inquiry from your listing goes directly to you. We're not in the lead-reselling business — we're in the keep-your-shop-busy business.",
      },
      {
        q: "Can mobile-only shops get listed?",
        a: "Yes. The directory supports service-area listings so mobile shops appear across every town they cover.",
      },
      {
        q: "How does this work with your other services?",
        a: "The directory is a great add-on to SEO and ads — more places drivers can find you means more booked jobs. We'll help you choose the right mix on your growth call.",
      },
    ],
  },
};

export const serviceSlugs = Object.keys(servicesContent);
