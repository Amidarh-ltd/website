"use client";

import { Card } from "@/components/ui/card";

export const WelcomeCard = ({
  description,
  title,
  Icon,
}: {
  description: string;
  title: string;
  Icon: React.ElementType;
}) => {
  return (
    <Card className="card-elevated group h-full cursor-pointer p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)]">
      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Card>
  );
};
