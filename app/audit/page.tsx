import type { Metadata } from "next";
import Link from "next/link";
import { AuditForm } from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "Free SEO Audit",
  description:
    "Request a free SEO audit. Share your website and challenges and I'll send back what I find. No obligation.",
};

export default function AuditPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          Get Your Free SEO Audit
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Send me your website and what&apos;s worrying you about it. I&apos;ll
          take a look and write back with what I find. No obligation.
        </p>
      </header>

      <section className="mt-10 space-y-4 text-[var(--muted-foreground)]">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          What I look at
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Whether your important pages are indexed, and why not if they aren&apos;t</li>
          <li>Crawl problems: broken links, redirect chains, blocked or duplicate pages</li>
          <li>Titles, headings and internal links on the pages that matter most</li>
          <li>Page speed and Core Web Vitals on your key templates</li>
          <li>How you compare with the sites ranking above you</li>
        </ul>
        <h2 className="pt-4 text-xl font-semibold text-[var(--primary)]">
          What you get back
        </h2>
        <p>
          A short written summary of the problems I&apos;d fix first, with the
          reason for each. It&apos;s a first look rather than the full paid
          audit, but it should tell you whether there&apos;s something worth
          fixing. If there isn&apos;t, I&apos;ll tell you that too.
        </p>
        <p>
          If you&apos;re a local business and want to know how you show up on
          Google, the{" "}
          <Link href="/local-audit" className="text-[var(--accent)] hover:underline">
            local visibility audit
          </Link>{" "}
          is the one for that.
        </p>
      </section>

      <div className="mt-12">
        <AuditForm />
      </div>
    </div>
  );
}
