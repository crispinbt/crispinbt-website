import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Custom SEO Projects & Builds",
  description:
    "Website builds, one-off tools and SEO consultancy for UK businesses, scoped per project. Day rates £350–400.",
};

export default function CustomProjectsPage() {
  return (
    <ServiceLayout
      path="/services/custom-projects"
      title="Custom Projects"
      subtitle="Website builds, one-off tools and consultancy for anything that doesn't fit a package."
    >
      <h2>What it is</h2>
      <p>
        Custom projects cover anything outside standard audits or retainers.
        Website builds, migration support, custom dashboards, content
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
      <p>Defined per project. Day rates: £350–400/day.</p>

      <p className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--primary)]/5 p-4">
        <strong>Need something specific?</strong> Get in touch and I&apos;ll
        quote for it. No obligation.
      </p>
    </ServiceLayout>
  );
}
