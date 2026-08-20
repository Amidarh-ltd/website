import type { UseCaseData } from "../types";

export const partnerTraining: UseCaseData = {
  slug: "partner-training",
  hero: {
    badge: "Use Case -- Partner Training",
    headlineLine1: "Train your partners",
    headlineLine2: "at",
    headlineLine2Italic: "scale.",
    description:
      "Onboard partners, distributors, and resellers with branded training programs. Track certification, measure engagement, and ensure compliance -- all in one platform.",
  },
  features: [
    {
      number: "01",
      title: "Onboard partners with structured training",
      description:
        "Create certification programs with courses, assessments, and milestones. Partners complete training at their own pace and earn credentials automatically.",
      categoryLabel: "Partner Onboarding",
      capabilities: [
        ["Training programs", "Certification paths"],
        ["Self-paced learning", "Milestone tracking"],
        ["Credential management", "Bulk enrollment"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843431/flow_1_awn22i.png",
    },
    {
      number: "02",
      title: "Deliver live training sessions remotely",
      description:
        "Run live workshops, product demos, and training sessions with built-in video. Record everything for partners who couldn't attend live.",
      categoryLabel: "Live Training",
      capabilities: [
        ["Video workshops", "Screen sharing"],
        ["Session recording", "Q&A and chat"],
        ["Attendance reports", "On-demand replays"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843744/cover_2_d8pzgl.png",
    },
    {
      number: "03",
      title: "Assess knowledge with smart exams",
      description:
        "Build certification exams with randomized questions, passing thresholds, and automatic certificate generation upon completion.",
      categoryLabel: "Assessment & Certification",
      capabilities: [
        ["Question banks", "Pass/fail thresholds"],
        ["Auto-certificates", "Retake policies"],
        ["Score analytics", "Compliance tracking"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835612/exams_xrhu6n.png",
    },
    {
      number: "04",
      title: "Measure training ROI with analytics",
      description:
        "Track completion rates, assessment scores, time-to-certify, and partner engagement across your entire training program.",
      categoryLabel: "Training Analytics",
      capabilities: [
        ["Completion tracking", "Score distributions"],
        ["Time-to-certify", "Engagement metrics"],
        ["Export reports", "Partner dashboards"],
      ],
      image:
        "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835093/AI_Assistance_2_mqvmuh.png",
    },
  ],
  metrics: [
    { value: "500+", label: "Partner organizations" },
    { value: "85%", label: "Certification completion" },
    { value: "3x", label: "Faster onboarding" },
    { value: "< 1 day", label: "Program setup time" },
  ],
  testimonial: {
    quote:
      "We onboarded 200 distribution partners in under a week. Trupper's certification tracking gave us visibility we never had before.",
    authorName: "James Okafor",
    authorRole: "Head of Channel Partnerships, TechServe",
  },
  closingCta: {
    line1: "Scale your partner",
    line2: "training",
    line2Italic: "today.",
  },
};
