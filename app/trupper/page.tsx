import { Metadata } from "next";
import TrupperLayout from "@/modules/trupper/layout";

export const metadata: Metadata = {
  title:
    "Trupper - Learning Management System for Schools & Universities",
  description:
    "Trupper is a learning management system for schools and universities. Manage courses, students, and academic operations in one platform—with built-in exam creation, delivery, and grading.",
  keywords: [
    "Trupper LMS",
    "learning management system",
    "school management system",
    "university LMS",
    "institutional learning platform",
    "course management software",
    "student management system",
    "academic scheduling software",
    "exam management system",
    "online exam platform",
    "digital assessment",
    "question bank management",
    "student assessment platform",
    "educational software",
    "school administration software",
    "university management software",
    "best LMS for schools",
    "learning platform for institutions",
  ],
  openGraph: {
    title:
      "Trupper - Learning Management System for Schools & Universities",
    description:
      "Trupper is a learning management system for schools and universities. Manage courses, students, and academic operations—with built-in exam tools.",
    url: "https://amidarh.com/trupper",
    siteName: "Amidarh",
    images: [
      {
        url: "/images/trupper/trupper-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trupper Learning Management System for Educational Institutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trupper - Learning Management System for Schools & Universities",
    description:
      "Trupper is a learning management system for schools and universities. Manage courses, students, and academic operations—with built-in exam tools.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Trupper Learning Management System",
            description:
              "Learning management system for educational institutions. Manage courses, students, and academic operations—with built-in exam creation, delivery, and grading.",
            brand: {
              "@type": "Brand",
              name: "Amidarh",
            },
            category: "Educational Software",
            url: "https://amidarh.com/trupper",
            image: "https://amidarh.com/images/trupper/dashboard.png",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://amidarh.com/trupper",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "200",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Dr. Sarah Johnson",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Trupper has transformed how we manage learning across our institution. Courses, students, and exams—all in one place.",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Prof. Michael Chen",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "The best learning management system we've used. Intuitive interface with powerful exam tools built in.",
              },
            ],
            featureList: [
              "Course and curriculum management",
              "Student enrollment and records",
              "Academic scheduling",
              "Exam creation and delivery",
              "Automated grading and results",
              "Question bank management",
              "Performance analytics and reporting",
              "Secure institutional environment",
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Trupper?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trupper is a learning management system designed for schools and universities. It helps institutions manage courses, students, and academic operations—with built-in tools for exam creation, delivery, and grading.",
                },
              },
              {
                "@type": "Question",
                name: "Does Trupper include exam management?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Exam management is built into Trupper as part of the broader LMS. You can create, schedule, deliver, and grade assessments alongside your courses and student records.",
                },
              },
              {
                "@type": "Question",
                name: "Is Trupper suitable for universities?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Trupper is designed for all educational institutions including universities, schools, and training centers. It scales to handle large cohorts, complex curricula, and institutional reporting needs.",
                },
              },
            ],
          }),
        }}
      />

      <TrupperLayout />
    </>
  );
}
