"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { AccountUser } from "./authenticate";

const AccountContext = createContext<{
  currentUser: AccountUser | null;
  setCurrentUser: (user: AccountUser | null) => void;
} | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AccountUser | null>(null);
  return <AccountContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const account = useContext(AccountContext);
  if (!account) throw new Error("AccountProvider is required");
  return account;
}
