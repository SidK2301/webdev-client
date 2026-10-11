import Link from "next/link";

export default async function Piazza({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-piazza">
      <h2>Piazza</h2>

      <p>Course Piazza discussion board.</p>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}