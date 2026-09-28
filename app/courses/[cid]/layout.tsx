import Link from "next/link";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-course-layout">
      <nav id="wd-courses-navigation">
        <h3>Course Navigation</h3>

        <Link
          id="wd-course-home-link"
          href={`/courses/${cid}/home`}
        >
          Home
        </Link>

        <br />

        <Link
          id="wd-course-modules-link"
          href={`/courses/${cid}/modules`}
        >
          Modules
        </Link>

        <br />

        <Link href={`/courses/${cid}/assignments`}>
          Assignments
        </Link>

        <br />

        <Link href={`/courses/${cid}/grades`}>
          Grades
        </Link>

        <br />

        <Link href={`/courses/${cid}/people`}>
          People
        </Link>

        <br />

        <Link
          id="wd-course-piazza-link"
          href={`/courses/${cid}/piazza`}
        >
          Piazza
        </Link>

        <br />

        <Link href={`/courses/${cid}/zoom`}>
          Zoom
        </Link>

        <br />

        <Link href={`/courses/${cid}/quizzes`}>
          Quizzes
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
}