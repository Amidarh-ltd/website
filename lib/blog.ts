import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  role: string;
  category: string;
  cover: { src: string; alt: string };
  featured: boolean;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & { content: string };

function readPostMeta(filename: string, data: matter.GrayMatterFile<string>["data"], content: string): BlogPostMeta {
  return {
    slug: filename.replace(/\.mdx$/, ""),
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    role: data.role,
    category: data.category,
    cover: data.cover,
    featured: Boolean(data.featured),
    readingTime: readingTime(content).text,
  };
}

function readPostFile(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return { ...readPostMeta(filename, data, content), content };
}

export function getAllPosts(): BlogPostMeta[] {
  const filenames = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return filenames
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      return readPostMeta(filename, data, content);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.mdx`;
  if (!fs.existsSync(path.join(BLOG_DIR, filename))) {
    return null;
  }
  return readPostFile(filename);
}

export function getAllCategories(): string[] {
  const categories = new Set(getAllPosts().map((post) => post.category));
  return ["All", ...Array.from(categories)];
}
