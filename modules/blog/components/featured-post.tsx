"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";
import { MarketingImage } from "@/components/ui/marketing-image";
import { fadeUp } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

export function FeaturedPost({ post }: { post: BlogPostMeta }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/blog/${post.slug}`}
        className="group grid items-center gap-8 rounded-2xl border border-border-soft bg-surface p-6 sm:p-8 lg:grid-cols-2 lg:gap-12"
      >
        <MarketingImage
          src={post.cover.src}
          alt={post.cover.alt}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          containerClassName="aspect-[16/10] border border-border-soft transition-transform duration-300 group-hover:-translate-y-1"
        />
        <div>
          <p className="text-xs font-semibold tracking-[0.08em] text-accent uppercase">
            Featured · {post.category}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
            {post.description}
          </p>
          <p className="mt-5 text-sm text-ink-3">
            {post.author} · {formatDate(post.date)} · {post.readingTime}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
