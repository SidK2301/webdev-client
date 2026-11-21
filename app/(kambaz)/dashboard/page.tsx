"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useAccount } from "../account/AccountContext";
import { apiError } from "../api";
import { createCourse, deleteCourse, findCourses, updateCourse } from "../courses/client";
import CourseCard from "./CourseCard";
import { useCourses, type Course } from "../store/coursesStore";

const empty = { name: "", description: "", number: "", startDate: "" };
const inputClass = "w-full rounded border border-neutral-300 px-3 py-2";
const buttonClass = "rounded bg-blue-600 px-3 py-2 text-white disabled:opacity-50";

export default function Dashboard() {
  const { currentUser, loadingAccount, accountError } = useAccount();
  if (loadingAccount) return <p role="status">Checking your session…</p>;
  return <CourseDashboard key={currentUser?._id ?? "guest"} signedIn={!!currentUser} accountError={accountError} />;
}

function CourseDashboard({ signedIn, accountError }: { signedIn: boolean; accountError: string }) {
  const { courses, replace, add, update, remove } = useCourses();
  const [draft, setDraft] = useState(empty);
  const [editing, setEditing] = useState<Course | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const visibleCourses = loaded ? courses : [];

  useEffect(() => {
    const controller = new AbortController();
    findCourses(signedIn, controller.signal)
      .then((records) => {
        if (controller.signal.aborted) return;
        replace(records);
        setLoaded(true);
      })
      .catch((failure) => {
        if (!controller.signal.aborted) setError(apiError(failure, "Courses could not be loaded."));
      });
    return () => controller.abort();
  }, [replace, signedIn]);

  function reset() {
    setDraft(empty);
    setEditing(null);
  }

  async function mutate(action: () => Promise<void>, fallback: string) {
    if (busy || !loaded) return;
    if (!signedIn) {
      setError("Sign in to change courses.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (failure) {
      setError(apiError(failure, fallback));
    } finally {
      setBusy(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = draft.name.trim();
    if (!name) return;
    void mutate(async () => {
      if (editing) {
        update(await updateCourse({ ...editing, ...draft, name }));
      } else {
        add(await createCourse({
          ...draft, name, image: "/images/reactjs.jpg",
          endDate: "", department: "", credits: 0, term: "",
        }));
      }
      reset();
    }, "The course could not be saved.");
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <form className="my-4 grid max-w-3xl gap-3 sm:grid-cols-2" onSubmit={submit}>
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
          <button id="wd-add-new-course-click" className={buttonClass} type="submit" disabled={busy || !loaded || !!editing}>Add</button>
          <button id="wd-update-course-click" className={buttonClass} type="submit" disabled={busy || !loaded || !editing}>Update</button>
          {editing && <button type="button" className="rounded border px-3 py-2" onClick={reset}>Cancel</button>}
        </div>
      </form>
      {(error || accountError) && <p role="alert" className="my-2 text-red-700">{error || accountError}</p>}
      {!loaded && !error && <p role="status">Loading courses…</p>}
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map((course) => (
          <CourseCard key={course._id} {...course} onEdit={() => {
            if (busy) return;
            setEditing(course);
            setDraft({ name: course.name, description: course.description,
              number: course.number, startDate: course.startDate });
            document.getElementById("wd-course-name")?.focus();
          }} onDelete={() => void mutate(async () => {
            await deleteCourse(course._id);
            remove(course._id);
            if (editing?._id === course._id) reset();
          }, "The course could not be deleted.")} />
        ))}
      </div>
    </div>
  );
}
