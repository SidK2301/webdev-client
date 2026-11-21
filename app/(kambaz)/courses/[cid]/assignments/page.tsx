"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useAccount } from "../../../account/AccountContext";
import { apiError } from "../../../api";
import AssignmentItem from "./AssignmentItem";
import { deleteAssignment, findAssignments, type Assignment } from "./client";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  return <AssignmentList key={cid} cid={cid} />;
}

function AssignmentList({ cid }: { cid: string }) {
  const { currentUser } = useAccount();
  const [assignments, setAssignments] = useState<Assignment[]>();
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    findAssignments(cid, controller.signal)
      .then((records) => { if (!controller.signal.aborted) setAssignments(records); })
      .catch((failure) => {
        if (!controller.signal.aborted) setError(apiError(failure, "Assignments could not be loaded."));
      });
    return () => controller.abort();
  }, [cid]);

  async function remove(id: string) {
    if (pending) return;
    setPending(true);
    setError("");
    try {
      await deleteAssignment(cid, id);
      setAssignments((records) => records?.filter((record) => record._id !== id));
    } catch (failure) {
      setError(apiError(failure, "The assignment could not be deleted."));
    } finally {
      setPending(false);
    }
  }

  const visibleAssignments = assignments?.filter(({ title }) =>
    title.toLowerCase().includes(search.trim().toLowerCase()));
  const editorHref = `/courses/${cid}/assignments/editor`;

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-64 rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <Link
            id="wd-add-assignment"
            href={editorHref}
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> Assignment
          </Link>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <Link href={editorHref} aria-label="Add assignment" className="rounded border bg-white px-2 py-0.5 text-sm">
          <FaPlus />
        </Link>
      </h3>
      {error && <p role="alert" className="mb-3 text-red-700">{error}</p>}
      {!assignments && !error && <p role="status">Loading assignments…</p>}
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {visibleAssignments?.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={cid}
            aid={assignment._id}
            title={assignment.title}
            onDelete={currentUser ? () => void remove(assignment._id) : undefined}
            pending={pending}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
          />
        ))}
      </ul>
    </div>
  );
}
