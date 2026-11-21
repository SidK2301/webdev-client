"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "../AccountContext";
import { apiError } from "../../api";
import { signUp } from "../client";
import Link from "next/link";

const inputClass =
  "mb-3 w-full rounded border border-neutral-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

export default function Signup() {
  const router = useRouter();
  const { setCurrentUser } = useAccount();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const fields = new FormData(event.currentTarget);
    const password = String(fields.get("password"));
    if (password !== fields.get("verify")) {
      setError("Passwords must match.");
      return;
    }
    setPending(true);
    setError("");
    try {
      setCurrentUser(await signUp(String(fields.get("username")).trim(), password));
      router.replace("/account/profile");
    } catch (failure) {
      setError(apiError(failure, "Sign up could not be completed."));
    } finally {
      setPending(false);
    }
  }

  return (
    <form id="wd-signup-screen" className="max-w-sm" onSubmit={submit}>
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-signup-username"
        name="username"
        aria-label="Username"
        autoComplete="username"
        required
        placeholder="username"
        className={inputClass}
      />
      <input
        id="wd-signup-password"
        name="password"
        aria-label="Password"
        autoComplete="new-password"
        required
        type="password"
        placeholder="password"
        className={inputClass}
      />
      <input
        id="wd-signup-password-verify"
        name="verify"
        aria-label="Verify password"
        autoComplete="new-password"
        required
        type="password"
        placeholder="verify password"
        className={inputClass}
      />
      {error && <p role="alert" className="mb-2 text-red-700">{error}</p>}
      <button
        id="wd-signup-btn"
        type="submit"
        disabled={pending}
        className="mb-3 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white hover:bg-blue-700"
      >
        Sign up
      </button>
      <div className="flex gap-3 text-sm">
        <Link href="/account/signin">Sign in</Link>
      </div>
    </form>
  );
}
