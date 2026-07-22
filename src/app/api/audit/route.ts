import { NextResponse } from "next/server";

/**
 * Free marketing audit request endpoint.
 *
 * Webhook-ready: if AUDIT_WEBHOOK_URL is set (e.g. a Zapier/Make webhook, a
 * CRM inbound URL, or the audit platform's inbound hook), the lead is forwarded
 * there. Otherwise it's logged so the deployment always has a working endpoint.
 * Swap in email/CRM delivery as needed.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { shop, email, website } = data ?? {};

    if (!shop || !email) {
      return NextResponse.json(
        { ok: false, error: "Please include your shop name and email." },
        { status: 400 }
      );
    }

    const payload = {
      ...data,
      website: normalizeUrl(website),
      source: "free-marketing-audit",
      submittedAt: new Date().toISOString(),
    };

    const webhook = process.env.AUDIT_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.error("Audit webhook failed:", err);
      });
    } else {
      console.log("New audit request:", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us instead." },
      { status: 500 }
    );
  }
}

function normalizeUrl(url?: string) {
  if (!url) return "";
  const trimmed = url.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}
