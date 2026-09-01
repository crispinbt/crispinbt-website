type TestimonialProps = {
  quote: string;
  name: string;
  company: string;
  result?: string;
  /** Where the quote is publicly verifiable, e.g. the Upwork profile. */
  sourceUrl?: string;
  sourceLabel?: string;
};

export function Testimonial({
  quote,
  name,
  company,
  result,
  sourceUrl,
  sourceLabel,
}: TestimonialProps) {
  return (
    <blockquote className="flex flex-col rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-lg">
      <p className="text-[var(--primary)]">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4 pt-2">
        <cite className="not-italic">
          <span className="font-semibold text-[var(--primary)]">{name}</span>
          <span className="text-[var(--muted-foreground)]">, {company}</span>
        </cite>
        {result && (
          <p className="mt-2 text-sm font-medium text-[var(--accent)]">
            {result}
          </p>
        )}
        {sourceUrl && sourceLabel && (
          <p className="mt-2 text-sm">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] underline decoration-dotted underline-offset-4 hover:text-[var(--accent)]"
            >
              {sourceLabel}
            </a>
          </p>
        )}
      </footer>
    </blockquote>
  );
}
