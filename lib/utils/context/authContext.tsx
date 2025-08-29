"use client";

import { createContext, useEffect } from "react";
import { useStore } from "../zustand/store";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { AuthResponse } from "@/types";
import { useLogout } from "@/core/hooks/logout";

export const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  error: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { logout } = useLogout();
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const setUser = useStore((state) => state.setUser);
  const setRefreshToken = useStore((state) => state.setRefreshToken);
  const refreshToken = useStore((state) => state.refreshToken);
  const setIsLoading = useStore((state) => state.setIsLoading);
  const user = useStore((state) => state.user);

  // Only fetch if we have a refreshToken and organization
  const shouldFetch =
    !!refreshToken && !!user?.role && typeof window !== "undefined";

  const { data, isLoading, error } = useSWR<AuthResponse>(
    shouldFetch
      ? user?.role === "USER"
        ? `/auth/token/${refreshToken}`
        : `/auth/admin-token/${refreshToken}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      dedupingInterval: 60000,
    },
  );

  useEffect(() => {
    // Only run if we have data and not loading
    if (!isLoading && data && data.doc && data.doc.token && data.doc.user) {
      setIsLoading(true);
      // Set cookies for accessToken and refreshToken
      const accessTokenKey = `accessToken`;
      const refreshTokenKey = `refreshToken`;
      const isProduction = process.env.NODE_ENV === "production";
      const secureFlag = isProduction ? "; secure" : "";
      // HttpOnly cannot be set from JS, so we omit it
      document.cookie = `${accessTokenKey}=${data.doc.token}; path=/;${secureFlag} SameSite=Strict`;
      document.cookie = `${refreshTokenKey}=${data.doc.refreshToken}; path=/;${secureFlag} SameSite=Strict`;
      document.cookie = `role=${data.doc.user.role?.toUpperCase()}; path=/;${secureFlag} SameSite=Strict`;

      setIsAuthenticated(true);
      setUser(data.doc.user);
      setRefreshToken(data.doc.refreshToken);
      setIsLoading(false);
    } else if (!isLoading && error) {
      setIsLoading(false);
      // If error, log out and clear state
      logout();
    }
    // Only run when data, isLoading, or error changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, error]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
