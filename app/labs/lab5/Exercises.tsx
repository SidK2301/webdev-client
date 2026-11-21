"use client";

import { useEffect, useState, type ReactNode } from "react";
import { errorMessage, HTTP_SERVER, LAB_API, labClient, type Todo } from "./client";

const operations = ["add", "subtract", "multiply", "divide"] as const;
const symbols = { add: "+", subtract: "−", multiply: "×", divide: "÷" };
const button = "rounded bg-blue-700 px-3 py-1.5 text-sm text-white hover:bg-blue-800 disabled:opacity-50";
const input = "rounded border border-slate-400 px-2 py-1";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2 border-b border-slate-200 pb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      {children}
    </section>
  );
}

function LabLink({ path, id, children }: { path: string; id?: string; children: ReactNode }) {
  return LAB_API ? (
    <a id={id} className={button} href={LAB_API + path}>{children}</a>
  ) : (
    <span id={id} className="text-sm text-slate-500">{children}</span>
  );
}

function EditLink({ label, path, initial }: { label: string; path: string; initial: string }) {
  const [value, setValue] = useState(initial);
  return (
    <div className="flex flex-wrap items-center gap-2">
      <LabLink path={`${path}/${encodeURIComponent(value)}`}>{label}</LabLink>
      <input className={input} aria-label={label} value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
}

function ParameterLinks() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  return (
    <>
      <Section title="Path Parameters">
        <div className="flex flex-wrap gap-2">
          {operations.map((operation) => (
            <LabLink key={operation} id={`wd-path-parameter-${operation}`} path={`/${operation}/10/5`}>
              {10} {symbols[operation]} {5}
            </LabLink>
          ))}
        </div>
      </Section>
      <Section title="Query Parameters">
        <div className="flex flex-wrap items-center gap-2">
          <label>A <input className={input} type="number" value={a} onChange={(event) => setA(event.target.value)} /></label>
          <label>B <input className={input} type="number" value={b} onChange={(event) => setB(event.target.value)} /></label>
          {operations.map((operation) => (
            <LabLink key={operation} id={`wd-query-parameter-${operation}`} path={`/calculator?${new URLSearchParams({ operation, a, b })}`}>
              {a} {symbols[operation]} {b}
            </LabLink>
          ))}
        </div>
      </Section>
    </>
  );
}

function ArrayLinks() {
  const [id, setId] = useState("1");
  return (
    <>
      <Section title="Retrieving Arrays"><LabLink id="wd-retrieve-todos" path="/todos">Get Todos</LabLink></Section>
      <Section title="Retrieving an Item by ID">
        <div className="flex flex-wrap items-center gap-2">
          <LabLink path={`/todos/${id}`}>Get Todo by ID</LabLink>
          <input className={input} aria-label="Todo ID" type="number" min="1" value={id} onChange={(event) => setId(event.target.value)} />
        </div>
      </Section>
      <Section title="Filtering Array Items"><LabLink path="/todos?completed=true">Get Completed Todos</LabLink></Section>
      <Section title="Creating an Item"><LabLink id="wd-create-todo" path="/todos/create">Create Todo</LabLink></Section>
      <Section title="Deleting an Item"><LabLink path={`/todos/${id}/delete`}>Remove Todo {id}</LabLink></Section>
      <Section title="Updating an Item">
        <EditLink label="Update Todo Title" path={`/todos/${id}/title`} initial="Review HTTP methods" />
        <EditLink label="Update Todo Completion" path={`/todos/${id}/completed`} initial="true" />
        <EditLink label="Update Todo Description" path={`/todos/${id}/description`} initial="Review the chapter examples" />
      </Section>
    </>
  );
}

function AsyncRead({ title, path, label }: { title: string; path: string; label: string }) {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  async function load() {
    setError("");
    try {
      const { data } = await labClient.get(path);
      setResult(typeof data === "string" ? data : JSON.stringify(data, null, 2));
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }
  return (
    <Section title={title}>
      <button className={button} disabled={!LAB_API} onClick={load}>{label}</button>
      {error && <p role="alert">{error}</p>}
      {result && <pre className="whitespace-pre-wrap">{result}</pre>}
    </Section>
  );
}

function AsyncTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!LAB_API) return;
    const controller = new AbortController();
    labClient.get<Todo[]>("/todos", { signal: controller.signal })
      .then(({ data }) => setTodos(data))
      .catch((failure) => {
        if (!controller.signal.aborted) setError(errorMessage(failure));
      });
    return () => controller.abort();
  }, []);
  async function mutate(action: () => Promise<void>) {
    setBusy(true);
    setError("");
    try {
      await action();
      const { data } = await labClient.get<Todo[]>("/todos");
      setTodos(data);
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setBusy(false);
    }
  }
  return (
    <Section title="Working with Arrays Asynchronously">
      <form className="flex flex-wrap gap-2" onSubmit={(event) => {
        event.preventDefault();
        void mutate(async () => {
          await labClient.post("/todos", { title: title.trim() });
          setTitle("");
        });
      }}>
        <input className={input} aria-label="New todo title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <button className={button} disabled={busy || !LAB_API || !title.trim()}>Add Todo (POST)</button>
      </form>
      {error && <p role="alert">{error}</p>}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoRow key={todo.id} todo={todo} busy={busy} mutate={mutate} />
        ))}
      </ul>
    </Section>
  );
}

function TodoRow({ todo, busy, mutate }: { todo: Todo; busy: boolean; mutate: (action: () => Promise<void>) => Promise<void> }) {
  return (
    <li>
      <form className="flex flex-wrap items-center gap-2" onSubmit={(event) => {
        event.preventDefault();
        const fields = new FormData(event.currentTarget);
        void mutate(async () => {
          await labClient.put(`/todos/${todo.id}`, {
            title: String(fields.get("title")).trim(),
            description: fields.get("description"),
            completed: fields.has("completed"),
          });
        });
      }}>
        <input name="title" required className={input} aria-label={`Title for todo ${todo.id}`} defaultValue={todo.title} />
        <input name="description" className={input} aria-label={`Description for todo ${todo.id}`} defaultValue={todo.description} />
        <label><input name="completed" type="checkbox" defaultChecked={todo.completed} /> Completed</label>
        <button className={button} disabled={busy}>Update (PUT)</button>
        <button type="button" className={button} disabled={busy} onClick={() => void mutate(async () => {
          await labClient.delete(`/todos/${todo.id}`);
        })}>Delete</button>
      </form>
    </li>
  );
}

function NextCalculator() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState<(typeof operations)[number]>("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function calculate(selected: typeof operation) {
    setError("");
    setResult("");
    try {
      const response = await fetch(`/api/lab5/calculator?${new URLSearchParams({ a, b, operation: selected })}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setResult(`${data.a} ${symbols[selected]} ${data.b} = ${data.result}`);
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }

  return (
    <Section title="Calculator (Next.js Web API)">
      <form className="flex flex-wrap gap-2" onSubmit={(event) => {
        event.preventDefault();
        void calculate(operation);
      }}>
        <label>A <input className={input} type="number" step="any" value={a} onChange={(event) => setA(event.target.value)} /></label>
        <label>B <input className={input} type="number" step="any" value={b} onChange={(event) => setB(event.target.value)} /></label>
        <label>Operation <select className={input} value={operation} onChange={(event) => {
          const selected = event.target.value as typeof operation;
          setOperation(selected);
          void calculate(selected);
        }}>
          {operations.map((op) => <option key={op} value={op}>{op}</option>)}
        </select></label>
        <button className={button}>Calculate</button>
      </form>
      {error && <p role="alert">{error}</p>}
      <output>{result}</output>
    </Section>
  );
}

export default function Exercises() {
  return (
    <>
      <Section title="Welcome"><LabLink id="wd-welcome-link" path="/welcome">Welcome</LabLink></Section>
      <Section title="Environment"><code>NEXT_PUBLIC_HTTP_SERVER = {HTTP_SERVER || "Not configured"}</code></Section>
      <ParameterLinks />
      <Section title="Retrieving Objects"><LabLink id="wd-retrieve-assignments" path="/assignment">Get Assignment</LabLink></Section>
      <Section title="Retrieving Properties"><LabLink id="wd-retrieve-assignment-title" path="/assignment/title">Get Title</LabLink></Section>
      <Section title="Modifying Properties">
        <EditLink label="Update Title" path="/assignment/title" initial="NodeJS Assignment" />
        <EditLink label="Update Score" path="/assignment/score" initial="100" />
        <EditLink label="Update Completion" path="/assignment/completed" initial="true" />
      </Section>
      <Section title="Module (On Your Own)">
        <div className="flex gap-2"><LabLink path="/module">Get Module</LabLink><LabLink path="/module/name">Get Module Name</LabLink></div>
        <EditLink label="Update Module Name" path="/module/name" initial="RESTful Web APIs" />
        <EditLink label="Update Module Description" path="/module/description" initial="Read and write data over HTTP" />
      </Section>
      <ArrayLinks />
      <AsyncRead title="Asynchronous Communication" path="/welcome" label="Fetch Welcome" />
      <AsyncRead title="Working with Objects Asynchronously" path="/assignment" label="Fetch Assignment" />
      <AsyncTodos />
      <Section title="Next.js Route Handler">
        <a className={button} href="/api/lab5/hello">GET /api/lab5/hello</a>
      </Section>
      <NextCalculator />
    </>
  );
}
