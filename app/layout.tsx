import type { Metadata, Viewport } from "next";
import { MotionConfig } from "framer-motion";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteSchema } from "@/components/JsonLd";
import { ThemeScript } from "@/components/ThemeScript";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SEO Consultant Swansea & UK | Crispin Boden-Tebbutt",
    template: "%s | Crispin Boden-Tebbutt",
  },
  description:
    "Data-driven SEO consultant based in Swansea, South Wales. Technical SEO, content strategy, local SEO and custom projects for UK businesses.",
  metadataBase: new URL("https://crispinbt.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Crispin Boden-Tebbutt",
    // Relative URL: Next resolves it per-route against metadataBase, so each
    // page gets its own og:url instead of inheriting the homepage's.
    url: "./",
  },
  twitter: {
    card: "summary_large_image",
  },
  // Relative canonical: resolved per-route against metadataBase. An absolute
  // URL here is inherited by every child page and points them all at the
  // homepage.
  alternates: { canonical: "./" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeScript />
        <MotionConfig reducedMotion="user">
          <SiteSchema />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
