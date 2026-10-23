import Link from "next/link";

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <ul>
        <li><Link href="/labs/lab3/add/1/2">1 + 2</Link></li>
        <li><Link href="/labs/lab3/add/3/4">3 + 4</Link></li>
        <li><Link href="/labs/lab3/add/10/15">10 + 15</Link></li>
        <li><Link href="/labs/lab3/add/5/6">5 + 6</Link></li>
      </ul>
      <hr />
    </div>
  );
}
