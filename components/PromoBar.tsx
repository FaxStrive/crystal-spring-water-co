export default function PromoBar() {
  return (
    <div
      role="banner"
      aria-label="Promotional offer"
      className="w-full text-center text-xs tracking-wide py-2 px-4 font-medium"
      style={{ background: "var(--color-ink)", color: "#fff" }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono, monospace)", letterSpacing: "0.12em", fontSize: "0.6875rem", textTransform: "uppercase" }}>
        Summer 2026 special &mdash; $500 off whole-home installs, ends{" "}
        <strong>Aug 31, 2026</strong>. Call{" "}
        <a href="tel:+14075550199" className="underline underline-offset-2 hover:no-underline">
          (407) 555-0199
        </a>
      </span>
    </div>
  );
}
