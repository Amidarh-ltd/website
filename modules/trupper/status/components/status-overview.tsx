"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getHealthHistory,
  getLiveHealth,
  type HealthSnapshot,
} from "../../services/health";
import StatusBanner from "./status-banner";
import ServiceGrid from "./service-grid";
import UptimeHistory from "./uptime-history";

const LIVE_POLL_MS = 45_000;
const HISTORY_POLL_MS = 5 * 60_000;
const CLOCK_TICK_MS = 10_000;

function StatusSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-24 rounded-xl bg-surface" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-surface" />
        ))}
      </div>
      <div className="h-40 rounded-xl bg-surface" />
    </div>
  );
}

export default function StatusOverview() {
  const [live, setLive] = useState<HealthSnapshot | null>(null);
  const [history, setHistory] = useState<HealthSnapshot[]>([]);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [isStale, setIsStale] = useState(false);
  const [hardError, setHardError] = useState(false);
  const [now, setNow] = useState(() => new Date());

  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchLive = useCallback(async () => {
    try {
      const snapshot = await getLiveHealth();
      if (!isMounted.current) return;
      setLive(snapshot);
      setIsStale(false);
      setHardError(false);
    } catch {
      if (!isMounted.current) return;
      setIsStale(true);
    } finally {
      if (isMounted.current) setHasLoadedOnce(true);
    }
  }, []);

  const fetchHistory = useCallback(async () => {
    try {
      const snapshots = await getHealthHistory(24 * 7);
      if (!isMounted.current) return;
      setHistory(snapshots);
    } catch {
      // keep last known history; the live poll already surfaces staleness
    }
  }, []);

  const retry = useCallback(() => {
    setHardError(false);
    fetchLive();
    fetchHistory();
  }, [fetchLive, fetchHistory]);

  useEffect(() => {
    fetchLive();
    fetchHistory();

    const liveTimer = setInterval(fetchLive, LIVE_POLL_MS);
    const historyTimer = setInterval(fetchHistory, HISTORY_POLL_MS);
    const clockTimer = setInterval(() => setNow(new Date()), CLOCK_TICK_MS);

    return () => {
      clearInterval(liveTimer);
      clearInterval(historyTimer);
      clearInterval(clockTimer);
    };
  }, [fetchLive, fetchHistory]);

  useEffect(() => {
    if (hasLoadedOnce && !live) setHardError(true);
  }, [hasLoadedOnce, live]);

  if (!hasLoadedOnce) return <StatusSkeleton />;

  if (hardError || !live) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border-soft bg-white p-10 text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Unable to load status
        </p>
        <p className="max-w-sm text-[14px] text-ink-2">
          We couldn&apos;t reach the status service. This page will keep
          retrying automatically.
        </p>
        <Button variant="outline" size="sm" onClick={retry}>
          <RefreshCw className="size-3.5" />
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StatusBanner
        status={live.status}
        uptimeSeconds={live.uptimeSeconds}
        checkedAt={new Date(live.checkedAt)}
        now={now}
        isStale={isStale}
      />
      <ServiceGrid checks={live.checks} />
      <UptimeHistory history={history} />
    </div>
  );
}
