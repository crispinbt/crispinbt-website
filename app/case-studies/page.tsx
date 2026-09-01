import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Case Studies",
  description:
    "SEO case studies: migrations and redirect integrity, tracking breaks, Core Web Vitals, indexation diagnosis, content audits at scale and automation.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
          Real engagements, anonymised to sector and platform. The scale and
          diagnostic figures below come from crawl outputs, API pulls and verify
          scripts rather than from memory.
        </p>
      </header>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="block rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-xs font-medium text-[var(--accent)]">
              {cs.frontmatter.clientIndustry}
            </span>
            <h2 className="mt-2 text-lg font-semibold text-[var(--primary)]">
              {cs.frontmatter.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-sm text-[var(--muted-foreground)]">
              {cs.frontmatter.challenge}
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--accent)]">
              {cs.frontmatter.results}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-[var(--muted-foreground)]">
          Ready to discuss your project?
        </p>
        <CTA href="/contact" variant="primary" className="mt-4">
          Book Free Consultation
        </CTA>
      </div>
    </div>
  );
}
