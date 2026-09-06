import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  readTime?: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

export function getPostSlugs(type: "blog" | "projeler") {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string, type: "blog" | "projeler") {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: { ...data, slug: realSlug } as PostMeta,
    content,
  };
}

export function getAllPosts(type: "blog" | "projeler"): PostMeta[] {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, type))
    .filter(Boolean)
    .map((post) => post!.meta)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  return posts;
}
