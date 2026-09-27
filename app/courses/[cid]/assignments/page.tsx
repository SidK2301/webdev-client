import Link from "next/link";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-assignments">
      <h2>Assignments</h2>

      <h3>
        <Link href={`/courses/${cid}/assignments/editor`}>
          Assignment 1
        </Link>
      </h3>
      <p>Introduction to Computer Science</p>

      <h3>Assignment 2</h3>
      <p>Programming Basics</p>

      <h3>Assignment 3</h3>
      <p>Functions and Control Flow</p>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}