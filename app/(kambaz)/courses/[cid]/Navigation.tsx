"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const piazza = `/courses/${cid}/piazza`;
  const zoom = `/courses/${cid}/zoom`;
  const assignments = `/courses/${cid}/assignments`;
  const quizzes = `/courses/${cid}/quizzes`;
  const grades = `/courses/${cid}/grades`;
  const people = `/courses/${cid}/people`;
  const linkClass = (href: string, nested = false) =>
    pathname === href || (nested && pathname.startsWith(href + "/"))
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link href={home} id="wd-course-home-link" className={linkClass(home)}>
        Home
      </Link>
      <Link href={modules} id="wd-course-modules-link" className={linkClass(modules)}>
        Modules
      </Link>
      <Link href={piazza} id="wd-course-piazza-link" className={linkClass(piazza)}>
        Piazza
      </Link>
      <Link href={zoom} id="wd-course-zoom-link" className={linkClass(zoom)}>
        Zoom
      </Link>
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={linkClass(assignments, true)}
      >
        Assignments
      </Link>
      <Link href={quizzes} id="wd-course-quizzes-link" className={linkClass(quizzes)}>
        Quizzes
      </Link>
      <Link href={grades} id="wd-course-grades-link" className={linkClass(grades)}>
        Grades
      </Link>
      <Link href={people} id="wd-course-people-link" className={linkClass(people)}>
        People
      </Link>
      <Link
        href={`/courses/${cid}/modules`}
        id="wd-your-course-link"
        className="list-group-item border-0 text-red-600"
      >
        Study Guide
      </Link>
      <Link
        href={home}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
