import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CTA } from "@/components/CTA";

const services = [
  {
    title: "Technical SEO",
    description:
      "Site audits, crawlability, Core Web Vitals and technical health. Fix the foundations before scaling.",
    href: "/services/technical-seo",
    icon: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Content Strategy",
    description:
      "Hub-and-spoke architecture, E-E-A-T signals and topical authority. Content that ranks and converts.",
    href: "/services/content-strategy",
    icon: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile optimisation, location pages and local link building. Win local search.",
    href: "/services/local-seo",
    icon: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "SEO Automation",
    description:
      "Custom tooling, programmatic SEO and process efficiency. Scale your efforts without scaling headcount.",
    href: "/services/seo-automation",
    icon: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Custom Projects",
    description:
      "Website builds, bespoke tools and consultancy. When you need something tailored.",
    href: "/services/custom-projects",
    icon: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

export const metadata: Metadata = {
  title: "SEO Services | Swansea SEO Consultant",
  description:
    "Technical SEO, content strategy, local SEO, SEO automation and custom projects. Based in Swansea, serving UK businesses.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          SEO Services
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
          Technical audits, content strategy, local SEO and custom projects.
          Based in Swansea, serving businesses across the UK.
        </p>
      </header>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.href}
            title={service.title}
            description={service.description}
            href={service.href}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-[var(--muted-foreground)]">
          Not sure where to start? Book a free consultation.
        </p>
        <CTA href="/contact" variant="primary" className="mt-4">
          Get Free Audit
        </CTA>
      </div>
    </div>
  );
}
