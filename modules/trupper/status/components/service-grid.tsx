"use client";

import { CheckCircle2, Cpu, Database, ShieldCheck, XCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CheckStatus, HealthChecks } from "../../services/health";

const SERVICES: {
  key: keyof HealthChecks;
  label: string;
  description: string;
  icon: typeof Database;
}[] = [
  {
    key: "database",
    label: "Database",
    description: "Stores your courses, students, and records",
    icon: Database,
  },
  {
    key: "redis",
    label: "Background jobs",
    description: "Handles notifications and scheduled tasks",
    icon: Zap,
  },
  {
    key: "memory",
    label: "System resources",
    description: "Server memory usage",
    icon: Cpu,
  },
  {
    key: "environment",
    label: "Configuration",
    description: "Core service configuration",
    icon: ShieldCheck,
  },
];

function StatusPill({ status }: { status: CheckStatus }) {
  const isUp = status === "up";
  const Icon = isUp ? CheckCircle2 : XCircle;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-[12px] font-semibold",
        isUp ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700",
      )}
    >
      <Icon className="size-3.5" />
      {isUp ? "Operational" : "Down"}
    </span>
  );
}

export default function ServiceGrid({ checks }: { checks: HealthChecks }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map(({ key, label, description, icon: Icon }) => {
        const check = checks[key];

        return (
          <div
            key={key}
            className="flex flex-col gap-3 rounded-xl border border-border-soft bg-white p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex size-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Icon className="size-4" />
              </div>
              <StatusPill status={check.status} />
            </div>

            <div>
              <p className="font-display text-[15px] font-semibold text-ink">
                {label}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-2">
                {description}
              </p>
            </div>

            <p className="text-[12px] text-ink-2">
              {key === "memory" && "heapUsedMb" in check
                ? `${check.heapUsedMb}MB / ${check.heapTotalMb}MB heap`
                : `${check.latencyMs}ms response`}
            </p>
          </div>
        );
      })}
    </div>
  );
}
