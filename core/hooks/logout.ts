/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/core/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/utils/zustand/store";
import { toast } from "sonner";

export function useLogout() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const logoUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const setUser = useStore((state) => state.setUser);
  const setRefreshToken = useStore((state) => state.setRefreshToken);

  const logout = async () => {
    setServerError("");
    setIsLoading(true);
    try {
      let res;
      console.log(user?.role);
      if (
        user?.role === "ADMIN" ||
        user?.role === "admin" ||
        user?.role === "SUB_ADMIN"
      ) {
        res = await api.post("/auth/logout-admin");
      } else {
        res = await api.post("/auth/logout");
      }
      console.log({ res });
      if (res.status === 200) {
        logoUser(null);
        const cookiesToClear = [
          `accessToken`,
          `refreshToken`,
          "role",
          "organizationId",
        ];
        setIsAuthenticated(false);
        setUser(null as any);
        setRefreshToken(null as any);
        // Clear each cookie by setting an expired date
        cookiesToClear.forEach((cookieName) => {
          document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; SameSite=Strict`;
        });
        toast.success(res.data.message);
        if (
          user?.role === "ADMIN" ||
          user?.role === "admin" ||
          user?.role === "SUB_ADMIN"
        ) {
          // router.push('/admin-controller/login');
          router.push("/login");
        } else {
          router.push("/login");
        }
      }
      setIsLoading(false);
    } catch (error: any) {
      logoUser(null);
      const cookiesToClear = [
        `accessToken`,
        `refreshToken`,
        "role",
        "organizationId",
      ];

      // Clear each cookie by setting an expired date
      cookiesToClear.forEach((cookieName) => {
        document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; SameSite=Strict`;
      });
      router.push("/login");
      setIsLoading(false);
      const errorMessage =
        error.response?.data?.message || error.message || "Logout Failed";
      setServerError(errorMessage);
      toast.error(errorMessage);
    }
  };
  return {
    isLoading,
    logout,
    serverError,
  };
}
