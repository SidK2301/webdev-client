import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-labs-toc">
      <h2>Table of Contents</h2>

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
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
      </ul>

      <p>
        <a
          id="wd-toc-book-link"
          href="https://kambaz.dev/book/ch1"
          target="_blank"
        >
          Chapter 1 Book
        </a>
      </p>
    </div>
  );
}