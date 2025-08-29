import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Store, UserType } from "@/types";

export const useStore = create<Store>()(
  persist(
    (set) => ({
      waitList: false,
      setWaitList: (value: boolean) => set({ waitList: value }),
      user: null,
      setUser: (user: UserType | null) => set({ user }),
      isLoading: false,
      setIsLoading: (value: boolean) => set({ isLoading: value }),
      isAuthenticated: false,
      setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
      token: null,
      setToken: (token: string | null) => set({ token }),
      refreshToken: null,
      setRefreshToken: (refreshToken: string | null) => set({ refreshToken }),
    }),
    {
      name: "amidarh-store", // name of the item in the storage (must be unique)
      //   getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    },
  ),
);
