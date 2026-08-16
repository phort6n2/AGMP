import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { MyWebAuditLoader } from "@/components/MyWebAuditLoader";
import { AuditConversion } from "@/components/AuditConversion";
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
    default: `${site.name} — More Auto Glass Jobs, Not Clicks`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
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
    title: `${site.name} — More Auto Glass Jobs, Not Clicks`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — More Auto Glass Jobs, Not Clicks`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: "+1-855-712-8500",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-855-712-8500",
    contactType: "sales",
    contactOption: "TollFree",
    areaServed: "US",
    availableLanguage: "English",
  },
  areaServed: "United States",
  priceRange: "$$",
  slogan: site.tagline,
  // Omitted entirely until real profile URLs exist — an empty or placeholder
  // sameAs misidentifies the entity.
  ...(socialProfiles.length > 0 && { sameAs: socialProfiles }),
  knowsAbout: [
    "Auto glass marketing",
    "Local SEO",
    "Google Ads",
    "AI search visibility",
    "Web design",
    "Windshield repair marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
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
        {/* Microsoft Clarity — session recordings & heatmaps */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "y3chtuz8t7");`}
        </Script>
      </body>
    </html>
  );
}
