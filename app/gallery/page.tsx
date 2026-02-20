import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Crispin Boden-Tebbutt",
  description:
    "Photo galleries from events and community projects.",
};

const galleries = [
  {
    slug: "ko-gym-charity-event",
    title: "KO Gym Charity Event",
    date: "15 February 2026",
    description:
      "Photos from the charity event held at KO Gym. Browse and download images from the day.",
    coverImage: "/images/gallery/ko-gym-charity-event/DSCF3513.JPG",
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary)]">Gallery</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
          Photo galleries from events and community projects. Click an event to
          browse and download images.
        </p>
      </header>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {galleries.map((gallery) => (
          <Link
            key={gallery.slug}
            href={`/gallery/${gallery.slug}`}
            className="group block overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] transition-shadow hover:shadow-md"
          >
            <div className="aspect-[16/10] w-full bg-[var(--border)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery.coverImage}
                alt={gallery.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-[var(--accent)]">
                {gallery.date}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-[var(--primary)]">
                {gallery.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {gallery.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
