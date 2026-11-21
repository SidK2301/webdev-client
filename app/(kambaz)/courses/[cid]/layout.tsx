import type { ReactNode } from "react";
import CourseShell from "./CourseShell";

export default async function CourseLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return <CourseShell key={cid} cid={cid}>{children}</CourseShell>;
}
