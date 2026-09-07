"use client";

import Script from "next/script";

type CalendlyEmbedProps = {
  /** A scheduling link that has been verified to resolve. */
  url: string;
};

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
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
