"use client";

import { Button } from "@/components/ui/button";
import { MarketingImage } from "@/components/ui/marketing-image";
import { Section, SectionHeader } from "@/core/design-system/section";
import { BRAND_IMAGES, FLOW_URL } from "@/lib/constants/site";
import { ArrowRight, BookOpen, Brain, Layers, Sparkles } from "lucide-react";

const flowBenefits = [
  {
    icon: Brain,
    title: "Generate Course",
    description:
      "Create structured learning paths and research any topic with AI in minutes.",
  },
  {
    icon: Layers,
    title: "Flashcards",
    description:
      "Practice key concepts with flashcards built from your courses.",
  },
  {
    icon: BookOpen,
    title: "Quiz",
    description:
      "Test understanding with instant feedback and mastery tracking.",
  },
  {
    icon: Sparkles,
    title: "Progress",
    description:
      "See what you have learned and what to focus on next.",
  },
];

export default function FlowSpotlight() {
  return (
    <Section id="flow" variant="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-8">
          <SectionHeader
            align="left"
            eyebrow="Flow"
            title="Learn anything, your way"
            description="Flow is Amidarh's AI-powered learning platform—generate courses, practice with flashcards, test with quizzes, and track progress in one place."
            className="mb-0"
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {flowBenefits.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button
            size="xl"
            className="group"
            onClick={() => window.open(FLOW_URL, "_blank")}
          >
            Get started with Flow
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        <MarketingImage
          src={BRAND_IMAGES.flow.src}
          alt={BRAND_IMAGES.flow.alt}
          fit="contain"
          containerClassName="aspect-[4/3] bg-muted/30 shadow-[0_24px_64px_rgba(15,23,42,0.12)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </Section>
  );
}
