import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";
import { CTA } from "@/components/CTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.frontmatter.title} | Case Study`,
    description: `${cs.frontmatter.challenge} ${cs.frontmatter.results}`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const { content } = await compileMDX({
    source: cs.content,
    options: { parseFrontmatter: false },
  });

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm">
        <Link
          href="/case-studies"
          className="text-[var(--accent)] hover:underline"
        >
          ← Case Studies
        </Link>
      </nav>

      <header>
        <span className="text-sm font-medium text-[var(--accent)]">
          {cs.frontmatter.clientIndustry}
        </span>
        <h1 className="mt-2 text-3xl font-bold text-[var(--primary)]">
          {cs.frontmatter.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
          <span>
            <strong>Challenge:</strong> {cs.frontmatter.challenge}
          </span>
          <span>
            <strong>Results:</strong> {cs.frontmatter.results}
          </span>
          <span>
            <strong>Timeline:</strong> {cs.frontmatter.timeline}
          </span>
        </div>
      </header>

      <div className="mt-12 prose prose-[var(--primary)] max-w-none [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--primary)] [&_p]:text-[var(--muted-foreground)]">
        {content}
      </div>

      <footer className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          Ready to get similar results?
        </h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Book a free consultation or request a custom quote.
        </p>
        <div className="mt-6 flex gap-4">
          <CTA href="/contact" variant="primary">
            Book Consultation
          </CTA>
          <CTA href="/audit" variant="secondary">
            Get Free Audit
          </CTA>
        </div>
      </footer>
    </article>
  );
}
