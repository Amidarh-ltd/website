import { Metadata } from "next";
import { AboutPage } from "@/modules/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Amidarh Technologies — our mission to make quality education accessible through AI-powered learning and institutional management tools.",
  alternates: {
    canonical: "https://amidarh.com/about",
  },
  openGraph: {
    title: "About | Amidarh",
    description:
      "Learn about Amidarh Technologies — our mission to make quality education accessible through AI-powered learning and institutional management tools.",
    url: "https://amidarh.com/about",
    siteName: "Amidarh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AboutPage />;
}
