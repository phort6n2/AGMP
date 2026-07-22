import Link from "next/link";
import { services, site } from "@/lib/site";
import { Logo } from "./Logo";
import { IconPhone } from "./Icons";

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
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Resources", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Book a Growth Call", href: "/contact" },
      { label: "Get a Quote", href: "/contact" },
      { label: "Shop Directory", href: "/services/directory" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-base font-bold text-white">
                Auto Glass Marketing Pros
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              The only marketing agency built exclusively for auto glass repair
              &amp; replacement shops. We keep your bays full with paying jobs —
              not clicks.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-200 hover:text-white"
            >
              <IconPhone className="h-4 w-4 text-glass-300" />
              {site.phone}
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Google Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
