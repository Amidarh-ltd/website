import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { slugify } from "@/lib/utils";

const TRUPPER_API_URL =
  process.env.NEXT_PUBLIC_TRUPPER_API_URL ??
  "https://trupper-backend.amidarh.com/api/v1";

export type SlugUnavailableReason = "empty" | "invalid" | "reserved" | "taken";

export interface CheckSlugResponse {
  slug: string;
  available: boolean;
  reason?: SlugUnavailableReason;
}

export const SLUG_UNAVAILABLE_MESSAGES: Record<SlugUnavailableReason, string> = {
  empty: "Enter an institution name",
  invalid: "Institution name is too short or has no valid characters",
  reserved: "This name is reserved—try another",
  taken: "This institution name is already taken",
};

export const checkOrganizationSlug = async (
  name: string,
): Promise<CheckSlugResponse> => {
  const response = await axios.get<CheckSlugResponse>(
    `${TRUPPER_API_URL}/auth/check-organization-slug`,
    { params: { name } },
  );
  return response.data;
};

export type SlugAvailabilityStatus =
  | "idle"
  | "checking"
  | "available"
  | "unavailable";

export const useSlugAvailability = (name: string) => {
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState<SlugAvailabilityStatus>("idle");
  const [reason, setReason] = useState<SlugUnavailableReason | undefined>();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    clearTimeout(debounceRef.current);

    if (!name.trim()) {
      setSlug("");
      setStatus("idle");
      setReason(undefined);
      return;
    }

    setSlug(slugify(name));
    setStatus("checking");

    debounceRef.current = setTimeout(async () => {
      try {
        const data = await checkOrganizationSlug(name);
        setSlug(data.slug);
        setStatus(data.available ? "available" : "unavailable");
        setReason(data.reason);
      } catch {
        // Network/server issue checking availability—don't block typing,
        // the register-organization call still re-validates server-side.
        setStatus("idle");
        setReason(undefined);
      }
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [name]);

  return { slug, status, reason };
};

export const registerInstitutionSchema = z.object({
  name: z.string().min(2, "Institution name is too short").max(200),
  slug: z
    .string()
    .min(3, "Slug is too short")
    .max(50, "Slug is too long")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers, and hyphens",
    ),
  adminFirstName: z.string().min(1, "First name is required").max(100),
  adminLastName: z.string().min(1, "Last name is required").max(100),
  adminEmail: z.string().email("Enter a valid email address"),
});

export type RegisterInstitutionInput = z.infer<
  typeof registerInstitutionSchema
>;

export interface RegisterInstitutionResponse {
  user: Record<string, unknown>;
  institution: Record<string, unknown>;
  accessToken: string;
  refreshToken: string;
  temporaryPassword: string;
  emailSent: boolean;
  emailError: string | null;
}

export const useRegisterInstitution = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<RegisterInstitutionResponse | null>(
    null,
  );

  const registerInstitution = async (
    data: RegisterInstitutionInput,
  ): Promise<RegisterInstitutionResponse | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const parsed = registerInstitutionSchema.parse(data);
      const response = await axios.post<RegisterInstitutionResponse>(
        `${TRUPPER_API_URL}/auth/register-organization`,
        parsed,
      );
      setResult(response.data);
      setIsLoading(false);
      return response.data;
    } catch (err: any) {
      setIsLoading(false);
      const message =
        err instanceof z.ZodError
          ? err.issues[0]?.message ?? "Invalid input"
          : err.response?.status === 409
            ? "This institution name is already taken. Please choose another."
            : err.response?.data?.message ?? "An error occurred";
      setError(message);
      toast.error(message);
      return null;
    }
  };

  return {
    registerInstitution,
    isLoading,
    error,
    result,
  };
};
