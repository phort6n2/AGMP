import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { IconPhone, IconClock, IconCheck, IconChart } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact — Book a Free Growth Call",
  description:
    "Book a free 30-minute growth call with Auto Glass Marketing Pros. We'll map out exactly how to get your auto glass shop more paying jobs.",
};

const expect = [
  {
    icon: IconChart,
    title: "A real plan for your shop",
    body: "We'll look at your market, your competitors, and where the jobs are hiding.",
  },
  {
    icon: IconClock,
    title: "Just 30 minutes",
    body: "Quick, focused, and worth your time — whether or not we end up working together.",
  },
  {
    icon: IconCheck,
    title: "Zero pressure",
    body: "No hard sell, no contracts. Straight answers about what will actually move the needle.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's talk"
        title={
          <>
            Book your free{" "}
            <span className="text-gradient">growth call</span>
          </>
        }
        subtitle="Tell us about your shop and we'll show you exactly how to get more paying auto glass jobs. No jargon, no pressure — just a clear plan."
      />

      <section className="pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: what to expect + contact details */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                What to expect
              </h2>
              <div className="mt-6 space-y-5">
                {expect.map((e) => (
                  <div key={e.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{e.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-300">
                        {e.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Prefer to reach out directly?
                </p>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-lg font-semibold text-white hover:text-glass-200"
                >
                  <IconPhone className="h-5 w-5 text-glass-300" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-ink-200 hover:text-white"
                >
                  <span className="text-glass-300">✉</span>
                  {site.email}
                </a>
                <p className="text-sm text-ink-500">
                  Serving auto glass shops nationwide · Mon–Fri, 8am–6pm
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
