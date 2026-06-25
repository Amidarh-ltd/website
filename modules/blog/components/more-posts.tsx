"use client";

import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PostCard } from "./post-card";

export function MorePosts({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="w-full bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-2xl font-semibold text-ink"
        >
          More from the blog
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
