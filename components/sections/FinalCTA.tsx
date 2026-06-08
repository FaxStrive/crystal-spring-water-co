"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";

export default function FinalCTA() {
  const [form, setForm] = useState({ name: "", phone: "", zip: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="section-rhythm"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="max-content">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow eyebrow-light mb-4">Ready when you are</p>
          <h2
            id="final-cta-heading"
            className="heading-display text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Better water today.
            <br />
            <em>Not next week.</em>
          </h2>
          <p className="text-white/65 text-base mb-8 leading-relaxed">
            Free, no-obligation water test. No pressure, no sales tricks. Just an honest look at what&apos;s in your water and what it would take to fix it.
          </p>

          {submitted ? (
            <div
              className="rounded-2xl p-10"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <p className="heading-display text-white text-2xl mb-2">
                We&apos;ll call you within 5 minutes
              </p>
              <p className="text-white/60 text-sm">
                Check your phone &mdash; our team is calling now.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 max-w-sm mx-auto"
                aria-label="Schedule your free water test"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 text-sm placeholder-gray-400 outline-none"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 text-sm placeholder-gray-400 outline-none"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                />
                <input
                  type="text"
                  required
                  placeholder="Zip code"
                  maxLength={5}
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 text-sm placeholder-gray-400 outline-none"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                />
                <button
                  type="submit"
                  className="w-full rounded-xl py-4 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "var(--color-cream)", color: "var(--color-ink)" }}
                >
                  Schedule my free water test &rarr;
                </button>
              </form>

              {/* Trust signals adjacent to CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#fbbf24" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="text-white/70 text-xs ml-1">{BUSINESS.rating} · {BUSINESS.reviewCount} reviews</span>
                </div>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-white/50 text-xs">Free, no obligation, takes 60 seconds</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <a href={BUSINESS.phoneTel} className="text-white/70 text-xs hover:text-white transition-colors">
                  Or call {BUSINESS.phone}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
