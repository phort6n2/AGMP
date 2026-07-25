# Windshield Repair HQ — Build Brief (paste this into the WRHQ project chat)

**Context for the agent building windshieldrepairhq.com:**
Windshield Repair HQ (WRHQ) is a free, consumer-facing auto glass directory. It is
ALSO the top of a lead-generation funnel for a sister company, **Auto Glass Marketing
Pros (AGMP)** — a marketing agency that works only with auto glass shops. The goal of
these changes is to convert directory shops (especially the ones who "claim a free
listing") into paying AGMP clients — **without** compromising the directory's neutrality
or trust with consumers (drivers).

**The one rule that governs everything below:**
> **Covert on the demand side, transparent on the supply side.**
> To a *driver*, WRHQ must always look like a neutral, trustworthy directory — no agency
> branding, no "powered by AGMP." To a *shop owner* (anyone in the "for shops / claim your
> listing" area), be transparent that growth services are powered by AGMP. Hiding it from
> shop owners backfires — this audience is burned and hypersensitive to "who's really
> behind this." Disclosing it at the moment they're deciding to spend money builds trust.

---

## 0. The handoff link — use this exact URL

**AGMP has built a dedicated landing page for WRHQ traffic: `/rank`.** Do not link shops
to `/audit` directly — `/rank` continues the rank-reveal narrative, then hands off to the
audit itself. Sending them to `/audit` restarts the pitch and loses the moment.

```
https://autoglassmarketingpros.com/rank?rank=7&of=23&city=Denver&shop=Rocky%20Mountain%20Glass
```

| Param  | Required | Purpose |
|--------|----------|---------|
| `rank` | strongly recommended | The shop's position in its city. Drives the headline and the visual. |
| `of`   | optional | Total shops in that city — renders as "of 23". |
| `city` | recommended | Personalizes headline and visual ("Auto glass shops in Denver"). |
| `shop` | optional | Shop name, used in the opening line. |

The page handles three cases automatically:
- **rank 1–3** → "You're in the top 3 in [City]. Now hold it." (retention angle)
- **rank 4+** → "You're #7 in [City]. Here's what that's costing you." (the wedge)
- **no params** → a clean generic fallback, so a bare link still works

It carries `utm_source=windshieldrepairhq` through to the audit automatically, so AGMP can
attribute conversions back to WRHQ instead of seeing them as direct traffic. **Pass the
params and the attribution is handled — no tagging work needed on the WRHQ side.**

Sanity-check any link you build by opening it; if the headline doesn't show the rank, the
param name is wrong.

---

## 1. The claim → rank-reveal → audit path (highest priority)

The "Claim your free listing" flow is the highest-intent moment in the entire system — a
shop owner self-identifying that they want more visibility. Build this sequence:

### 1a. Claim form — capture more than the basics
On "Claim your free listing," collect (and store to the shop record + push to the CRM /
outbound list):
- Shop name, owner name, **cell phone**, email, city/state
- Services offered (checkboxes: chip repair, replacement, ADAS calibration, back/door
  glass, mobile, in-shop)
- **Current monthly job volume** (rough range)
- **Biggest frustration right now** (free text — this is sales gold)
- Consent checkbox: "OK to text me about my listing and growth options" (this creates
  SMS opt-in — required before any SMS; see the outreach kit's compliance notes)

### 1b. Claim confirmation screen — the rank reveal (the wedge)
Immediately after claim, show the shop **its current rank position within its city on
WRHQ** and a one-line gap framed as lost jobs, e.g.:
> **You're #7 of 9 auto glass shops in [City].**
> The top 3 shops get the overwhelming majority of driver clicks. Want to see exactly
> why — and the fastest way to move up?
> **[ Run my free 60-second audit → ]**
> → links to `https://autoglassmarketingpros.com/rank?rank=7&of=9&city=[City]` (see §0)

**On stats:** say "the overwhelming majority" rather than inventing a precise figure like
"75%." Shop owners have been lied to with fake numbers by every agency that called them —
a directionally true claim you can defend beats a specific one you can't. This matters more
than it sounds; it's the whole trust position.

This screen is the moment the two sites finally touch. Make the CTA prominent.

### 1c. Also expose rank on the shop's own dashboard/listing-management view
Any logged-in shop owner should always see their city rank + "how to improve" CTA. Rank
is the recurring hook.

---

## 2. "For shop owners" section — the transparent upsell

On the shop-owner-facing pages (NOT consumer pages), add:

### 2a. Soft AGMP disclosure
A line such as:
> *Windshield Repair HQ's growth services are powered by **Auto Glass Marketing Pros** —
> the marketing agency built only for auto glass shops.* [link to autoglassmarketingpros.com]

### 2b. Free / Featured / Managed comparison table
Make the upgrade path visible from minute one. Three tiers:

| | **Free Listing** | **Featured Placement** | **Managed Growth** |
|---|---|---|---|
| Directory listing | ✓ | ✓ | ✓ |
| Priority/"Featured" position | — | ✓ | ✓ |
| Google Map Pack + AI search | — | — | ✓ (AGMP Local SEO) |
| Google Ads | — | — | ✓ |
| Conversion website | — | — | ✓ |
| Price | Free | (set) | Custom — starts with a free audit |

"Featured Placement" and "Managed Growth" CTAs both route to the AGMP audit
(`/audit`) or "Text Matt (855) 712-8500."

### 2c. Honest "Featured" labeling
Featured/paid slots must be labeled **"Featured"** in the directory (like every credible
directory). Never let paid placement secretly override the neutral ranking in a way a
consumer could detect — that would kill the consumer trust/SEO engine that feeds the whole
funnel.

---

## 3. Rank data as a permanent sales wedge (data + triggers)

WRHQ already orders shops by city, so you're sitting on every shop's relative position in
every market. Systematize it:

- **Store rank history** per shop per city (snapshot on a schedule) so you can detect
  movement.
- **"You just got passed" trigger:** when a competitor overtakes a shop in its city (or it
  drops a position), fire a notification/email — loss aversion is the sharpest right after a
  drop. (See outreach kit → Segment C.)
- **Expose a per-city "rank + total shops" field via internal API** so the outbound tooling
  and the AGMP audit can reference "#X of Y in [City]."

---

## 4. Data / integration handoff to AGMP

- **Shop database export/API:** name, city, phone, email, services, current rank, claim
  status (claimed vs unclaimed), tier (free/featured/managed). This powers AGMP's cold
  outbound ("you're #X in [City]") and the nurture sequences.
- **Lead events → AGMP:** when a shop claims a listing or clicks "run my audit," send an
  event (webhook) to AGMP so the Day 0–10 nurture sequence can start.
- **AGMP's audit stack (current):** the shop-facing capture is MyWebAudit. Key `925479` is
  the Google Business Profile audit embedded at `/audit`; key `f20501` is an AI Visibility
  modal that fires on exit-intent site-wide. WRHQ does **not** need to embed either — just
  link to `/rank` per §0 and AGMP handles capture. Do not duplicate the widgets on WRHQ;
  that would split lead data across two dashboards.
- Keep AGMP's promise consistent: **never resell or share consumer leads between shops** —
  directory inquiries go directly to the one listed shop. It's a genuine differentiator;
  don't undercut it.

---

## 4b. AGMP pages you can link to (shop-owner side only)

These exist and are live. Linking to them is better than re-explaining AGMP on WRHQ —
it keeps the sales argument in one place and keeps WRHQ's own copy short.

| URL | What it is | Use it when |
|-----|-----------|-------------|
| `/rank` | The rank-reveal landing page (see §0) | **The primary handoff.** Every "improve my ranking" CTA. |
| `/framework` | The Auto Glass Marketing Framework™ — a four-stage methodology (Invisible → Visible → Growing → Dominant) with the symptoms, bottleneck and fix for each stage | A shop owner who wants to understand the *approach* before talking to anyone. Strong trust asset — link it from the Free/Featured/Managed table. |
| `/framework#invisible` … `#dominant` | Deep links to a single stage | You can send a shop straight to the stage matching their rank: rank 4+ → `#visible`, unranked → `#invisible`. |
| `/services/directory` | AGMP's "Directory Placement" service page — describes being featured on WRHQ | The "what does Featured actually get me" question. |
| `/audit` | The audit itself | Only if you need a bare audit link with no rank context. Prefer `/rank`. |

**Do not link any of these from consumer-facing pages.** They're all AGMP-branded and
would break the directory's neutrality. Shop-owner areas only.

---

## 5. Consumer side — do NOT change the neutrality

- Keep consumer pages (search, city/state pages, shop profiles) **free of AGMP branding**.
- Keep "Free to search · no account needed."
- Grow programmatic **city + service pages** for SEO — more consumer traffic = more shops
  wanting to rank = more AGMP prospects. This is the engine; keep feeding it.

---

## 6. Positioning summary (so the two sites don't collide)

- **WRHQ is "the directory."** AGMP should NOT market a separate competing directory.
  AGMP's "Directory Placement" service = "we feature your shop on Windshield Repair HQ."
  (This is already reflected on the AGMP site.)
- WRHQ = demand generation + shop database. AGMP = monetization. Every change above is about
  *connecting* the two halves you already own.

---

## Priority order for the WRHQ build
1. Claim form (expanded capture) + **rank-reveal confirmation screen** linking to AGMP
   `/rank` with rank params (see §0).
2. "For shop owners" page: AGMP disclosure + Free/Featured/Managed table.
3. Rank history storage + "you got passed" trigger.
4. Shop database export/API + lead webhooks to AGMP.
5. Programmatic city/service SEO expansion (ongoing).

*Companion assets (already written, ask AGMP's side for them): the cold-outreach kit
(SMS/email sequences opening with rank data) and the case-study/proof kit.*
