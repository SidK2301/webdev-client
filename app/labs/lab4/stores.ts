import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { create } from "zustand";

export type Todo = { id: string; title: string };

const initialTodos: Todo[] = [
  { id: "1", title: "Review Chapter 4" },
  { id: "2", title: "Practice shared state" },
  { id: "3", title: "Check Lab 4" },
];

type TodoActions = {
  add: (todo: Todo) => void;
  update: (todo: Todo) => void;
  remove: (id: string) => void;
};

export const useZustandCounter = create<{ count: number; change: (delta: number) => void }>(
  (set) => ({
    count: 7,
    change: (delta) => set(({ count }) => ({ count: count + delta })),
  }),
);

export const useZustandTodos = create<{ todos: Todo[] } & TodoActions>((set) => ({
  todos: initialTodos,
  add: (todo) => set(({ todos }) => ({ todos: [...todos, todo] })),
  update: (todo) => set(({ todos }) => ({
    todos: todos.map((item) => item.id === todo.id ? todo : item),
  })),
  remove: (id) => set(({ todos }) => ({
    todos: todos.filter((item) => item.id !== id),
  })),
}));

const counter = createSlice({
  name: "counter",
  initialState: 7,
  reducers: {
    change: (state, action: PayloadAction<number>) => state + action.payload,
  },
});

const todos = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    update: (state, action: PayloadAction<Todo>) =>
      state.map((item) => item.id === action.payload.id ? action.payload : item),
    remove: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const counterActions = counter.actions;
export const todoActions = todos.actions;
export const createLabStore = () => configureStore({
  reducer: { counter: counter.reducer, todos: todos.reducer },
});
export type LabState = ReturnType<ReturnType<typeof createLabStore>["getState"]>;
