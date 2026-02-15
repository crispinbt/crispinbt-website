import { CTA } from "./CTA";

type ServiceLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function ServiceLayout({ title, subtitle, children }: ServiceLayoutProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            {subtitle}
          </p>
        )}
      </header>
      <div className="mt-12 space-y-8 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--primary)] [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_p]:text-[var(--muted-foreground)]">
        {children}
      </div>
      <footer className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--primary)]">
          Ready to get started?
        </h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Book a free consultation or request a custom quote.
        </p>
        <div className="mt-6 flex gap-4">
          <CTA href="/contact" variant="primary">
            Enquire now
          </CTA>
          <CTA href="/contact" variant="secondary">
            Book consultation
          </CTA>
        </div>
      </footer>
    </article>
  );
}
