import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Agency Partners | White-Label SEO - Crispin Boden-Tebbutt",
  description:
    "White-label SEO delivery for UK branding and digital agencies. Technical audits, content strategy and client reporting. Discretion guaranteed.",
};

export default function AgencyPartnersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          Agency Partners
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
          Trusted by leading UK branding and digital agencies
        </p>
      </header>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            White-label SEO delivery
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            I provide white-label SEO services to agencies who need
            capacity, expertise or both. Your branding, your client
            relationship, my delivery. Discretion is guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Services for agencies
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--muted-foreground)]">
            <li>White-label SEO delivery</li>
            <li>Technical audits</li>
            <li>Content strategy</li>
            <li>Client reporting (your templates)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Benefits of partnering
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--muted-foreground)]">
            <li>Access to nearly a decade of SEO experience</li>
            <li>Technical depth without hiring</li>
            <li>Flexible capacity for peaks and projects</li>
            <li>Professional, discreet service</li>
          </ul>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--primary)]/5 p-8">
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Discretion guaranteed
          </h2>
          <p className="mt-2 text-[var(--muted-foreground)]">
            Your clients stay yours. I work behind the scenes with no
            mention of third-party involvement unless you want it.
          </p>
        </section>
      </div>

      <div className="mt-16 text-center">
        <CTA href="/contact" variant="primary">
          Discuss Partnership
        </CTA>
      </div>
    </div>
  );
}
