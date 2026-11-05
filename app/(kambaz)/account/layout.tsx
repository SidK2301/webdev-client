import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account" className="flex flex-col gap-4 md:flex-row">
      <div className="shrink-0 md:w-[140px]">
        <AccountNavigation />
      </div>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
