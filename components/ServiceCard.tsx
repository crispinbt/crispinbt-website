import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {icon && (
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-[var(--primary)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium text-[var(--accent)] hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
