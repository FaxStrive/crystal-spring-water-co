const STEPS = [
  {
    num: "01",
    title: "Free water test",
    desc: "We come to your home and run a 5-test analysis for hardness, chlorine, iron, pH, and bacteria. No charge, 30 minutes.",
  },
  {
    num: "02",
    title: "Custom recommendation",
    desc: "Based on your results, we recommend a system sized for your home and water type. No cookie-cutter packages.",
  },
  {
    num: "03",
    title: "Same-day install",
    desc: "Our licensed tech installs your system the same day in most cases. Done in 4-6 hours. Up to 10-year warranty starts immediately.",
  },
  {
    num: "04",
    title: "Enjoy better water",
    desc: "Soft skin, no scale, no taste. Your appliances last longer and your water costs drop. We check in at 30 days.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      className="section-rhythm"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-content">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">How it works</p>
          <h2
            id="hiw-heading"
            className="heading-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--color-ink)",
            }}
          >
            From test to install{" "}
            <em>in one visit.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col gap-4">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full text-sm font-bold"
                style={{
                  background: "var(--color-ink)",
                  color: "white",
                  fontFamily: "var(--font-geist-mono, monospace)",
                  letterSpacing: "0.05em",
                }}
              >
                {step.num}
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block h-px mt-6 -ml-8 w-[calc(100%+2rem)]"
                  style={{ background: "var(--color-ink)", opacity: 0.12 }}
                  aria-hidden
                />
              )}
              <h3
                className="font-semibold text-base"
                style={{ color: "var(--color-ink)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
