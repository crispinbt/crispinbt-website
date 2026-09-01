type LogoMarkProps = {
  /** Tailwind size classes, e.g. "size-8". */
  className?: string;
  /** Fill for the terminal node. Defaults to the theme accent. */
  nodeFill?: string;
  /** Set when the mark sits next to the name, so the name carries the label. */
  decorative?: boolean;
};

/**
 * The open-ring mark: a C that is also a crawl resolving at a single point.
 * The ring uses currentColor so it inherits the surrounding text colour and
 * follows the light/dark theme without a second copy.
 */
export function LogoMark({
  className = "size-8",
  nodeFill = "var(--accent)",
  decorative = true,
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Crispin Boden-Tebbutt"}
    >
      <path
        d="M38.745 13.676 A18 18 0 1 0 38.745 34.324"
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <circle cx="38.745" cy="34.324" r="6" fill={nodeFill} />
    </svg>
  );
}
