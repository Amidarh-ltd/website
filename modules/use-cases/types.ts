export type UseCaseFeature = {
  number: string;
  title: string;
  description: string;
  categoryLabel: string;
  capabilities: [string, string][];
  image: string;
};

export type UseCaseMetric = {
  value: string;
  label: string;
};

export type UseCaseTestimonial = {
  quote: string;
  authorName: string;
  authorRole: string;
};

export type UseCaseHeroData = {
  badge: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine2Italic: string;
  description: string;
};

export type UseCaseClosingCTAData = {
  line1: string;
  line2: string;
  line2Italic: string;
};

export type UseCaseData = {
  slug: string;
  hero: UseCaseHeroData;
  features: UseCaseFeature[];
  metrics: UseCaseMetric[];
  testimonial: UseCaseTestimonial;
  closingCta: UseCaseClosingCTAData;
};

// Online Schools specific types
export type OnlineSchoolsStatCard = {
  value: string;
  label: string;
  description: string;
  color: "purple" | "green" | "amber";
};

export type OnlineSchoolsStep = {
  number: string;
  title: string;
  description: string;
};

export type OnlineSchoolsGridFeature = {
  number: string;
  title: string;
  description: string;
};

export type OnlineSchoolsBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type OnlineSchoolsComparisonRow = {
  feature: string;
  traditional: string;
  withTrupper: string;
};

export type OnlineSchoolsData = {
  slug: "online-schools";
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    trustBadges: string[];
    image: {
      src: string;
      alt: string;
    };
  };
  builtForTags: string[];
  stats: {
    label: string;
    title: string;
    cards: OnlineSchoolsStatCard[];
  };
  howItWorks: {
    label: string;
    title: string;
    steps: OnlineSchoolsStep[];
  };
  featuresGrid: {
    label: string;
    title: string;
    subtitle: string;
    features: OnlineSchoolsGridFeature[];
  };
  benefits: {
    label: string;
    title: string;
    items: OnlineSchoolsBenefit[];
  };
  comparison: {
    label: string;
    title: string;
    rows: OnlineSchoolsComparisonRow[];
  };
  testimonial: UseCaseTestimonial;
  closingCta: {
    headlineLine1: string;
    headlineLine2: string;
    description: string;
  };
};
