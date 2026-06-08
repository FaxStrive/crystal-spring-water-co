"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";

export default function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", zip: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative isolate overflow-hidden flex flex-col justify-center"
      style={{
        background: "var(--color-ink)",
        minHeight: "100svh",
      }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.45 }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,40,81,0.6) 0%, rgba(13,40,81,0.35) 50%, rgba(13,40,81,0.85) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative max-content z-10 pt-12 pb-24 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline */}
          <div>
            <p className="eyebrow eyebrow-light mb-5">
              Central Florida Water Filtration &bull; Same-Day Install
            </p>
            <h1
              className="heading-display text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Soft water.{" "}
              <em style={{ fontStyle: "italic" }}>Clean water.</em>
              <br />
              Same-day install.
            </h1>
            <p
              className="text-white/75 text-lg mb-8 max-w-md"
              style={{ lineHeight: 1.65 }}
            >
              We install whole-home water filtration systems across Orlando and
              Central Florida in one day, backed by a{" "}
              <strong className="text-white font-semibold">
                10-year warranty
              </strong>{" "}
              &mdash; 3&times; the industry standard.
            </p>

            {/* Trust signal */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="#fbbf24"
                    aria-hidden
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span
                  className="text-white font-semibold text-sm ml-1"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {BUSINESS.rating} stars &middot; {BUSINESS.reviewCount} reviews
                </span>
              </div>
              <span className="text-white/50 hidden sm:inline">|</span>
              <span className="text-white/70 text-sm">
                {BUSINESS.licenseNumber}
              </span>
            </div>
          </div>

          {/* Right: 3-field lead form */}
          <div
            id="lead-form"
            className="rounded-2xl p-7 lg:p-9"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <svg
                  className="mx-auto mb-4"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="heading-display text-white text-2xl mb-2">
                  We&apos;ll call you within 5 minutes
                </p>
                <p className="text-white/70 text-sm">
                  Check your phone &mdash; our office is calling now.
                </p>
              </div>
            ) : (
              <>
                <p
                  className="eyebrow eyebrow-light mb-3"
                  style={{ fontSize: "0.7rem" }}
                >
                  Free 5-test water analysis &mdash; takes 60 seconds
                </p>
                <h2
                  className="heading-display text-white mb-6"
                  style={{ fontSize: "1.6rem", lineHeight: 1.1 }}
                >
                  Get my free water test
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                  aria-label="Request free water test"
                >
                  <div>
                    <label htmlFor="hero-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] bg-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--color-ink)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-phone" className="sr-only">
                      Your phone number
                    </label>
                    <input
                      id="hero-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] bg-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--color-ink)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-zip" className="sr-only">
                      Your zip code
                    </label>
                    <input
                      id="hero-zip"
                      type="text"
                      required
                      autoComplete="postal-code"
                      inputMode="numeric"
                      maxLength={5}
                      placeholder="Zip code"
                      value={form.zip}
                      onChange={(e) => setForm({ ...form, zip: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] bg-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--color-ink)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ background: "var(--color-cream)", color: "var(--color-ink)" }}
                  >
                    Get my free water test &rarr;
                  </button>
                </form>

                <p className="text-white/50 text-xs mt-4 text-center">
                  342 reviews &middot; 4.9 stars &middot; We call back within 5 min
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
