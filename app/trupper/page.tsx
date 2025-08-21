import { Metadata } from "next";
import TrupperLayout from "@/modules/trupper/layout";

export const metadata: Metadata = {
  title: "Trupper - Comprehensive Exam Management System for Educational Institutions",
  description: "Trupper is the ultimate exam management system for schools, universities, and educational institutions. Create, schedule, proctor, and grade exams with AI-powered tools. Streamline your entire exam process from creation to results.",
  keywords: [
    "Trupper exam management",
    "exam management system",
    "online exam platform",
    "school exam software",
    "university exam management",
    "digital exam creation",
    "exam scheduling software",
    "online test proctoring",
    "automated exam grading",
    "question bank management",
    "student assessment platform",
    "academic testing software",
    "exam security system",
    "result management software",
    "educational assessment tools",
    "institutional exam platform",
    "exam automation software",
    "digital assessment platform",
    "test creation software",
    "exam administration system",
    "best exam management software",
    "top exam platform",
    "school management system",
    "university assessment software"
  ],
  openGraph: {
    title: "Trupper - Comprehensive Exam Management System for Educational Institutions",
    description: "Trupper is the ultimate exam management system for schools, universities, and educational institutions. Create, schedule, proctor, and grade exams with AI-powered tools.",
    url: "https://amidarh.com/trupper",
    siteName: "Amidarh",
    images: [
      {
        url: "/images/trupper/trupper-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trupper Exam Management System - Comprehensive Digital Assessment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trupper - Comprehensive Exam Management System for Educational Institutions",
    description: "Trupper is the ultimate exam management system for schools, universities, and educational institutions. Create, schedule, proctor, and grade exams with AI-powered tools.",
    images: ["/images/trupper/trupper-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://amidarh.com/trupper",
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

export default function TrupperPage() {
  return (
    <>
      {/* Structured Data for Trupper Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Trupper Exam Management System",
            "description": "Comprehensive exam management system for educational institutions with AI-powered features for exam creation, scheduling, proctoring, and grading.",
            "brand": {
              "@type": "Brand",
              "name": "Amidarh"
            },
            "category": "Educational Software",
            "url": "https://amidarh.com/trupper",
            "image": "https://amidarh.com/images/trupper/dashboard.png",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://amidarh.com/trupper"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "200",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Dr. Sarah Johnson"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Trupper has revolutionized our exam management process. The AI-powered features save us hours of work."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Prof. Michael Chen"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "The best exam management system we've used. Intuitive interface and powerful features."
              }
            ],
            "featureList": [
              "AI-powered exam creation",
              "Automated scheduling system",
              "Advanced proctoring tools",
              "Instant grading and results",
              "Question bank management",
              "Student performance analytics",
              "Secure exam environment",
              "Mobile-responsive design"
            ]
          })
        }}
      />
      
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Trupper exam management system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trupper is a comprehensive exam management system designed for educational institutions. It provides tools for creating, scheduling, proctoring, and grading exams with AI-powered automation."
                }
              },
              {
                "@type": "Question",
                "name": "How does Trupper help with exam creation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trupper offers AI-powered exam creation tools, question bank management, and automated scheduling to streamline the entire exam process from creation to results."
                }
              },
              {
                "@type": "Question",
                "name": "Is Trupper suitable for universities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Trupper is designed for all educational institutions including universities, schools, and training centers. It scales to handle large numbers of students and complex exam requirements."
                }
              }
            ]
          })
        }}
      />
      
      <TrupperLayout />
    </>
  );
}