const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Winter Park",
    stars: 5,
    date: "March 2026",
    text: "Had my whole-home system installed in one day. The tech was here by 9am and done before lunch. Water smells and tastes completely different. Worth every penny.",
  },
  {
    name: "Carlos R.",
    location: "Orlando",
    stars: 5,
    date: "February 2026",
    text: "My water had an iron smell that was driving us crazy. Bryan's team fixed it same day. The 10-year warranty sealed the deal — no other company offered that.",
  },
  {
    name: "Jen & Mike T.",
    location: "Lake Mary",
    stars: 5,
    date: "January 2026",
    text: "We've been on well water for 10 years. Crystal Spring tested everything and installed a custom system in one visit. Our appliances stopped leaving stains within a week.",
  },
  {
    name: "Dave K.",
    location: "Maitland",
    stars: 5,
    date: "April 2026",
    text: "The free water test found hardness levels off the charts. The team explained everything, no upsell pressure at all. 2 months later, zero scale buildup on the faucets.",
  },
  {
    name: "Lisa N.",
    location: "Apopka",
    stars: 5,
    date: "May 2026",
    text: "Used $0 down financing and it's $42/month. Best decision we made for the house. Skin is softer, hair feels better, and I stopped buying bottled water.",
  },
  {
    name: "Tom B.",
    location: "Sanford",
    stars: 5,
    date: "June 2026",
    text: "Called at 8am, installed by 2pm the same day. These guys are the real deal. WQA certified, licensed, and actually showed up when they said they would.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="section-rhythm"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-content">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What customers say</p>
            <h2
              id="reviews-heading"
              className="heading-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "var(--color-ink)",
              }}
            >
              342 homeowners.{" "}
              <em>4.9 stars.</em>
            </h2>
          </div>
          <a
            href="https://g.co/kgs/crystalspringwater"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 shrink-0"
            style={{ color: "var(--color-muted)" }}
          >
            See all reviews on Google &rarr;
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-4 rounded-2xl p-6"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex items-center gap-1" aria-label={`${r.stars} stars`}>
                {[...Array(r.stars)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#fbbf24" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-ink)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {r.name}
                </p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  {r.location} &middot; {r.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-CTA adjacent to social proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--color-ink)", color: "white" }}
          >
            Get my free water test &rarr;
          </a>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            342 reviews &middot; 4.9 stars &middot; calls back within 5 min
          </p>
        </div>
      </div>
    </section>
  );
}
