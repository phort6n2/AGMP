import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, shop, email, phone } = data ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Please include your name and email." },
        { status: 400 }
      );
    }

    // In production, forward this lead to email / CRM / Slack here.
    // For now we log it so the deployment has a working endpoint.
    console.log("New lead:", { name, shop, email, phone });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us instead." },
      { status: 500 }
    );
  }
}
