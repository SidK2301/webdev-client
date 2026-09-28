import CourseStatus from "./CourseStatus";
import Link from "next/link";

export default async function CourseHome({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courses: Record<string, string> = {
    "101": "CS101 Introduction to Computer Science",
    "201": "CS201 Data Structures",
    "301": "CS301 Web Development",
  };

  const course = courses[cid] || "Unknown Course";

  return (
    <div id="wd-course-home">
      <h1>Course Home</h1>

      <h2>{course}</h2>

      <p>Welcome to the course!</p>

      <section id="wd-course-modules">
        <h3>Modules</h3>

        <ul>
          <li>
            <strong>Week 1: Introduction</strong>
            <ul>
              <li>Introduction to Computer Science</li>
              <li>Course Overview</li>
              <li>Getting Started</li>
            </ul>
          </li>

          <li>
            <strong>Week 2: Programming Basics</strong>
            <ul>
              <li>Variables and Data Types</li>
              <li>Control Flow</li>
              <li>Functions</li>
            </ul>
          </li>
        </ul>

        <Link href={`/courses/${cid}/modules`}>
          View All Modules
        </Link>
      </section>

      <CourseStatus />
    </div>
  );
}