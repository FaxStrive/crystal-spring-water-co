interface Props {
  light?: boolean;
  className?: string;
}

export default function CswcLogo({ light = false, className = "" }: Props) {
  const color = light ? "#ffffff" : "var(--color-ink)";
  return (
    <svg
      width="220"
      height="36"
      viewBox="0 0 220 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Crystal Spring Water Co"
      role="img"
      className={className}
    >
      {/* Wordmark — Instrument Serif style rendered as SVG text */}
      <text
        x="0"
        y="28"
        fontFamily="'Instrument Serif', Georgia, serif"
        fontWeight="400"
        fontSize="26"
        letterSpacing="-1"
        fill={color}
      >
        Crystal Spring Water Co
      </text>
    </svg>
  );
}
