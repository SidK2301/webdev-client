import { create } from "zustand";
import seed from "../database/courses.json";

export type Course = (typeof seed)[number];

type CourseState = {
  courses: Course[];
  add: (draft: Omit<Course, "_id">) => void;
  update: (record: Course) => void;
  remove: (id: string) => void;
};

export const useCourses = create<CourseState>((set) => ({
  courses: seed,
  add: (draft) => set((state) => ({
    courses: [...state.courses, { ...draft, _id: crypto.randomUUID() }],
  })),
  update: (record) => set((state) => ({
    courses: state.courses.map((item) => item._id === record._id ? record : item),
  })),
  remove: (id) => set((state) => ({
    courses: state.courses.filter((item) => item._id !== id),
  })),
}));
