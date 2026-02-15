import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Custom Projects | Swansea SEO Consultant",
  description:
    "Website builds, bespoke tools and SEO consultancy. Tailored solutions for UK businesses. Day rates £300–400.",
};

export default function CustomProjectsPage() {
  return (
    <ServiceLayout
      title="Custom & Bespoke Work"
      subtitle="Website builds, bespoke tools and consultancy. When you need something tailored."
    >
      <h2>What it is</h2>
      <p>
        Custom projects cover anything outside standard audits or retainers.
        Website builds, migration support, bespoke dashboards, content
        projects or ad-hoc consultancy. Day rates apply for flexible,
        outcome-focused work.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        Clients with specific needs: a new site, a migration, a custom
        reporting solution or strategic advice without an ongoing retainer.
        Agencies needing white-label delivery. One-off or project-based
        engagements.
      </p>

      <h2>The process</h2>
      <ol>
        <li>Scoping call to define requirements</li>
        <li>Proposal with timeline and cost</li>
        <li>Agreed milestones and deliverables</li>
        <li>Delivery with regular check-ins</li>
        <li>Handover and documentation</li>
      </ol>

      <h2>Deliverables</h2>
      <p>
        Defined per project. Could include: new website, migration support,
        custom tooling, consultancy report or strategy document.
      </p>

      <h2>Typical timeline</h2>
      <p>Defined per project. Day rates: £300–400/day.</p>

      <p className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--primary)]/5 p-4">
        <strong>Need something specific?</strong> Contact for a bespoke
        quote. No obligation.
      </p>
    </ServiceLayout>
  );
}
