import Link from "next/link";

export default async function PathParameters({ params }: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  const left = Number(a);
  const right = Number(b);

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold">Path Parameters</h2>
      {Number.isFinite(left) && Number.isFinite(right)
        ? <p>{a} + {b} = {left + right}</p>
        : <p>Enter two numbers in the URL.</p>}
      <Link className="underline" href="/labs/lab4">Back to Lab 4</Link>
    </section>
  );
}
