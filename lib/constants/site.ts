/** Centralized external URLs */
export const FLOW_URL =
  process.env.NEXT_PUBLIC_FLOW_URL ?? "https://test-flow.amidarh.com";

export const TRUPPER_PATH = "/trupper";

/** Local product & brand imagery from /public/images */
export const BRAND_IMAGES = {
  flow: {
    src: "/images/flow.png",
    alt: "Amidarh Flow — AI-powered learning platform",
  },
  flowSecondary: {
    src: "/images/flow2.png",
    alt: "Amidarh Flow — course generation and study tools",
  },
  trupper: {
    dashboard: {
      src: "/images/trupper/dashboard.png",
      alt: "Trupper exam management dashboard",
    },
    admins: {
      src: "/images/trupper/admins.png",
      alt: "Trupper admin management interface",
    },
    exam: {
      src: "/images/trupper/exam.png",
      alt: "Trupper exam creation and delivery",
    },
    users: {
      src: "/images/trupper/users.png",
      alt: "Trupper student and user management",
    },
    genAI: {
      src: "/images/trupper/genAI.png",
      alt: "Trupper AI-assisted exam features",
    },
  },
  note: {
    src: "/images/note.png",
    alt: "Amidarh Note",
  },
} as const;

/**
 * Curated Unsplash images (stable photo IDs).
 * @see https://unsplash.com/license
 */
export const UNSPLASH_IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    alt: "Students collaborating while studying with laptops",
    credit: "Brooke Cagle",
  },
  flow: {
    src: "https://images.unsplash.com/photo-1434030214721-945fd7f93385?auto=format&fit=crop&w=1400&q=80",
    alt: "Student taking notes while learning on a laptop",
    credit: "Green Chameleon",
  },
  trupper: {
    src: "https://images.unsplash.com/photo-1580582932707-52ad265304ad?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern classroom with students and technology",
    credit: "National Cancer Institute",
  },
  testimonial: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    alt: "Education professional portrait",
    credit: "Christina @ wocintechchat.com",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    alt: "Team collaborating on education project",
    credit: "Christina @ wocintechchat.com",
  },
  auth: {
    src: "https://images.unsplash.com/photo-1524995999578-669bac879e94?auto=format&fit=crop&w=1200&q=80",
    alt: "University library study space",
    credit: "João Ferrão",
  },
} as const;

export const FLOW_FEATURES = [
  {
    title: "Generate Course",
    description:
      "Create structured learning paths and research any topic with AI in minutes.",
  },
  {
    title: "Flashcards",
    description:
      "Practice key concepts with flashcards built from your courses.",
  },
  {
    title: "Quiz",
    description:
      "Test understanding with instant feedback and mastery tracking.",
  },
  {
    title: "Progress",
    description:
      "See what you have learned and what to focus on next.",
  },
] as const;

export const PLATFORM_CAPABILITIES = [
  {
    title: "Flow",
    description: "AI-powered learning with courses, flashcards, and quizzes.",
    href: FLOW_URL,
  },
  {
    title: "Trupper",
    description: "End-to-end exam management for schools and institutions.",
    href: TRUPPER_PATH,
  },
  {
    title: "Amidarh CBT",
    description: "Computer-based testing practice to stay exam-ready.",
    href: "#",
    comingSoon: true,
  },
  {
    title: "Unified Progress",
    description: "Track learning and assessment outcomes in one ecosystem.",
    href: FLOW_URL,
  },
  {
    title: "Secure by Design",
    description: "Role-based access and privacy-first data handling.",
    href: TRUPPER_PATH,
  },
  {
    title: "Built for Scale",
    description: "From individual learners to institution-wide deployments.",
    href: TRUPPER_PATH,
  },
] as const;
