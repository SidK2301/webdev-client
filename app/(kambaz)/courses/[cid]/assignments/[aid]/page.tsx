import type { ReactNode } from "react";
import Link from "next/link";

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

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const assignmentsHref = `/courses/${cid}/assignments`;

  return (
    <div id="wd-assignments-editor" className="max-w-5xl">
      <h1 className="mb-5 text-2xl font-semibold text-neutral-800">
        Assignment Editor
      </h1>
      <div className="space-y-5">
        <EditorField id="wd-name" label="Assignment Name">
          <input
            id="wd-name"
            type="text"
            defaultValue="Assignment 1"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-description" label="Description">
          <textarea
            id="wd-assignment-description"
            rows={6}
            defaultValue="Introduction to Computer Science"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-points" label="Points">
          <input
            id="wd-assignment-points"
            type="number"
            defaultValue="100"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-group" label="Assignment Group">
          <select
            id="wd-assignment-group"
            defaultValue="ASSIGNMENTS"
            className={selectClass}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </EditorField>

        <EditorField id="wd-display-grade-as" label="Display Grade As">
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
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
              defaultValue="Online"
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
                  <input type="checkbox" name="online-entry" value="Text Entry" />
                  Text Entry
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="online-entry"
                    value="Website URL"
                    defaultChecked
                  />
                  Website URL
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="Media Recordings" />
                  Media Recordings
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="Student Annotation" />
                  Student Annotation
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="online-entry" value="File Uploads" />
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>
        </EditorField>

        <EditorField id="wd-assign-to" label="Assign">
          <input
            id="wd-assign-to"
            type="text"
            defaultValue="Everyone"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-assignment-due-date" label="Due">
          <input
            id="wd-assignment-due-date"
            type="datetime-local"
            defaultValue="2024-05-13T23:59"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-available-from" label="Available from">
          <input
            id="wd-available-from"
            type="datetime-local"
            defaultValue="2024-05-06T00:01"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-available-until" label="Until">
          <input
            id="wd-available-until"
            type="datetime-local"
            className={inputClass}
          />
        </EditorField>

        <EditorField id="wd-ai-editor-notes" label="Sample notes">
          <textarea
            id="wd-ai-editor-notes"
            rows={3}
            placeholder="Sample notes"
            className={inputClass}
          />
        </EditorField>
      </div>

      <hr className="my-6 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={assignmentsHref}
          id="wd-cancel-assignment"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 no-underline hover:bg-neutral-200"
        >
          Cancel
        </Link>
        <Link
          href={assignmentsHref}
          id="wd-save-assignment"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
