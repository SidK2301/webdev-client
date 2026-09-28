import Link from "next/link";

export default function KambazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-kambaz-layout">
      <nav id="wd-kambaz-navigation">
        <h2>Kambaz</h2>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <br />

        <Link href="/account/profile" id="wd-account-link">
          Account
        </Link>

        <br />

        <Link href="/labs">
          Labs
        </Link>

        <br />

        <Link href="/dashboard" id="wd-signin-btn">
          Sign In
        </Link>
      </nav>

      <main id="wd-kambaz-content">
        {children}
      </main>
    </div>
  );
}