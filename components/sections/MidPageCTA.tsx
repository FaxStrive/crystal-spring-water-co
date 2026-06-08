"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";

export default function MidPageCTA() {
  const [form, setForm] = useState({ name: "", phone: "", zip: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="mid-cta"
      aria-labelledby="mid-cta-heading"
      className="section-rhythm"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-content">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4">Your home, next</p>
          <h2
            id="mid-cta-heading"
            className="heading-display mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--color-ink)",
            }}
          >
            Find out what&apos;s in your water{" "}
            <em>before the weekend.</em>
          </h2>
          <p className="text-base mb-3" style={{ color: "var(--color-muted)" }}>
            300+ Central Florida households tested this month &middot; same-day installs available
          </p>

          {/* Inline rating badge */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#fbbf24" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              {BUSINESS.rating} stars &middot; {BUSINESS.reviewCount} reviews
            </span>
          </div>

          {submitted ? (
            <div className="rounded-2xl p-8" style={{ background: "var(--color-ink)" }}>
              <p className="heading-display text-white text-2xl mb-2">
                We&apos;ll call within 5 minutes
              </p>
              <p className="text-white/60 text-sm">
                Our office is calling you now. Answer unknown numbers.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              aria-label="Get your free water test"
            >
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="flex-1 rounded-xl px-4 py-3.5 text-sm border outline-none focus:ring-2"
                style={{
                  border: "1.5px solid var(--color-ink)",
                  color: "var(--color-ink)",
                  background: "white",
                }}
              />
              <input
                type="tel"
                required
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 rounded-xl px-4 py-3.5 text-sm border outline-none focus:ring-2"
                style={{
                  border: "1.5px solid var(--color-ink)",
                  color: "var(--color-ink)",
                  background: "white",
                }}
              />
              <input
                type="text"
                required
                placeholder="Zip"
                maxLength={5}
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
                className="w-24 rounded-xl px-4 py-3.5 text-sm border outline-none focus:ring-2"
                style={{
                  border: "1.5px solid var(--color-ink)",
                  color: "var(--color-ink)",
                  background: "white",
                }}
              />
              <button
                type="submit"
                className="rounded-xl px-6 py-3.5 text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90"
                style={{ background: "var(--color-ink)", color: "white" }}
              >
                Get my free test &rarr;
              </button>
            </form>
          )}
          <p className="text-xs mt-4" style={{ color: "var(--color-muted)" }}>
            Free, no obligation, takes 60 seconds. We never pressure-sell.
          </p>
        </div>
      </div>
    </section>
  );
}
