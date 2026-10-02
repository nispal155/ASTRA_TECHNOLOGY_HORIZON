import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { isVisible } from "./content";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  legacyId?: string;
  draft: boolean;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  html: string;
}

/** Minimal front-matter parser for `key: value` lines between `---` fences. */
function parse(file: string) {
  const raw = fs.readFileSync(file, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter in ${file}`);
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  return { data, body: match[2] };
}

function toMeta(slug: string, data: Record<string, string>, body: string): PostMeta {
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || "Astra Technology Horizon Team",
    category: data.category || "Insights",
    image: data.image,
    imageAlt: data.imageAlt || "",
    legacyId: data.legacyId,
    draft: data.draft === "true",
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
  };
}

const slugs = () =>
  fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")) : [];

/** Posts sorted newest first; drafts excluded in production. */
export function getAllPosts(): PostMeta[] {
  return slugs()
    .map((slug) => {
      const { data, body } = parse(path.join(BLOG_DIR, `${slug}.md`));
      return toMeta(slug, data, body);
    })
    .filter(isVisible)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(file)) return null;
  const { data, body } = parse(file);
  const meta = toMeta(slug, data, body);
  if (!isVisible(meta)) return null;
  return { ...meta, html: marked.parse(body, { async: false }) };
}

/** Maps the old numeric /blog/1 URLs to their post slugs. */
export function getLegacyRedirects() {
  return getAllPostsIncludingDrafts()
    .filter((p) => p.legacyId)
    .map((p) => ({ legacyId: p.legacyId!, slug: p.slug }));
}

function getAllPostsIncludingDrafts(): PostMeta[] {
  return slugs().map((slug) => {
    const { data, body } = parse(path.join(BLOG_DIR, `${slug}.md`));
    return toMeta(slug, data, body);
  });
}
