import axios from "axios";

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER ?? (
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : ""
);
export const LAB_API = HTTP_SERVER ? `${HTTP_SERVER.replace(/\/$/, "")}/lab5` : "";
export const labClient = axios.create({ baseURL: LAB_API });

export type Todo = { id: number; title: string; completed: boolean; description: string };

export function errorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.error ?? error.message;
  }
  return error instanceof Error ? error.message : "Request failed";
}
