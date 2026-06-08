"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CswcLogo from "./CswcLogo";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service area", href: "#service-area" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-ink)]/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-content flex items-center justify-between py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" aria-label="Crystal Spring Water Co home">
          <CswcLogo light className="h-7 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Sticky CTA group */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneTel}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            aria-label="Call Crystal Spring Water Co"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            {BUSINESS.phone}
          </a>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors"
            style={{ background: "var(--color-cream)", color: "var(--color-ink)" }}
          >
            Get my free water test
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-[var(--color-ink)]" aria-label="Mobile navigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white text-base py-1 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneTel}
            className="text-white font-semibold text-base"
          >
            {BUSINESS.phone}
          </a>
          <a
            href="#lead-form"
            className="w-full text-center rounded-full px-5 py-3 text-sm font-semibold"
            style={{ background: "var(--color-cream)", color: "var(--color-ink)" }}
            onClick={() => setOpen(false)}
          >
            Get my free water test
          </a>
        </nav>
      )}
    </header>
  );
}
