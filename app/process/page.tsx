import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Process & Methodology",
  description:
    "How I approach SEO: audit, strategy, implementation, authority building and measurement. Five stages, priced by the day, for UK businesses.",
};

const steps = [
  {
    title: "Discovery & Audit",
    items: [
      "Technical health check – site structure, crawlability, Core Web Vitals",
      "Competitor analysis – where you sit against the sites outranking you",
      "Keyword gap analysis – opportunities you’re missing",
      "Content audit – what’s working, what’s not",
    ],
    detail:
      "I start with where you are now. The audit covers technical issues, content gaps and how you compare with competitors, and every finding comes with the data behind it.",
  },
  {
    title: "Strategy Development",
    items: [
      "Hub-and-spoke content architecture",
      "Prioritisation (RICE framework – impact vs effort)",
      "Topical authority mapping",
      "Delivery plan with clear milestones",
    ],
    detail:
      "The strategy turns the audit into a plan you can work through. I put the changes most likely to affect traffic and enquiries first, and fit the plan to your budget and timeline.",
  },
  {
    title: "Implementation",
    items: [
      "On-page optimisation – titles, meta, structure, intent alignment",
      "Technical fixes – indexing, redirects, schema, performance",
      "Content creation or optimisation – gap-filling, refreshes",
      "Local SEO – Google Business Profile, citations, reviews",
    ],
    detail:
      "Technical fixes, new content or local work, delivered in short blocks with regular check-ins. I can do it myself or brief your developers and writers.",
  },
  {
    title: "Authority Building",
    items: [
      "E-E-A-T signals – expertise, experience, authoritativeness, trust",
      "Link acquisition – outreach, digital PR, partnerships",
      "Brand mentions – visibility beyond direct backlinks",
    ],
    detail:
      "This is the slow part. I make sure your content shows real expertise and who’s behind it, and go after links and mentions from sites that are relevant to you.",
  },
  {
    title: "Measurement & Iteration",
    items: [
      "GSC and Analytics tracking – traffic, rankings, conversions",
      "Monthly reporting – clear metrics and narrative",
      "Continuous optimisation – re-prioritise based on data",
    ],
    detail:
      "I track traffic, rankings and enquiries, report in plain English, and change the plan when the results say so. Reports focus on the numbers that affect revenue.",
  },
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          Process & Methodology
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
          How a project runs, from the first audit to monthly measurement.
          Each stage builds on the one before it.
        </p>
      </header>

      <div className="mt-16 space-y-16">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-6">
            <div className="flex shrink-0">
              <div className="flex size-12 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-[var(--accent-foreground)]">
                {i + 1}
              </div>
            </div>
            <div className="min-w-0 flex-1 pb-8">
              <h2 className="text-xl font-semibold text-[var(--primary)]">
                {step.title}
              </h2>
              <p className="mt-3 text-[var(--muted-foreground)]">
                {step.detail}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          Pricing & delivery
        </h2>
        <p className="mt-3 text-[var(--muted-foreground)]">
          One-off consultancy: £400/day. Ongoing work: £350/day. Multi-channel
          projects: £350/day. The plan fits your budget, and anything that
          doesn&apos;t fit a day rate gets its own scope and quote.
        </p>
      </section>

      <div className="mt-16 border-t border-[var(--border)] pt-12 text-center">
        <p className="text-[var(--muted-foreground)]">
          Want to see how this works for your business?
        </p>
        <CTA href="/contact" variant="primary" className="mt-4">
          Book Free Consultation
        </CTA>
      </div>
    </div>
  );
}
