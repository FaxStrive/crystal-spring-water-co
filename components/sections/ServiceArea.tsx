import { BUSINESS } from "@/lib/business";

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      aria-labelledby="sa-heading"
      className="section-rhythm"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="max-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-light mb-4">Where we work</p>
            <h2
              id="sa-heading"
              className="heading-display text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Same-day service across{" "}
              <em>Central Florida.</em>
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed max-w-md">
              {BUSINESS.reviewCount} installs and counting. We cover Orlando, its suburbs, and surrounding communities within a 60-mile radius.
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center rounded-full px-7 py-4 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "var(--color-cream)", color: "var(--color-ink)" }}
            >
              Check my zip code &rarr;
            </a>
          </div>

          <div>
            <p
              className="mb-4 text-xs"
              style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Cities served
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {BUSINESS.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: "inline-block",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.4)",
                      flexShrink: 0,
                    }}
                  />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
