import { Metadata } from "next";
import TrupperLayout from "@/modules/trupper/layout";

export const metadata: Metadata = {
  title:
    "Trupper - Learning Platform for Schools, Tutors & Companies",
  description:
    "Trupper is a learning platform for schools, online tutors, and companies. Manage courses, live classes, learners, and exams in one place—with built-in exam creation, delivery, and grading.",
  keywords: [
    "Trupper LMS",
    "learning management system",
    "school management system",
    "university LMS",
    "learning platform for tutors",
    "staff training software",
    "online tutoring platform",
    "course management software",
    "student management system",
    "live class software",
    "virtual classroom software",
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
    "learning platform for schools, tutors and companies",
  ],
  openGraph: {
    title:
      "Trupper - Learning Platform for Schools, Tutors & Companies",
    description:
      "Trupper is a learning platform for schools, online tutors, and companies. Manage courses, live classes, learners, and exams—with built-in exam tools.",
    url: "https://amidarh.com/trupper",
    siteName: "Amidarh",
    images: [
      {
        url: "/images/trupper/trupper-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trupper - Learning Platform for Schools, Tutors, and Companies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trupper - Learning Platform for Schools, Tutors & Companies",
    description:
      "Trupper is a learning platform for schools, online tutors, and companies. Manage courses, live classes, learners, and exams—with built-in exam tools.",
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
            name: "Trupper Learning Platform",
            description:
              "Learning platform for schools, online tutors, and companies. Manage courses, live classes, learners, and exams—with built-in exam creation, delivery, and grading.",
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
                  "Trupper has transformed how we manage learning across our school. Courses, students, and exams—all in one place.",
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
              "Course, content, and resource management",
              "Live classes and virtual classrooms",
              "Student and trainee enrollment and records",
              "Scheduling for classes, terms, and sessions",
              "Exam creation and delivery",
              "Automated grading and results",
              "Question bank management",
              "Performance analytics and reporting",
              "Secure environment for schools, tutors, and companies",
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
                  text: "Trupper is a learning platform for schools, online tutors, and companies. It helps you manage courses, live classes, learners, and exams—with built-in tools for exam creation, delivery, and grading.",
                },
              },
              {
                "@type": "Question",
                name: "Does Trupper include exam management?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Exam management is built into Trupper alongside courses and live classes. You can create, schedule, deliver, and grade assessments alongside your course and learner records.",
                },
              },
              {
                "@type": "Question",
                name: "Is Trupper only for schools and universities?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Trupper is also used by online tutors running live classes and companies training their staff, in addition to schools, universities, and training centers. It scales from individual tutors to large institutions.",
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
