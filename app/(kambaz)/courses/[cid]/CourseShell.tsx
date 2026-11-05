"use client";

import { useState, type ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCourses } from "../../store/coursesStore";

export default function CourseShell({ cid, children }: { cid: string; children: ReactNode }) {
  const [navigationOpen, setNavigationOpen] = useState(true);
  const course = useCourses((state) => state.courses.find((item) => item._id === cid));

  return (
    <div id="wd-courses">
      <h2 className="mb-3 flex items-center text-2xl font-semibold text-red-600">
        <button type="button" className="me-4 text-xl" aria-label="Toggle course navigation"
          aria-expanded={navigationOpen} aria-controls="wd-course-sidebar"
          onClick={() => setNavigationOpen((open) => !open)}>
          <FaAlignJustify />
        </button>
        <Breadcrumb course={course} />
        <span className="ml-2 text-sm">({course?._id})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        <div id="wd-course-sidebar" hidden={!navigationOpen} className="w-[140px] shrink-0">
          <CourseNavigation cid={cid} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
