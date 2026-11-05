import Link from "next/link";

export default async function QueryParameters({ searchParams }: {
  searchParams: Promise<{ a?: string | string[]; b?: string | string[] }>;
}) {
  const { a, b } = await searchParams;
  const left = typeof a === "string" && a.trim() ? Number(a) : NaN;
  const right = typeof b === "string" && b.trim() ? Number(b) : NaN;

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold">Query Parameters</h2>
      {Number.isFinite(left) && Number.isFinite(right)
        ? <p>{a} + {b} = {left + right}</p>
        : <p>Supply two numbers in the a and b query parameters.</p>}
      <Link className="underline" href="/labs/lab4">Back to Lab 4</Link>
    </section>
  );
}
