"use client";

import { useReducedMotion } from "motion/react";

const ITEMS = [
  "342 verified reviews",
  "4.9 Google stars",
  "Same-day install",
  "Up to 10-year warranty",
  "$0 down financing",
  "Free 5-test analysis",
  "Licensed CFC1429876",
  "Central Florida",
];

export default function MarqueeStrip() {
  const reduce = useReducedMotion();
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full overflow-hidden border-y"
      style={{
        background: "var(--color-cream)",
        borderColor: "rgba(13,40,81,0.1)",
        paddingBlock: "0.875rem",
      }}
      aria-hidden
    >
      <div
        className={reduce ? "flex flex-wrap gap-6 justify-center px-6" : "flex gap-0"}
        style={
          reduce
            ? undefined
            : {
                animation: "marquee 28s linear infinite",
                width: "max-content",
              }
        }
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              paddingInline: "2rem",
            }}
          >
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--color-ink)",
                opacity: 0.25,
                marginRight: "1.5rem",
              }}
            />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
