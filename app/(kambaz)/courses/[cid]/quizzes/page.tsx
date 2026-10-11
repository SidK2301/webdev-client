import Link from "next/link";

export default async function Quizzes({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-quizzes">
      <h2>Quizzes</h2>

      <p>Course quizzes and assessments.</p>

      <br />

      <Link href={`/courses/${cid}/home`}>
        Course Home
      </Link>
    </div>
  );
}