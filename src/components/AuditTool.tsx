"use client";

import { useState } from "react";
import Link from "next/link";
import { IconCheck, IconArrow, IconSearch, IconSparkle } from "./Icons";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const auditCovers = [
  "Google Business Profile & Map Pack position",
  "Where you rank vs. the shops stealing your jobs",
  "Reviews: volume, rating & recency",
  "Website speed & whether it books the call",
  "AI visibility — do ChatGPT & AI Overviews name you?",
];

const field =
  "w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-3 text-white placeholder:text-ink-500 outline-none transition-colors focus:border-glass-300 focus:ring-2 focus:ring-glass-500/30";
const label = "mb-1.5 block text-sm font-medium text-ink-200";

export function AuditTool() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    shop: "",
    website: "",
    area: "",
    serviceModel: "",
    jobMix: "",
    calibration: "",
    goal: "",
    name: "",
    email: "",
    phone: "",
  });

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const steps = ["Your shop", "How you run it", "Get your audit"];
  const canNext =
    step === 0 ? data.shop.trim().length > 0 : step === 1 ? true : true;

  async function submit() {
    if (!data.email.trim() || !data.name.trim()) {
      setError("Please add your name and email so we can send the audit.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="glass-card rounded-3xl p-8 text-center sm:p-10"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-signal/15 text-signal">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-white">
          Your audit is on the way, {data.name.split(" ")[0] || "there"}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink-300">
          We&apos;re pulling your shop&apos;s numbers now. You&apos;ll get your
          free marketing audit by email within one business day — no obligation,
          no pressure.
        </p>
        <div className="mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-amber transition-all hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Want it faster? Book your strategy call
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      {/* Progress */}
      <div className="mb-6 flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 flex-col gap-1.5">
            <div
              className={`h-1.5 rounded-full transition-colors ${
                i <= step ? "bg-glass-400" : "bg-white/10"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                i <= step ? "text-glass-200" : "text-ink-500"
              }`}
            >
              {s}
            </span>
          </div>
        ))}
      </div>

      {/* Step 0 — shop */}
      {step === 0 && (
        <div className="space-y-5">
          <div>
            <label className={label} htmlFor="a-shop">
              Shop name *
            </label>
            <input
              id="a-shop"
              className={field}
              placeholder="Clear View Auto Glass"
              value={data.shop}
              onChange={set("shop")}
            />
          </div>
          <div>
            <label className={label} htmlFor="a-website">
              Website <span className="text-ink-400">(if you have one)</span>
            </label>
            <input
              id="a-website"
              className={field}
              placeholder="clearviewautoglass.com"
              value={data.website}
              onChange={set("website")}
            />
          </div>
          <div>
            <label className={label} htmlFor="a-area">
              City / service area
            </label>
            <input
              id="a-area"
              className={field}
              placeholder="Springfield, IL — 40-mile radius"
              value={data.area}
              onChange={set("area")}
            />
          </div>
        </div>
      )}

      {/* Step 1 — how you run it */}
      {step === 1 && (
        <div className="space-y-5">
          <p className="text-sm text-ink-300">
            A few quick details so your audit is built for how you actually run
            — not a generic report.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className={label} htmlFor="a-model">
                Service model
              </label>
              <select id="a-model" className={field} value={data.serviceModel} onChange={set("serviceModel")}>
                <option value="" className="bg-ink-800">Select…</option>
                <option value="mobile" className="bg-ink-800">Mobile only</option>
                <option value="in-shop" className="bg-ink-800">In-shop only</option>
                <option value="both" className="bg-ink-800">Both</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="a-mix">
                Insurance vs. cash
              </label>
              <select id="a-mix" className={field} value={data.jobMix} onChange={set("jobMix")}>
                <option value="" className="bg-ink-800">Select…</option>
                <option value="mostly-insurance" className="bg-ink-800">Mostly insurance</option>
                <option value="mostly-cash" className="bg-ink-800">Mostly cash &amp; fleet</option>
                <option value="even" className="bg-ink-800">About 50/50</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="a-cal">
                ADAS calibration
              </label>
              <select id="a-cal" className={field} value={data.calibration} onChange={set("calibration")}>
                <option value="" className="bg-ink-800">Select…</option>
                <option value="in-house" className="bg-ink-800">In-house</option>
                <option value="sublet" className="bg-ink-800">I sublet it</option>
                <option value="not-yet" className="bg-ink-800">Not yet</option>
              </select>
            </div>
          </div>
          <div>
            <label className={label} htmlFor="a-goal">
              Biggest growth challenge right now
            </label>
            <input
              id="a-goal"
              className={field}
              placeholder="Slow season, insurance steering, not enough cash jobs…"
              value={data.goal}
              onChange={set("goal")}
            />
          </div>
        </div>
      )}

      {/* Step 2 — contact */}
      {step === 2 && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-glass-300/20 bg-glass-500/5 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-glass-200">
              <IconSearch className="h-4 w-4" />
              Your audit will cover
            </p>
            <ul className="mt-3 grid gap-2">
              {auditCovers.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-ink-200">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="a-name">
                Your name *
              </label>
              <input id="a-name" className={field} placeholder="Jane Doe" value={data.name} onChange={set("name")} />
            </div>
            <div>
              <label className={label} htmlFor="a-email">
                Email *
              </label>
              <input
                id="a-email"
                type="email"
                className={field}
                placeholder="you@shop.com"
                value={data.email}
                onChange={set("email")}
              />
            </div>
          </div>
          <div>
            <label className={label} htmlFor="a-phone">
              Phone <span className="text-ink-400">(fastest way to reach you)</span>
            </label>
            <input id="a-phone" type="tel" className={field} placeholder="(555) 010-2025" value={data.phone} onChange={set("phone")} />
          </div>
        </div>
      )}

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-400">
          {error}
        </p>
      )}

      {/* Controls */}
      <div className="mt-7 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-ink-300 hover:text-white"
          >
            <IconArrow className="h-4 w-4 rotate-180" />
            Back
          </button>
        ) : (
          <span className="text-xs text-ink-500">Takes about 60 seconds</span>
        )}

        {step < 2 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => s + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-glass-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-glass-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue
            <IconArrow className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled={status === "loading"}
            onClick={submit}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-amber transition-all hover:-translate-y-0.5 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <IconSparkle className="h-4 w-4" />
            {status === "loading" ? "Building your audit…" : "Get my free audit"}
          </button>
        )}
      </div>
      <p className="mt-4 text-center text-xs text-ink-400">
        Free · No obligation · We never sell your info. Prefer to talk?{" "}
        <a href={site.phoneHref} className="text-glass-200 hover:text-white">
          Call {site.phone}
        </a>
      </p>
    </div>
  );
}
