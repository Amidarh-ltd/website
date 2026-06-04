"use client";

import { features } from "@/core/commons/contants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/core/design-system/section";

export function Specs() {
  return (
    <Section id="capabilities">
      <SectionHeader
        align="left"
        className="max-w-2xl"
        eyebrow="Capabilities"
        title="Amidarh for everyone"
        description="Engaging, accessible, and personalized education—using technology that adapts to students, educators, and institutions."
      />

      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          AutoPlay({
            playOnInit: true,
            stopOnInteraction: false,
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {features.map((feature, index) => (
            <CarouselItem
              key={index}
              className="basis-[90%] pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="card-elevated h-full border-0 bg-card">
                <CardContent className="flex h-full flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}
