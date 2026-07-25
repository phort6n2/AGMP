# GoHighLevel Wiring — Post-Audit Sequence

Companion to `docs/post-audit-nurture.md` (the copy). This is how it gets built.

**Assumes:** GHL account already in use, toll-free (855) 712-8500 already verified for SMS.

---

## The data path (read this first)

```
WRHQ rank reveal
   └─ /rank?rank=7&of=9&city=Denver&shop=Elite+Auto+Glass
        └─ /audit?utm_source=windshieldrepairhq&utm_medium=referral
                 &utm_campaign=rank-reveal&utm_term=7&utm_content=Denver
             └─ MyWebAudit widget captures utm_* natively, submits WITH the lead
                  └─ MWA → GHL (contact + attribution together)
                       └─ GHL workflow fires
```

**Why rank rides in `utm_term`:** MyWebAudit natively captures only the five standard
`utm_*` params. It owns the shop's name/email/phone; our site owns the rank and city. If
those arrived on separate webhooks there'd be no key to join them. Packing rank into
`utm_term` and city into `utm_content` means GHL gets one contact record with everything
already attached.

Values are raw — `utm_term` = `7`, `utm_content` = `Denver` — so they merge straight into
copy with no parsing.

---

## Step 1 — Get MyWebAudit leads into GHL

In MyWebAudit → **Notifications / Integrations**, connect to GHL. Options in order of
preference:

1. **Native GHL integration**, if MWA offers one.
2. **Zapier**: MWA "New Lead" → GHL "Create/Update Contact". Map the utm fields (below).
3. **Inbound webhook**: point MWA's webhook at a GHL workflow's Inbound Webhook trigger.

Do this for **both** widgets — `925479` (GBP audit) and `f20501` (AI Visibility modal),
plus `9ac9e4` (inline AI Visibility) if you want it treated separately.

### Field mapping

| MyWebAudit field | GHL field |
|---|---|
| Your Name | First / Last Name |
| Email | Email |
| Phone | Phone |
| Company Name | Company Name |
| Website URL | Website |
| `mwa_utm_source` | custom: `source_site` |
| `mwa_utm_term` | custom: **`rank`** |
| `mwa_utm_content` | custom: **`city`** |
| `mwa_utm_campaign` | custom: `campaign` |
| `mwa_landing_page` | custom: `landing_page` |

Create those custom fields in GHL first (Settings → Custom Fields) or the mapping step
won't offer them.

---

## Step 2 — Tag on entry

Add a workflow action right after the trigger:

- `utm_source` = `windshieldrepairhq` → tag **`src-wrhq`**
- `utm_source` empty → tag **`src-direct`**
- Widget/form = AI Visibility → tag **`audit-ai`**
- Otherwise → tag **`audit-gbp`**

These tags drive every branch below.

---

## Step 3 — The workflow

**Trigger:** Contact created/updated with tag `audit-gbp` or `audit-ai`.

| # | Wait | Action | Notes |
|---|------|--------|-------|
| 1 | — | **SMS** (Stage 1 copy) | Fires immediately. Under 60s is the whole point. |
| 2 | until 8am local if outside 8am–9pm | — | Use GHL's "Wait until window." |
| 3 | 45 min | **Internal notification to you** | Not to the contact — this is your prompt to send the Stage 2 human text. |
| 4 | 1 day | **Email** (Stage 3, findings) | Include the `/framework#stage` deep link. |
| 5 | 3 days | **SMS** (Stage 4, value, no ask) | Do not add a CTA. |
| 6 | 7 days | **SMS or Email** (Stage 5, honest close) | Match whichever channel they've engaged on. |
| 7 | 14 days | **SMS** (Stage 6, permission to stop) | Then remove from sequence, add tag `nurture-complete`. |

**Stage 2 is deliberately manual.** It's the highest-leverage message in the funnel and it
has to contain a real observation from their audit. Automating it turns it into the
template every other agency sends. Step 3 just reminds you.

---

## Step 4 — Exit on reply (do not skip)

In workflow **Settings**, enable:

- ✅ **Stop on Response** → *Replied* (SMS **and** Email)

Nothing damages trust faster than an automated "just following up!" landing after a real
conversation has started. This one toggle is worth more than the copy.

Also set **Re-entry: not allowed** so a returning visitor doesn't restart the sequence.

---

## Step 5 — Conditional copy

Use if/else on the `src-wrhq` tag:

- **Has rank** (`src-wrhq`): "You're #`{{contact.rank}}` in `{{contact.city}}`…"
- **No rank** (`src-direct`): lead with the audit finding instead. Never render an empty
  merge field — `"You're # in ."` is worse than no personalization at all.

Set a **default value** on the `rank` custom field, or use GHL's conditional merge, so a
blank never renders.

For `audit-ai` contacts, swap the opener: *"ChatGPT doesn't mention {{company}} when
someone asks for a shop in {{contact.city}}."*

---

## Step 6 — The rank-change loop (Stage 7)

The compounding piece. Requires rank history from WRHQ (see WRHQ brief §3).

- WRHQ detects a rank change → webhook → GHL **Inbound Webhook** trigger
- Update the contact's `rank` field
- Branch:
  - **Dropped** → SMS: "{{company}} just slipped to #{{rank}} in {{city}} — {{competitor}} passed you."
  - **Improved** → SMS: "Saw you moved up to #{{rank}} — nice." *(Send it. Costs nothing, and it's the one they remember.)*
  - **Unchanged 90 days** → SMS: free re-audit offer

Suppress if tagged `client` or `do-not-contact`.

---

## Step 7 — Optional: real-time trigger from the site

The site also POSTs a conversion event to `/api/lead` the instant the widget submits
(before MWA's own processing). If you want GHL to fire on that instead of waiting on the
MWA→GHL hop:

1. GHL workflow → **Inbound Webhook** trigger → copy the URL
2. Vercel → Settings → Environment Variables → `LEAD_WEBHOOK_URL` = that URL
3. Redeploy

Payload:

```json
{
  "event": "audit_submitted",
  "widgetKey": "925479",
  "page": "/audit",
  "submittedAt": "2026-07-25T18:00:00.000Z",
  "utm_source": "windshieldrepairhq",
  "rank": "7",
  "city": "Denver",
  "landing": "/rank",
  "referrer": "https://windshieldrepairhq.com/..."
}
```

**Caveat:** this fires from the browser at submit time and carries **no name, email or
phone** — MyWebAudit owns those. So it can't create a usable contact on its own. Treat it
as a speed signal or analytics event, not the primary path. **Step 1 remains the real
integration.** Leave `LEAD_WEBHOOK_URL` unset if you don't want the duplicate.

---

## Test before turning it on

1. Open the live handoff URL:
   `https://autoglassmarketingpros.com/rank?rank=7&of=9&city=Denver&shop=Test+Glass`
2. Click through to the audit and submit with **your own** phone and email.
3. Confirm in GHL: contact created, `rank` = `7`, `city` = `Denver`, tag `src-wrhq`.
4. Confirm the Stage 1 SMS arrives, and that it arrives **fast**.
5. Reply to it — confirm the workflow **stops**.

Step 5 is the one people skip. Test it.
