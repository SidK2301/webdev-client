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
          <li>
            <strong>Module 1: Getting Started</strong>

            <ul>
              <li>
                <strong>Lesson 1: Introduction to Computer Science</strong>
                <ul>
                  <li>Course Overview</li>
                  <li>Introduction to Computer Science</li>
                </ul>
              </li>

              <li>
                <strong>Lesson 2: Getting Started</strong>
                <ul>
                  <li>Course Syllabus</li>
                  <li>Getting Started Guide</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="wd-module-2">
        <h3>Week 2: Programming Basics</h3>

        <ul>
          <li>
            <strong>Module 2: Programming Fundamentals</strong>

            <ul>
              <li>
                <strong>Lesson 1: Variables and Data Types</strong>
                <ul>
                  <li>Variables</li>
                  <li>Data Types</li>
                </ul>
              </li>

              <li>
                <strong>Lesson 2: Control Flow and Functions</strong>
                <ul>
                  <li>Control Flow</li>
                  <li>Functions</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}