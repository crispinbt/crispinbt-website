"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  projectDetails: string;
  budget?: string;
  honeypot?: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;
    const params: Record<string, string> = { "form-name": "contact" };
    (["name", "email", "phone", "service", "projectDetails", "budget"] as const).forEach((key) => {
      const v = data[key];
      if (v) params[key] = String(v);
    });
    try {
      const response = await fetch("/__forms.html", {
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
        <p className="font-semibold text-[var(--primary)]">Thanks for your message.</p>
        <p className="mt-2 text-[var(--muted-foreground)]">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave blank</label>
        <input id="honeypot" type="text" {...register("honeypot")} tabIndex={-1} />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--primary)]">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--primary)]">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--primary)]">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[var(--primary)]">
          Service interested in *
        </label>
        <select
          id="service"
          {...register("service", { required: "Please select a service" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        >
          <option value="">Select...</option>
          <option value="technical-seo">Technical SEO</option>
          <option value="content-strategy">Content Strategy</option>
          <option value="local-seo">Local SEO</option>
          <option value="seo-automation">SEO Automation</option>
          <option value="custom-projects">Custom Projects</option>
          <option value="agency-partnership">Agency Partnership</option>
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectDetails" className="block text-sm font-medium text-[var(--primary)]">
          Project details *
        </label>
        <textarea
          id="projectDetails"
          rows={4}
          {...register("projectDetails", { required: "Project details are required" })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        {errors.projectDetails && (
          <p className="mt-1 text-sm text-red-600">{errors.projectDetails.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-[var(--primary)]">
          Budget range (optional)
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="mt-1 w-full rounded-lg border border-[var(--border)] px-4 py-2 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        >
          <option value="">Select...</option>
          <option value="under-2k">Under £2,000</option>
          <option value="2k-5k">£2,000 – £5,000</option>
          <option value="5k-10k">£5,000 – £10,000</option>
          <option value="10k+">£10,000+</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--accent)] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
      >
        Send message
      </button>
    </form>
  );
}
