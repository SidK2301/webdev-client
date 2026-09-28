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

      <section>
        <h3>Assignments</h3>

        <article>
          <h4>
            <Link href={`/courses/${cid}/assignments/editor`}>
              Assignment 1
            </Link>
          </h4>
          <p>
            Introduction to Computer Science
          </p>
          <p>
            Due: September 20 &nbsp; | &nbsp; Points: 100
          </p>
        </article>

        <hr />

        <article>
          <h4>Assignment 2</h4>
          <p>
            Programming Basics
          </p>
          <p>
            Due: September 27 &nbsp; | &nbsp; Points: 100
          </p>
        </article>

        <hr />

        <article>
          <h4>Assignment 3</h4>
          <p>
            Functions and Control Flow
          </p>
          <p>
            Due: October 4 &nbsp; | &nbsp; Points: 100
          </p>
        </article>
      </section>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}