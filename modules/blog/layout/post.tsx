import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { getAllPosts, type BlogPost } from "@/lib/blog";
import { PostHeader } from "../components/post-header";
import { PostContent } from "../components/post-content";
import { MorePosts } from "../components/more-posts";

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const morePosts = getAllPosts()
    .filter((other) => other.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PostHeader post={post} />
      <article className="w-full bg-white px-4 pb-24 sm:px-6 lg:px-8">
        <PostContent source={post.content} />
      </article>
      <MorePosts posts={morePosts} />
      <Footer />
    </main>
  );
}
