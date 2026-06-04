import Link from "next/link";
import { Section, SectionHeader } from "@/core/design-system/section";
import { PLATFORM_CAPABILITIES } from "@/lib/constants/site";
import { ArrowRight, Clock } from "lucide-react";

export default function Solution() {
  return (
    <Section variant="muted">
      <SectionHeader
        eyebrow="Platform"
        title="One ecosystem for learning and assessment"
        description="Amidarh connects personalized study tools with institutional exam operations—so students learn better and schools run smoother."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PLATFORM_CAPABILITIES.map((item) => (
          <article
            key={item.title}
            className="card-elevated group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {"comingSoon" in item && item.comingSoon === true ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  <Clock className="size-3" />
                  Soon
                </span>
              ) : null}
            </div>
            <p className="flex-1 text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            {!("comingSoon" in item && item.comingSoon) && item.href !== "#" ? (
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
