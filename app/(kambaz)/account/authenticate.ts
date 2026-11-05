"use server";

import users from "../database/users.json";

export type AccountUser = Pick<(typeof users)[number],
  "_id" | "username" | "firstName" | "lastName" | "email" | "role">;

export async function authenticate(username: string, password: string): Promise<AccountUser | null> {
  const match = users.find((user) => user.username === username && user.password === password);
  if (!match) return null;
  const { _id, firstName, lastName, email, role } = match;
  return { _id, username, firstName, lastName, email, role };
}
