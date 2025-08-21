import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amidarh.com'),
  title: {
    default: "Amidarh - Leading Exam Management System & Educational Technology Solutions",
    template: "%s | Amidarh"
  },
  description: "Amidarh provides cutting-edge exam management systems, educational technology solutions, and digital assessment platforms for schools, universities, and institutions worldwide. Streamline your exam processes with AI-powered tools.",
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
    "academic assessment tools"
  ],
  authors: [{ name: "Amidarh Team" }],
  creator: "Amidarh",
  publisher: "Amidarh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amidarh.com",
    siteName: "Amidarh",
    title: "Amidarh - Educational Technology Solutions",
    description: "Transform your educational institution with Amidarh's comprehensive exam management system. Streamline exam creation, scheduling, proctoring, and grading with AI-powered tools.",
    images: [
      {
        url: "/images/amidarh-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amidarh Exam Management System - Educational Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amidarh - Educational Technology Solutions",
    description: "Transform your educational institution with Amidarh's comprehensive exam management system. Streamline exam creation, scheduling, proctoring, and grading with AI-powered tools.",
    images: ["/images/amidarh-twitter-image.jpg"],
    creator: "@amidarh",
    site: "@amidarh",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://amidarh.com",
  },
  category: "Education Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Amidarh",
              "url": "https://amidarh.com",
              "logo": "https://amidarh.com/logo.svg",
              "description": "Leading provider of exam management systems and educational technology solutions",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/amidarh",
                "https://linkedin.com/company/amidarh",
                "https://facebook.com/amidarh"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@amidarh.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
        
        {/* Structured Data for Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Trupper Exam Management System",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web Browser",
              "description": "Comprehensive exam management system for educational institutions",
              "url": "https://amidarh.com/trupper",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
      </head>
      <body
        className={`${bricolage.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
