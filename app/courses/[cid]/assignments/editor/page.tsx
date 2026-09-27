export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Editor</h2>

      <label>
        Assignment Name
        <br />
        <input
          id="wd-assignment-name"
          type="text"
          defaultValue="Assignment 1"
        />
      </label>

      <br />
      <br />

      <label>
        Description
        <br />
        <textarea
          id="wd-assignment-description"
          defaultValue="Introduction to Computer Science"
        />
      </label>

      <br />
      <br />

      <label>
        Points
        <br />
        <input
          id="wd-assignment-points"
          type="number"
          defaultValue="100"
        />
      </label>

      <br />
      <br />

      <label>
        Due Date
        <br />
        <input
          id="wd-assignment-due-date"
          type="date"
        />
      </label>

      <br />
      <br />

      <button id="wd-save-assignment">
        Save
      </button>

      <button id="wd-cancel-assignment">
        Cancel
      </button>
    </div>
  );
}