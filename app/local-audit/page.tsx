import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Visibility Audit",
  description:
    "A written audit of how your local business shows up on Google: profile, reviews against the leaders, and your site on a phone. Back in two working days.",
};

const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-lg border-2 border-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]";

const inReport = [
  {
    title: "Where you stand",
    body: "Whether people find you when they search your name, and whether you're in Google's top 20 results for your trade in your town.",
  },
  {
    title: "Your reviews against the businesses listed first",
    body: "How many reviews the three businesses Google lists first have, how recent they are, and where you sit against them.",
  },
  {
    title: "Your website on a phone",
    body: "A screenshot at phone size, whether the text is readable and whether your number can be tapped to call. I also check whether your pages tell Google what you do and where.",
  },
  {
    title: "Three fixes, in order",
    body: "What each one is, why it matters for your business and roughly how much work it is. You can do most of them without me.",
  },
  {
    title: "What I didn't check",
    body: "Every report says what it didn't cover, so you know where the edges are.",
  },
];

const faqs = [
  {
    q: "How is this different from the free audit?",
    a: "The free audit is a first look at your website's SEO, and I'll reply to say whether there's something worth fixing. This one is about how a local business shows up on Google. It compares you with the businesses listed above you and checks your website on a phone. It also puts the fixes in order, with how much work each one is.",
  },
  {
    q: "Do you need access to my Google account or website?",
    a: "No. Everything I check is public: your Google listing, Google's results and your website as a customer sees it.",
  },
  {
    q: "What if there's nothing much wrong?",
    a: "Then the report says so. It'll also tell you what's already working, so you don't change it.",
  },
  {
    q: "Will you try to sell me something afterwards?",
    a: "The report ends with one line saying I'm happy to do the work if you'd like. I'd say most of the fixes are things you, or whoever looks after your website, can do yourselves.",
  },
];

export default function LocalAuditPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          A written audit of how you show up on Google
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          I&apos;ll look at your Google profile, your reviews and your website,
          and compare you with the businesses Google lists first for what you
          do. You get a short written report within two working days. It tells
          you what I&apos;d fix first, and why.
        </p>
        <p className="mt-6 text-3xl font-bold text-[var(--primary)]">£195</p>
        <p className="mt-1 text-[var(--muted-foreground)]">
          Launch price for the first ten businesses, then £295.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className={primaryBtn}>
            Book your audit
          </Link>
        </div>
      </header>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          What&apos;s in the report
        </h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          It&apos;s short and written in plain English. Every figure comes from
          Google or your own website on the day I checked.
        </p>
        <dl className="mt-6 space-y-5">
          {inReport.map((item) => (
            <div key={item.title}>
              <dt className="font-semibold text-[var(--primary)]">{item.title}</dt>
              <dd className="mt-1 text-[var(--muted-foreground)]">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-[var(--primary)]">How it works</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
            <li>You book, and tell me your business name and what you&apos;d like to be found for</li>
            <li>I run the checks and write it up myself</li>
            <li>The report lands in your inbox within two working days, ready to read on your phone, print or forward</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[var(--primary)]">What it costs</h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            £195 is the launch price for the first ten businesses. After that
            it&apos;s £295.
          </p>
          <p className="mt-3 text-[var(--muted-foreground)]">
            If you&apos;d like me to do any of the fixes, the audit fee comes off
            the price when you go ahead within 14 days.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[var(--primary)]">Common questions</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-[var(--primary)]">{f.q}</h3>
              <p className="mt-1 text-[var(--muted-foreground)]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-[var(--border)] pt-10">
        <h2 className="text-xl font-semibold text-[var(--primary)]">Book your audit</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          £195 for the first ten, then £295. Back within two working days.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className={primaryBtn}>
            Book your audit
          </Link>
          <Link href="/audit" className={secondaryBtn}>
            Or get the free website audit
          </Link>
        </div>
      </section>
    </div>
  );
}
