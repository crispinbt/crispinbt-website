import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Process & Methodology | Crispin Boden-Tebbutt",
  description:
    "How I approach SEO: Discovery & Audit, Strategy, Implementation, Authority Building and Measurement. Data-driven methodology for UK businesses.",
};

const steps = [
  {
    title: "Discovery & Audit",
    items: [
      "Technical health check – site structure, crawlability, Core Web Vitals",
      "Competitive landscape analysis – where you sit vs competitors",
      "Keyword gap analysis – opportunities you’re missing",
      "Content audit – what’s working, what’s not",
    ],
    detail:
      "We start by understanding where you are. A full SEO audit reveals technical issues, content gaps and competitive positioning. No guessing—everything is data-backed.",
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
      "Strategy turns audit findings into an actionable roadmap. We prioritise work that moves the needle, not busy-work. Delivery plans are flexible to fit your budget and timeline.",
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
      "Execution is where results happen. Whether it’s technical fixes, new content or local optimisation, work is delivered in clear sprints with regular check-ins.",
  },
  {
    title: "Authority Building",
    items: [
      "E-E-A-T signals – expertise, experience, authoritativeness, trust",
      "Link acquisition – outreach, digital PR, partnerships",
      "Brand mentions – visibility beyond direct backlinks",
    ],
    detail:
      "Authority compounds over time. We build E-E-A-T into your content and presence, and pursue links and mentions that support your rankings and reputation.",
  },
  {
    title: "Measurement & Iteration",
    items: [
      "GSC and Analytics tracking – traffic, rankings, conversions",
      "Monthly reporting – clear metrics and narrative",
      "Continuous optimisation – re-prioritise based on data",
    ],
    detail:
      "SEO is iterative. We track what matters, report in plain English and adjust the plan as results come in. No vanity metrics—focus on outcomes that affect revenue.",
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
          A data-driven approach that moves from audit to strategy to
          implementation and iteration. Each phase builds on the last.
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
          One-off consultancy: £400/day. Ongoing work: £300/day. Multi-channel
          projects: £300/day. Delivery plans are flexible and tailored to your
          needs. For unique projects or custom strategies, we can scope and quote
          accordingly.
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
