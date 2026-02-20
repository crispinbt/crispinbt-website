import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/agency-partners", label: "Agency Partners" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--footer-bg)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Crispin Boden-Tebbutt</p>
            <p className="mt-1 text-sm text-white/80">
              Based in Swansea, South Wales
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Crispin Boden-Tebbutt
          </p>
          <a
            href="https://www.linkedin.com/in/crispinbt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/80 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
