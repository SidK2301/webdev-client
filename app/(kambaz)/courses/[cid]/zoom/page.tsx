import Link from "next/link";

export default async function Zoom({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-zoom">
      <h2>Zoom</h2>

      <p>Course Zoom meetings.</p>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}