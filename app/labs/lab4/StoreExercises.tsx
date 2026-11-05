import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterActions, todoActions, useZustandCounter, useZustandTodos,
  type LabState, type Todo,
} from "./stores";

const sectionClass = "rounded border p-4";
const headingClass = "mb-2 text-lg font-semibold";
const buttonClass = "rounded border px-3 py-1";

function Counter({ title, count, change }: {
  title: string;
  count: number;
  change: (delta: number) => void;
}) {
  return (
    <section className={sectionClass}>
      <h3 className={headingClass}>{title}: {count}</h3>
      <button className={buttonClass} onClick={() => change(1)}>Up</button>{" "}
      <button className={buttonClass} onClick={() => change(-1)}>Down</button>
    </section>
  );
}

function TodoList({ name, todos, add, update, remove }: {
  name: string;
  todos: Todo[];
  add: (todo: Todo) => void;
  update: (todo: Todo) => void;
  remove: (id: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  function resetEditor() {
    setTitle("");
    setEditingId(null);
  }

  return (
    <section className={sectionClass}>
      <h3 className={headingClass}>{name} Todo List</h3>
      <form className="flex flex-wrap items-center gap-2" onSubmit={(event) => {
        event.preventDefault();
        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;
        if (editingId) {
          update({ id: editingId, title: trimmedTitle });
        } else {
          add({ id: crypto.randomUUID(), title: trimmedTitle });
        }
        resetEditor();
      }}>
        <label htmlFor={`wd-${name.toLowerCase()}-todo-title`}>Title</label>
        <input
          id={`wd-${name.toLowerCase()}-todo-title`}
          className="rounded border px-2 py-1"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className={buttonClass} type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && (
          <button className={buttonClass} type="button" onClick={resetEditor}>Cancel</button>
        )}
      </form>
      <ul className="mt-3 space-y-2">
        {todos.map((todo) => (
          <li className="flex flex-wrap items-center gap-2" key={todo.id}>
            <span>{todo.title}</span>
            <button className={buttonClass} onClick={() => {
              setEditingId(todo.id);
              setTitle(todo.title);
            }}>Edit</button>
            <button className={buttonClass} onClick={() => {
              remove(todo.id);
              if (editingId === todo.id) resetEditor();
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function StoreExercises() {
  const zustandCounter = useZustandCounter();
  const zustandTodos = useZustandTodos();
  const reduxCount = useSelector((state: LabState) => state.counter);
  const reduxTodos = useSelector((state: LabState) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <Counter title="Zustand Counter" {...zustandCounter} />
      <TodoList name="Zustand" {...zustandTodos} />
      <Counter title="Redux Counter" count={reduxCount}
        change={(delta) => dispatch(counterActions.change(delta))} />
      <TodoList name="Redux" todos={reduxTodos}
        add={(todo) => dispatch(todoActions.add(todo))}
        update={(todo) => dispatch(todoActions.update(todo))}
        remove={(id) => dispatch(todoActions.remove(id))} />
    </>
  );
}
