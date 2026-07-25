/* -------------------------------------------------------------------
 * The Auto Glass Marketing Framework™ — content model.
 *
 * The framework has two axes:
 *   1. STAGES  — where a shop is today (Invisible → Dominant). Diagnostic.
 *   2. PILLARS — the engine that moves a shop to the next stage.
 *
 * Copy is deliberately auto-glass specific (NAGS, TPA steering, ADAS
 * calibration, safe drive-away time). Generic marketing language is what
 * makes shop owners tune out — specificity is the whole differentiator.
 * ------------------------------------------------------------------- */

export type FrameworkStage = {
  n: string;
  name: string;
  headline: string;
  /** One-liner used in compact/summary contexts. */
  desc: string;
  /** How an owner recognizes they're here. Self-diagnosis drives conversion. */
  symptoms: string[];
  /** The single thing actually blocking them. */
  bottleneck: string;
  /** What we do at this stage. */
  moves: string[];
  /** How progress is judged — jobs, not vanity metrics. */
  scoreboard: string[];
  /** Accent for the stage visuals. */
  accent: "amber" | "glass" | "signal";
};

export const frameworkStages: FrameworkStage[] = [
  {
    n: "01",
    name: "Invisible",
    headline: "Google doesn't know your shop exists",
    desc: "No online presence. You live and die by referrals and hope the phone rings.",
    symptoms: [
      "You don't appear in the Map Pack for “windshield replacement near me”",
      "Referrals and repeat customers are essentially the whole business",
      "Customers a mile away say “I didn't know you were here”",
      "Quiet Mondays with no idea why",
    ],
    bottleneck:
      "Google has no confident record of your shop as a local auto glass business. Without a verified profile, consistent listings, and review signal, you can't rank — no matter how good your techs are.",
    moves: [
      "Claim and fully build out your Google Business Profile — services, service area, hours, real photos of your bays and techs",
      "Fix NAP consistency across directories so your name, address and phone match everywhere",
      "Install a systematic review ask so the first 10 reviews actually arrive",
      "Build real service pages — chip repair, replacement, ADAS calibration — instead of one thin “services” page",
    ],
    scoreboard: [
      "Map Pack impressions",
      "Calls directly from your Google profile",
      "First-page presence for your core terms",
    ],
    accent: "amber",
  },
  {
    n: "02",
    name: "Visible",
    headline: "You show up — but not where the clicks are",
    desc: "You show up on Google Maps, but the pipeline is inconsistent and unpredictable.",
    symptoms: [
      "You rank sometimes, but rarely in the top 3 of the Map Pack",
      "Call volume swings hard week to week",
      "Mostly price shoppers and cash chip jobs — few replacements",
      "You're getting found, but losing the comparison",
    ],
    bottleneck:
      "Ranking 4th–10th is close to invisible: the top 3 take the overwhelming majority of Map Pack clicks. And the calls you do get leak — slow answers, no text option, and no clear insurance answer send drivers to the next shop.",
    moves: [
      "Drive review velocity and respond to every review — the strongest lever on local prominence",
      "Build location and job-type pages so you're relevant for more than one term",
      "Make the site convert on a phone: fast load, tap-to-text, and an obvious “we bill your insurance” answer",
      "Fix speed-to-lead — auto glass is urgent, and the first shop to respond usually wins the job",
    ],
    scoreboard: [
      "Top-3 Map Pack rate for money terms",
      "Call answer and response rate",
      "Booked-job rate per inquiry",
    ],
    accent: "glass",
  },
  {
    n: "03",
    name: "Growing",
    headline: "The calls are steady — now fix the job mix",
    desc: "Strong call volume, optimized conversions, and a calendar that fills itself.",
    symptoms: [
      "The calendar is mostly full, but margin feels thin",
      "Too many $60 chip repairs, not enough replacements and calibrations",
      "You're ready for more volume than referrals can supply",
      "You want better jobs, not just more jobs",
    ],
    bottleneck:
      "Mix, not volume. A calendar full of low-ticket repairs caps revenue. The money is in replacement plus ADAS calibration — and those jobs are won on high-intent search, where you have to show up and be chosen deliberately.",
    moves: [
      "Run Google Ads on high-intent replacement and calibration terms, not broad “auto glass” traffic",
      "Aggressive negative keywords to stop paying for DIY and tire-kicker clicks",
      "Message insurance direct-bill and calibration capability clearly — most drivers assume you can't",
      "Open fleet and commercial channels for predictable, repeatable volume",
      "Get cited by AI assistants, where a growing share of “which shop should I call” questions now land",
    ],
    scoreboard: [
      "Cost per booked job",
      "Job mix — repair vs. replacement vs. calibration",
      "Average ticket",
    ],
    accent: "glass",
  },
  {
    n: "04",
    name: "Dominant",
    headline: "You're the shop drivers find first",
    desc: "You're the shop drivers find first. Consistent, high-quality jobs on repeat.",
    symptoms: [
      "You're the default answer in your market",
      "Competitors bid on your shop's name",
      "Referrals now come from strangers who found you online",
      "The question shifts from “more jobs” to “protect this and expand”",
    ],
    bottleneck:
      "Defense and expansion. Position is an asset that decays if you stop compounding — and the national chains have budget. The work becomes widening the moat and taking the next market.",
    moves: [
      "Compound the review moat so no local competitor can catch up",
      "Own the informational content drivers and AI assistants both cite",
      "Defend your brand terms against chains bidding on your name",
      "Expand the radius, add a second location, or enter the next market",
    ],
    scoreboard: [
      "Share of local search voice",
      "Branded search volume",
      "AI assistant mention rate",
    ],
    accent: "signal",
  },
];

/* -------------------------------------------------------------------
 * The four pillars — the engine that moves a shop between stages.
 * Ordered as the customer actually experiences it, and each maps to a
 * revenue outcome rather than a marketing activity.
 * ------------------------------------------------------------------- */

export type Pillar = {
  n: string;
  title: string;
  question: string;
  body: string;
  levers: string[];
  icon: "search" | "star" | "phone" | "chart";
};

export const frameworkPillars: Pillar[] = [
  {
    n: "01",
    title: "Get Found",
    question: "Can a driver with a cracked windshield find you at all?",
    body: "The moment a rock hits, the search happens on a phone, at the roadside or in a driveway. If you're not in the Map Pack — and increasingly, in the AI answer — that job was never yours to lose.",
    levers: [
      "Google Business Profile built for glass",
      "Map Pack ranking for money terms",
      "Service and location pages",
      "AI assistant visibility",
    ],
    icon: "search",
  },
  {
    n: "02",
    title: "Get Chosen",
    question: "Once they find you, why would they pick you over the chain?",
    body: "Drivers compare three shops in about ninety seconds. Reviews, a site that loads fast, and a straight answer about insurance decide it — long before anyone talks about price.",
    levers: [
      "Review volume, velocity and responses",
      "Insurance direct-bill made obvious",
      "ADAS calibration capability stated up front",
      "A site that converts on a phone",
    ],
    icon: "star",
  },
  {
    n: "03",
    title: "Get Booked",
    question: "Does the job actually make it onto your calendar?",
    body: "Auto glass is urgent and unforgiving. A missed call at 4:47pm is a job at another shop by 4:52. Speed to lead is where most shops quietly lose the most revenue.",
    levers: [
      "Speed-to-lead on calls and texts",
      "Tap-to-text for drivers who won't call",
      "Missed-call capture",
      "Booking flow with no friction",
    ],
    icon: "phone",
  },
  {
    n: "04",
    title: "Get Paid Well",
    question: "Are these jobs worth doing?",
    body: "A full calendar of chip repairs isn't growth. The framework deliberately steers mix toward replacement, calibration, and fleet work — so the same marketing spend returns a bigger ticket.",
    levers: [
      "Replacement and calibration targeting",
      "Fleet and commercial channels",
      "Negative keywords that kill low-value clicks",
      "Reporting measured in booked jobs",
    ],
    icon: "chart",
  },
];

/* -------------------------------------------------------------------
 * Where auto glass jobs actually leak. Each is a specific, recognizable
 * failure an owner can self-diagnose — which is what makes the audit the
 * natural next step.
 * ------------------------------------------------------------------- */

export const leaks = [
  {
    stat: "Top 3",
    title: "Not in the Map Pack top 3",
    body: "The top three results take the overwhelming majority of clicks. Ranking 7th is functionally invisible at the moment a driver needs glass.",
  },
  {
    stat: "90 sec",
    title: "Thin or stale reviews",
    body: "Drivers compare a few shops in about a minute and a half. A shop with 12 old reviews loses to one with 180 recent ones — before price is ever discussed.",
  },
  {
    stat: "5 min",
    title: "Slow or missed response",
    body: "Glass damage is urgent. If nobody answers the call or the text, the driver simply calls the next shop on the list. That job is gone.",
  },
  {
    stat: "TPA",
    title: "Steered away by the insurer",
    body: "Third-party administrators route claims to network chains. Drivers rarely know they have the right to choose your shop — unless you tell them.",
  },
  {
    stat: "ADAS",
    title: "Calibration capability unclear",
    body: "Owners of newer vehicles assume an independent can't recalibrate their safety systems, so they don't even call. Saying it plainly wins those tickets.",
  },
  {
    stat: "$0",
    title: "Insurance answer buried",
    body: "If a driver can't tell in seconds that you bill insurance directly, they assume the job is out of pocket and go somewhere that says so.",
  },
];

/* -------------------------------------------------------------------
 * First 90 days — what implementation actually looks like.
 * ------------------------------------------------------------------- */

export const timeline = [
  {
    window: "Days 1–30",
    title: "Foundation and fast wins",
    body: "Audit, then fix what's leaking now. Profile rebuilt, listings corrected, review system installed, tracking in place so every call is attributed from day one.",
    outcomes: [
      "Google Business Profile fully built",
      "Listings and NAP corrected",
      "Review engine running",
      "Call and text tracking live",
    ],
  },
  {
    window: "Days 31–60",
    title: "Momentum",
    body: "Rankings start to move and conversion work compounds. Service and location pages go live, site speed and mobile booking get fixed, and paid picks up high-intent demand.",
    outcomes: [
      "Service and location pages published",
      "Mobile conversion fixed",
      "High-intent ads live if it fits",
      "Review velocity climbing",
    ],
  },
  {
    window: "Days 61–90",
    title: "Compounding",
    body: "The system starts feeding itself. Rankings hold, reviews accumulate, and the work shifts from fixing to steering — pushing mix toward higher-ticket jobs.",
    outcomes: [
      "Top-3 presence on core terms",
      "Predictable weekly job flow",
      "Mix shifting to replacement and calibration",
      "Reporting in booked jobs",
    ],
  },
];

/* Questions shop owners actually ask — also the FAQPage structured data. */
export const frameworkFaqs = [
  {
    q: "What is the Auto Glass Marketing Framework?",
    a: "It's a four-stage system for growing an auto glass shop: Invisible, Visible, Growing, and Dominant. Every shop sits at one of those stages, and each stage has a different bottleneck. The framework identifies which stage you're in and applies the specific work that moves you to the next one — measured in booked jobs, not clicks or impressions.",
  },
  {
    q: "How do I know which stage my shop is in?",
    a: "The fastest way is the free audit, which checks your Map Pack position, review profile, website conversion, and AI visibility, then places you on the path. Broadly: if you don't appear in the Map Pack you're Invisible; if you appear but not in the top 3 you're Visible; if calls are steady but margin is thin you're Growing; if you're the default shop in your market you're Dominant.",
  },
  {
    q: "How long does it take to move up a stage?",
    a: "Most shops see meaningful movement inside 90 days, with early wins in the first 30 — usually from profile and review work, which moves fastest. Moving from Invisible to Visible is typically quicker than Growing to Dominant, since later stages compete against shops that are already doing the work.",
  },
  {
    q: "Why is this specific to auto glass instead of general local marketing?",
    a: "Because the failure points are specific to glass. TPA steering routes insurance claims to network chains, ADAS calibration changes both the ticket size and the customer's confidence in an independent shop, and the urgency of glass damage makes speed-to-lead decisive in a way it isn't for most trades. A generalist framework misses all three.",
  },
  {
    q: "Do I have to buy every service to use the framework?",
    a: "No. The framework determines what your shop actually needs right now. A shop at the Invisible stage usually shouldn't be running ads yet — the foundation has to exist first. Doing the right work in the right order is the point, and it's why we'd rather tell you to wait on a service than sell it early.",
  },
];
