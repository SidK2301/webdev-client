"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { createLabStore } from "./stores";

export default function Lab4Layout({ children }: { children: ReactNode }) {
  const [store] = useState(createLabStore);
  return <Provider store={store}>{children}</Provider>;
}
