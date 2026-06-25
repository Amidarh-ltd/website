"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { MarketingImage } from "@/components/ui/marketing-image";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

export function PostHeader({ post }: { post: BlogPost }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-white px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-2xl"
      >
        <motion.div variants={fadeUp}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xs font-semibold tracking-[0.08em] text-accent uppercase"
        >
          {post.category}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-3 font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] text-ink"
        >
          {post.title}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-5 flex items-center gap-2 text-sm text-ink-2"
        >
          <span className="font-medium text-ink">{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{post.role}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10">
          <MarketingImage
            src={post.cover.src}
            alt={post.cover.alt}
            priority
            sizes="(max-width: 768px) 100vw, 700px"
            containerClassName="aspect-[16/9] border border-border-soft"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
