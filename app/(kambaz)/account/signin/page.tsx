import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        defaultValue="ada"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        defaultValue="123"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        aria-label="Sample note"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <Link
        id="wd-signin-btn"
        href="/dashboard"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline hover:bg-blue-700"
      >
        Sign in
      </Link>
      <div className="flex gap-3 text-sm">
        <Link id="wd-signup-link" href="/account/signup">
          Sign up
        </Link>
        <Link id="wd-profile-link" href="/account/profile">
          Profile
        </Link>
      </div>
    </div>
  );
}
