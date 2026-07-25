# Post-Audit Nurture Sequence

**The gap this fills:** the cold-outreach kit gets a shop *to* the audit. This is
everything *after* they submit — which until now was "Matt sees the MyWebAudit
notification and replies when he sees it."

**Merge fields:** `{{shop_name}}` · `{{first_name}}` · `{{city}}` · `{{rank}}` ·
`{{top_competitor}}` · `{{finding}}` (the single worst thing the audit surfaced)

**Contact:** Matt · text-first **(855) 712-8500** · framework at `/framework`

---

## The governing rule: speed

You sell speed-to-lead. Your own funnel has to model it. A shop owner who submits an
audit at 4:47pm and hears nothing until tomorrow has already learned something about how
you'd handle *their* customers.

**Target: an automated response inside 60 seconds, and a human one inside the hour
during business hours.** Everything else in this sequence matters less than that.

---

## Stage 1 — Instant (automated, < 60 seconds)

**Channel:** SMS if they gave a mobile and consented; otherwise email.
**Purpose:** confirm receipt, set the expectation, make it feel human.

> {{first_name}} — Matt here, Auto Glass Marketing Pros. Got your audit request for
> {{shop_name}}. I review these personally, so give me a bit and I'll come back with what
> actually stands out — not a canned report. Reply here anytime, this is my real number.

**Do not** send a "thanks for your submission!" template with a logo header. The whole
positioning is that a real person answers. The first message has to sound like one.

---

## Stage 2 — Within the hour (human, from Matt)

**Channel:** SMS.
**Purpose:** prove a human looked. This is the single highest-leverage message in the
entire funnel.

The rule: **lead with one specific, verifiable observation.** Not "I found some
opportunities." Something they can check themselves in ten seconds.

> Looked at {{shop_name}}. Straight up: {{finding}}.
> That's likely the thing costing you the most right now. Want me to walk you through the
> rest? Happy to just text it — no call needed unless you want one.

Examples of a good `{{finding}}` — specific, checkable, auto-glass literate:
- "your Google profile doesn't list ADAS calibration, so newer-vehicle owners are
  filtering you out before they ever call"
- "you've got 14 reviews and {{top_competitor}} has 180 — that's the gap doing the damage,
  not your pricing"
- "your site never says you bill insurance directly, so people assume out-of-pocket"
- "you're not showing up at all for 'mobile windshield replacement {{city}}' and that's
  where the higher tickets are"

Bad findings (do not send): "your SEO needs work," "you have optimization opportunities,"
anything they can't verify in a few seconds.

---

## Stage 3 — Day 1 (email, the actual findings)

**Subject:** What I found on {{shop_name}}
**Purpose:** deliver real value in writing, whether or not they ever buy.

> {{first_name}},
>
> Here's the honest version of what I saw:
>
> **1. {{finding}}** — this is the one I'd fix first.
> **2.** [second finding]
> **3.** [third finding]
>
> None of these need a rebuild. They're the kind of thing that moves a shop from "found
> sometimes" to "found first."
>
> If you want the context on how these fit together, the whole approach is written out
> here — no gate, no form: **[The Auto Glass Marketing Framework](/framework)**
>
> Based on what I saw, you're at the **{{stage}}** stage — that section explains what
> usually unblocks it: **[/framework#{{stage_anchor}}]**
>
> If you want me to handle it, say the word. If you'd rather run with this yourself,
> genuinely, go do it — it's your shop.
>
> — Matt · (855) 712-8500

**Why the framework link matters here:** it's the proof you have a system rather than a
list of tactics. Deep-link to their actual stage (`#invisible`, `#visible`, `#growing`,
`#dominant`) so it reads as diagnosis, not a brochure.

---

## Stage 4 — Day 3 (value, zero ask)

**Channel:** SMS.
**Purpose:** give something away. No CTA at all — this is the message that separates you
from every agency that's ever texted them.

> {{first_name}} — one more thing on {{shop_name}}, no pitch attached:
> [one specific, immediately actionable tip — e.g. "add 'ADAS calibration' as a service on
> your Google profile and put safe drive-away time on your replacement page. Takes ten
> minutes, and it's free."]
> That's yours either way. — Matt

A message with no ask is what makes the next one land. Do not sneak a CTA into it.

---

## Stage 5 — Day 7 (the honest close)

**Channel:** email or SMS, matching wherever they've engaged.

> {{first_name}} — you're still sitting at #{{rank}} in {{city}} while
> {{top_competitor}} takes the calls above you.
>
> How I work: month-to-month, no contract, measured on booked jobs — not clicks or
> impressions. If it isn't working you fire me by text.
>
> Want me to take this on? Or if it's not the time, tell me "later" and I'll check back
> next quarter instead of pestering you.
>
> — Matt

---

## Stage 6 — Day 14 (permission to close the loop)

> Last one from me on this, {{first_name}}. If {{shop_name}} is good where it is, I'll
> leave you alone — no hard feelings.
>
> If you ever want a second opinion, you've got my number. — Matt

---

## Stage 7 — Day 30+ (the re-audit loop)

**This is the compounding one.** Their rank moves whether or not they hire you, which
means you always have a legitimate, non-salesy reason to reappear.

Trigger on **rank change** rather than a fixed date:

- **They dropped:** "{{shop_name}} just slipped to #{{rank}} in {{city}} — {{top_competitor}}
  passed you. Worth a look?" (highest-urgency message in the whole system)
- **They improved without you:** "Saw you moved up to #{{rank}} in {{city}} — nice. Whatever
  you're doing is working." *(Send this. It costs nothing and it's the message they'll
  remember.)*
- **Nothing changed after 90 days:** "Still #{{rank}} in {{city}}, same as three months ago.
  Want the free re-audit?"

Rank data comes from WRHQ (see the WRHQ brief, §3 — rank history + "you got passed"
triggers). **This loop is the reason the two-site setup is worth building.**

---

## Segmentation

| Signal | Treatment |
|---|---|
| Came from WRHQ with a rank (`utm_source=windshieldrepairhq`) | Lead every message with rank. It's concrete and it's the reason they engaged. |
| Came from AGMP directly (no rank) | Lead with the audit finding instead. Don't reference a rank you don't have. |
| Submitted the **AI Visibility** audit (`f20501`) | Different anxiety — lead with AI. "ChatGPT doesn't mention {{shop_name}} when someone asks for a shop in {{city}}." |
| Opened but never replied | Stop after Day 14. Move to the Day 30+ rank-trigger loop. |
| Replied at any point | **Exit the sequence immediately.** Nothing kills trust faster than an automated message after a real conversation started. |

---

## Compliance

- SMS requires prior express consent. The audit form submission with a visible consent
  line creates it — keep the timestamp.
- Every automated SMS: STOP language. Honor STOP/UNSUBSCRIBE/CANCEL immediately.
- Send 8am–9pm **local to the shop**, not local to you.
- Email needs a real physical address and a working unsubscribe.
- Stage 2 is a genuine 1:1 human message and isn't bulk marketing — but if you ever
  template and blast it, it becomes bulk. Keep it real.

---

## Wiring

The audit widget fires a `mwaWidgetAfterSubmit` DOM event on submission. AGMP listens for
it (`src/components/AuditConversion.tsx`), enriches the lead with attribution MyWebAudit
never sees — `utm_source`, `rank`, `city`, and which audit was submitted — and POSTs it to
`/api/lead`.

`/api/lead` forwards to whatever `LEAD_WEBHOOK_URL` is set to (Zapier, Make, or a CRM
inbound hook), which is what actually runs the sequence above. Without that env var the
route just logs, so nothing breaks while it's unset.

**Why this matters:** MyWebAudit captures name, email and website. It does *not* capture
that the lead came from Windshield Repair HQ at #7 in Denver — which is the entire wedge
for Stage 2 and the Day 30+ loop. Without this hook, the most valuable context is lost at
the exact moment of conversion.
