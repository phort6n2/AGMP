import { ORG_ID, WEBSITE_ID, FOUNDER_ID } from "@/lib/schema";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { MyWebAuditLoader } from "@/components/MyWebAuditLoader";
import { AuditConversion } from "@/components/AuditConversion";
import { Motion } from "@/components/Motion";
import { ClarityAnalytics } from "@/components/ClarityAnalytics";
import { site, socialProfiles } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Auto Glass Marketing Agency | More Booked Jobs | AGMP",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "auto glass marketing",
    "windshield repair marketing",
    "auto glass SEO",
    "auto glass Google Ads",
    "auto glass shop website",
    "auto glass leads",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | More Auto Glass Jobs, Not Clicks`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | More Auto Glass Jobs, Not Clicks`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: site.name,
      description: site.description,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo-black.png`,
      },
      image: `${site.url}/opengraph-image`,
      email: site.email,
      telephone: "+1-855-712-8500",
      founder: { "@id": FOUNDER_ID },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-855-712-8500",
        contactType: "sales",
        contactOption: "TollFree",
        areaServed: "US",
        availableLanguage: "English",
      },
      areaServed: "United States",
      slogan: site.tagline,
      ...(socialProfiles.length > 0 && { sameAs: socialProfiles }),
      knowsAbout: [
        "Auto glass marketing",
        "Local SEO",
        "Google Ads",
        "AI search visibility",
        "Web design",
        "Windshield repair marketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: site.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: site.owner,
      jobTitle: "Founder",
      url: `${site.url}/about`,
      image: `${site.url}/founder.webp`,
      worksFor: { "@id": ORG_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        {/* Plain <script>, not next/script: JSON-LD must be in the server
            HTML that crawlers fetch, not injected after hydration. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-glass-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <MyWebAuditLoader />
        <AuditConversion />
        {/* Microsoft Clarity — after AuditConversion so attribution tags exist */}
        <ClarityAnalytics />
        <Motion />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
