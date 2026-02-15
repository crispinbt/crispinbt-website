import { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/lib/case-studies";

const baseUrl = "https://crispinbt.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getCaseStudySlugs();
  const caseStudyUrls = slugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
  }));

  const staticRoutes = [
    "",
    "/services",
    "/services/technical-seo",
    "/services/content-strategy",
    "/services/local-seo",
    "/services/seo-automation",
    "/services/custom-projects",
    "/packages",
    "/process",
    "/case-studies",
    "/agency-partners",
    "/about",
    "/contact",
    "/audit",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudyUrls];
}
