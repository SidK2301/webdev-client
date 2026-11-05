import type { ReactNode } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  children,
  onEdit,
  onDelete,
}: {
  title: string;
  children?: ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        <span>{title}</span>
        <div className="flex items-center gap-3">
          <GreenCheckmark />
          <button type="button" className="wd-edit-module-click" aria-label={`Edit ${title}`} onClick={onEdit}><FaPencilAlt /></button>
          <button type="button" className="wd-delete-module-click text-red-700" aria-label={`Delete ${title}`} onClick={onDelete}><FaTrash /></button>
        </div>
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
