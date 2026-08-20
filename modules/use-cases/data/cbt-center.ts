import type { UseCaseData } from "../types";

export const cbtCenter: UseCaseData = {
  slug: "cbt-center",
  hero: {
    badge: "Use Case -- CBT Center",
    headlineLine1: "Run a professional",
    headlineLine2: "CBT",
    headlineLine2Italic: "center.",
    description:
      "Trupper powers computer-based testing centers with secure exam delivery, real-time proctoring, automated grading, and instant result publishing -- at any scale.",
  },
  features: [
    {
      number: "01",
      title: "Deliver exams with anti-cheat security",
      description:
        "Randomized question order, timed sessions, tab-switch detection, and full-screen lockdown ensure exam integrity at every seat.",
      categoryLabel: "Exam Security",
      capabilities: [
        ["Question randomization", "Tab-switch detection"],
        ["Full-screen lockdown", "Timed sessions"],
        ["IP logging", "Browser fingerprinting"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835612/exams_xrhu6n.png",
    },
    {
      number: "02",
      title: "Auto-grade and publish results instantly",
      description:
        "Results are calculated the moment a candidate submits. Scores, breakdowns, and certificates are published automatically -- no manual work.",
      categoryLabel: "Auto-Grading",
      capabilities: [
        ["Instant scoring", "Score breakdowns"],
        ["Pass/fail thresholds", "Auto-certificates"],
        ["Result exports", "Bulk publishing"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835093/AI_Assistance_2_mqvmuh.png",
    },
    {
      number: "03",
      title: "Manage candidates and scheduling",
      description:
        "Register candidates in bulk, assign exam slots, and manage multiple sessions across different rooms and time zones from one dashboard.",
      categoryLabel: "Candidate Management",
      capabilities: [
        ["Bulk registration", "Slot assignment"],
        ["Multi-room support", "Time zone handling"],
        ["Candidate profiles", "Exam history"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843431/flow_1_awn22i.png",
    },
    {
      number: "04",
      title: "Build and maintain your question bank",
      description:
        "Create questions across subjects with tags, difficulty levels, and media attachments. Reuse questions across exams and let AI generate new ones.",
      categoryLabel: "Question Bank",
      capabilities: [
        ["Subject tagging", "Difficulty levels"],
        ["Media attachments", "AI question generation"],
        ["Import/export", "Version history"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843744/cover_2_d8pzgl.png",
    },
  ],
  metrics: [
    { value: "50,000+", label: "Exams delivered" },
    { value: "< 3s", label: "Average grading time" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "200+", label: "Testing centers" },
  ],
  testimonial: {
    quote:
      "We process 500 candidates per day across three exam halls. Trupper handles it all -- from registration to result publishing -- without a single hitch.",
    authorName: "Eng. Chidi Nwosu",
    authorRole: "Director, NigeriaExams CBT Center",
  },
  closingCta: {
    line1: "Launch your CBT center",
    line2: "with",
    line2Italic: "confidence.",
  },
};
