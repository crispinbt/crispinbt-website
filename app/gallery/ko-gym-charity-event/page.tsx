"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Generate photo entries for DSCF3513–DSCF3895
const photos: { file: string; alt: string }[] = Array.from(
  { length: 3895 - 3513 + 1 },
  (_, i) => ({
    file: `DSCF${3513 + i}.JPG`,
    alt: "KO Gym Charity Event",
  })
);

const IMAGE_DIR = "/images/gallery/ko-gym-charity-event";

export default function KOGymGalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/gallery"
        className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]"
      >
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Gallery
      </Link>

      {/* Header */}
      <header className="mt-6">
        <h1 className="text-3xl font-bold text-[var(--primary)]">
          KO Gym Charity Event
        </h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          15 February 2026
        </p>
        <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
          Photos from the charity event at KO Gym. Click any photo to view it
          full size, or use the download button to save it.
        </p>
      </header>

      {/* Photo grid */}
      {photos.length > 0 ? (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.file}
              className="overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]"
            >
              {/* Clickable image */}
              <button
                onClick={() => setLightbox(index)}
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
              >
                <Image
                  src={`${IMAGE_DIR}/${photo.file}`}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>

              {/* Always-visible download button */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs text-[var(--muted-foreground)]">
                  {photo.file}
                </span>
                <a
                  href={`${IMAGE_DIR}/${photo.file}`}
                  download={photo.file}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <svg
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-xl border border-dashed border-[var(--border)] p-12 text-center">
          <p className="text-[var(--muted-foreground)]">
            Photos coming soon. Check back shortly!
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && photos[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev / Next arrows */}
          {lightbox > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox - 1);
              }}
              className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Previous photo"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {lightbox < photos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Next photo"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMAGE_DIR}/${photos[lightbox].file}`}
              alt={photos[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
            {/* Download button in lightbox */}
            <a
              href={`${IMAGE_DIR}/${photos[lightbox].file}`}
              download={photos[lightbox].file}
              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
