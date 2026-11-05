import { create } from "zustand";
import seed from "../database/modules.json";

export type Module = (typeof seed)[number];

type ModuleState = {
  modules: Module[];
  add: (draft: Omit<Module, "_id">) => void;
  update: (record: Module) => void;
  remove: (id: string) => void;
};

export const useModules = create<ModuleState>((set) => ({
  modules: seed,
  add: (draft) => set((state) => ({
    modules: [...state.modules, { ...draft, _id: crypto.randomUUID() }],
  })),
  update: (record) => set((state) => ({
    modules: state.modules.map((item) => item._id === record._id ? record : item),
  })),
  remove: (id) => set((state) => ({
    modules: state.modules.filter((item) => item._id !== id),
  })),
}));
