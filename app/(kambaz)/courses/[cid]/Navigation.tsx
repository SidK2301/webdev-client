"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
];
const EXTRA_LINKS = [
  { segment: "modules", id: "wd-your-course-link", label: "Study Guide" },
  { segment: "home", id: "wd-course-ai-link", label: "Sample" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map(({ segment, id, label }) => {
        const href = `/courses/${cid}/${segment}`;
        const active = pathname === href || (segment !== "home" && pathname.startsWith(href + "/"));
        return (
          <Link key={id} href={href} id={id} aria-current={active ? "page" : undefined}
            className={active ? "list-group-item active border-0" : "list-group-item border-0 text-red-600"}>
            {label}
          </Link>
        );
      })}
      {EXTRA_LINKS.map(({ segment, id, label }) => (
        <Link key={id} href={`/courses/${cid}/${segment}`} id={id} className="list-group-item border-0 text-red-600">{label}</Link>
      ))}
    </div>
  );
}
