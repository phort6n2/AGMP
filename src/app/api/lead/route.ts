import { NextResponse } from "next/server";

/**
 * Audit conversion events from <AuditConversion/>.
 *
 * Forwards the lead — enriched with attribution MyWebAudit doesn't capture
 * (utm_source, rank, city, which widget converted) — to whatever automation
 * runs the post-audit nurture sequence: LEAD_WEBHOOK_URL, typically a Zapier or
 * Make inbound hook, or a CRM endpoint.
 *
 * The webhook URL lives server-side so it isn't exposed to the browser, where
 * anyone could POST junk into the sequence. Without the env var set, events are
 * logged and nothing breaks — the endpoint stays safe to deploy unconfigured.
 *
 * See docs/post-audit-nurture.md.
 */
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.log("[lead] audit conversion (no LEAD_WEBHOOK_URL set):", data);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (error) {
    // Swallow: a broken automation must never surface to the visitor, who has
    // already converted successfully inside the MyWebAudit widget.
    console.error("[lead] webhook forward failed:", error);
    return NextResponse.json({ ok: true, forwarded: false });
  }
}
