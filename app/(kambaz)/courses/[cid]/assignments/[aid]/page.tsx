import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Editor</h2>

      <div>
        <label htmlFor="wd-name">
          Assignment Name
        </label>
        <br />
        <input
          id="wd-name"
          type="text"
          defaultValue="Assignment 1"
        />
      </div>

      <br />

      <div>
        <label htmlFor="wd-assignment-description">
          Description
        </label>
        <br />
        <textarea
          id="wd-assignment-description"
          rows={6}
          cols={50}
          defaultValue="Introduction to Computer Science"
        />
      </div>

      <br />

      <div>
        <label htmlFor="wd-assignment-points">
          Points
        </label>
        <br />
        <input
          id="wd-assignment-points"
          type="number"
          defaultValue="100"
        />
      </div>

      <br />

      <div>
        <label htmlFor="wd-assignment-due-date">
          Due Date
        </label>
        <br />
        <input
          id="wd-assignment-due-date"
          type="date"
        />
      </div>

      <br />

      <button id="wd-save-assignment" type="button">
        Save
      </button>

      {" "}

      <Link href={`/courses/${cid}/assignments`}>
        <button id="wd-cancel-assignment" type="button">
          Cancel
        </button>
      </Link>
    </div>
  );
}