import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="pb-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-ink-300">
            <p className="text-sm text-ink-500">Last updated: July 2026</p>
            <p>
              These terms govern your use of the {site.name} website. This is a
              starting template — please have it reviewed by a qualified
              professional before relying on it.
            </p>
            <h2 className="font-display text-xl font-bold text-white">
              Use of this site
            </h2>
            <p>
              You agree to use this website for lawful purposes only. Content is
              provided for general information and does not constitute a
              guarantee of specific marketing results.
            </p>
            <h2 className="font-display text-xl font-bold text-white">
              Services
            </h2>
            <p>
              Marketing services are provided on a month-to-month basis unless
              otherwise agreed in writing. Specific deliverables, pricing, and
              terms will be set out in your service agreement.
            </p>
            <h2 className="font-display text-xl font-bold text-white">
              No guarantee of rankings
            </h2>
            <p>
              Search engines and advertising platforms control their own
              algorithms. We follow proven best practices but cannot guarantee
              any specific ranking or result.
            </p>
            <h2 className="font-display text-xl font-bold text-white">Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-glass-200 hover:text-white"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
