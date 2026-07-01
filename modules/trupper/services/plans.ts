const TRUPPER_ROOT_URL =
  process.env.NEXT_PUBLIC_TRUPPER_ROOT_URL ??
  "https://trupper-backend.trupper.app";

export interface PlanCapabilities {
  liveClasses: boolean;
  courseAccess: boolean;
  library: boolean;
  examSuite: boolean;
  liveStream: boolean;
  recording: boolean;
}

export interface Plan {
  id: string;
  name: string;
  priceAmount: number;
  currency: "NGN" | "USD";
  priceLabel: string;
  priceUsd: number | null;
  priceUsdLabel: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  sortOrder: number;
  studentLimit: number | null;
  storageLimitGb: number | null;
  capabilities: PlanCapabilities;
}

export interface GetPlansResponse {
  plans: Plan[];
}

export const getPlans = async (): Promise<Plan[]> => {
  const response = await fetch(`${TRUPPER_ROOT_URL}/api/v1/billing/public/plans`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch plans");
  }

  const data: GetPlansResponse = await response.json();
  return [...data.plans].sort((a, b) => a.sortOrder - b.sortOrder);
};
