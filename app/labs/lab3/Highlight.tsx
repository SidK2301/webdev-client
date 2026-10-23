import type { ReactNode } from "react";

export default function Highlight({ children, id = "wd-highlight" }: { children: ReactNode; id?: string }) {
  return <span id={id} className="wd-highlight" style={{ backgroundColor: "yellow", color: "red" }}>{children}</span>;
}
