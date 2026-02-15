import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "Free SEO Audit | Swansea SEO Consultant",
  description:
    "Request a free SEO audit. Share your website and challenges for a data-driven assessment. No obligation.",
};

export default function AuditPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          Get Your Free SEO Audit
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Share your website and current challenges. I&apos;ll review and
          get back with initial findings. No obligation.
        </p>
      </header>
      <div className="mt-12">
        <AuditForm />
      </div>
    </div>
  );
}
