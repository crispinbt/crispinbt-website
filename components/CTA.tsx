import Link from "next/link";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primary =
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] focus:ring-[var(--accent)]";
  const secondary =
    "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white focus:ring-[var(--primary)]";

  return (
    <Link
      href={href}
      className={`${base} ${variant === "primary" ? primary : secondary} ${className}`}
    >
      {children}
    </Link>
  );
}
