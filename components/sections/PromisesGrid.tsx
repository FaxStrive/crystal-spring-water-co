const PROMISES = [
  {
    icon: "⚡",
    headline: "Same-day install",
    body: "We book, pull permits, and install on the same day in most areas. No waiting weeks.",
  },
  {
    icon: "🛡",
    headline: "Up to 10-year warranty",
    body: "Labor included. Parts included. That's 3× the industry standard — in writing.",
  },
  {
    icon: "💧",
    headline: "Free 5-test analysis",
    body: "We test for hardness, chlorine, iron, pH, and bacteria. No charge, no pressure.",
  },
  {
    icon: "$",
    headline: "$0 down, 0% for 18 months",
    body: "Approved credit. Apply online in 2 minutes. Monthly as low as $37.",
  },
  {
    icon: "⭐",
    headline: "4.9 stars · 342 reviews",
    body: "Every review on Google is from a real Central Florida homeowner. Read them.",
  },
  {
    icon: "🔧",
    headline: "8 certified technicians",
    body: "WQA Certified Water Specialists. Florida License CFC1429876.",
  },
];

export default function PromisesGrid() {
  return (
    <section
      id="why-us"
      aria-labelledby="promises-heading"
      className="section-rhythm"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-content">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Why Crystal Spring</p>
          <h2
            id="promises-heading"
            className="heading-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--color-ink)",
            }}
          >
            6 things we do that most water companies{" "}
            <em>won&apos;t.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-ink)]/10">
          {PROMISES.map((p) => (
            <div
              key={p.headline}
              className="flex flex-col gap-3 p-7 lg:p-9"
              style={{ background: "var(--color-cream)" }}
            >
              <span className="text-2xl" aria-hidden>
                {p.icon}
              </span>
              <h3
                className="font-semibold text-base"
                style={{ color: "var(--color-ink)" }}
              >
                {p.headline}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
