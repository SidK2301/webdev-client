type Todo = {
  done: boolean;
  title: string;
  status: string;
};

export default function TodoItem({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" },
}: { todo?: Todo }) {
  return (
    <li className="flex items-center gap-2 border-b py-1">
      <label>
        <input type="checkbox" className="me-2" defaultChecked={todo.done} />
        {todo.title} ({todo.status})
      </label>
    </li>
  );
}
