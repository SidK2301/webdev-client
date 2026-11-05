"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { useCourses, type Course } from "../store/coursesStore";

const empty = { name: "", description: "", number: "", startDate: "" };
const inputClass = "w-full rounded border border-neutral-300 px-3 py-2";
const buttonClass = "rounded bg-blue-600 px-3 py-2 text-white disabled:opacity-50";

export default function Dashboard() {
  const { courses, add, update, remove } = useCourses();
  const [draft, setDraft] = useState(empty);
  const [editing, setEditing] = useState<Course | null>(null);

  function reset() {
    setDraft(empty);
    setEditing(null);
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <form className="my-4 grid max-w-3xl gap-3 sm:grid-cols-2" onSubmit={(event) => {
        event.preventDefault();
        const name = draft.name.trim();
        if (!name) return;
        if (editing) {
          update({ ...editing, ...draft, name });
        } else {
          add({
            ...draft, name, image: "/images/reactjs.jpg",
            endDate: "", department: "", credits: 0, term: "",
          });
        }
        reset();
      }}>
        <label>Course name
          <input id="wd-course-name" className={inputClass} required value={draft.name}
            onChange={(event) => setDraft({ ...draft, name: event.target.value })} />
        </label>
        <label>Course number
          <input id="wd-course-number" className={inputClass} value={draft.number}
            onChange={(event) => setDraft({ ...draft, number: event.target.value })} />
        </label>
        <label>Course description
          <textarea id="wd-course-description" className={inputClass} value={draft.description}
            onChange={(event) => setDraft({ ...draft, description: event.target.value })} />
        </label>
        <label>Start date
          <input id="wd-course-start-date" type="date" className={inputClass} value={draft.startDate}
            onChange={(event) => setDraft({ ...draft, startDate: event.target.value })} />
        </label>
        <div className="flex gap-2 sm:col-span-2">
          <button id="wd-add-new-course-click" className={buttonClass} type="submit" disabled={!!editing}>Add</button>
          <button id="wd-update-course-click" className={buttonClass} type="submit" disabled={!editing}>Update</button>
          {editing && <button type="button" className="rounded border px-3 py-2" onClick={reset}>Cancel</button>}
        </div>
      </form>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} onEdit={() => {
            setEditing(course);
            setDraft({ name: course.name, description: course.description,
              number: course.number, startDate: course.startDate });
            document.getElementById("wd-course-name")?.focus();
          }} onDelete={() => {
            remove(course._id);
            if (editing?._id === course._id) reset();
          }} />
        ))}
      </div>
    </div>
  );
}
