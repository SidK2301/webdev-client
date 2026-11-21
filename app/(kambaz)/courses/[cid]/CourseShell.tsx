"use client";

import { useEffect, useState, type ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import type { Course } from "../../store/coursesStore";
import { apiError } from "../../api";
import { findCourse } from "../client";

export default function CourseShell({ cid, children }: { cid: string; children: ReactNode }) {
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [course, setCourse] = useState<Course>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    findCourse(cid, controller.signal)
      .then((record) => { if (!controller.signal.aborted) setCourse(record); })
      .catch((failure) => {
        if (!controller.signal.aborted) setError(apiError(failure, "The course could not be loaded."));
      });
    return () => controller.abort();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="mb-3 flex items-center text-2xl font-semibold text-red-600">
        <button type="button" className="me-4 text-xl" aria-label="Toggle course navigation"
          aria-expanded={navigationOpen} aria-controls="wd-course-sidebar"
          onClick={() => setNavigationOpen((open) => !open)}>
          <FaAlignJustify />
        </button>
        <Breadcrumb course={course} />
        <span className="ml-2 text-sm">({cid})</span>
      </h2>
      {error && <p role="alert" className="text-red-700">{error}</p>}
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
