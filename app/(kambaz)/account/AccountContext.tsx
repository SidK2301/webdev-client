"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { getProfile, type AccountUser } from "./client";

const AccountContext = createContext<{
  currentUser: AccountUser | null;
  setCurrentUser: (user: AccountUser | null) => void;
  loadingAccount: boolean;
  accountError: string;
} | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setUser] = useState<AccountUser | null>(null);
  const [loadingAccount, setLoading] = useState(true);
  const [accountError, setAccountError] = useState("");
  const accountChanged = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    getProfile(controller.signal)
      .then((user) => {
        if (!controller.signal.aborted && !accountChanged.current) setUser(user);
      })
      .catch(() => {
        if (!controller.signal.aborted && !accountChanged.current) {
          setAccountError("The account session could not be checked. Reload to try again.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  function setCurrentUser(user: AccountUser | null) {
    accountChanged.current = true;
    setUser(user);
    setLoading(false);
    setAccountError("");
  }

  return <AccountContext.Provider value={{ currentUser, setCurrentUser, loadingAccount, accountError }}>
    {children}
  </AccountContext.Provider>;
}

export function useAccount() {
  const account = useContext(AccountContext);
  if (!account) throw new Error("AccountProvider is required");
  return account;
}
