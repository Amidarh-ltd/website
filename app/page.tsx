import { Metadata } from "next";
import { HomeLayout } from "@/modules/home/layouts";

export const metadata: Metadata = {
  title: "Educational Technology Solutions for Learning & Institutions",
  description:
    "Amidarh builds educational tools for every learner: Trupper for institutional learning management and Flow for AI-powered learning with course generation, flashcards, quizzes, and progress tracking.",
  keywords: [
    "exam management system",
    "online exam platform",
    "digital assessment",
    "school exam software",
    "university exam management",
    "educational technology",
    "test creation software",
    "exam scheduling system",
    "student assessment platform",
    "academic testing software",
    "exam proctoring",
    "question bank management",
    "result management system",
    "educational software",
    "learning management system",
    "Trupper LMS",
    "institutional learning platform",
    "institutional exam software",
    "automated grading system",
    "exam security software",
    "academic assessment tools",
    "best exam management system",
    "top educational technology",
    "school management software",
    "university assessment platform",
    "AI-powered learning platform",
    "adaptive learning app",
    "AI course generator",
    "flashcards and quiz app",
    "student progress tracking",
    "Flow by Amidarh",
  ],
  openGraph: {
    title: "Educational Technology Solutions for Learning & Institutions",
    description:
      "Discover Amidarh products: Trupper for institutional learning management and Flow for AI-powered learning with generated courses, flashcards, quizzes, and clear progress tracking.",
    url: "https://amidarh.com",
    siteName: "Amidarh",
    images: [
      {
        url: "/images/amidarh-homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Amidarh - Educational Technology for Learning and Institutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational Technology Solutions for Learning & Institutions",
    description:
      "Discover Amidarh products: Trupper for institutional learning management and Flow for AI-powered learning with generated courses, flashcards, quizzes, and clear progress tracking.",
    images: ["/images/amidarh-homepage-twitter.jpg"],
  },
  alternates: {
    canonical: "https://amidarh.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeLayout />;
}
