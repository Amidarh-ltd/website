"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { HealthSnapshot, OverallStatus } from "../../services/health";
import { formatClockTime } from "../utils";

type Range = "24h" | "7d";

const BAR_COLORS: Record<OverallStatus, string> = {
  healthy: "bg-emerald-500",
  degraded: "bg-amber-500",
  down: "bg-red-500",
};

const STATUS_LABEL: Record<OverallStatus, string> = {
  healthy: "Operational",
  degraded: "Degraded",
  down: "Down",
};

const RANGE_HOURS: Record<Range, number> = { "24h": 24, "7d": 24 * 7 };
const RANGE_LABEL: Record<Range, string> = { "24h": "Last 24 hours", "7d": "Last 7 days" };

export default function UptimeHistory({ history }: { history: HealthSnapshot[] }) {
  const [range, setRange] = useState<Range>("7d");

  const windowed = useMemo(() => {
    const cutoff = Date.now() - RANGE_HOURS[range] * 60 * 60 * 1000;
    return history.filter((s) => new Date(s.checkedAt).getTime() >= cutoff);
  }, [history, range]);

  const uptimePercent = useMemo(() => {
    if (!windowed.length) return null;
    const upCount = windowed.filter((s) => s.status !== "down").length;
    return ((upCount / windowed.length) * 100).toFixed(1);
  }, [windowed]);

  const earliestLabel =
    windowed.length > 0
      ? formatClockTime(new Date(windowed[0].checkedAt))
      : null;

  return (
    <div className="rounded-xl border border-border-soft bg-white p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[15px] font-semibold text-ink">
            Uptime history
          </p>
          <p className="mt-0.5 text-[13px] text-ink-2">{RANGE_LABEL[range]}</p>
        </div>

        <div className="flex items-center gap-3">
          {uptimePercent !== null && (
            <span className="rounded-pill bg-accent-soft px-2.5 py-1 text-[12px] font-semibold text-accent">
              {uptimePercent}% uptime
            </span>
          )}
          <div className="flex rounded-full border border-border-soft p-0.5">
            {(["24h", "7d"] as Range[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={cn(
                  "rounded-full px-3 py-1 text-[12px] font-medium transition-colors",
                  range === r
                    ? "bg-accent text-accent-foreground"
                    : "text-ink-2 hover:text-ink",
                )}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {windowed.length === 0 ? (
        <p className="mt-6 text-[13px] text-ink-2">
          Collecting data — check back soon for uptime history.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <div
            className="flex h-9 min-w-full items-stretch gap-[2px]"
            style={{ minWidth: windowed.length * 7 }}
          >
            {windowed.map((snapshot) => {
              const date = new Date(snapshot.checkedAt);
              return (
                <div
                  key={snapshot.checkedAt}
                  title={`${formatClockTime(date)} — ${STATUS_LABEL[snapshot.status]}`}
                  className={cn(
                    "flex-1 rounded-[3px] transition-opacity hover:opacity-70",
                    BAR_COLORS[snapshot.status],
                  )}
                />
              );
            })}
          </div>
          {earliestLabel && (
            <div className="mt-2 flex justify-between text-[11px] text-ink-2">
              <span>{earliestLabel}</span>
              <span>Now</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
