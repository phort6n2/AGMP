"use client";

import { useState } from "react";
import { IconCheck } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "Local SEO",
  "Google Ads",
  "Web Design",
  "Shop Directory",
  "Not sure yet — help me choose",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card flex flex-col items-center rounded-3xl p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-signal/15 text-signal">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-white">
          You&apos;re on the calendar.
        </h3>
        <p className="mt-3 max-w-sm text-ink-300">
          Thanks for reaching out. We&apos;ll be in touch within one business day
          to book your free growth call. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-3 text-white placeholder:text-ink-500 outline-none transition-colors focus:border-glass-300 focus:ring-2 focus:ring-glass-500/30";
  const label = "mb-1.5 block text-sm font-medium text-ink-200";

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name *
          </label>
          <input id="name" name="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={label} htmlFor="shop">
            Shop name
          </label>
          <input id="shop" name="shop" className={field} placeholder="Clear View Auto Glass" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@shop.com"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={field}
            placeholder="(555) 010-2025"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="service">
          What are you most interested in?
        </label>
        <select id="service" name="service" className={field} defaultValue={services[4]}>
          {services.map((s) => (
            <option key={s} value={s} className="bg-ink-800">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">
          Tell us about your shop
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Where are you located, and what's your biggest growth challenge right now?"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-400">
          {error}
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-amber transition-all duration-200 hover:bg-amber-400 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending…" : "Book my free growth call"}
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-ink-500">
        No spam, ever. We&apos;ll only use your details to plan your growth call.
      </p>
    </form>
  );
}
