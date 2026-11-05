"use client";

import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { useModules, type Module as ModuleRecord } from "../../../store/modulesStore";
import Lesson from "./Lesson";
import Module from "./Module";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const { modules, add, update, remove } = useModules();
  const [editing, setEditing] = useState<ModuleRecord | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const editor = useRef<HTMLDialogElement>(null);

  function openEditor(module: ModuleRecord | null) {
    setEditing(module);
    setName(module?.name ?? "");
    setDescription(module?.description ?? "");
    editor.current?.showModal();
  }
  return (
    <div id="wd-modules-page">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          id="wd-add-module-btn"
          onClick={() => openEditor(null)}
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <dialog ref={editor} aria-labelledby="wd-module-editor-title"
        className="m-auto w-full max-w-md rounded border border-neutral-300 p-5 backdrop:bg-black/40">
        <form className="space-y-3" onSubmit={(event) => {
          event.preventDefault();
          const title = name.trim();
          if (!title) return;
          if (editing) {
            update({ ...editing, name: title, description });
          } else {
            add({ name: title, description, course: cid, lessons: [] });
          }
          editor.current?.close();
        }}>
          <h2 id="wd-module-editor-title" className="text-xl font-semibold">{editing ? "Edit module" : "Add module"}</h2>
          <label className="block">Module name
            <input id="wd-module-name" className="block w-full rounded border p-2" required
              value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label className="block">Description
            <textarea id="wd-module-description" className="block w-full rounded border p-2"
              value={description} onChange={(event) => setDescription(event.target.value)} />
          </label>
          <div className="flex gap-2">
            <button type="submit" className="rounded bg-red-600 px-3 py-2 text-white">{editing ? "Save" : "Add Module"}</button>
            <button type="button" className="rounded border px-3 py-2" onClick={() => editor.current?.close()}>Cancel</button>
          </div>
        </form>
      </dialog>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.filter((module) => module.course === cid).map((module) => (
          <Module key={module._id} title={module.name}
            onEdit={() => openEditor(module)} onDelete={() => remove(module._id)}>
            {module.lessons?.map((lesson) => <Lesson key={lesson._id} title={lesson.name} />)}
          </Module>
        ))}
      </ul>
    </div>
  );
}
