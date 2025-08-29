import { UserType } from "@/types";

export type Store = {
  waitList: boolean;
  setWaitList: (value: boolean) => void;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsLoading: (value: boolean) => void;
  setIsAuthenticated: (value: boolean) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string | null) => void;
};
