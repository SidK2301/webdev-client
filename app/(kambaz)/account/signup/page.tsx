import Link from "next/link";

const inputClass =
  "mb-3 w-full rounded border border-neutral-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-signup-username"
        placeholder="username"
        className={inputClass}
      />
      <input
        id="wd-signup-password"
        type="password"
        placeholder="password"
        className={inputClass}
      />
      <input
        id="wd-signup-password-verify"
        type="password"
        placeholder="verify password"
        className={inputClass}
      />
      <button
        id="wd-signup-btn"
        type="button"
        className="mb-3 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white hover:bg-blue-700"
      >
        Sign up
      </button>
      <div className="flex gap-3 text-sm">
        <Link href="/account/signin">Sign in</Link>
        <Link href="/account/profile">Profile</Link>
      </div>
    </div>
  );
}
