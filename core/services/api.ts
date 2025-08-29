import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_MAIN_API_URL
      : process.env.NEXT_PUBLIC_LOCAL_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    if (typeof window !== "undefined") {
      const Key = `accessToken`;
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${Key}=`))
        ?.split("=")[1];

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
