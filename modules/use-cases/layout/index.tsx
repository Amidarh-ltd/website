import {
  UseCaseHero,
  UseCaseFeatures,
  UseCaseMetrics,
  UseCaseTestimonialSection,
  UseCaseClosingCTA,
} from "../components";
import type { UseCaseData } from "../types";

export function UseCaseLayout({ data }: { data: UseCaseData }) {
  return (
    <>
      <UseCaseHero data={data.hero} />
      <UseCaseFeatures features={data.features} />
      <UseCaseMetrics metrics={data.metrics} />
      <UseCaseTestimonialSection testimonial={data.testimonial} />
      <UseCaseClosingCTA data={data.closingCta} />
    </>
  );
}
