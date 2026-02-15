import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Technical SEO | Swansea SEO Consultant",
  description:
    "Technical SEO audits, site health checks and Core Web Vitals optimisation. Fix crawlability, indexing and technical foundations.",
};

export default function TechnicalSEOPage() {
  return (
    <ServiceLayout
      title="Technical SEO"
      subtitle="Site audits, crawlability and Core Web Vitals. Fix the technical foundations before scaling."
    >
      <h2>What it is</h2>
      <p>
        Technical SEO ensures search engines can crawl, index and understand
        your site. It covers site structure, performance, schema markup and
        on-page fundamentals. Without solid technical foundations, even the
        best content will struggle to rank.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        Sites with traffic plateaus, indexing issues, migrations or legacy
        technical debt. E-commerce, SaaS and content-heavy sites benefit
        most. Ideal when you suspect technical barriers are holding you
        back.
      </p>

      <h2>The process</h2>
      <ol>
        <li>Full crawl and technical audit</li>
        <li>Indexation and crawlability analysis</li>
        <li>Core Web Vitals and performance review</li>
        <li>Structured data and schema audit</li>
        <li>Actionable recommendations with prioritisation</li>
        <li>Implementation support (optional)</li>
      </ol>

      <h2>Deliverables</h2>
      <ul>
        <li>Technical audit report with findings</li>
        <li>Prioritised action list (RICE-weighted)</li>
        <li>Keyword research and gap analysis</li>
        <li>Competitor benchmark (optional)</li>
      </ul>

      <h2>Typical timeline</h2>
      <p>2–3 weeks for a full audit. Implementation varies by scope.</p>
    </ServiceLayout>
  );
}
