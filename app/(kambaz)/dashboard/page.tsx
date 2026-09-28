import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h2>Dashboard</h2>

      <h3>Courses</h3>

      <h4>CS101 Introduction to Computer Science</h4>
      <Link href="/courses/101/home">Go to Course</Link>

      <h4>CS201 Data Structures</h4>
      <Link href="/courses/201/home">Go to Course</Link>

      <h4>CS301 Web Development</h4>
      <Link href="/courses/301/home">Go to Course</Link>
    </div>
  );
}