export type ServiceContent = {
  slug: string;
  name: string;
  icon: string;
  eyebrow: string;
  /** ≤155 chars, front-loaded — used as the SEO meta description. */
  metaDescription: string;
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
    metaDescription:
      "Get your auto glass shop ranking in the Google Map Pack, organic search, and AI answers like ChatGPT. Local SEO built only for glass shops.",
    hero: "Be the first shop drivers find — everywhere they look.",
    heroSub:
      "When someone cracks a windshield, they grab their phone or ask an AI assistant. We make sure your shop owns the Google Map Pack, organic results, AND the AI answers from ChatGPT, Google AI Overviews, Perplexity, and Gemini — so the job is yours before a competitor even shows up.",
    problem: {
      title: "Search moved. Most shops haven't.",
      body: "Drivers no longer just scroll the Map Pack — they ask ChatGPT and read Google's AI Overviews to decide who to call. If your shop isn't showing up in both the classic results AND the AI answers, you're invisible exactly where the next generation of customers is looking. We get you found in both.",
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
        title: "AI & LLM search visibility",
        body: "We optimize your shop to be recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini — structuring your content, entities, and citations the way large language models actually pull from, so you're the shop the AI names.",
      },
      {
        title: "Local + service-area pages",
        body: "Purpose-built pages for every town and service you cover, so you rank for the exact searches drivers are typing.",
      },
      {
        title: "Capture the calibration searches",
        body: "Every windshield with a forward-facing camera needs an ADAS recalibration after replacement — and drivers now search for it by name. We build the pages and profile signals that put you in front of 'windshield calibration near me,' so the shops still subletting that work don't eat your ticket.",
      },
      {
        title: "Land fleet & dealer accounts",
        body: "The steady bread-and-butter isn't just walk-ins — it's fleet contracts, dealer and body-shop wholesale, and municipal accounts that call every week. We build the pages and outreach that put your shop in front of the fleet managers and service writers searching for a glass partner.",
      },
      {
        title: "Review generation system",
        body: "A simple, automated way to earn more 5-star reviews — the single biggest lever for local ranking and trust.",
      },
      {
        title: "Photos that never go stale",
        body: "The real install shots your techs post to your Google profile get synced to your website automatically, every week — fresh proof for drivers, fresh signals for Google, zero work for you.",
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
      "Built to be recommended by ChatGPT & AI Overviews",
      "More calls from high-intent local searches",
      "A steady stream of new 5-star reviews",
    ],
    faqs: [
      {
        q: "My customers all have insurance — does search marketing even matter?",
        a: "It matters more, not less. When a driver files a glass claim, the insurer's script usually steers them to a network shop. The shops that win are the ones the customer already found and decided on before they ever call it in — so they say 'I want your shop' and the insurer has to honor it. Ranking in the Map Pack and AI answers is how you become that name. We also make sure your site tells drivers, in plain English, that they have the right to choose their own shop and that you bill the insurance directly.",
      },
      {
        q: "Can you actually get my shop recommended by ChatGPT?",
        a: "Yes — it's a core part of our Local SEO service. AI assistants like ChatGPT, Google AI Overviews, Perplexity, and Gemini pull from structured content, business entities, reviews, and trusted citations across the web. We build your presence the way those models source their answers, so when a driver asks 'where can I get my windshield replaced near me,' your shop is one they name. It's the same discipline as classic SEO, extended to how AI now recommends local businesses.",
      },
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
    metaDescription:
      "Google Ads for auto glass shops, engineered for phone calls — not clicks. High-intent targeting that fills your calendar with booked jobs.",
    hero: "Put your shop at the top the moment a driver is ready to book.",
    heroSub:
      "Paid search is the fastest way to fill your calendar. We build tightly targeted campaigns engineered for one thing: phone calls from drivers who need glass work now. And we don't just run the ads — we build, host, and continually optimize a dedicated landing page for them to land on, included.",
    problem: {
      title: "Most auto glass shops are lighting ad budget on fire — and can't even see it.",
      body: "Broad keywords, no call tracking, and generic landing pages burn budget on clicks that never book. We do the opposite — surgical targeting, tight negative keyword lists, and conversion-first landing pages so every dollar works toward a job.",
    },
    features: [
      {
        title: "High-intent keyword targeting",
        body: "We bid on the searches that mean business — 'windshield replacement,' 'auto glass near me,' 'chip repair today,' 'cash windshield price' — and separate the cash and out-of-pocket-deductible shoppers from the tire-kickers, because those are the jobs where you set the price and keep the margin.",
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
        body: "Show up only in your service area, during your hours, and weighted toward the zip codes where you can actually route a van without deadheading an hour each way — so your mobile techs stay billable, not stuck in traffic.",
      },
      {
        title: "A dedicated landing page — built, hosted & included",
        body: "Not your homepage, and not a page you have to build. We create a separate, purpose-built page for your ad traffic, host it, and keep tuning it. Your existing website stays exactly as it is.",
      },
      {
        title: "Ongoing optimization — ads and page",
        body: "This isn't a one-time build. We prune wasted spend, test ad copy, and keep reworking the landing page — headlines, offers, form length — based on what's actually booking jobs.",
      },
    ],
    steps: [
      {
        title: "Strategy & setup",
        body: "We map your service area, margins, and goals, then build the campaign structure and tracking around them.",
      },
      {
        title: "Build & host your landing page",
        body: "Before a dollar is spent, we build the page your ad clicks will land on — fast, mobile-first, one-tap calling — and host it. Nothing to install, and no changes to your existing site.",
      },
      {
        title: "Launch high-intent campaigns",
        body: "Ads go live targeting ready-to-book searches with tight geo and negative keyword control.",
      },
      {
        title: "Optimize for calls — every month",
        body: "We watch which keywords, ads, and page versions produce real phone calls, then double down on the winners. Ongoing, not a one-time setup.",
      },
      {
        title: "Scale profitably",
        body: "Once the numbers work, we scale budget so you can book as many jobs as your bays can handle.",
      },
    ],
    outcomes: [
      "Top-of-page visibility for ready-to-book searches",
      "A dedicated landing page — built, hosted, and optimized for you",
      "More qualified phone calls, less wasted spend",
      "Clear cost-per-job you can actually trust",
      "Budget that scales with your capacity",
    ],
    faqs: [
      {
        q: "Do I need a new website for this?",
        a: "No. The landing page is separate from your website and doesn't touch it. We build it, we host it, and it lives at its own address purpose-built to convert ad clicks. Your site keeps doing its job; the landing page does this one. If you'd also like your main website rebuilt, that's our Web Design service — but it isn't required to run ads with us.",
      },
      {
        q: "Is the landing page an extra cost?",
        a: "No — building it, hosting it, and optimizing it over time are all part of Google Ads management. We don't bill it separately, because ads without a page built to convert are how budget gets wasted in the first place.",
      },
      {
        q: "Why not just send ad traffic to my homepage?",
        a: "A homepage is built to inform everyone; a landing page is built to get one specific person to take one specific action. Sending paid clicks to a homepage gives a driver ten things to look at when they only wanted to call you. It also costs you money directly — Google factors landing page experience into Quality Score, so a faster, more relevant page usually means a lower cost per click for the same position.",
      },
      {
        q: "Is this a one-time build or ongoing?",
        a: "Ongoing. The page gets reworked as we learn — headlines, offers, form length, which trust signals earn the call. Campaigns and landing page get optimized together every month, because a change to one affects the other.",
      },
      {
        q: "What happens to the landing page if I cancel?",
        a: "You can keep it. If you stop ads with us but want the page to stay live, we'll keep hosting it for a small monthly fee — no penalty, no renegotiation, and it keeps sending you calls. We'd rather you keep something that works than watch it get switched off to make a point. And your ad account, your data, and your website were always yours to begin with.",
      },
      {
        q: "How much should I budget for ads?",
        a: "It depends on your market and the value of a job in your area. Start with the free audit and we'll recommend an ad budget based on what it actually takes to compete where you are — and we'll never push you to overspend.",
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
    metaDescription:
      "Fast, mobile-first auto glass websites built to convert clicks into booked jobs — with click-to-call, instant quotes, and SEO baked in.",
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
        body: "Reviews, your warranty, insurance direct-billing, OEM vs. aftermarket glass options, in-house ADAS calibration, and safe drive-away time — the proof drivers (and their insurers) need to choose you with confidence.",
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
    name: "Directory Placement",
    icon: "list",
    eyebrow: "Featured Directory Placement",
    metaDescription:
      "Get your auto glass shop featured on Windshield Repair HQ — the consumer directory we operate, used by drivers across all 50 states.",
    hero: "Get featured on the directory we actually operate.",
    heroSub:
      "We run Windshield Repair HQ — a consumer auto glass directory drivers use across all 50 states. We place and promote your shop on it, so you get another channel of real driver traffic. It's also live proof we can do exactly what we sell.",
    problem: {
      title: "Drivers call three shops. Be one of them.",
      body: "Drivers comparison-shop for glass work — and half of them are trying to figure out whether to file a claim or pay cash before they even call. Windshield Repair HQ is the directory we built and run for exactly that moment: purpose-built for auto glass, no clutter, just shops ready to help drivers now. Getting featured puts you in front of them.",
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
        q: "Can I see the directory before I sign up?",
        a: "Please do — that's the whole point. Windshield Repair HQ is live at windshieldrepairhq.com. Search a city, see how it ranks, and see where your shop would stand. It's real, inspectable proof, not a mockup.",
      },
      {
        q: "Can mobile-only shops get featured?",
        a: "Yes. Windshield Repair HQ supports service-area listings, so mobile shops appear across every town they cover.",
      },
      {
        q: "How does this work with your other services?",
        a: "Featured placement is a great add-on to SEO and ads — more places drivers can find you means more booked jobs. We'll help you choose the right mix after your free audit.",
      },
    ],
  },
};

export const serviceSlugs = Object.keys(servicesContent);
