const SERVICES = [
  {
    slug: "whole-home-filtration",
    title: "Whole-home filtration",
    desc: "Whole-home treatment from the main line in. Clean water at every outlet — kitchen, showers, and appliances.",
    price: "From $1,299",
  },
  {
    slug: "water-softener",
    title: "Water softener",
    desc: "Hard water destroys appliances and dries out skin. We install and maintain softeners built for Florida water.",
    price: "From $899",
  },
  {
    slug: "reverse-osmosis",
    title: "Reverse osmosis",
    desc: "Under-sink or whole-house RO. Removes 99.9% of contaminants from your drinking water.",
    price: "From $599",
  },
  {
    slug: "well-water",
    title: "Well water treatment",
    desc: "Iron, sulfur, bacteria, and hardness. We test your well and build a system for exactly what's in it.",
    price: "From $1,499",
  },
  {
    slug: "uv-purification",
    title: "UV purification",
    desc: "Chemical-free bacteria and virus elimination. Add to any filtration system.",
    price: "From $299",
  },
  {
    slug: "maintenance",
    title: "Maintenance plans",
    desc: "Annual service, filter swaps, and priority same-day dispatch. Starting at $9/month.",
    price: "From $9/mo",
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-rhythm"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="max-content">
        <div className="max-w-xl mb-14">
          <p className="eyebrow eyebrow-light mb-4">What we install</p>
          <h2
            id="services-heading"
            className="heading-display text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Every system. One team.{" "}
            <em>Same day.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {SERVICES.map((svc) => (
            <div
              key={svc.slug}
              className="flex flex-col gap-3 p-7 lg:p-8 group cursor-pointer transition-colors hover:bg-white/5"
              style={{ background: "var(--color-ink)" }}
            >
              <h3
                className="font-semibold text-base text-white"
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {svc.desc}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span
                  className="text-xs font-semibold"
                  style={{
                    fontFamily: "var(--font-geist-mono, monospace)",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {svc.price}
                </span>
                <a
                  href="#lead-form"
                  className="text-xs text-white/70 group-hover:text-white transition-colors flex items-center gap-1"
                >
                  Get a quote &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
