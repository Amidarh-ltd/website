import type { BlogPostMeta } from "@/lib/blog";
import { FeaturedPost } from "./featured-post";
import { PostGrid } from "./post-grid";

export function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogPostMeta[];
  categories: string[];
}) {
  const [featured, ...rest] = posts;

  return (
    <section className="w-full bg-white px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {featured && <FeaturedPost post={featured} />}

        <div className="mt-16">
          <PostGrid posts={rest} categories={categories} />
        </div>
      </div>
    </section>
  );
}
