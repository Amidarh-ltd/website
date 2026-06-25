import { Metadata } from "next";
import BlogLayout from "@/modules/blog/layout";

export const metadata: Metadata = {
  title: "Blog — Amidarh",
  description:
    "Product updates, engineering deep dives, and stories from schools, tutors, and teams using Trupper and Flow.",
  openGraph: {
    title: "Blog — Amidarh",
    description:
      "Product updates, engineering deep dives, and stories from schools, tutors, and teams using Trupper and Flow.",
    url: "https://amidarh.com/blog",
    siteName: "Amidarh",
    type: "website",
  },
  alternates: {
    canonical: "https://amidarh.com/blog",
  },
};

export default function BlogPage() {
  return <BlogLayout />;
}
