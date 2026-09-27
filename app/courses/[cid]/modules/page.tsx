import Link from "next/link";

export default async function Modules({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-modules">
      <h2>Modules</h2>

      <section id="wd-module-1">
        <h3>Week 1: Introduction</h3>
        <ul>
          <li>Introduction to Computer Science</li>
          <li>Course Overview</li>
          <li>Getting Started</li>
        </ul>
      </section>

      <section id="wd-module-2">
        <h3>Week 2: Programming Basics</h3>
        <ul>
          <li>Variables and Data Types</li>
          <li>Control Flow</li>
          <li>Functions</li>
        </ul>
      </section>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}