import Lesson from "./Lesson";
import Module from "./Module";

export default function Modules() {
  return (
    <div id="wd-modules-page">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1: Introduction">
          <Lesson title="Module 1: Getting Started">
            <li className="wd-content-item">
              <strong>Lesson 1: Introduction to Computer Science</strong>
              <ul className="list-disc pl-6">
                <li>Course Overview</li>
                <li>Introduction to Computer Science</li>
              </ul>
            </li>
            <li className="wd-content-item">
              <strong>Lesson 2: Getting Started</strong>
              <ul className="list-disc pl-6">
                <li>Course Syllabus</li>
                <li>Getting Started Guide</li>
              </ul>
            </li>
          </Lesson>
        </Module>
        <Module title="Week 2: Programming Basics">
          <Lesson title="Module 2: Programming Fundamentals">
            <li className="wd-content-item">
              <strong>Lesson 1: Variables and Data Types</strong>
              <ul className="list-disc pl-6">
                <li>Variables</li>
                <li>Data Types</li>
              </ul>
            </li>
            <li className="wd-content-item">
              <strong>Lesson 2: Control Flow and Functions</strong>
              <ul className="list-disc pl-6">
                <li>Control Flow</li>
                <li>Functions</li>
              </ul>
            </li>
          </Lesson>
          <Lesson title="Siddhi’s Study Notes">
            <li className="wd-content-item">My notes on building web applications.</li>
          </Lesson>
        </Module>
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li className="wd-content-item">Assistant-generated sample content.</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
