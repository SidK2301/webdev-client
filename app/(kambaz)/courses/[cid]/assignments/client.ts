import { kambazApi } from "../../../api";
import { coursePath } from "../../client";

export type Assignment = {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  due: string;
  available: string;
  group?: string;
  displayGradeAs?: string;
  submissionType?: string;
  onlineEntry?: string[];
  assignTo?: string;
  until?: string;
  notes?: string;
};

type AssignmentDraft = Omit<Assignment, "_id" | "course">;
const assignmentsPath = (courseId: string) => `${coursePath(courseId)}/assignments`;
const assignmentPath = (id: string) => `/assignments/${encodeURIComponent(id)}`;

export async function findAssignments(courseId: string, signal: AbortSignal) {
  const { data } = await kambazApi.get<Assignment[]>(assignmentsPath(courseId), { signal });
  return data;
}

export async function findAssignment(courseId: string, id: string, signal: AbortSignal) {
  const { data } = await kambazApi.get<Assignment>(`${assignmentsPath(courseId)}/${encodeURIComponent(id)}`, { signal });
  return data;
}

export async function saveAssignment(courseId: string, id: string | undefined, draft: AssignmentDraft) {
  if (id) {
    await kambazApi.put(assignmentPath(id), draft, { params: { courseId } });
  } else {
    await kambazApi.post(assignmentsPath(courseId), draft);
  }
}

export async function deleteAssignment(courseId: string, id: string) {
  await kambazApi.delete(assignmentPath(id), { params: { courseId } });
}
