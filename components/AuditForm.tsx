"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type AuditFormData = {
  websiteUrl: string;
  challenges: string[];
  email: string;
  name: string;
  honeypot?: string;
};

const challengeOptions = [
  "Traffic plateau or decline",
  "Indexing issues",
  "Low rankings",
  "Technical problems",
  "Content strategy",
  "Local visibility",
  "Migration or redesign",
  "Other",
];

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AuditFormData>();

  const onSubmit = async (data: AuditFormData) => {
    if (data.honeypot) return;
    const params: Record<string, string> = {
      "form-name": "free-audit",
      websiteUrl: data.websiteUrl,
      challenges: Array.isArray(data.challenges) ? data.challenges.join(", ") : "",
      email: data.email,
      name: data.name,
    };
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(params).toString(),
      });
      if (response.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-[var(--accent)] bg-[var(--accent)]/10 p-8 text-center">
        <p className="font-semibold text-[var(--primary)]">Request received.</p>
        <p className="mt-2 text-[var(--muted-foreground)]">
          I&apos;ll review your site and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="free-audit"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="free-audit" />
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="audit-honeypot">Leave blank</label>
        <input id="audit-honeypot" type="text" {...register("honeypot")} tabIndex={-1} />
      </div>

      <div>
        <label htmlFor="websiteUrl" className="block text-sm font-medium text-[var(--primary)]">
          Website URL *
        </label>
        <input
          id="websiteUrl"
          type="url"
          placeholder="https://yoursite.com"
          {...register("websiteUrl", { required: "Website URL is required" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        {errors.websiteUrl && (
          <p className="mt-1 text-sm text-red-600">{errors.websiteUrl.message}</p>
        )}
      </div>

      <div>
        <span className="block text-sm font-medium text-[var(--primary)]">
          Current challenges (select all that apply)
        </span>
        <div className="mt-2 space-y-2">
          {challengeOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={opt}
                {...register("challenges")}
                className="rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
              />
              <span className="text-sm text-[var(--muted-foreground)]">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="audit-name" className="block text-sm font-medium text-[var(--primary)]">
          Name *
        </label>
        <input
          id="audit-name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="audit-email" className="block text-sm font-medium text-[var(--primary)]">
          Email *
        </label>
        <input
          id="audit-email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--accent)] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
      >
        Get My Audit
      </button>
    </form>
  );
}
