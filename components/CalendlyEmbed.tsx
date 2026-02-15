"use client";

import Script from "next/script";

type CalendlyEmbedProps = {
  url?: string;
};

const defaultUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/crispinbt/30min";

export function CalendlyEmbed({ url = defaultUrl }: CalendlyEmbedProps) {
  return (
    <div className="min-h-[700px] w-full">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <iframe
        src={url}
        className="h-[700px] w-full min-w-full"
        frameBorder="0"
        title="Book a Free 30-min Consultation"
      />
    </div>
  );
}
