import { create } from "zustand";

export type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: { _id: string; name: string; description: string; module: string }[];
};

type ModuleState = {
  modules: Module[];
  replaceForCourse: (courseId: string, modules: Module[]) => void;
  add: (record: Module) => void;
  update: (record: Module) => void;
  remove: (id: string) => void;
};

export const useModules = create<ModuleState>((set) => ({
  modules: [],
  replaceForCourse: (courseId, modules) => set((state) => ({
    modules: [...state.modules.filter((item) => item.course !== courseId), ...modules],
  })),
  add: (record) => set((state) => ({ modules: [...state.modules, record] })),
  update: (record) => set((state) => ({
    modules: state.modules.map((item) => item._id === record._id ? record : item),
  })),
  remove: (id) => set((state) => ({
    modules: state.modules.filter((item) => item._id !== id),
  })),
}));
