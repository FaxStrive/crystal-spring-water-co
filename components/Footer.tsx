import CswcLogo from "./CswcLogo";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--color-ink)" }}
      className="pt-16 pb-8"
    >
      <div className="max-content">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <CswcLogo light className="mb-5 h-6 w-auto" />
            <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-5">
              Whole-home water filtration for Florida families. Same-day install, up to 10-year warranty, $0 down financing.
            </p>
            <a
              href={BUSINESS.phoneTel}
              className="text-white font-semibold hover:text-white/80 transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <p className="text-white/45 text-xs mt-1">{BUSINESS.hours}</p>
          </div>

          {/* Services */}
          <div>
            <p
              className="mb-4 text-xs"
              style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {["Whole-home filtration", "Water softener", "Reverse osmosis", "Well water", "UV purification", "Maintenance plans"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="mb-4 text-xs"
              style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-2">
              <li><a href="#why-us" className="text-sm text-white/60 hover:text-white transition-colors">Why Crystal Spring</a></li>
              <li><a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How it works</a></li>
              <li><a href="#reviews" className="text-sm text-white/60 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#service-area" className="text-sm text-white/60 hover:text-white transition-colors">Service area</a></li>
              <li><a href="#lead-form" className="text-sm text-white/60 hover:text-white transition-colors">Free water test</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Crystal Spring Water Co &middot; {BUSINESS.licenseNumber} &middot; Orlando, FL
          </p>
          <div className="flex gap-5 text-xs text-white/35">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
