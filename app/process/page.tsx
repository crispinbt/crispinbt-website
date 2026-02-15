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
      "Technical health check",
      "Competitive landscape analysis",
      "Keyword gap analysis",
    ],
  },
  {
    title: "Strategy Development",
    items: [
      "Hub-and-spoke content architecture",
      "Prioritisation (RICE framework)",
      "Topical authority mapping",
    ],
  },
  {
    title: "Implementation",
    items: [
      "On-page optimisation",
      "Technical fixes",
      "Content creation or optimisation",
    ],
  },
  {
    title: "Authority Building",
    items: [
      "E-E-A-T signals",
      "Link acquisition",
      "Brand mentions",
    ],
  },
  {
    title: "Measurement & Iteration",
    items: [
      "GSC and Analytics tracking",
      "Monthly reporting",
      "Continuous optimisation",
    ],
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
          implementation and iteration.
        </p>
      </header>

      <div className="mt-16 space-y-12">
        {steps.map((step, i) => (
          <div key={step.title} className="relative pl-8">
            <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              {i + 1}
            </div>
            <h2 className="text-xl font-semibold text-[var(--primary)]">
              {step.title}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-[var(--muted-foreground)]">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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
