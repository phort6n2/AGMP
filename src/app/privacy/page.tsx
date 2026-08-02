import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-ink-300">
            <p className="text-sm text-ink-500">Last updated: July 2026</p>
            <p>
              {site.name} (&quot;we,&quot; &quot;us&quot;) respects your privacy.
              This policy explains what information we collect and how we use it.
              This is a starting template — please have it reviewed by a
              qualified professional before relying on it.
            </p>
            <h2 className="font-display text-xl font-bold text-white">
              Information we collect
            </h2>
            <p>
              When you submit a contact or growth-call form, we collect the
              details you provide — such as your name, shop name, email, and
              phone number — so we can respond to your request.
            </p>
            <h2 className="font-display text-xl font-bold text-white">
              How we use it
            </h2>
            <p>
              We use your information solely to contact you about your inquiry
              and the services you asked about. We do not sell your personal
              information.
            </p>
            <h2 className="font-display text-xl font-bold text-white">
              Analytics &amp; cookies
            </h2>
            <p>
              We may use standard analytics tools to understand how visitors use
              our site so we can improve it. These tools may set cookies in your
              browser.
            </p>
            <h2 className="font-display text-xl font-bold text-white">Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
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
