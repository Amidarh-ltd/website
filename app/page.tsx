import { Metadata } from "next";
import { HomeLayout } from "@/modules/home/layouts";

export const metadata: Metadata = {
  title: "Leading Exam Management System & Educational Technology Solutions",
  description: "Transform your educational institution with Amidarh's comprehensive exam management system. Streamline exam creation, scheduling, proctoring, and grading with AI-powered tools. Trusted by 500+ institutions worldwide.",
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
    "Trupper exam platform",
    "institutional exam software",
    "automated grading system",
    "exam security software",
    "academic assessment tools",
    "best exam management system",
    "top educational technology",
    "school management software",
    "university assessment platform"
  ],
  openGraph: {
    title: "Leading Exam Management System & Educational Technology Solutions",
    description: "Transform your educational institution with Amidarh's comprehensive exam management system. Streamline exam creation, scheduling, proctoring, and grading with AI-powered tools.",
    url: "https://amidarh.com",
    siteName: "Amidarh",
    images: [
      {
        url: "/images/amidarh-homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Amidarh - Leading Exam Management System for Educational Institutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading Exam Management System & Educational Technology Solutions",
    description: "Transform your educational institution with Amidarh's comprehensive exam management system. Streamline exam creation, scheduling, proctoring, and grading with AI-powered tools.",
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