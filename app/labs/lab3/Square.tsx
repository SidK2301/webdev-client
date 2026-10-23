import type { ReactNode } from "react";

export default function Square({ children, id = "wd-square" }: { children: ReactNode; id?: string }) {
  const num = Number(children);
  return <span id={id} className="wd-square">{num * num}</span>;
}
