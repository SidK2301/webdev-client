import CourseStatus from "./CourseStatus";

export default async function CourseHome({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courses: Record<string, string> = {
    "101": "CS101 Introduction to Computer Science",
    "201": "CS201 Data Structures",
    "301": "CS301 Web Development",
  };

  const course = courses[cid] || "Unknown Course";

  return (
    <div id="wd-course-home">
      <h1>Course Home</h1>

      <h2>{course}</h2>

      <p>Welcome to the course!</p>

      <CourseStatus />
    </div>
  );
}