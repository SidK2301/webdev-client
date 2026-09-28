import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h2>Labs</h2>

      <p>Siddhi Kore</p>

      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>

        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>

        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>

        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>

        <li>
          <Link href="/labs/lab5">
            Lab 5
          </Link>
        </li>

        <li>
          <a href="https://github.com/SidK2301/webdev-client" id="wd-github" target="_blank">
            GitHub
          </a>
        </li>

        <li>
          <a href="https://kambaz.dev" target="_blank">
            Kambaz
          </a>
        </li>
      </ul>
    </div>
  );
}