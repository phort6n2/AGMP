// GENERATED from the approved copy (claim-checked against what the platform
// actually does). Edit freely, but every claim must stay true: no guarantees,
// no timeframes, no prices, no supplier names, "not auto glass" never "bad lead".
import type { Feature, Rhythm } from "@/components/ServiceSections";
import type { MockupKind } from "@/components/Mockups";
import type { AlwaysOnCopy } from "@/components/AlwaysOn";
import type { AiVisibilityCopy } from "@/components/AiVisibility";
import type { DirectoryProofCopy } from "@/components/DirectoryProof";

export type ServiceContent = {
  slug: string;
  name: string;
  icon: string;
  eyebrow: string;
  /** <=155 chars, front-loaded: used as the SEO meta description. */
  metaDescription: string;
  hero: string;
  heroSub: string;
  outcomes: string[];
  problem: { title: string; body: string };
  /** The 3-4 features each page leads with: what it is, why it matters. */
  topFeatures: Feature[];
  /** "What you see every day, week and month." */
  rhythm: Rhythm;
  /** Illustrative mockups beside the rhythm section (screenshot slots). */
  mockups: MockupKind[];
  /** "Everything included" grid. */
  included: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  alwaysOn?: AlwaysOnCopy;
  aiVisibility?: AiVisibilityCopy;
  proof?: DirectoryProofCopy;
};

export const servicesContent: Record<string, ServiceContent> = {
  "local-seo": {
    "slug": "local-seo",
    "name": "Local SEO",
    "icon": "map",
    "eyebrow": "Local SEO",
    "metaDescription": "Local SEO for auto glass shops: Google Maps, search results and AI answers. A rank map every week and a monthly report you can check.",
    "hero": "Local SEO for auto glass shops, with proof you can check",
    "heroSub": "We work on the three places drivers look for a glass shop: Google Maps, the regular search results, and AI answers like ChatGPT and Google AI Overviews. You get a rank map every week and a report every month, so you don't have to take our word for it.",
    "outcomes": [
      "A map of where you rank, every week",
      "Traffic figures from your own Google accounts",
      "A monthly count of AI answers naming you",
      "Every article listed within a day of publishing"
    ],
    "problem": {
      "title": "Drivers pick a glass shop before they call",
      "body": "A cracked windshield gets searched on a phone: Google Maps, the regular results, and now AI answers too. The shops that show up get the call, and the rest never hear about the job. Without a way to see where you stand, you pay for SEO on faith."
    },
    "topFeatures": [
      {
        "title": "A rank map, every week",
        "what": "Once your Google Business Profile is in place, we check where you show up on Google Maps for 4 searches every week, from 100 points on a grid around your shop, and show each search as a map in your shop portal.",
        "why": "You see which parts of town find you and which don't, and you check it yourself instead of waiting on a call from us."
      },
      {
        "title": "One business record, used everywhere",
        "what": "We audit your Google Business Profile, lock one record of your name, address, real phone number, hours and categories, and build your directory listings and the business details coded into your site from that one record.",
        "why": "Google and AI assistants find the same facts about your shop in your listings, your site and your Business Profile."
      },
      {
        "title": "AI answers, tracked monthly",
        "what": "Each month we measure how often ChatGPT and Google AI Overviews name your shop, side by side with competitor shops, and put the numbers in your monthly report.",
        "why": "You know whether drivers who ask AI hear your name or a competitor's, as a number instead of a guess."
      },
      {
        "title": "Partner listing on Windshield Repair HQ",
        "what": "SEO clients get a Partner listing on Windshield Repair HQ, the auto glass directory we operate, with a link to your site.",
        "why": "Drivers browsing the directory follow the link to your site or send a quote request from your listing, and quote requests from your listing go to your shop only, never resold."
      }
    ],
    "rhythm": {
      "intro": "Here is what you see, and when.",
      "daily": [
        "New articles appear in your Work done feed within a day of going live.",
        "New leads reach you by email and phone alert, text alerts available."
      ],
      "weekly": [
        "A fresh rank map for each of your 4 searches.",
        "Each map scan is logged in your Work done feed."
      ],
      "monthly": [
        "Your report, built on the 1st and checked by a person before it's sent.",
        "Articles published, links earned, and how many sites linked to you.",
        "What we did and what's next, in plain words."
      ]
    },
    "mockups": [
      "rankGrid",
      "report"
    ],
    "included": [
      {
        "title": "A starting snapshot",
        "body": "Before we change anything, we record your grid ranks, Search Console figures, review count and rating, and existing listings, so you have a before to compare against."
      },
      {
        "title": "Traffic from your own accounts",
        "body": "How often you showed up on Google, how often people clicked, where you sat in the results, the searches and pages that brought them in, and visitors who came from AI assistants, all from your own Search Console and Analytics once they're linked at setup."
      },
      {
        "title": "A Work done feed",
        "body": "Every article is listed within a day of going live, along with map scans, city pages written and site updates."
      },
      {
        "title": "Articles on your site",
        "body": "Articles that answer what drivers ask about glass work, published to your site and counted in your monthly report."
      },
      {
        "title": "Business Profile and social posts",
        "body": "Posts go out to your Google Business Profile and your social pages on a schedule."
      },
      {
        "title": "Reddit and Quora, watched",
        "body": "We monitor threads where drivers ask about auto glass and add helpful mentions of your shop where they fit."
      },
      {
        "title": "Links from other websites",
        "body": "We get relevant websites to link to yours, and your monthly report shows the links earned and how many sites they came from."
      },
      {
        "title": "Pages for every service and town",
        "body": "When we host your site, you get a page for each service you sell and each town you serve, and a town page stays out of Google until it has real local detail."
      },
      {
        "title": "The monthly report",
        "body": "Google's own figures, what we did and what's next, in your shop portal and in your inbox once a person has reviewed it."
      }
    ],
    "steps": [
      {
        "title": "Connect your accounts",
        "body": "You give us access to your Google Business Profile. We link your Search Console and Analytics to your shop portal during setup."
      },
      {
        "title": "Take the starting snapshot",
        "body": "We record where you stand today: grid ranks, search traffic, reviews and listings. Every later map and report gets compared against it."
      },
      {
        "title": "Lock your business record",
        "body": "We audit your Business Profile and set your details right. Your directory listings and the business details coded into your site are built from that one record."
      },
      {
        "title": "Publish, build, report",
        "body": "Articles, posts, links and mentions start going out. You get the rank map every week and the report every month."
      }
    ],
    "faqs": [
      {
        "q": "My customers all have insurance. Does search matter?",
        "a": "Yes. Insured drivers still have to pick a shop, and the ones who look on their phone first find whoever shows up. A driver who already has your name can ask for you by name. When we host your site, its insurance wording follows your state's or province's rules."
      },
      {
        "q": "Can you get my shop recommended by ChatGPT?",
        "a": "No one controls what ChatGPT or Google AI Overviews say, so we won't promise a mention. What we do is give those answers something accurate to find: one consistent business record, your business details coded into your site, listings in the directories that matter, articles, and helpful mentions on Reddit and Quora. Then we track how often ChatGPT and Google AI Overviews name your shop against competitor shops, and it's in your monthly report."
      },
      {
        "q": "How long until I see results?",
        "a": "We don't give a timeframe, because Google decides and every market is different. What you see along the way: a starting snapshot before we change anything, a fresh rank map every week to hold against it, and a Work done feed that lists each article within a day of going live. At any point you know what's been done and where you stand."
      },
      {
        "q": "Do you guarantee #1 rankings?",
        "a": "No. Google decides rankings, and no one can promise you a spot. What you get is the work, done on a schedule, and the means to check it: a weekly rank map, traffic from your own Search Console and Analytics, and a monthly report a person reviews before it's sent."
      },
      {
        "q": "What if I only do mobile service?",
        "a": "That works. Your business record is set up for the area you serve, and nothing we build claims a storefront you don't have. When we host your site, you get a mobile-service page and a page for each town you cover."
      },
      {
        "q": "Do you need my Google Business Profile?",
        "a": "Yes. The weekly rank map runs off it, and the audit is where your categories, services, hours and attributes get set right and any duplicate listings get found. If you don't have one yet, tell us before we start."
      },
      {
        "q": "What do I need to give you?",
        "a": "Access to your Google Business Profile, plus your Search Console and Analytics so we can link them to your shop portal. Tell us the services you sell, the towns you cover and any work you don't do. After that, tell us before you change your name, address, phone or hours, so your record and listings stay matched."
      },
      {
        "q": "How will I know it's working?",
        "a": "Hold the weekly rank map up against your starting snapshot, and watch clicks, top searches and visitors from AI assistants in your traffic report. The monthly report adds articles published, links earned and how often ChatGPT and Google AI Overviews name your shop. Its What's next section says what we're working on from there."
      },
      {
        "q": "Do I need you to host my website?",
        "a": "No. We publish articles to the site you have and add your business details to its code there. If we host your site, you also get a page for every service you sell and every town you serve."
      },
      {
        "q": "Is there a contract, and what do I keep if I leave?",
        "a": "No long-term contract. It's month-to-month, so the work has to earn the next month. If you leave, you keep it all: the articles on your site, your listings and profiles, and the links built to your shop."
      }
    ],
    "alwaysOn": {
      "eyebrow": "Always-on work",
      "title": "Your SEO runs on a schedule you can see",
      "body": "This is the work that keeps going after setup. Articles, map scans and links show up in your shop portal and your monthly report.",
      "cards": [
        {
          "cadence": "Foundation",
          "title": "One record, every listing",
          "body": "We lock one record of your name, address, real phone number, hours and categories. Your Business Profile, directory listings, connected profiles and the business details coded into your site all come from it."
        },
        {
          "cadence": "Ongoing",
          "title": "Links from relevant sites",
          "body": "We get relevant websites to link to yours. Your monthly report shows links earned and how many sites they came from."
        },
        {
          "cadence": "Monitored",
          "title": "Reddit and Quora, watched",
          "body": "Drivers ask Reddit and Quora which glass shop to trust. We watch those threads and add helpful mentions of your shop where they fit."
        },
        {
          "cadence": "On schedule",
          "title": "Your profiles, kept active",
          "body": "Posts go out to your Google Business Profile and social pages on a schedule. A driver checking you out sees a shop that's open and working."
        },
        {
          "cadence": "Monthly",
          "title": "AI answers, measured",
          "body": "We measure how often ChatGPT and Google AI Overviews name your shop, against competitor shops. The numbers are in your monthly report."
        },
        {
          "cadence": "As published",
          "title": "Driver questions, answered",
          "body": "Articles that answer what drivers ask about glass work are published to your site. Each one shows up in your Work done feed within a day."
        }
      ],
      "footnote": "What you check is the result: the rank map, the traffic and the Work done feed."
    },
    "aiVisibility": {
      "title": "When drivers ask AI which shop to call",
      "body": "Drivers now ask ChatGPT and read Google's AI Overviews before they call a shop. No one controls what those answers say, so we do the work they draw on and track how often your shop gets named.",
      "points": [
        "How often ChatGPT and Google AI Overviews name you, monthly",
        "Measured side by side with competitor shops",
        "Visitors from AI assistants shown in your traffic report"
      ],
      "surfaces": [
        {
          "name": "ChatGPT",
          "desc": "Where drivers ask which shop to call"
        },
        {
          "name": "Google AI Overviews",
          "desc": "The AI answer above Google's search results"
        }
      ]
    }
  },
  "google-ads": {
    "slug": "google-ads",
    "name": "Google Ads",
    "icon": "target",
    "eyebrow": "Google Ads",
    "metaDescription": "Google Ads for auto glass shops, built in your own account. Calls to your tracking number recorded and coached. Landing page included.",
    "hero": "Google Ads for auto glass shops, built in your own account",
    "heroSub": "We set up your ads so Google only counts real calls, quote requests and booked jobs, not hang-ups or wrong numbers. You get a landing page built for the click, calls to your tracking number recorded and coached, and every new lead in your shop portal.",
    "outcomes": [
      "Ads aimed at people physically in your area",
      "A landing page we build and host",
      "Calls to your tracking number recorded and coached",
      "A monthly report using Google's own figures"
    ],
    "problem": {
      "title": "Ad money leaks through settings nobody switched off",
      "body": "Leave the wrong settings on and Google shows your ads on other websites, on other search sites, and to people who are only \"interested in\" your town. Let it count a ten-second hang-up as a lead and it goes looking for more hang-ups. The account looks busy and your bays stay quiet."
    },
    "topFeatures": [
      {
        "title": "Set up to count real work",
        "what": "We set up your account so Google only counts four things as a lead: a quote form, a call from the ad, a call from your website and a booked job, with calls counted only after 60 seconds.",
        "why": "Google learns from real glass enquiries, not hang-ups and wrong numbers."
      },
      {
        "title": "Calls recorded, scored and coached",
        "what": "Every new client gets a tracking number, and calls to it are recorded, transcribed and scored out of 100 with a short note: praise first, then at most one thing to try next time.",
        "why": "You hear how your phone gets answered while you're out in the bay, without sitting through hours of recordings."
      },
      {
        "title": "Google learns from your booked jobs",
        "what": "We send your booked jobs and what they were worth back to Google, and give it two lists, your past enquiries and your past customers, scrambled for privacy and refreshed daily.",
        "why": "Google learns which clicks turned into paying work, looks for more drivers like your customers, and stops paying to win back people who already booked."
      },
      {
        "title": "Stop paying for the wrong searches",
        "what": "When you report a lead as not auto glass, we trace it to the search that caused it and stop your ads showing for that search, at most five blocks per lead and fifteen a day, with anything unclear sent to a person.",
        "why": "Your report does the work, and the limits keep one odd lead from blocking searches that bring in real glass jobs."
      }
    ],
    "rhythm": {
      "intro": "Here is what we check and when. The checks come to us, and the leads and the report come to you.",
      "daily": [
        "We check spend, leads counted, disapproved ads, budget limits and call recording.",
        "Each morning we look for budgets that aren't spending.",
        "New leads reach you by email and phone alert, text alerts available."
      ],
      "weekly": [
        "We read your ads for anything your shop doesn't offer or promise.",
        "We check the settings, the extra lines under your ads and bidding."
      ],
      "monthly": [
        "Your report is built on the 1st, using Google's own figures.",
        "It shows jobs marked booked, what they were worth, what we did, what's next.",
        "A person reviews it before it's emailed. It's in your portal from the 1st."
      ]
    },
    "mockups": [
      "coaching",
      "report"
    ],
    "included": [
      {
        "title": "Daily account checks",
        "body": "Every day we check for spend that drops off or spikes, leads that stop being counted, disapproved ads, budget limits, account changes, the wrong phone number in an ad and calls not recording or connecting, and the results come to us so we can act on them."
      },
      {
        "title": "Money-wasting settings off",
        "body": "At launch we switch off ads on other websites and search sites, ads for people only \"interested in\" your area, and Google's automatic changes to your account, then check them every week."
      },
      {
        "title": "Ads checked against your shop",
        "body": "Every week we read your ads for anything that contradicts your shop: services you don't offer, mobile service, warranty, deductible wording your state doesn't allow and response-time promises."
      },
      {
        "title": "Bidding raised in small steps",
        "body": "Google's bidding starts simple and moves up as your account earns data, from clicks to leads to a target cost, with a week or two between changes."
      },
      {
        "title": "Better matching on quote forms",
        "body": "Quote form leads also send Google a scrambled copy of the customer's email and phone, so it ties each lead to the right ad click."
      },
      {
        "title": "A number per campaign",
        "body": "Each campaign gets its own tracking number, and texts and damage photos sent to it land on the lead in your portal."
      },
      {
        "title": "Microsoft and Meta visits recognised",
        "body": "If you run Microsoft or Meta ads, visits from them are recognised and can get their own number, so those leads are counted apart from Google's."
      },
      {
        "title": "Your landing page, built and hosted",
        "body": "We build the page your ads point to, with a quote form that takes a damage photo and a call bar that stays on screen on phones, host it, and check that your ads point at it."
      },
      {
        "title": "Shop portal and monthly report",
        "body": "Every new lead lands in your shop portal with email and phone alerts, and your monthly report sits there too, built from Google's own figures."
      }
    ],
    "steps": [
      {
        "title": "Free audit",
        "body": "We look at your market and any account you run now. You get a recommended ad budget for your area."
      },
      {
        "title": "Build in your account",
        "body": "In your own Google Ads account we set up the campaigns, what counts as a lead, your tracking numbers and your customer lists, with the money-wasting settings off."
      },
      {
        "title": "Build your landing page",
        "body": "We build and host the page your ads point to, using your photos, your real Google reviews and your service area."
      },
      {
        "title": "Launch, check, report",
        "body": "Ads go live and the daily and weekly checks start. Your report is built on the 1st of every month."
      }
    ],
    "faqs": [
      {
        "q": "Do I need a new website?",
        "a": "No. Your ads point to a separate landing page that we build and host, and your website stays as it is. If you want your main site rebuilt too, that's our Web Design service, and you don't need it to run ads with us."
      },
      {
        "q": "Is the landing page included?",
        "a": "Yes. Building it and hosting it are part of Google Ads management."
      },
      {
        "q": "Why not send ads to my homepage?",
        "a": "Your homepage talks to everyone: drivers, fleets, job seekers. The landing page talks to one driver who needs glass work and gives them two things to do: call you, or send a quote request with a photo of the damage. It carries your tracking number, so the calls it brings in are recorded and counted."
      },
      {
        "q": "What happens to the landing page if I cancel?",
        "a": "The landing page stays on our platform and doesn't go with you. If you want it to stay live after the ads stop, we keep hosting it for a small monthly fee. Your campaigns stay in your own Google Ads account."
      },
      {
        "q": "How much should I budget for ads?",
        "a": "It depends on your market, so we don't put a number on this page. The free audit looks at your area and recommends a budget. One rule we hold to: your daily budget is at least twice the target cost we set for a lead, so Google has room to learn."
      },
      {
        "q": "Whose account do the ads run in?",
        "a": "Your own Google Ads account. We build the campaigns there, so the history stays in it. The figures in your monthly report are Google's own, so they match what you see when you log in."
      },
      {
        "q": "How will I know it's working?",
        "a": "Every new lead shows up in your shop portal, with forms, calls and texts in one list. You mark the jobs you booked and what they were worth. The monthly report puts Google's own figures next to those booked jobs, and you can play your recorded calls and read their scores."
      },
      {
        "q": "Do you record my calls?",
        "a": "Calls to your tracking number are recorded and transcribed. Each one gets a score and a short coaching note, so you hear how the phone was answered and get one thing to try next time. Booked calls are never scored under 80, and calls that only ask a question aren't graded as sales calls."
      },
      {
        "q": "What do I have to do?",
        "a": "Answer the phone. When a lead books, mark it booked in your portal with what the job was worth, because that value is what we send back to Google. If a lead is not auto glass, report it and we stop your ads showing for the search behind it. Report leads outside your service area too, and we review those by hand."
      },
      {
        "q": "Is there a long contract?",
        "a": "No. Google Ads management is month-to-month."
      }
    ]
  },
  "web-design": {
    "slug": "web-design",
    "name": "Web Design",
    "icon": "layout",
    "eyebrow": "Web Design",
    "metaDescription": "Web design for auto glass shops: sites built from your real photos, reviews and warranty, a quote form on every page, every lead in your portal.",
    "hero": "Web design for auto glass shops, built for calls and quote requests",
    "heroSub": "We build your site from your own photos, warranty, Google reviews, colors and logo, with click-to-call and a quote form on every page. Every lead lands in your shop portal with email and phone alerts, and text alerts are available.",
    "outcomes": [
      "A site built from your real shop",
      "A quote form that takes a damage photo",
      "A page for every service and town",
      "Every lead in your shop portal, with alerts"
    ],
    "problem": {
      "title": "Drivers with cracked glass want answers, then your number",
      "body": "They're on a phone and want three answers: do you fix their glass, do you work in their town, and how do they reach you. A site that buries the phone number or reads like any shop in the country sends them back to Google to call someone else. Your site answers all three on every page, in your shop's own words."
    },
    "topFeatures": [
      {
        "title": "Built from your real shop",
        "what": "We build the site from your own photos, your warranty in your words, your real Google reviews (refreshed weekly, never edited), and your colors and logo.",
        "why": "Drivers see your actual shop, and you never have to answer for a claim you didn't make, because a section with nothing true to say disappears."
      },
      {
        "title": "A quote form on every page",
        "what": "Every page carries a quote form that takes a damage photo and accepts Canadian postal codes, and the same form can go on your current site if you keep it.",
        "why": "You see the damage before you call back, so you know what you're quoting before you pick up the phone."
      },
      {
        "title": "Pages for every service and town",
        "what": "You get a page for each service you sell and each town you serve, with your business, hours, services, areas served and FAQ coded in so Google reads them correctly.",
        "why": "Each page is about one service or one town, the way drivers search, and a town page with too little local detail stays out of Google until it has some."
      },
      {
        "title": "Every lead in your portal",
        "what": "Every quote request from the site lands in your shop portal with email and phone alerts, and we can forward it into the customer system you already use (your CRM).",
        "why": "The vehicle, ZIP or postal code and damage photo are on the lead before you call back, in the same list as the rest of your leads."
      }
    ],
    "rhythm": {
      "intro": "Once your site is live, this is what you see and what we keep doing.",
      "daily": [
        "New quote requests land in your shop portal with email and phone alerts.",
        "Each lead shows the vehicle, ZIP or postal code, and the damage photo.",
        "Mark a job booked from the alert email and add what it was worth."
      ],
      "weekly": [
        "The best of your Google reviews on the site are refreshed.",
        "Your portal shows the week's sales total from the jobs you marked."
      ],
      "monthly": [
        "Your monthly report is in the portal on the 1st.",
        "A person reviews it, then emails it to you.",
        "It shows jobs marked booked, what they were worth, and what's next."
      ]
    },
    "mockups": [
      "quoteForm",
      "alert"
    ],
    "included": [
      {
        "title": "Click-to-call and a call bar",
        "body": "Your number is a tap away on every page, and on phones a call bar stays on screen as the driver scrolls."
      },
      {
        "title": "Old addresses mapped, page by page",
        "body": "When you move from an old site, we go through it page by page and keep, redirect or replace every old address, so rankings and ad links keep working."
      },
      {
        "title": "Insurance wording for your state",
        "body": "What your site says about insurance follows your state's rules, with its own versions for Canada's public-insurer provinces."
      },
      {
        "title": "Insurance claims page available",
        "body": "A glass insurance claims page is available for your site, including public-insurer versions for Canadian shops, such as ICBC."
      },
      {
        "title": "Honest pages for mobile-only shops",
        "body": "If you work without a storefront, your site never claims one, and the mobile-service page appears only for shops that offer mobile."
      },
      {
        "title": "Pages that don't jump around",
        "body": "Space is reserved and fonts are matched, so the page doesn't shift under a driver's thumb while it loads."
      },
      {
        "title": "One platform, every site improves",
        "body": "Your site runs on the same platform as every shop site we build, so each improvement we make to it reaches yours."
      },
      {
        "title": "VIN check flags camera calibration",
        "body": "When a lead has a VIN, it's decoded and the lead flags whether camera calibration is likely, so you can quote the job right."
      }
    ],
    "steps": [
      {
        "title": "We gather what's yours",
        "body": "We start from your current site, your Google reviews and your logo, and confirm the services you sell and the towns you serve."
      },
      {
        "title": "We build your pages",
        "body": "A page for each service and town, your warranty in your words, your colors, and a quote form on every page. Any section with nothing true to say is left out."
      },
      {
        "title": "We map your old addresses",
        "body": "We go through your old site page by page and map every address, so rankings and ad links keep working when your domain moves over."
      },
      {
        "title": "Leads reach your portal",
        "body": "Quote requests land in your shop portal with email and phone alerts, and text alerts are available. If you use a CRM, we set up forwarding into it."
      }
    ],
    "faqs": [
      {
        "q": "Can you redesign my existing site?",
        "a": "Yes. We rebuild it from your own material: the photos, warranty, colors and logo already on your site, plus your real Google reviews. Every old address is mapped page by page, kept, redirected or given its new page, so rankings and ad links keep working."
      },
      {
        "q": "Does the website include SEO?",
        "a": "It includes the structure Google needs: a page for every service and town you serve, with your business, hours, services, areas served and FAQ coded in for Google to read. Ongoing work on your rankings, like directory listings, links and articles, is our Local SEO service."
      },
      {
        "q": "Do I have to write anything?",
        "a": "No. We build the pages from what you already have: your current site, your photos, your Google reviews and your warranty as you wrote it. We confirm the facts with you, like the services you sell and the towns you serve, because nothing goes on the site that isn't true."
      },
      {
        "q": "What if I don't have good photos?",
        "a": "We use the photos from your current site. Stock photos stay only where you already published them yourself, so the site shows your shop and your work."
      },
      {
        "q": "Can I keep my current site and just use your form?",
        "a": "Yes. The quote form can be embedded on your existing website. Leads from it land in your shop portal with the same alerts, damage photo included."
      },
      {
        "q": "Will my site say things that aren't true?",
        "a": "No. We don't invent years in business, certifications, hours, timing promises or insurer-approval claims. Your reviews are shown as written, never edited. If a section has nothing true to say, it doesn't appear."
      },
      {
        "q": "Does it work for mobile-only shops?",
        "a": "Yes. If you don't have a storefront, the site never claims one. You get a mobile-service page and a page for each town you cover, and the quote form takes the customer's ZIP or postal code and a photo of the damage."
      },
      {
        "q": "How do leads reach me?",
        "a": "Every quote request lands in your shop portal, which works in your phone's browser and goes on your home screen in one step. You get email and phone alerts, and text alerts are available. The email alert has buttons to call, text back, and mark whether the job booked."
      },
      {
        "q": "What about insurance and my state's rules?",
        "a": "The insurance wording on your site follows your state, and Canada's public-insurer provinces get their own versions. An insurance claims page is available for your site too. We never add a claim that an insurer has approved your shop."
      },
      {
        "q": "Does the site run on my own domain?",
        "a": "Yes. We build and host it on your shop's domain. Until your domain is pointed at it, it runs on a subdomain."
      }
    ]
  },
  "directory": {
    "slug": "directory",
    "name": "Directory Placement",
    "icon": "list",
    "eyebrow": "Included with Local SEO",
    "metaDescription": "Windshield Repair HQ Partner listing for auto glass shops, included with Local SEO: top of your city page, no ads, quote requests never resold.",
    "hero": "Your Windshield Repair HQ Partner listing, included with Local SEO",
    "heroSub": "We operate Windshield Repair HQ, a consumer auto glass directory with city pages in all 50 states. Every Local SEO client gets a Partner listing at the top of their city page, and we keep it up to date.",
    "outcomes": [
      "Top of your city page, with a Partner badge",
      "No ads on your shop's page",
      "Quote requests go to you, never resold",
      "Listing kept up to date by us"
    ],
    "problem": {
      "title": "Old listings send drivers to old details",
      "body": "A listing that gets set up once and left alone goes stale. Change your hours, photos or services and the old listing keeps showing the old ones to drivers. We run Windshield Repair HQ, so your Partner listing is kept matched to your shop record with us."
    },
    "topFeatures": [
      {
        "title": "Top of your city page",
        "what": "Your Partner listing sits at the top of your city page on Windshield Repair HQ, marked with a Partner badge.",
        "why": "A driver looking for glass work in your city sees your shop first, not buried in a list."
      },
      {
        "title": "No ads on your page",
        "what": "Your shop's page on the directory carries no ads.",
        "why": "A driver reading about your shop isn't shown a competitor's ad next to your name."
      },
      {
        "title": "Your details and quote form",
        "what": "Your listing shows your logo, your description, your Google rating, a link to your website and a quote form.",
        "why": "A driver can ask for a quote right there, and that request goes straight to your shop and is never resold."
      },
      {
        "title": "Kept up to date for you",
        "what": "When your details, photos or services change in your shop record with us, your listing is updated to match.",
        "why": "You tell us once, and drivers don't keep seeing old information about your shop."
      }
    ],
    "rhythm": {
      "intro": "Your listing is set up once and then kept current, so there is little for you to do.",
      "daily": [
        "Your Partner listing sits at the top of your city page.",
        "Quote requests from your listing go straight to your shop, never resold."
      ],
      "weekly": [
        "Change your details, photos or services and we update your listing to match.",
        "Search your city on Windshield Repair HQ any time to check your listing."
      ],
      "monthly": [
        "Check your listing against your current hours and services.",
        "Tell us anything that changed, and we update it."
      ]
    },
    "mockups": [],
    "included": [
      {
        "title": "Listed on your city page",
        "body": "Windshield Repair HQ covers all 50 states, and your listing goes on the city page for your shop."
      },
      {
        "title": "A directory we operate",
        "body": "We run Windshield Repair HQ ourselves, so the team that set up your listing is the team that fixes it."
      },
      {
        "title": "Built from your shop record",
        "body": "We set up the listing from the details, photos and services already in your shop record with us."
      },
      {
        "title": "Live and easy to check",
        "body": "The directory is public, so you can search your city and see your listing the way drivers see it."
      },
      {
        "title": "Part of Local SEO",
        "body": "Local SEO clients get a Partner listing with a link to their website."
      },
      {
        "title": "Your real Google rating",
        "body": "The rating on your listing is your own Google rating, not a score we make up."
      }
    ],
    "steps": [
      {
        "title": "We set it up",
        "body": "We build your Partner listing on your city page from your shop record with us."
      },
      {
        "title": "You check it",
        "body": "Search your city on Windshield Repair HQ and see your listing the way drivers see it. Tell us if anything is off."
      },
      {
        "title": "Drivers reach you",
        "body": "Drivers on your city page follow the link to your website or send a quote request. Requests go straight to your shop only."
      },
      {
        "title": "We keep it current",
        "body": "When your details, photos or services change, we update your listing to match."
      }
    ],
    "faqs": [
      {
        "q": "Do you resell my leads to other shops?",
        "a": "Never. A quote request from your listing goes to your shop and no one else. That is Windshield Repair HQ's promise, and we run the directory."
      },
      {
        "q": "Can I see the directory before I sign up?",
        "a": "Yes. Windshield Repair HQ is live at windshieldrepairhq.com. Search your city and look at how Partner listings appear at the top of the page. What you see is what your listing gets."
      },
      {
        "q": "Do directory quote requests show up in my shop portal?",
        "a": "No. Windshield Repair HQ sends quote requests from your listing straight to your shop, not through the portal. Watch for them alongside your portal leads. They go to you only and are never resold."
      },
      {
        "q": "Can I get a Partner listing without Local SEO?",
        "a": "No. The Partner listing comes with Local SEO. Start with the free audit and we'll show you where your shop stands today."
      },
      {
        "q": "How does this work with your other services?",
        "a": "Local SEO clients get a Partner listing with a link to their website. Your listing is built from the same shop record we use for your other services, so your details match everywhere we manage them."
      },
      {
        "q": "What does the Partner badge mean?",
        "a": "It marks your shop as a Windshield Repair HQ Partner. Partner listings sit at the top of their city page and carry the badge, so drivers can see which shops are Partners and the placement is labelled."
      },
      {
        "q": "What shows on my listing?",
        "a": "Your logo, a description of your shop, your Google rating, a link to your website and a quote form. Quote requests from that form go to your shop only."
      },
      {
        "q": "Who keeps my listing up to date?",
        "a": "We do. Your listing is kept in step with your shop record with us, so when your details, photos or services change, the listing is updated to match."
      },
      {
        "q": "Are there ads on my shop's page?",
        "a": "No. Your shop's page on Windshield Repair HQ carries no ads, so a driver reading about you isn't shown another shop's ad."
      }
    ],
    "proof": {
      "eyebrow": "Proof you can check",
      "title": "We run the directory. Go search your city.",
      "body": "Windshield Repair HQ is the consumer auto glass directory we operate, with city pages across all 50 states. It is live right now, so you can check what this page says before you talk to us. Search your city and see where a Partner listing sits.",
      "points": [
        "Live now at windshieldrepairhq.com",
        "City pages in all 50 states",
        "Partner listings at the top, with a badge",
        "Quote requests go to one shop, never resold"
      ]
    }
  },
};

export const serviceSlugs = Object.keys(servicesContent);
