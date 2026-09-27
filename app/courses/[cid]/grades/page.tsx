import Link from "next/link";

export default async function Grades({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-grades">
      <h2>Grades</h2>

      <p>Assignment 1: 95%</p>
      <p>Assignment 2: 90%</p>
      <p>Assignment 3: 88%</p>

      <h3>Overall Grade: 91%</h3>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}