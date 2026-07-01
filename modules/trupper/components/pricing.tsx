import { getPlans } from "../services/plans";
import PricingCards from "./pricing-cards";

export default async function Pricing() {
  const plans = await getPlans().catch(() => []);

  if (!plans.length) return null;

  return (
    <section
      id="pricing"
      className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            Pick a plan that fits your school, classes, or team. Upgrade
            anytime as you grow.
          </p>
        </div>

        <PricingCards plans={plans} />
      </div>
    </section>
  );
}
