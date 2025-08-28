import api from "../services/api";
import { useStore } from "@/lib/utils/zustand/store";

export const useProfile = () => {
  const user = useStore((state) => state.user);
  const isLoading = useStore((state) => state.isLoading);
  const setIsLoading = useStore((state) => state.setIsLoading);
  const setUser = useStore((state) => state.setUser);
  const setToken = useStore((state) => state.setToken);
  const token = useStore((state) => state.token);
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const setRefreshToken = useStore((state) => state.setRefreshToken);

  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await api.get(`/profile/${token}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.status === 200){
        const data = response.data;
        const accessTokenKey = `accessToken`;
      const refreshTokenKey = `refreshToken`;
         const isProduction = process.env.NODE_ENV === 'production';
      const secureFlag = isProduction ? '; secure' : '';
      // HttpOnly cannot be set from JS, so we omit it
      document.cookie = `${accessTokenKey}=${data.doc.token}; path=/;${secureFlag} SameSite=Strict`;
      document.cookie = `${refreshTokenKey}=${data.doc.refreshToken}; path=/;${secureFlag} SameSite=Strict`;
      document.cookie = `role=${data.doc.user.role?.toUpperCase()}; path=/;${secureFlag} SameSite=Strict`;

      setIsAuthenticated(true);
      setUser(data.doc.user);
      setRefreshToken(data.doc.refreshToken);
      setIsLoading(false);
      }
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  return { user, isLoading, setUser, setToken, token, getProfile };
};
