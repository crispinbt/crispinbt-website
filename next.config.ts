import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "logo.clearbit.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
