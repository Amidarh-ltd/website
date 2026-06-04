"use client";

import { Button } from "@/components/ui/button";
import { MarketingImage } from "@/components/ui/marketing-image";
import { Section, SectionHeader } from "@/core/design-system/section";
import { BRAND_IMAGES, TRUPPER_PATH } from "@/lib/constants/site";
import { ArrowRight, Calendar, FileCheck, Shield, Users } from "lucide-react";
import Link from "next/link";

const trupperBenefits = [
  {
    icon: FileCheck,
    title: "Exam lifecycle",
    description: "Create, schedule, deliver, and grade exams in one workflow.",
  },
  {
    icon: Users,
    title: "Student management",
    description: "Organize cohorts, results, and academic records with clarity.",
  },
  {
    icon: Calendar,
    title: "Smart scheduling",
    description: "Coordinate timetables and exam windows without friction.",
  },
  {
    icon: Shield,
    title: "Secure & reliable",
    description: "Enterprise-grade controls for institutional trust.",
  },
];

export default function TrupperSpotlight() {
  return (
    <Section id="trupper">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-8">
          <SectionHeader
            align="left"
            eyebrow="Trupper"
            title="Exam management built for institutions"
            description="Trupper streamlines the entire exam process for schools and universities—from question banks to results and reporting."
            className="mb-0"
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {trupperBenefits.map(({ icon: Icon, title, description }) => (
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

          <Button size="xl" className="group" asChild>
            <Link href={TRUPPER_PATH}>
              Explore Trupper
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <MarketingImage
          src={BRAND_IMAGES.trupper.dashboard.src}
          alt={BRAND_IMAGES.trupper.dashboard.alt}
          fit="contain"
          containerClassName="aspect-[4/3] bg-muted/30 shadow-[0_24px_64px_rgba(15,23,42,0.12)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </Section>
  );
}
