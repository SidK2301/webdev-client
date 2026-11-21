import { create } from "zustand";

export type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image: string;
  term: string;
};

type CourseState = {
  courses: Course[];
  replace: (courses: Course[]) => void;
  add: (record: Course) => void;
  update: (record: Course) => void;
  remove: (id: string) => void;
};

export const useCourses = create<CourseState>((set) => ({
  courses: [],
  replace: (courses) => set({ courses }),
  add: (record) => set((state) => ({ courses: [...state.courses, record] })),
  update: (record) => set((state) => ({
    courses: state.courses.map((item) => item._id === record._id ? record : item),
  })),
  remove: (id) => set((state) => ({
    courses: state.courses.filter((item) => item._id !== id),
  })),
}));
