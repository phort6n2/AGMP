"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { services, site } from "@/lib/site";
import { IconMessage } from "./Icons";

const cols = [
  {
    heading: "Services",
    links: services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "The Framework", href: "/framework" },
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Resources", href: "/blog" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Free Marketing Audit", href: "/audit" },
      { label: "Our Services", href: "/services" },
      { label: "Shop Directory", href: "/services/directory" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  // The /audit page uses its own minimal footer (no nav) to stay focused
  // on a single conversion path.
  if (pathname === "/audit" || pathname.startsWith("/audit/")) return null;

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex" aria-label={site.name}>
              <Image
                src="/logo-white.png"
                alt={site.name}
                width={500}
                height={200}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              The only marketing agency built exclusively for auto glass repair
              &amp; replacement shops. We keep your bays full with paying jobs —
              not clicks.
            </p>
            <a
              href={site.smsHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-200 hover:text-white"
            >
              <IconMessage className="h-4 w-4 text-glass-300" />
              Text us — {site.phone}
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-ink-300">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-300">
            <Link href="/privacy" className="hover:text-ink-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink-300">
              Terms
            </Link>
            <a
              href="https://www.google.com/partners/agency?id=9428693803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 transition-colors hover:border-glass-300/40 hover:text-ink-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Google Partner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
