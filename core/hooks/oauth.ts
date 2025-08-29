import api from "../services/api";
import { useState } from "react";
// import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { email } from "zod";
// import { GoogleAuthCallBackType } from "@/types";
import { toast } from "sonner";
import { useStore } from "@/lib/utils/zustand/store";

export const UseOAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { setUser, setIsAuthenticated, setToken, setRefreshToken } = useStore();
  // const searchParams = useSearchParams();
  // const code = searchParams.get("code");
  const router = useRouter();

  const signInWithGoogle = async (decoded: any) => {
    try {
      console.log(decoded);
      setLoading(true);
      const response = await api.post("/auth/sign_in_with_google", {
        email: decoded.email,
        firstName: decoded.given_name,
        lastName: decoded.family_name
          ? decoded.family_name
          : decoded.given_name.slice(0, 1),
        image: decoded.picture,
      });
      if (response.status === 200) {
        const { token, refreshToken, user } = response.data.doc;
        // Save tokens and user info in local storage or context
        setUser(user);
        setIsAuthenticated(true);
        const isProduction = process.env.NODE_ENV === "production";
        const secureFlag = isProduction ? "; secure" : "";
        // Calculate expiry for 7 days from now
        const expires = new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000,
        ).toUTCString();
        // Set cookies client-side
        document.cookie = `accessToken=${token}; path=/${secureFlag}; SameSite=Strict`;
        document.cookie = `refreshToken=${refreshToken}; path=/${secureFlag}; SameSite=Strict; expires=${expires}`;
        document.cookie = `role=${user.role.toUpperCase()}; path=/${secureFlag}; SameSite=Strict`;
        setToken(token);
        setRefreshToken(refreshToken);
        toast.success("You're logged in successfully");
        router.push("/welcome");
      }
    } catch (error: any) {
      setSuccess(false);
      setLoading(false);
      if (error.response && error.response.status === 401) {
        router.push(`/otp/${error.response.data.doc.token}`);
      }
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      toast.error(errorMessage);
      setError(errorMessage);
      if (error.response && error.response.data.doc.allDevicesLogged) {
        localStorage.setItem("loginToken", error.response.data.doc.loginToken);
        router.push(`/logout_devices/${error.response.data.doc.id}`);
      }
    }
  };

  return {
    signInWithGoogle,
    loading,
    error,
    success,
  };
};
