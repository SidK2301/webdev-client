import type { NextRequest } from "next/server";

const operations = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const left = params.get("a");
  const right = params.get("b");
  const operation = params.get("operation");
  const a = Number(left);
  const b = Number(right);
  if (!left?.trim() || !right?.trim() || !Number.isFinite(a) || !Number.isFinite(b)) {
    return Response.json({ error: "Invalid numbers" }, { status: 400 });
  }
  if (!operation || !Object.hasOwn(operations, operation)) {
    return Response.json({ error: "Invalid operation" }, { status: 400 });
  }
  const result = operations[operation as keyof typeof operations](a, b);
  if (!Number.isFinite(result)) {
    return Response.json({ error: "Invalid result" }, { status: 400 });
  }
  return Response.json({ a, b, operation, result });
}
