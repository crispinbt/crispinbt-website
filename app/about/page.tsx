import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | SEO Consultant, Swansea",
  description:
    "SEO consultant with nearly a decade of experience. Former BBC and ITV journalist, based in Swansea and working with businesses across the UK. Technical SEO and content strategy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl">
          <Image
            src="/images/headshot.jpg"
            alt="Crispin Boden-Tebbutt"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[var(--primary)]">
            About Crispin
          </h1>
          <p className="mt-2 text-[var(--muted-foreground)]">
            SEO Consultant · Swansea, South Wales
          </p>
        </div>
      </header>

      <div className="mt-12 space-y-8 text-[var(--muted-foreground)]">
        <section>
          <p className="leading-relaxed">
            I&apos;m an SEO consultant based in Swansea, South Wales, with
            nearly a decade in search. I work with businesses across the UK,
            from startups to household names.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Career highlights
          </h2>
          <p className="mt-4 leading-relaxed">
            I started out in journalism, at the BBC, ITV and national
            publications. It still shapes how I think about content: be clear,
            make sure it&apos;s true, and write it for the person searching. I
            moved into SEO when I saw how often the technical side decided
            whether good content got found at all.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Why SEO?
          </h2>
          <p className="mt-4 leading-relaxed">
            SEO sits between content, technology and data, and it rewards
            people who check their work. I specialise in technical SEO and
            content strategy because that&apos;s where I usually find the
            biggest wins. Often it&apos;s on sites where the effort has gone
            into links and a vague &quot;content marketing&quot; plan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            How I work
          </h2>
          <p className="mt-4 leading-relaxed">
            I don&apos;t promise rankings or make up ROI predictions. I measure
            what can be measured, rank the work by impact against effort
            (RICE), and hand over recommendations your team can act on
            straight away.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Local work
          </h2>
          <p className="mt-4 leading-relaxed">
            For businesses in Swansea, Neath Port Talbot and Carmarthenshire,
            I do Google Business Profile and map pack work under the name{" "}
            <a
              href="https://citedsearch.co.uk/"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Cited Search
            </a>
            . Same person, same company (CBT Consulting Ltd).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Connect
          </h2>
          <p className="mt-4 flex gap-6">
            <a
              href="https://www.linkedin.com/in/crispinbt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@crispinboden-tebbutt5715"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              YouTube
            </a>
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-[var(--border)] bg-[var(--primary)]/5 p-6">
        <p className="text-[var(--primary)]">
          Based in Swansea, South Wales. Serving businesses across the
          UK.
        </p>
      </div>
    </div>
  );
}
