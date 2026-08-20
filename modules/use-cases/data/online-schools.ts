import type { OnlineSchoolsData } from "../types";

export const onlineSchools: OnlineSchoolsData = {
  slug: "online-schools",
  hero: {
    badge: "For Online Schools",
    headlineLine1: "Launch a school your",
    headlineLine2: "students actually love.",
    description:
      "Trupper gives schools a white-label platform to manage courses, students, live classes, exams, and payments — all under your brand.",
    trustBadges: ["Custom domain", "White-label branding", "AI in every lesson"],
    image: {
      src: "https://res.cloudinary.com/dl5dyntsp/image/upload/v1787250870/usecase_z8n1l5.png",
      alt: "Online Schools Hero",
    },
  },
  builtForTags: [
    "K-12 Schools",
    "Universities",
    "Tutoring Centers",
    "Online Academies",
    "Coaching Institutes",
    "Corporate Training",
    "Vocational Schools",
    "Test Prep Centers",
  ],
  stats: {
    label: "The case for going online",
    title: "Schools that go digital see real results.",
    cards: [
      {
        value: "+40%",
        label: "Higher completion",
        description:
          "Students complete more courses with structured online learning",
        color: "purple",
      },
      {
        value: "+65%",
        label: "Revenue growth",
        description:
          "Schools earn more by reaching students beyond their physical location",
        color: "green",
      },
      {
        value: "-45%",
        label: "Admin overhead",
        description:
          "Automated grading, enrollment, and payments reduce manual work",
        color: "amber",
      },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From setup to your first enrolled student.",
    steps: [
      {
        number: "01",
        title: "Set up your school",
        description:
          "Add your logo, colors, domain, and configure your school profile in minutes.",
      },
      {
        number: "02",
        title: "Build your courses",
        description:
          "Create courses with lessons, videos, quizzes, and assignments using our drag-and-drop builder.",
      },
      {
        number: "03",
        title: "Publish & enroll",
        description:
          "Share your branded school link, accept payments, and start enrolling students instantly.",
      },
      {
        number: "04",
        title: "Track & grow",
        description:
          "Monitor student progress, completion rates, and revenue from a single dashboard.",
      },
    ],
  },
  featuresGrid: {
    label: "Capabilities",
    title: "Everything your school needs, built in.",
    subtitle:
      "From course creation to certificates, Trupper handles every part of running your online school.",
    features: [
      {
        number: "01",
        title: "Course Builder",
        description:
          "Create structured courses with modules, lessons, videos, docs, and quizzes.",
      },
      {
        number: "02",
        title: "Live Classes",
        description:
          "Schedule and host live video classes with screen sharing and chat.",
      },
      {
        number: "03",
        title: "Exam Engine",
        description:
          "Build timed, randomized exams with auto-grading and anti-cheat measures.",
      },
      {
        number: "04",
        title: "Student Management",
        description:
          "Track enrollment, progress, grades, and communications in one place.",
      },
      {
        number: "05",
        title: "Certificates",
        description:
          "Auto-generate branded certificates when students complete courses.",
      },
      {
        number: "06",
        title: "Payments",
        description:
          "Accept payments via multiple gateways with automated invoicing.",
      },
      {
        number: "07",
        title: "Analytics Dashboard",
        description:
          "Monitor completion rates, revenue, and student engagement metrics.",
      },
      {
        number: "08",
        title: "White-label Branding",
        description:
          "Custom domain, logo, colors, and email templates — fully yours.",
      },
      {
        number: "09",
        title: "AI-Powered Tools",
        description:
          "AI lesson generation, quiz creation, and personalized learning paths.",
      },
    ],
  },
  benefits: {
    label: "Benefits",
    title: "Why schools choose Trupper.",
    items: [
      {
        icon: "zap",
        title: "Launch in days, not months",
        description:
          "No developers needed. Set up your branded school with courses, payments, and enrollment in a single weekend.",
      },
      {
        icon: "dollar-sign",
        title: "Revenue from day one",
        description:
          "Accept payments instantly with built-in billing. Sell courses, subscriptions, or bundles with zero commission.",
      },
      {
        icon: "trending-up",
        title: "Students stay engaged",
        description:
          "Live classes, progress tracking, certificates, and AI-powered learning keep students motivated and coming back.",
      },
      {
        icon: "rocket",
        title: "Scale without limits",
        description:
          "From 10 students to 10,000 — Trupper scales with your school. No per-student pricing surprises.",
      },
      {
        icon: "palette",
        title: "Own your brand",
        description:
          "Custom domain, your logo, your colors. Students see your school, not ours. Full white-label experience.",
      },
      {
        icon: "bar-chart-2",
        title: "Data you can act on",
        description:
          "Know which courses perform, where students drop off, and what drives revenue with real-time analytics.",
      },
    ],
  },
  comparison: {
    label: "Comparison",
    title: "Traditional classroom vs. Trupper-powered school.",
    rows: [
      {
        feature: "Course delivery",
        traditional: "Physical only",
        withTrupper: "Online + on-demand",
      },
      {
        feature: "Student reach",
        traditional: "Limited by location",
        withTrupper: "Unlimited, global",
      },
      {
        feature: "Payments",
        traditional: "Manual collection",
        withTrupper: "Automated billing",
      },
      {
        feature: "Grading",
        traditional: "Manual, time-consuming",
        withTrupper: "Auto-graded instantly",
      },
      {
        feature: "Live classes",
        traditional: "In-person only",
        withTrupper: "Video + recording",
      },
      {
        feature: "Certificates",
        traditional: "Manual printing",
        withTrupper: "Auto-generated",
      },
      {
        feature: "Analytics",
        traditional: "Spreadsheets",
        withTrupper: "Real-time dashboard",
      },
      {
        feature: "Branding",
        traditional: "N/A",
        withTrupper: "Full white-label",
      },
    ],
  },
  testimonial: {
    quote:
      "Trupper replaced three different tools for us. Our teachers manage courses, run live classes, and grade exams — all from one place. We launched our online school in under a week.",
    authorName: "Dr. Adebayo Olanrele",
    authorRole: "Principal, Greenfield Academy Online",
  },
  closingCta: {
    headlineLine1: "Ready to launch your",
    headlineLine2: "online school?",
    description:
      "Join hundreds of schools already using Trupper to teach online. Get started free — no credit card required.",
  },
};
