import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDir = path.join(process.cwd(), "content/case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  clientIndustry: string;
  challenge: string;
  approach: string;
  results: string;
  timeline: string;
  image?: string;
};

export type CaseStudy = {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
};

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDir)) return [];
  return fs.readdirSync(caseStudiesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePath = path.join(caseStudiesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as CaseStudyFrontmatter,
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs();
  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((c): c is CaseStudy => c !== null);
}
