import axios from "axios";
import { kambazApi } from "../api";

export type AccountUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export async function signIn(username: string, password: string) {
  const { data } = await kambazApi.post<AccountUser>("/users/signin", { username, password });
  return data;
}

export async function signUp(username: string, password: string) {
  const { data } = await kambazApi.post<AccountUser>("/users/signup", { username, password });
  return data;
}

export async function getProfile(signal: AbortSignal) {
  try {
    const { data } = await kambazApi.get<AccountUser>("/users/profile", { signal });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) return null;
    throw error;
  }
}

export async function updateProfile({ _id, firstName, lastName, email }: AccountUser) {
  const { data } = await kambazApi.put<AccountUser>(`/users/${encodeURIComponent(_id)}`, { firstName, lastName, email });
  return data;
}

export async function signOut() {
  await kambazApi.post("/users/signout");
}
