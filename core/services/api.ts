import axios from "axios"

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_API_URL : process.env.NEXT_PUBLIC_LOCAL_API_URL,
})

export default api