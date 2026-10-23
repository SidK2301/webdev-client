"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaQuestionCircle, FaRegUserCircle } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const matches = (href: string) => (p: string) => p === href || p.startsWith(href + "/");
const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard, id: "wd-dashboard-link", match: matches("/dashboard") },
  { label: "Courses", path: "/dashboard", icon: FaBookOpen, id: "wd-course-link", match: matches("/courses") },
  { label: "Calendar", path: "/calendar", icon: IoCalendarOutline, id: "wd-calendar-link", match: matches("/calendar") },
  { label: "Inbox", path: "/inbox", icon: FaInbox, id: "wd-inbox-link", match: matches("/inbox") },
  { label: "Labs", path: "/labs", icon: LiaCogSolid, id: "wd-labs-link", match: matches("/labs") },
  { label: "Help", path: "/labs", icon: FaQuestionCircle, id: "wd-ai-nav-help", match: () => false },
  { label: "History", path: "/history", icon: IoCalendarOutline, id: "wd-history-link", match: matches("/history") },
];

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = matches("/account")(pathname);
  return (
    <nav id="wd-kambaz-navigation" className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        <Image
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>
      <Link href="/account" id="wd-account-link" aria-current={accountActive ? "page" : undefined}
        className={`block py-3 text-center text-sm no-underline ${accountActive ? "bg-white text-red-600" : "bg-black text-white"}`}>
        <FaRegUserCircle className={`inline-block text-3xl ${accountActive ? "text-red-600" : "text-white"}`} />
        <br />Account
      </Link>
      {LINKS.map(({ label, path, icon: Icon, id, match }) => {
        const active = match(pathname);
        return (
          <Link key={id} href={path} id={id} aria-current={active ? "page" : undefined}
            className={`block py-3 text-center text-sm no-underline ${active ? "bg-white text-red-600" : "bg-black text-white"}`}>
            <Icon className="inline-block text-3xl text-red-600" />
            <br />{label}
          </Link>
        );
      })}
    </nav>
  );
}
