import Image from "next/image";
import { Section, SectionHeader } from "@/core/design-system/section";
import { UNSPLASH_IMAGES } from "@/lib/constants/site";
import { Quote, TrendingUp, Users } from "lucide-react";

export default function Features() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why Amidarh"
        title="Built for outcomes, not complexity"
        description="We help learners move faster with AI-guided study—and help institutions run exams with confidence."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="relative overflow-hidden rounded-2xl lg:col-span-2 min-h-[320px]">
          <Image
            src={UNSPLASH_IMAGES.testimonial.src}
            alt={UNSPLASH_IMAGES.testimonial.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/70 to-brand/30" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8 text-brand-foreground md:p-10">
            <Quote className="mb-4 size-8 opacity-80" />
            <p className="text-xl font-medium leading-snug md:text-2xl">
              Amidarh gives us one place to support how students learn and how
              we manage assessments—it feels modern, clear, and ready to scale.
            </p>
            <div className="mt-6">
              <p className="font-semibold">Wisdom Woke</p>
              <p className="text-sm text-brand-foreground/80">
                Team Lead, Alt University
              </p>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-6">
          <article className="card-elevated flex flex-1 flex-col justify-between p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl font-bold text-primary">85%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  admin time saved
                </p>
              </div>
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <TrendingUp className="size-6" />
              </div>
            </div>
            <p className="mt-6 font-medium text-foreground">
              Reduction in time spent on school management workflows.
            </p>
          </article>

          <article className="card-elevated flex flex-1 flex-col justify-between bg-brand p-8 text-brand-foreground">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl font-bold">2B+</p>
                <p className="mt-1 text-sm text-brand-foreground/80">
                  messages delivered
                </p>
              </div>
              <div className="rounded-xl bg-brand-foreground/15 p-3">
                <Users className="size-6" />
              </div>
            </div>
            <p className="mt-6 font-medium">
              Reliable communication between schools, students, and families.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
