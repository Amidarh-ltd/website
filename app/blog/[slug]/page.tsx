import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogPostLayout from "@/modules/blog/layout/post";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found — Amidarh" };
  }

  return {
    title: `${post.title} — Amidarh Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://amidarh.com/blog/${post.slug}`,
      siteName: "Amidarh",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover.src, alt: post.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover.src],
    },
    alternates: {
      canonical: `https://amidarh.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostLayout post={post} />;
}
