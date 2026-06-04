"use client";

import { Button } from "@/components/ui/button";
import { MarketingImage } from "@/components/ui/marketing-image";
import { Section, SectionHeader } from "@/core/design-system/section";
import { BRAND_IMAGES, FLOW_FEATURES, FLOW_URL } from "@/lib/constants/site";
import {
  BookOpen,
  Brain,
  Layers,
  NotebookPen,
  Sparkles,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const featureIcons = [Brain, NotebookPen, Layers, BookOpen, Sparkles];

export default function FlowSpotlight() {
  return (
    <Section id="flow" variant="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <MarketingImage
          src={BRAND_IMAGES.flow.src}
          alt={BRAND_IMAGES.flow.alt}
          fit="contain"
          containerClassName="aspect-[4/3] order-2 lg:order-1 bg-muted/30"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div className="order-1 space-y-8 lg:order-2">
          <SectionHeader
            align="left"
            eyebrow="Flow"
            title="Learn anything, your way"
            description="Flow is Amidarh's AI-powered learning platform. Generate courses, capture notes, practice with flashcards, test with quizzes, and track progress—all in one place."
            className="mb-0"
          />

          <ul className="grid gap-3 sm:grid-cols-2">
            {FLOW_FEATURES.map((feature, index) => {
              const Icon = featureIcons[index] ?? Sparkles;
              return (
                <li
                  key={feature.title}
                  className="card-elevated flex gap-3 p-4 transition-shadow hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
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
      </div>
    </Section>
  );
}
