"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";
import { MarketingImage } from "@/components/ui/marketing-image";
import { fadeUp } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <motion.article variants={fadeUp}>
      <Link href={`/blog/${post.slug}`} className="group block">
        <MarketingImage
          src={post.cover.src}
          alt={post.cover.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          containerClassName="aspect-[16/10] border border-border-soft transition-transform duration-300 group-hover:-translate-y-1"
        />
        <div className="mt-4">
          <p className="text-xs font-semibold tracking-[0.08em] text-accent uppercase">
            {post.category}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-2">
            {post.description}
          </p>
          <p className="mt-3 text-xs text-ink-3">
            {formatDate(post.date)} · {post.readingTime}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
