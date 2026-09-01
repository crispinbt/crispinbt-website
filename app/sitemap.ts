import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { getCaseStudySlugs } from "@/lib/case-studies";

const baseUrl = "https://crispinbt.co.uk";

/**
 * lastModified from the file's last git commit date, not `new Date()`. Using
 * the build time told crawlers every page changed on every deploy, which makes
 * the signal worthless.
 *
 * mtime is not usable on its own here: CI clones the repo fresh, so every file
 * would carry the build time anyway. Falls back to mtime only if git is
 * unavailable (e.g. a tarball deploy).
 */
function mtime(relPath: string): Date | undefined {
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", relPath], {
      cwd: process.cwd(),
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // fall through to mtime
  }
  try {
    return fs.statSync(path.join(process.cwd(), relPath)).mtime;
  } catch {
    return undefined;
  }
}

const staticRoutes: { path: string; source: string; priority: number }[] = [
  { path: "", source: "app/page.tsx", priority: 1.0 },
  { path: "/services", source: "app/services/page.tsx", priority: 0.9 },
  { path: "/services/technical-seo", source: "app/services/technical-seo/page.tsx", priority: 0.8 },
  { path: "/services/content-strategy", source: "app/services/content-strategy/page.tsx", priority: 0.8 },
  { path: "/services/local-seo", source: "app/services/local-seo/page.tsx", priority: 0.8 },
  { path: "/services/seo-automation", source: "app/services/seo-automation/page.tsx", priority: 0.8 },
  { path: "/services/custom-projects", source: "app/services/custom-projects/page.tsx", priority: 0.8 },
  { path: "/packages", source: "app/packages/page.tsx", priority: 0.9 },
  { path: "/process", source: "app/process/page.tsx", priority: 0.7 },
  { path: "/case-studies", source: "app/case-studies/page.tsx", priority: 0.8 },
  { path: "/agency-partners", source: "app/agency-partners/page.tsx", priority: 0.7 },
  { path: "/about", source: "app/about/page.tsx", priority: 0.7 },
  { path: "/contact", source: "app/contact/page.tsx", priority: 0.9 },
  { path: "/audit", source: "app/audit/page.tsx", priority: 0.9 },
  { path: "/gallery", source: "app/gallery/page.tsx", priority: 0.3 },
  { path: "/gallery/ko-gym-charity-event", source: "app/gallery/ko-gym-charity-event/page.tsx", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: mtime(r.source),
    priority: r.priority,
  }));

  const caseStudyUrls = getCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: mtime(`content/case-studies/${slug}.mdx`),
    priority: 0.6,
  }));

  return [...staticUrls, ...caseStudyUrls];
}
