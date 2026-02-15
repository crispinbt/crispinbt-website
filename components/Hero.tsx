import Image from "next/image";
import { CTA } from "./CTA";

type HeroProps = {
  title: string;
  subheading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({
  title,
  subheading,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-mesh">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--primary)] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            {subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <CTA href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CTA>
            )}
            {secondaryCta && (
              <CTA href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </CTA>
            )}
            {tertiaryCta && (
              <CTA href={tertiaryCta.href} variant="secondary">
                {tertiaryCta.label}
              </CTA>
            )}
          </div>
        </div>
        {imageSrc && (
          <div className="relative shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt ?? "Professional headshot"}
              width={300}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
