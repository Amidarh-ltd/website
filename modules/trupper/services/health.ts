const TRUPPER_ROOT_URL =
  process.env.NEXT_PUBLIC_TRUPPER_ROOT_URL ??
  "https://trupper-backend.trupper.app";

export type CheckStatus = "up" | "down";
export type OverallStatus = "healthy" | "degraded" | "down";

export interface BaseCheck {
  status: CheckStatus;
  latencyMs: number;
}

export interface MemoryCheck extends BaseCheck {
  heapUsedMb: number;
  heapTotalMb: number;
  rssMb: number;
}

export interface HealthChecks {
  database: BaseCheck;
  redis: BaseCheck;
  memory: MemoryCheck;
  environment: BaseCheck;
}

export interface HealthSnapshot {
  status: OverallStatus;
  checkedAt: string;
  uptimeSeconds: number;
  checks: HealthChecks;
}

interface LiveHealthResponse {
  success: boolean;
  data: HealthSnapshot;
  message: string;
}

interface HealthHistoryResponse {
  success: boolean;
  data: HealthSnapshot[];
  message?: string;
}

export const getLiveHealth = async (): Promise<HealthSnapshot> => {
  const response = await fetch(`${TRUPPER_ROOT_URL}/api/v1/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch live health");
  }

  const data: LiveHealthResponse = await response.json();
  return data.data;
};

export const getHealthHistory = async (
  hours = 24,
): Promise<HealthSnapshot[]> => {
  const response = await fetch(
    `${TRUPPER_ROOT_URL}/api/v1/health/history?hours=${hours}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch health history");
  }

  const data: HealthHistoryResponse = await response.json();
  return [...data.data].sort(
    (a, b) => new Date(a.checkedAt).getTime() - new Date(b.checkedAt).getTime(),
  );
};
