"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useModules, type Module as ModuleRecord } from "../../../store/modulesStore";
import { useAccount } from "../../../account/AccountContext";
import { apiError } from "../../../api";
import { createModule, deleteModule, findModules, updateModule } from "../../client";
import Lesson from "./Lesson";
import Module from "./Module";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  return <CourseModules key={cid} cid={cid} />;
}

function CourseModules({ cid }: { cid: string }) {
  const { modules, replaceForCourse, add, update, remove } = useModules();
  const { currentUser, loadingAccount } = useAccount();
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState<ModuleRecord | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const editor = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    findModules(cid, controller.signal)
      .then((records) => {
        if (controller.signal.aborted) return;
        replaceForCourse(cid, records);
        setLoaded(true);
      })
      .catch((failure) => {
        if (!controller.signal.aborted) setError(apiError(failure, "Modules could not be loaded."));
      });
    return () => controller.abort();
  }, [cid, replaceForCourse]);

  async function mutate(action: () => Promise<void>, fallback: string) {
    if (busy || !loaded || loadingAccount) return;
    if (!currentUser) {
      setError("Sign in to change modules.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (failure) {
      setError(apiError(failure, fallback));
    } finally {
      setBusy(false);
    }
  }

  function openEditor(module: ModuleRecord | null) {
    setError("");
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
          disabled={!loaded || busy}
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
          void mutate(async () => {
            const draft = { name: title, description };
            if (editing) {
              update(await updateModule(editing._id, draft));
            } else {
              add(await createModule(cid, draft));
            }
            editor.current?.close();
          }, "The module could not be saved.");
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
          {error && <p role="alert" className="text-red-700">{error}</p>}
          <div className="flex gap-2">
            <button type="submit" disabled={busy || loadingAccount} className="rounded bg-red-600 px-3 py-2 text-white">{editing ? "Save" : "Add Module"}</button>
            <button type="button" disabled={busy} className="rounded border px-3 py-2" onClick={() => editor.current?.close()}>Cancel</button>
          </div>
        </form>
      </dialog>
      {error && <p className="mb-2 text-red-700">{error}</p>}
      {!loaded && !error && <p role="status">Loading modules…</p>}
      <ul id="wd-modules" className="m-0 list-none p-0">
        {loaded && modules.filter((module) => module.course === cid).map((module) => (
          <Module key={module._id} title={module.name}
            onEdit={() => { if (!busy) openEditor(module); }}
            onDelete={() => void mutate(async () => {
              await deleteModule(module._id);
              remove(module._id);
            }, "The module could not be deleted.")}>
            {module.lessons?.map((lesson) => <Lesson key={lesson._id} title={lesson.name} />)}
          </Module>
        ))}
      </ul>
    </div>
  );
}
