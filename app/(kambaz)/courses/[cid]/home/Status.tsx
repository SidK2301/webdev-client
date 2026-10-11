import {
  FaBell,
  FaBook,
  FaBullhorn,
  FaChartBar,
  FaCheckCircle,
  FaFileAlt,
  FaHome,
  FaRegStickyNote,
  FaStream,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

const actionClass =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          id="wd-unpublish-button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          id="wd-publish-button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={actionClass}>
        <FaFileAlt className="me-2 shrink-0" /> Import Existing Content
      </button>
      <button type="button" className={actionClass}>
        <FaBook className="me-2 shrink-0" /> Import from Commons
      </button>
      <button type="button" className={actionClass}>
        <FaHome className="me-2 shrink-0" /> Choose Home Page
      </button>
      <button type="button" className={actionClass}>
        <FaStream className="me-2 shrink-0" /> View Course Stream
      </button>
      <button type="button" className={actionClass}>
        <FaBullhorn className="me-2 shrink-0" /> New Announcement
      </button>
      <button type="button" className={actionClass}>
        <FaChartBar className="me-2 shrink-0" /> New Analytics
      </button>
      <button type="button" className={actionClass}>
        <FaBell className="me-2 shrink-0" /> View Course Notifications
      </button>
      <button type="button" className={actionClass}>
        <FaRegStickyNote className="me-2 shrink-0" /> My Study Notes
      </button>
      <button type="button" id="wd-ai-status" className={actionClass}>
        <FaBell className="me-2 shrink-0" /> Sample action
      </button>
    </div>
  );
}
