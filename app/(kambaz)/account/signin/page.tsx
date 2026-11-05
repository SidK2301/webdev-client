"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "../authenticate";
import { useAccount } from "../AccountContext";
import Link from "next/link";

export default function Signin() {
  const router = useRouter();
  const { setCurrentUser } = useAccount();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const fields = new FormData(event.currentTarget);
    setPending(true);
    setError("");
    try {
      const user = await authenticate(String(fields.get("username") ?? "").trim(),
        String(fields.get("password") ?? ""));
      if (!user) {
        setError("Username or password is incorrect.");
        return;
      }
      setCurrentUser(user);
      router.replace("/dashboard");
    } catch {
      setError("Sign in could not be completed. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form id="wd-signin-screen" className="max-w-sm" onSubmit={signIn}>
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        name="username"
        aria-label="Username"
        autoComplete="username"
        required
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        name="password"
        aria-label="Password"
        autoComplete="current-password"
        required
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        aria-label="Sample note"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      {error && <p role="alert" className="mb-2 text-red-700">{error}</p>}
      <button
        id="wd-signin-btn"
        type="submit"
        disabled={pending}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline hover:bg-blue-700"
      >
        Sign in
      </button>
      <div className="flex gap-3 text-sm">
        <Link id="wd-signup-link" href="/account/signup">
          Sign up
        </Link>
      </div>
    </form>
  );
}
