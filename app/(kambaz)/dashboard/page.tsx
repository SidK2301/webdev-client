"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useAccount } from "../account/AccountContext";
import { apiError } from "../api";
import { changeEnrollment, createCourse, deleteCourse, findCourses, updateCourse } from "../courses/client";
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
  const [catalog, setCatalog] = useState<Course[]>([]);
  const [showCatalog, setShowCatalog] = useState(false);
  const enrolledIds = new Set(courses.map(({ _id }) => _id));
  const visibleCourses = loaded ? (showCatalog ? catalog : courses) : [];

  useEffect(() => {
    const controller = new AbortController();
    const allCourses = findCourses(false, controller.signal);
    const myCourses = signedIn ? findCourses(true, controller.signal) : allCourses;
    Promise.all([allCourses, myCourses])
      .then(([all, visible]) => {
        if (controller.signal.aborted) return;
        setCatalog(all);
        replace(visible);
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
        const saved = await updateCourse({ ...editing, ...draft, name });
        update(saved);
        setCatalog((records) => records.map((record) => record._id === saved._id ? saved : record));
      } else {
        const saved = await createCourse({
          ...draft, name, image: "/images/reactjs.jpg",
          endDate: "", department: "", credits: 0, term: "",
        });
        add(saved);
        setCatalog((records) => [...records, saved]);
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
      {signedIn && (
        <div className="my-3 flex gap-2" role="group" aria-label="Course list">
          <button type="button" aria-pressed={!showCatalog} onClick={() => setShowCatalog(false)}
            className={!showCatalog ? buttonClass : "rounded border px-3 py-2"}>My Courses</button>
          <button type="button" aria-pressed={showCatalog} onClick={() => setShowCatalog(true)}
            className={showCatalog ? buttonClass : "rounded border px-3 py-2"}>All Courses</button>
        </div>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map((course) => (
          <CourseCard key={course._id} {...course}
            enrolled={enrolledIds.has(course._id)}
            onEnrollment={signedIn ? () => void mutate(async () => {
              await changeEnrollment(course._id, !enrolledIds.has(course._id));
              replace(await findCourses(true));
            }, "The enrollment could not be updated.") : undefined}
            busy={busy}
            onEdit={() => {
            if (busy) return;
            setEditing(course);
            setDraft({ name: course.name, description: course.description,
              number: course.number, startDate: course.startDate });
            document.getElementById("wd-course-name")?.focus();
          }} onDelete={() => void mutate(async () => {
            await deleteCourse(course._id);
            remove(course._id);
            setCatalog((records) => records.filter((record) => record._id !== course._id));
            if (editing?._id === course._id) reset();
          }, "The course could not be deleted.")} />
        ))}
      </div>
    </div>
  );
}
