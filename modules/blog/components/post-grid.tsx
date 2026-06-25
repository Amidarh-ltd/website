"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/motion";
import { PostCard } from "./post-card";

export function PostGrid({
  posts,
  categories,
}: {
  posts: BlogPostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All" ? posts : posts.filter((post) => post.category === active),
    [posts, active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-pill border px-4 py-1.5 text-sm font-medium transition-colors",
              active === category
                ? "border-accent/20 bg-accent-soft text-accent"
                : "border-border-soft bg-transparent text-ink-2 hover:border-border hover:text-ink",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          variants={staggerContainer}
          className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-2">
          No posts in this category yet.
        </p>
      )}
    </div>
  );
}
