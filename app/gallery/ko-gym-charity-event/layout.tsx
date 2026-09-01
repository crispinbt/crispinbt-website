import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KO Gym Charity Event Photos",
  description:
    "Browse and download photos from the charity event at KO Gym, 15 February 2026.",
  // Personal photo galleries, deliberately kept out of the index: they are here
  // for the people who attended, not to rank. `follow` so the links still flow.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
