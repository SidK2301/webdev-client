"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const matchesLab = (href: string) => (pathname: string) =>
  pathname === href || pathname.startsWith(href + "/");
const LINKS = [
  { id: "wd-home-link", label: "Labs Home", href: "/labs", match: (p: string) => p === "/labs" },
  { id: "wd-lab1-link", label: "Lab 1", href: "/labs/lab1", match: matchesLab("/labs/lab1") },
  { id: "wd-lab2-link", label: "Lab 2", href: "/labs/lab2", match: matchesLab("/labs/lab2") },
  { id: "wd-lab3-link", label: "Lab 3", href: "/labs/lab3", match: matchesLab("/labs/lab3") },
  { id: "wd-kambaz-link", label: "Kambaz", href: "/dashboard", match: () => false },
  { id: "wd-toc-book-link", label: "Chapter 1", href: "/book/ch1", match: () => false },
  { id: "wd-book-ch3-link", label: "Book Ch3", href: "https://kambaz.dev/book/ch3", match: () => false },
];
const activeStyle = {
  backgroundColor: "#2563eb", color: "white", borderRadius: "4px",
  padding: "2px 8px", textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <nav id="wd-labs-toc">
      <h3>Labs Navigation</h3>
      <ul>
        {LINKS.map(({ id, label, href, match }) => {
          const active = match(pathname);
          return (
            <li key={id}>
              <Link id={id} href={href} style={active ? activeStyle : undefined}
                aria-current={active ? "page" : undefined}>{label}</Link>
            </li>
          );
        })}
      </ul>
      <p>Siddhi Ramchandra Kore</p>
    </nav>
  );
}
