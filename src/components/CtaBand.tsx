import { Button, Container } from "./ui";
import { site } from "@/lib/site";
import { IconPhone } from "./Icons";

export function CtaBand({
  title = "Ready to keep your bays full?",
  subtitle = "Book a free 30-minute growth call. We'll map out exactly how to get your shop more jobs — no jargon, no pressure.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-glass-300/20 bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-14 text-center sm:px-14">
          <div className="bg-radial-glow pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" withArrow>
                {site.ctaText}
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-base font-medium text-ink-100 hover:text-white"
              >
                <IconPhone className="h-5 w-5 text-glass-300" />
                {site.phone}
              </a>
            </div>
            <p className="mt-5 text-sm text-ink-500">
              No contracts. Month-to-month. Just booked jobs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
