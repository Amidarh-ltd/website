import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { getAllCategories, getAllPosts } from "@/lib/blog";
import { BlogHero } from "../components/blog-hero";
import { BlogIndex } from "../components/blog-index";

export default function BlogLayout() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogHero />
      <BlogIndex posts={posts} categories={categories} />
      <Footer />
    </main>
  );
}
