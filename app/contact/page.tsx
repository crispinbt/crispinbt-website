import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact | Swansea SEO Consultant",
  description:
    "Get in touch for a free SEO audit or 30-minute consultation. Based in Swansea, South Wales. Contact Crispin Boden-Tebbutt.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary)]">Contact</h1>
        <p className="mt-4 max-w-3xl text-[var(--muted-foreground)]">
          Based in Swansea, South Wales, working with clients across the UK.
          Get in touch for a free SEO audit or a 30-minute consultation, whether
          you need a one-off technical audit, an ongoing retainer, or white-label
          delivery behind your own agency brand.
        </p>
      </header>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Send a message
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Book a Free 30-min Consultation
          </h2>
          <p className="mt-2 text-[var(--muted-foreground)]">
            Pick a time that works for you.
          </p>
          <div className="mt-6">
            <CalendlyEmbed />
          </div>
        </section>
      </div>

      <div className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          What to include in your enquiry
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted-foreground)]">
          The more context you can give up front, the more useful the first
          conversation is. Helpful things to mention:
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-[var(--muted-foreground)]">
          <li>Your website address, and any other domains you own</li>
          <li>What you sell, and which pages or products matter most</li>
          <li>
            What has changed recently: a migration, a redesign, a traffic drop,
            or a new market
          </li>
          <li>Whether you have Google Search Console and Analytics access</li>
          <li>Who would implement the work: your team, your developer, or me</li>
        </ul>
      </div>

      <div className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          What I can help with
        </h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-[var(--muted-foreground)]">
          <li>
            <Link href="/services/technical-seo" className="text-[var(--accent)] hover:underline">
              Technical SEO
            </Link>{" "}
            — audits, crawlability, indexing and Core Web Vitals
          </li>
          <li>
            <Link href="/services/content-strategy" className="text-[var(--accent)] hover:underline">
              Content strategy
            </Link>{" "}
            — topical authority, hub-and-spoke architecture and E-E-A-T
          </li>
          <li>
            <Link href="/services/local-seo" className="text-[var(--accent)] hover:underline">
              Local SEO
            </Link>{" "}
            — Google Business Profile, location pages and local links
          </li>
          <li>
            <Link href="/services/seo-automation" className="text-[var(--accent)] hover:underline">
              SEO automation
            </Link>{" "}
            — custom tooling, programmatic SEO and reporting pipelines
          </li>
          <li>
            <Link href="/services/custom-projects" className="text-[var(--accent)] hover:underline">
              Custom projects
            </Link>{" "}
            — website builds, bespoke tools and one-off consultancy
          </li>
        </ul>
        <p className="mt-6 max-w-3xl text-[var(--muted-foreground)]">
          Not sure which you need? See{" "}
          <Link href="/packages" className="text-[var(--accent)] hover:underline">
            packages and pricing
          </Link>{" "}
          or{" "}
          <Link href="/process" className="text-[var(--accent)] hover:underline">
            how I work
          </Link>
          . Agencies looking for white-label delivery can read the{" "}
          <Link href="/agency-partners" className="text-[var(--accent)] hover:underline">
            agency partners
          </Link>{" "}
          page.
        </p>
      </div>

      <div className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          Alternatively
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:crispinbt@gmail.com"
              className="text-[var(--accent)] hover:underline"
            >
              crispinbt@gmail.com
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/crispinbt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              linkedin.com/in/crispinbt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
