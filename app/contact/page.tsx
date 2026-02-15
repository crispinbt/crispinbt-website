import type { Metadata } from "next";
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
        <p className="mt-4 text-[var(--muted-foreground)]">
          Based in Swansea, South Wales. Get in touch for a free audit or
          consultation.
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
          Alternatively
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@crispinbt.co.uk"
              className="text-[var(--accent)] hover:underline"
            >
              hello@crispinbt.co.uk
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/crispinbodentebbutt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              linkedin.com/in/crispinbodentebbutt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
