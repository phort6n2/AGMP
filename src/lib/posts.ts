export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  /** Contextual internal link to the most relevant service page. */
  relatedService?: { slug: string; anchor: string };
  /** Body as an array of blocks for simple, safe rendering. */
  body: Block[];
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export const posts: Post[] = [
  {
    slug: "rank-in-google-map-pack-auto-glass",
    title: "How Auto Glass Shops Can Rank in the Google Map Pack",
    excerpt:
      "The Map Pack is where most auto glass jobs are won or lost. Here's a practical playbook to get your shop into the top 3 — and keep it there.",
    category: "Local SEO",
    date: "2026-06-18",
    readingTime: "6 min read",
    relatedService: { slug: "local-seo", anchor: "auto glass Local SEO service" },
    body: [
      {
        type: "p",
        text: "When a driver cracks a windshield, they rarely scroll. They pull up Google, search 'windshield replacement near me,' and call one of the first three shops that appear in the map. That block of three results — the Map Pack — is the single most valuable piece of real estate in local auto glass marketing.",
      },
      {
        type: "p",
        text: "The good news: ranking there is a process, not a mystery. Here's how we approach it for shops.",
      },
      { type: "h2", text: "1. Nail your Google Business Profile" },
      {
        type: "p",
        text: "Your Business Profile is the foundation of Map Pack rankings. Most shops leave easy wins on the table here.",
      },
      {
        type: "ul",
        items: [
          "Choose the most specific primary category (Auto Glass Shop) and add relevant secondary categories.",
          "List every service you offer — chip repair, full replacement, ADAS calibration, mobile service.",
          "Add real photos of your shop, techs, and completed work. Fresh photos signal an active business.",
          "Keep your name, address, and phone identical everywhere online.",
        ],
      },
      { type: "h2", text: "2. Make reviews a system, not an afterthought" },
      {
        type: "p",
        text: "Review quantity, quality, and recency are among the strongest Map Pack ranking factors — and the biggest trust signal for the driver deciding who to call. Build a simple, repeatable way to ask every happy customer for a review, ideally with a text link they can tap right after the job.",
      },
      {
        type: "quote",
        text: "A steady drip of new 5-star reviews will outrank a competitor with more total reviews that stopped collecting them a year ago.",
      },
      { type: "h2", text: "3. Build service-area relevance" },
      {
        type: "p",
        text: "Google wants to show the most relevant shop for each searcher's location. Dedicated pages for the towns and services you cover — especially important for mobile-only shops — tell Google exactly where you're relevant.",
      },
      { type: "h2", text: "4. Tie it back to jobs" },
      {
        type: "p",
        text: "Rankings are a means, not the goal. Track the calls your Map Pack presence generates so you know the work is translating into booked jobs. If you'd like a hand building this system for your shop, that's exactly what our Local SEO service does.",
      },
    ],
  },
  {
    slug: "google-ads-mistakes-auto-glass-shops",
    title: "5 Google Ads Mistakes Draining Your Auto Glass Budget",
    excerpt:
      "Paid search can fill your calendar fast — or quietly burn your budget. These five mistakes are the most common ways auto glass shops waste ad spend.",
    category: "Google Ads",
    date: "2026-05-30",
    readingTime: "5 min read",
    relatedService: { slug: "google-ads", anchor: "auto glass Google Ads management" },
    body: [
      {
        type: "p",
        text: "Google Ads is the fastest way to get the phone ringing — when it's set up right. When it's not, it's the fastest way to watch a budget disappear. Here are the five mistakes we see most often in auto glass accounts.",
      },
      { type: "h2", text: "1. Bidding on broad, low-intent keywords" },
      {
        type: "p",
        text: "Broad match on terms like 'auto glass' will show your ad for 'auto glass manufacturing jobs' and 'how is auto glass made.' Tighten your keywords to high-intent, ready-to-book searches and let negative keywords filter out the noise.",
      },
      { type: "h2", text: "2. Sending clicks to your homepage" },
      {
        type: "p",
        text: "Your homepage asks visitors to make decisions. A landing page built for the ad gives them one obvious action: call now or request a quote. That single change can dramatically lift the number of clicks that turn into jobs.",
      },
      { type: "h2", text: "3. No call tracking" },
      {
        type: "p",
        text: "If you can't see which keywords produce actual phone calls, you're optimizing blind. Call tracking ties every booked job back to the search that created it, so budget flows to what works.",
      },
      {
        type: "ul",
        items: [
          "Track calls and form fills, not just clicks.",
          "Measure cost-per-job, not cost-per-click.",
          "Shift budget toward the campaigns booking real work.",
        ],
      },
      { type: "h2", text: "4. Ignoring geography and hours" },
      {
        type: "p",
        text: "Paying for clicks outside your service area, or at 3am when no one answers, is pure waste. Tight geo-targeting and ad scheduling keep spend where you can actually take the job.",
      },
      { type: "h2", text: "5. Set-and-forget management" },
      {
        type: "p",
        text: "Auto glass demand is seasonal and weather-driven — the first hard freeze turns every chip into a run-across crack, gravel season and temperature swings spike your call volume, then it goes quiet. Your ad budget has to flex with that, not sit flat. If you'd rather focus on the glass than the dashboard, that's what our Google Ads management handles for you.",
      },
    ],
  },
  {
    slug: "auto-glass-website-that-books-jobs",
    title: "What Makes an Auto Glass Website Actually Book Jobs",
    excerpt:
      "A good-looking website isn't the goal — a booked bay is. Here's what separates a site that converts drivers from an expensive online brochure.",
    category: "Web Design",
    date: "2026-05-12",
    readingTime: "5 min read",
    relatedService: { slug: "web-design", anchor: "auto glass web design service" },
    body: [
      {
        type: "p",
        text: "Plenty of auto glass shops have a website. Far fewer have a website that consistently turns visitors into scheduled jobs. The difference isn't how it looks — it's how it's built to convert.",
      },
      { type: "h2", text: "Speed and mobile come first" },
      {
        type: "p",
        text: "The overwhelming majority of glass searches happen on a phone, often from the roadside. If your site takes more than a couple of seconds to load or is awkward to use on mobile, drivers bounce and call the next shop.",
      },
      { type: "h2", text: "Make contacting you effortless" },
      {
        type: "ul",
        items: [
          "A tap-to-call button that's always visible.",
          "A short quote form that asks only what you need to book.",
          "Your service area and hours front and center.",
          "Clear pricing guidance or a 'free quote' promise to reduce hesitation.",
        ],
      },
      { type: "h2", text: "Earn trust in seconds" },
      {
        type: "p",
        text: "Drivers are choosing who to trust with their vehicle. Reviews, guarantees, insurance and OEM details, and photos of real work do the convincing for you.",
      },
      {
        type: "quote",
        text: "Every extra second of load time and every extra click between a driver and your phone number costs you jobs.",
      },
      { type: "h2", text: "Built to grow" },
      {
        type: "p",
        text: "A great site is also the foundation for SEO and ads. When it's structured well from the start, every marketing dollar you spend afterward works harder. That's how we build every site.",
      },
    ],
  },
  {
    slug: "invisible-to-fully-booked-framework",
    title: "From Invisible to Fully Booked: The 4 Stages of Auto Glass Growth",
    excerpt:
      "Every auto glass shop sits somewhere on a four-stage path. Knowing your stage is the first step to reaching the next one.",
    category: "Strategy",
    date: "2026-04-22",
    readingTime: "4 min read",
    relatedService: { slug: "local-seo", anchor: "auto glass Local SEO service" },
    body: [
      {
        type: "p",
        text: "Marketing feels overwhelming when it's a pile of disconnected tactics. It gets simple when you see it as a path. Our Auto Glass Marketing Framework™ breaks growth into four clear stages — and the whole job is moving you to the next one.",
      },
      { type: "h2", text: "Stage 1 — Invisible" },
      {
        type: "p",
        text: "No real online presence. You rely on referrals and repeat customers and hope the phone rings. It works until it doesn't. The goal here is simply to get found.",
      },
      { type: "h2", text: "Stage 2 — Visible" },
      {
        type: "p",
        text: "You show up on Google Maps and search, but the pipeline is inconsistent. Some weeks are packed, others are quiet. The goal is to make lead flow predictable.",
      },
      { type: "h2", text: "Stage 3 — Growing" },
      {
        type: "p",
        text: "Strong, steady call volume and a website that converts. Your calendar is filling itself and you're optimizing for the best, most profitable jobs.",
      },
      { type: "h2", text: "Stage 4 — Dominant" },
      {
        type: "p",
        text: "You're the shop drivers find first across search, maps, ads, and AI. Consistent, high-quality jobs on repeat, and a brand competitors chase.",
      },
      {
        type: "quote",
        text: "You don't have to leap from invisible to dominant overnight. You just have to take the next step.",
      },
      {
        type: "p",
        text: "Want to know which stage your shop is in — and exactly what the next step looks like? That's what our free growth call is for.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postSlugs = posts.map((p) => p.slug);

export function formatDate(input: string) {
  // Accept both "2026-06-18" and full ISO timestamps.
  const d = /^\d{4}-\d{2}-\d{2}$/.test(input)
    ? new Date(`${input}T00:00:00`)
    : new Date(input);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
