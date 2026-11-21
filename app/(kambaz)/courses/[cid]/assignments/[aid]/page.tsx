"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { apiError } from "../../../../api";
import { findAssignment, saveAssignment, type Assignment } from "../client";

const inputClass =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";
const selectClass =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

function EditorField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start">
      <label htmlFor={id} className="pt-2 text-sm font-medium text-neutral-700">
        {label}
      </label>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function dateField(value: string | undefined, defaultTime: string) {
  if (!value) return "";
  return value.length === 10 ? `${value}T${defaultTime}` : value;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  return <Editor key={`${cid}/${aid ?? "new"}`} cid={cid} aid={aid} />;
}

function Editor({ cid, aid }: { cid: string; aid?: string }) {
  const router = useRouter();
  const [assignment, setAssignment] = useState<Assignment>();
  const [loadError, setLoadError] = useState("");
  const [saveError, setSaveError] = useState("");
  const [pending, setPending] = useState(false);
  const assignmentsHref = `/courses/${cid}/assignments`;

  useEffect(() => {
    if (!aid) return;
    const controller = new AbortController();
    findAssignment(cid, aid, controller.signal)
      .then((record) => { if (!controller.signal.aborted) setAssignment(record); })
      .catch((failure) => {
        if (!controller.signal.aborted) setLoadError(apiError(failure, "The assignment could not be loaded."));
      });
    return () => controller.abort();
  }, [aid, cid]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const fields = new FormData(event.currentTarget);
    const value = (name: string) => String(fields.get(name) ?? "");
    setPending(true);
    setSaveError("");
    try {
      await saveAssignment(cid, aid, {
        title: value("title").trim(),
        description: value("description"),
        points: Number(value("points")),
        group: value("group"),
        displayGradeAs: value("displayGradeAs"),
        submissionType: value("submissionType"),
        onlineEntry: fields.getAll("online-entry").map(String),
        assignTo: value("assignTo"),
        due: value("due"),
        available: value("available"),
        until: value("until"),
        notes: value("notes"),
      });
      router.push(assignmentsHref);
    } catch (failure) {
      setSaveError(apiError(failure, "The assignment could not be saved."));
    } finally {
      setPending(false);
    }
  }

  if (aid && !assignment) {
    return (
      <section id="wd-assignments-editor">
        <h1 className="mb-5 text-2xl font-semibold">Assignment Editor</h1>
        {loadError ? <p role="alert">{loadError}</p> : <p role="status">Loading assignment…</p>}
        <Link href={assignmentsHref}>Back to assignments</Link>
      </section>
    );
  }

  const onlineEntry = assignment?.onlineEntry ?? ["Website URL"];

  return (
    <form id="wd-assignments-editor" className="max-w-5xl" onSubmit={submit}>
      <h1 className="mb-5 text-2xl font-semibold text-neutral-800">
        Assignment Editor
      </h1>
      <div className="space-y-5">
        <EditorField id="wd-name" label="Assignment Name">
          <input
            id="wd-name"
            name="title"
            type="text"
            required
            defaultValue={assignment?.title ?? ""}
            className={inputClass}
          />
        </EditorField>

        {aid && <p className="text-sm text-neutral-600">Assignment id: {aid}</p>}

        <EditorField id="wd-assignment-description" label="Description">
          <textarea
            id="wd-assignment-description"
            name="description"
            rows={6}
            defaultValue={assignment?.description ?? ""}
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-points" label="Points">
          <input
            id="wd-assignment-points"
            name="points"
            type="number"
            min="0"
            step="any"
            required
            defaultValue={assignment?.points ?? 100}
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-group" label="Assignment Group">
          <select
            id="wd-assignment-group"
            name="group"
            defaultValue={assignment?.group ?? "ASSIGNMENTS"}
            className={selectClass}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </EditorField>

        <EditorField id="wd-display-grade-as" label="Display Grade As">
          <select
            id="wd-display-grade-as"
            name="displayGradeAs"
            defaultValue={assignment?.displayGradeAs ?? "Percentage"}
            className={selectClass}
          >
            <option>Percentage</option>
            <option>Points</option>
            <option>Letter Grade</option>
          </select>
        </EditorField>

        <EditorField id="wd-submission-type" label="Submission Type">
          <div className="space-y-4 rounded border border-neutral-300 p-4">
            <select
              id="wd-submission-type"
              name="submissionType"
              defaultValue={assignment?.submissionType ?? "Online"}
              className={selectClass}
            >
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-neutral-700">
                Online Entry Options
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="Text Entry" defaultChecked={onlineEntry.includes("Text Entry")} />
                  Text Entry
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="online-entry"
                    value="Website URL"
                    defaultChecked={onlineEntry.includes("Website URL")}
                  />
                  Website URL
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="Media Recordings" defaultChecked={onlineEntry.includes("Media Recordings")} />
                  Media Recordings
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="Student Annotation" defaultChecked={onlineEntry.includes("Student Annotation")} />
                  Student Annotation
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="File Uploads" defaultChecked={onlineEntry.includes("File Uploads")} />
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>
        </EditorField>

        <EditorField id="wd-assign-to" label="Assign">
          <input
            id="wd-assign-to"
            name="assignTo"
            type="text"
            defaultValue={assignment?.assignTo ?? "Everyone"}
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-due-date" label="Due">
          <input
            id="wd-assignment-due-date"
            name="due"
            type="datetime-local"
            defaultValue={dateField(assignment?.due, "23:59")}
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-available-from" label="Available from">
          <input
            id="wd-available-from"
            name="available"
            type="datetime-local"
            defaultValue={dateField(assignment?.available, "00:01")}
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-available-until" label="Until">
          <input
            id="wd-available-until"
            name="until"
            type="datetime-local"
            defaultValue={dateField(assignment?.until, "23:59")}
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-ai-editor-notes" label="Sample notes">
          <textarea
            id="wd-ai-editor-notes"
            name="notes"
            rows={3}
            defaultValue={assignment?.notes ?? ""}
            placeholder="Sample notes"
            className={inputClass}
          />
        </EditorField>
      </div>

      {saveError && <p role="alert" className="my-3 text-red-700">{saveError}</p>}
      <hr className="my-6 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={assignmentsHref}
          id="wd-cancel-assignment"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 no-underline hover:bg-neutral-200"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={pending}
          id="wd-save-assignment"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-red-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}
