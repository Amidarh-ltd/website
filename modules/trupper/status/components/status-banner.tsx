"use client";

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OverallStatus } from "../../services/health";
import { formatRelativeTime, formatUptime } from "../utils";

const STATUS_COPY: Record<
  OverallStatus,
  { title: string; icon: typeof CheckCircle2 }
> = {
  healthy: { title: "All systems operational", icon: CheckCircle2 },
  degraded: { title: "Degraded performance", icon: AlertTriangle },
  down: { title: "System outage", icon: XCircle },
};

const STATUS_STYLES: Record<OverallStatus, string> = {
  healthy: "border-emerald-200 bg-emerald-50 text-emerald-800",
  degraded: "border-amber-200 bg-amber-50 text-amber-800",
  down: "border-red-200 bg-red-50 text-red-800",
};

const DOT_STYLES: Record<OverallStatus, string> = {
  healthy: "bg-emerald-500",
  degraded: "bg-amber-500",
  down: "bg-red-500",
};

export default function StatusBanner({
  status,
  uptimeSeconds,
  checkedAt,
  now,
  isStale,
}: {
  status: OverallStatus;
  uptimeSeconds: number;
  checkedAt: Date;
  now: Date;
  isStale: boolean;
}) {
  const { title, icon: Icon } = STATUS_COPY[status];

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border p-6 sm:flex-row sm:items-center sm:justify-between",
        STATUS_STYLES[status],
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="size-7 shrink-0" />
        <div>
          <p className="font-display text-xl font-semibold">{title}</p>
          <p className="mt-0.5 text-[13px] opacity-80">
            Service uptime: {formatUptime(uptimeSeconds)}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-1 sm:items-end">
        <div className="flex items-center gap-2 text-[13px] font-medium opacity-90">
          <span className="relative flex size-2">
            <span
              className={cn(
                "absolute inline-flex size-full animate-ping rounded-full opacity-75",
                DOT_STYLES[status],
              )}
            />
            <span
              className={cn("relative inline-flex size-2 rounded-full", DOT_STYLES[status])}
            />
          </span>
          Live · updated {formatRelativeTime(checkedAt, now)}
        </div>
        {isStale && (
          <p className="text-[12px] italic opacity-70">
            Couldn&apos;t refresh — retrying…
          </p>
        )}
      </div>
    </div>
  );
}
