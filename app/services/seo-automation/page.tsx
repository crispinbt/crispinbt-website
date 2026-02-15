import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "SEO Automation | Swansea SEO Consultant",
  description:
    "Custom SEO tooling, programmatic SEO and process efficiency. Scale your SEO efforts without scaling headcount.",
};

export default function SEOAutomationPage() {
  return (
    <ServiceLayout
      title="SEO Automation"
      subtitle="Custom tooling, programmatic SEO and process efficiency. Scale without scaling headcount."
    >
      <h2>What it is</h2>
      <p>
        SEO automation covers custom scripts, dashboards, reporting
        pipelines and programmatic content. It reduces manual work and
        surfaces insights that spreadsheets miss. Built on a decade of
        experience with technical SEO and tooling.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        In-house teams, agencies and ambitious brands. Anyone repeating
        audits, reports or data pulls manually. Clients with large sites,
        multiple properties or complex data needs.
      </p>

      <h2>The process</h2>
      <ol>
        <li>Discovery: identify repetitive tasks and data gaps</li>
        <li>Design: scope automation or tool requirements</li>
        <li>Build: scripts, APIs, dashboards or bespoke tools</li>
        <li>Deploy and document</li>
        <li>Iterate based on use</li>
      </ol>

      <h2>Deliverables</h2>
      <ul>
        <li>Custom scripts or tools</li>
        <li>Documentation and handover</li>
        <li>Integration with existing workflows</li>
        <li>Ongoing support (optional retainer)</li>
      </ul>

      <h2>Typical timeline</h2>
      <p>Varies by scope. Small automations: days. Full tooling: weeks to months.</p>
    </ServiceLayout>
  );
}
