import Link from "next/link";

export default async function People({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-people">
      <h2>People</h2>

      <h3>Instructor</h3>
      <p>Professor Smith</p>

      <h3>Students</h3>
      <ul>
        <li>Siddhi Kore</li>
        <li>Student 2</li>
        <li>Student 3</li>
      </ul>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}