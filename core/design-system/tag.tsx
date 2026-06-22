import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-accent/20 bg-accent-soft px-2.5 py-1 text-xs font-semibold tracking-[0.08em] text-accent uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ProductBadge({
  product,
  className,
}: {
  product: "flow" | "trupper";
  className?: string;
}) {
  const isFlow = product === "flow";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border px-3 py-1.5 text-[13px] font-semibold",
        isFlow
          ? "border-flow/20 bg-flow-soft text-flow"
          : "border-accent/20 bg-accent-soft text-accent",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {isFlow ? "Flow" : "Trupper"}
    </span>
  );
}
