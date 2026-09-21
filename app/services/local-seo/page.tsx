import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Local SEO for Multi-Location Brands",
  description:
    "Local SEO for multi-location brands and agencies across the UK: Google Business Profiles, location pages, citations and map pack tracking.",
};

export default function LocalSEOPage() {
  return (
    <ServiceLayout
      path="/services/local-seo"
      title="Local SEO"
      subtitle="Google Business Profiles, location pages and citations for multi-location brands and the agencies that look after them."
    >
      <h2>What it is</h2>
      <p>
        Local SEO decides whether you show up in the map pack and the local
        results when someone searches for what you do near them. It covers
        your Google Business Profiles, the location pages on your site, how
        consistently your name, address and phone number appear across the
        web, and the local links and reviews behind each branch.
      </p>
      <p>
        With several locations the problems are usually about consistency.
        Each profile looks fine on its own, but side by side the categories,
        details and location pages don&apos;t match, and the weaker branches
        quietly drop out of the pack.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        Brands with several locations or service areas across the UK, and
        agencies that need local work delivered under their own name.
      </p>
      <p>
        If you&apos;re a single business in Swansea, Neath Port Talbot or
        Carmarthenshire, I do that work under the name{" "}
        <a
          href="https://citedsearch.co.uk/"
          className="text-[var(--accent)] hover:underline"
        >
          Cited Search
        </a>
        , with fixed prices and a free profile check.
      </p>

      <h2>The process</h2>
      <ol>
        <li>Every Google Business Profile audited against the others</li>
        <li>Name, address and phone checked across citations and directories</li>
        <li>Location pages audited, or planned if you don&apos;t have them</li>
        <li>Map pack positions tracked on a grid, not from one postcode</li>
        <li>A review process your staff can run, asking every customer</li>
      </ol>

      <h2>Deliverables</h2>
      <ul>
        <li>Profile-by-profile findings and fixes</li>
        <li>Location page recommendations</li>
        <li>Citation corrections and local link targets</li>
        <li>Ongoing rank tracking and reporting (optional)</li>
      </ul>

      <h2>Typical timeline</h2>
      <p>
        The initial audit takes 2–3 weeks, depending on the number of
        locations. Profile and category fixes can move rankings within weeks.
        Reviews, citations and links take months.
      </p>
    </ServiceLayout>
  );
}
