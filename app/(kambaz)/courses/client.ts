import { kambazApi } from "../api";
import type { Course } from "../store/coursesStore";
import type { Module } from "../store/modulesStore";

export const coursePath = (id: string) => `/courses/${encodeURIComponent(id)}`;

export async function findCourses(enrolled: boolean, signal?: AbortSignal) {
  const { data } = await kambazApi.get<Course[]>(enrolled ? "/users/current/courses" : "/courses", { signal });
  return data;
}

export async function findCourse(id: string, signal: AbortSignal) {
  const { data } = await kambazApi.get<Course>(coursePath(id), { signal });
  return data;
}

export async function createCourse(draft: Omit<Course, "_id">) {
  const { data } = await kambazApi.post<Course>("/courses", draft);
  return data;
}

export async function updateCourse(course: Course) {
  const { data } = await kambazApi.put<Course>(coursePath(course._id), course);
  return data;
}

export async function deleteCourse(id: string) {
  await kambazApi.delete(coursePath(id));
}

export async function findModules(courseId: string, signal: AbortSignal) {
  const { data } = await kambazApi.get<Module[]>(`${coursePath(courseId)}/modules`, { signal });
  return data;
}

export async function createModule(courseId: string, draft: Pick<Module, "name" | "description">) {
  const { data } = await kambazApi.post<Module>(`${coursePath(courseId)}/modules`, draft);
  return data;
}

export async function updateModule(id: string, draft: Pick<Module, "name" | "description">) {
  const { data } = await kambazApi.put<Module>(`/modules/${encodeURIComponent(id)}`, draft);
  return data;
}

export async function deleteModule(id: string) {
  await kambazApi.delete(`/modules/${encodeURIComponent(id)}`);
}

export type CoursePerson = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

export async function findCoursePeople(courseId: string, signal: AbortSignal) {
  const { data } = await kambazApi.get<CoursePerson[]>(`${coursePath(courseId)}/users`, { signal });
  return data;
}

export async function changeEnrollment(courseId: string, enroll: boolean) {
  const path = `/users/current${coursePath(courseId)}`;
  if (enroll) {
    await kambazApi.post(path);
  } else {
    await kambazApi.delete(path);
  }
}
