import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { AnimateSection } from "@/components/AnimateSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
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

const testimonials = [
  {
    quote:
      "Crispin's technical SEO audit uncovered issues we had missed for years. Within three months we saw a 40% increase in organic traffic.",
    name: "Placeholder Client",
    company: "Technology Company",
    result: "+40% organic traffic",
  },
  {
    quote:
      "The content strategy he developed gave us a clear roadmap. We now rank for terms we never thought possible.",
    name: "Placeholder Client",
    company: "B2B Services",
    result: "Top 10 for target keywords",
  },
  {
    quote:
      "Professional, responsive and delivers. Exactly what you want from a freelance consultant.",
    name: "Placeholder Client",
    company: "Agency Partner",
    result: "Ongoing white-label partnership",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="SEO Consultant | Swansea, South Wales & UK-wide"
        subheading="Data-driven SEO that drives revenue, not just rankings"
        primaryCta={{ label: "Get Free Audit", href: "/audit" }}
        secondaryCta={{ label: "Book Consultation", href: "/contact" }}
        tertiaryCta={{ label: "View Services", href: "/services" }}
        imageSrc="/images/headshot.jpg"
        imageAlt="Crispin Boden-Tebbutt, SEO Consultant"
      />

      {/* Trust signals */}
      <AnimateSection>
      <section className="relative border-t border-[var(--border)] py-16 bg-mesh bg-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-[var(--muted-foreground)]">
            Trusted by leading UK brands
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            <Image
              src="https://logo.clearbit.com/penguinrandomhouse.com"
              alt="Penguin Random House"
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="https://logo.clearbit.com/imagination.com"
              alt="Imagination Technologies"
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="https://logo.clearbit.com/gocompare.com"
              alt="GoCompare"
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="https://logo.clearbit.com/amber.energy"
              alt="Amber Energy"
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-center text-sm text-[var(--muted-foreground)]">
            <div>
              <span className="block text-2xl font-bold text-[var(--accent)]">
                ~10
              </span>
              years experience
            </div>
            <div>
              <span className="block text-2xl font-bold text-[var(--accent)]">
                50+
              </span>
              projects completed
            </div>
            <div>
              <span className="block text-2xl font-bold text-[var(--accent)]">
                100%+
              </span>
              typical traffic increases
            </div>
          </div>
        </div>
      </section>
      </AnimateSection>

      <AnimateSection delay={0.1}>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            How I can help
          </h2>
          <p className="mt-2 text-[var(--muted-foreground)]">
            From technical audits to ongoing retainers, I offer SEO services that
            fit your needs.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>
      </AnimateSection>

      <AnimateSection delay={0.1}>
      <section className="relative border-t border-[var(--border)] py-16 bg-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            What clients say
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Testimonial
                key={i}
                quote={t.quote}
                name={t.name}
                company={t.company}
                result={t.result}
              />
            ))}
          </div>
        </div>
      </section>
      </AnimateSection>

      {/* Local element */}
      <section className="border-t border-[var(--border)] py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[var(--muted-foreground)]">
            Based in Swansea, serving UK businesses
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-[var(--border)] py-16 text-center bg-gradient-to-br from-[var(--accent)]/20 via-[var(--primary)] to-[var(--accent)]/10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            Ready to grow your organic traffic?
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Get a free audit or book a 30-minute consultation. No obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Get Free Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
