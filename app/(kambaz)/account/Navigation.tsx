"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { href: "/account/signin", id: "wd-account-signin-link", label: "Sign in" },
    { href: "/account/signup", id: "wd-account-signup-link", label: "Sign up" },
    { href: "/account/profile", id: "wd-account-profile-link", label: "Profile" },
  ];

  return (
    <nav id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ href, id, label }) => (
        <Link
          key={href}
          href={href}
          id={id}
          className={
            pathname === href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
