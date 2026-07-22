"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Button } from "./ui";
import { IconPhone } from "./Icons";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <Logo className="h-8 w-8" />
          <span className="font-display text-[15px] font-bold leading-none text-white">
            Auto Glass
            <span className="block text-[11px] font-semibold tracking-[0.18em] text-glass-300">
              MARKETING PROS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-ink-200 transition-colors hover:text-white"
                >
                  {item.label}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="glass-card overflow-hidden rounded-2xl p-2 shadow-card">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <div className="text-sm font-medium text-white">
                          {c.label}
                        </div>
                        {c.desc && (
                          <div className="text-xs text-ink-400">{c.desc}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-ink-200 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-ink-200 transition-colors hover:text-white"
          >
            <IconPhone className="h-4 w-4 text-glass-300" />
            {site.phone}
          </a>
          <Button href="/contact" size="md" withArrow>
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-all ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/5 bg-ink-950/95 backdrop-blur-xl lg:hidden"
        >
          <div className="space-y-1 px-5 py-4">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2.5 text-left text-base font-medium text-white"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 space-y-1 border-l border-white/10 pl-4">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block py-2 text-sm text-ink-300 hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 text-base font-medium text-white"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-sm font-medium text-ink-200"
              >
                <IconPhone className="h-4 w-4 text-glass-300" />
                {site.phone}
              </a>
              <Button href="/contact" size="lg" withArrow className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
