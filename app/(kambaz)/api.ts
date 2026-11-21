import axios from "axios";

const server = process.env.NEXT_PUBLIC_HTTP_SERVER ??
  (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");

export const kambazApi = axios.create({
  baseURL: server ? `${server.replace(/\/$/, "")}/api` : undefined,
  withCredentials: true,
});

kambazApi.interceptors.request.use((config) => {
  if (!config.baseURL) throw new Error("The Kambaz API URL is missing.");
  return config;
});

export function apiError(error: unknown, fallback: string) {
  if (axios.isAxiosError(error) && typeof error.response?.data?.error === "string") {
    return error.response.data.error;
  }
  return fallback;
}
