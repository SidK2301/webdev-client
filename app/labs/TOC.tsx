import Link from "next/link";

export default function TOC() {
  return (
    <nav id="wd-labs-toc">
      <h3>Labs Navigation</h3>

      <Link id="wd-home-link" href="/labs">
        Labs Home
      </Link>

      <br />

      <Link id="wd-lab1-link" href="/labs/lab1">
        Lab 1
      </Link>

      <br />

      <Link id="wd-lab2-link" href="/labs/lab2">
        Lab 2
      </Link>

      <br />

      <Link id="wd-lab3-link" href="/labs/lab3">
        Lab 3
      </Link>

      <br />

      <Link id="wd-toc-book-link" href="/book/ch1">
        Chapter 1
      </Link>

      <p>Siddhi Ramchandra Kore</p>
    </nav>
  );
}