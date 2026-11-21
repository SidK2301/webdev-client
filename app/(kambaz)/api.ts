import axios from "axios";

export const kambazApi = axios.create({
  baseURL: "/api/kambaz",
  withCredentials: true,
});

export function apiError(error: unknown, fallback: string) {
  if (axios.isAxiosError(error) && typeof error.response?.data?.error === "string") {
    return error.response.data.error;
  }
  return fallback;
}
