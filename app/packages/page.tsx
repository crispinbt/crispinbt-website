import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Packages & Pricing | Swansea SEO Consultant",
  description:
    "SEO packages from £1,200 audit to ongoing retainer. Foundation Audit, SEO Strategy and day-rate options. Transparent pricing for UK businesses.",
};

const packages = [
  {
    name: "Foundation Audit",
    price: "£1,200 – £1,800",
    type: "one-time",
    description: "Technical audit, keyword research, competitor analysis and actionable recommendations.",
    features: [
      "Technical SEO audit",
      "Keyword research",
      "Competitor analysis",
      "Actionable recommendations",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
    highlighted: false,
  },
  {
    name: "SEO Strategy",
    price: "£2,500 – £4,000",
    type: "one-time",
    description: "Everything in Foundation plus content architecture and 3-month roadmap.",
    features: [
      "Everything in Foundation",
      "Content architecture plan",
      "3-month roadmap",
      "Implementation guidance",
    ],
    cta: "Request Proposal",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    name: "Ongoing Retainer",
    price: "£300–400/day",
    type: "monthly",
    description: "Flexible scope, full implementation and strategic partnership.",
    features: [
      "Flexible scope",
      "Full implementation",
      "Monthly reporting",
      "Strategic partnership",
    ],
    cta: "Let's Talk",
    ctaHref: "/contact",
    highlighted: false,
  },
];

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          Packages & Pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
          Transparent pricing. Choose a package or get a bespoke quote for
          custom projects.
        </p>
      </header>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-xl border p-8 ${
              pkg.highlighted
                ? "border-[var(--accent)] bg-[var(--accent)]/5"
                : "border-[var(--border)] bg-[var(--card-bg)]"
            }`}
          >
            {pkg.highlighted && (
              <span className="inline-block rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white">
                Popular
              </span>
            )}
            <h2 className="mt-4 text-xl font-bold text-[var(--primary)]">
              {pkg.name}
            </h2>
            <p className="mt-1 text-2xl font-semibold text-[var(--accent)]">
              {pkg.price}
            </p>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              {pkg.type}
            </p>
            <p className="mt-4 text-[var(--muted-foreground)]">
              {pkg.description}
            </p>
            <ul className="mt-6 space-y-2">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--accent)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <CTA
              href={pkg.ctaHref}
              variant={pkg.highlighted ? "primary" : "secondary"}
              className="mt-8 w-full justify-center"
            >
              {pkg.cta}
            </CTA>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-[var(--border)] bg-[var(--primary)]/5 p-8 text-center">
        <h2 className="text-xl font-bold text-[var(--primary)]">
          Custom projects available
        </h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Day rates £300–400/day. Need something specific? Contact for a
          bespoke quote.
        </p>
        <CTA href="/contact" variant="primary" className="mt-6">
          Request Custom Quote
        </CTA>
      </div>
    </div>
  );
}
