"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { apiError } from "../../../../api";
import { findCoursePeople, type CoursePerson } from "../../../client";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  return <CourseRoster key={cid} cid={cid} />;
}

function CourseRoster({ cid }: { cid: string }) {
  const [enrolled, setEnrolled] = useState<CoursePerson[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    findCoursePeople(cid, controller.signal)
      .then((records) => { if (!controller.signal.aborted) setEnrolled(records); })
      .catch((failure) => {
        if (!controller.signal.aborted) setError(apiError(failure, "The course roster could not be loaded."));
      });
    return () => controller.abort();
  }, [cid]);

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {error && <p role="alert" className="mb-2 text-red-700">{error}</p>}
      {!enrolled && !error && <p role="status">Loading roster…</p>}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled?.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
