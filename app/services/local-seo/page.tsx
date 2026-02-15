import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Local SEO | Swansea SEO Consultant",
  description:
    "Google Business Profile optimisation, location pages and local link building. Win local pack rankings in Swansea and across the UK.",
};

export default function LocalSEOPage() {
  return (
    <ServiceLayout
      title="Local SEO"
      subtitle="Google Business Profile, location pages and local link building. Win local pack and map rankings."
    >
      <h2>What it is</h2>
      <p>
        Local SEO optimises your visibility in location-based search. It
        covers Google Business Profile, location landing pages, NAP
        consistency and local link building. Essential for businesses
        serving specific areas—from Swansea to UK-wide.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        Local businesses, multi-location brands, service-area businesses
        and anyone targeting &quot;[service] near me&quot; or
        &quot;[service] Swansea&quot; queries. Works for single locations
        and expanding networks.
      </p>

      <h2>The process</h2>
      <ol>
        <li>Google Business Profile audit and optimisation</li>
        <li>NAP and citation consistency check</li>
        <li>Location page audit (or creation)</li>
        <li>Local link building strategy</li>
        <li>Review and reputation guidance</li>
      </ol>

      <h2>Deliverables</h2>
      <ul>
        <li>GBP optimisation report</li>
        <li>Location page recommendations</li>
        <li>Citation and link targets</li>
        <li>Ongoing monitoring setup (optional)</li>
      </ul>

      <h2>Typical timeline</h2>
      <p>Initial audit: 2–3 weeks. Results vary by market competitiveness.</p>
    </ServiceLayout>
  );
}
