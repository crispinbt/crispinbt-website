import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Crispin Boden-Tebbutt - SEO Consultant",
  description:
    "SEO consultant with nearly a decade of experience. BBC and ITV journalism background. Based in Swansea, serving UK businesses. Data-driven, technical SEO focus.",
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
            I&apos;m an SEO consultant with nearly a decade of experience
            helping businesses grow organic traffic and revenue. Based in
            Swansea, South Wales, I work with clients across the UK—
            from startups to household names.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Career highlights
          </h2>
          <p className="mt-4 leading-relaxed">
            My background is in journalism—BBC, ITV and national
            publications. That foundation shapes how I think about
            content: clarity, credibility and user intent matter. I
            moved into SEO when I saw how data and technical
            optimisation could unlock results that content alone
            couldn&apos;t achieve.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Why SEO?
          </h2>
          <p className="mt-4 leading-relaxed">
            SEO sits at the intersection of content, technology and
            data. It rewards rigour and iteration. I specialise in
            technical SEO and content strategy because that&apos;s where
            the biggest wins often hide—especially when everyone else
            is chasing links and vague &quot;content marketing.&quot;
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Philosophy
          </h2>
          <p className="mt-4 leading-relaxed">
            Data-driven, no fluff. I don&apos;t promise guarantees or
            make up ROI predictions. I focus on what we can measure,
            prioritise with frameworks like RICE, and deliver
            actionable work that moves the needle.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Connect
          </h2>
          <p className="mt-4">
            <a
              href="https://www.linkedin.com/in/crispinbt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              LinkedIn
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
