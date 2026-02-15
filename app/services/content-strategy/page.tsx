import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Content Strategy | Swansea SEO Consultant",
  description:
    "Hub-and-spoke content architecture, E-E-A-T signals and topical authority. Data-driven content strategy for UK businesses.",
};

export default function ContentStrategyPage() {
  return (
    <ServiceLayout
      title="Content Strategy"
      subtitle="Hub-and-spoke architecture, E-E-A-T and topical authority. Content that ranks and converts."
    >
      <h2>What it is</h2>
      <p>
        Content strategy maps your content to search demand. Hub-and-spoke
        architecture, keyword clustering and E-E-A-T signals build topical
        authority. The goal is a content plan that earns rankings and
        supports conversions, not just traffic.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        B2B, SaaS, professional services and content-driven brands. Sites
        with scattered content or unclear content direction. Teams ready to
        invest in content but needing a clear roadmap.
      </p>

      <h2>The process</h2>
      <ol>
        <li>Keyword research and search intent mapping</li>
        <li>Competitor content gap analysis</li>
        <li>Hub-and-spoke architecture design</li>
        <li>Topical authority mapping</li>
        <li>Prioritisation (RICE or similar)</li>
        <li>Content briefs and implementation guidance</li>
      </ol>

      <h2>Deliverables</h2>
      <ul>
        <li>Content architecture document</li>
        <li>3–6 month content roadmap</li>
        <li>Keyword clusters and briefs</li>
        <li>E-E-A-T and UX recommendations</li>
      </ul>

      <h2>Typical timeline</h2>
      <p>Strategy phase: 3–4 weeks. Roadmap can extend to 6+ months.</p>
    </ServiceLayout>
  );
}
