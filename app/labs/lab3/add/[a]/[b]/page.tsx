"use client";

import { useParams } from "next/navigation";

export default function AddPathParameters() {
  const { a, b } = useParams<{ a: string; b: string }>();
  const first = Number(a);
  const second = Number(b);
  return (
    <div id="wd-add-path-parameters">
      <h2>Add Path Parameters</h2>
      <p>{first} + {second} = {first + second}</p>
    </div>
  );
}
