type TestimonialProps = {
  quote: string;
  name: string;
  company: string;
  result?: string;
};

export function Testimonial({ quote, name, company, result }: TestimonialProps) {
  return (
    <blockquote className="rounded-xl border border-[var(--border)] bg-white p-6">
      <p className="text-[var(--primary)]">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4">
        <cite className="not-italic">
          <span className="font-semibold text-[var(--primary)]">{name}</span>
          <span className="text-[var(--muted-foreground)]">, {company}</span>
        </cite>
        {result && (
          <p className="mt-2 text-sm font-medium text-[var(--accent)]">
            {result}
          </p>
        )}
      </footer>
    </blockquote>
  );
}
