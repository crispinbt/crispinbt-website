import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-[var(--primary)]">404</h1>
      <p className="mt-4 text-center text-[var(--muted-foreground)]">
        This page could not be found.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border-2 border-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
