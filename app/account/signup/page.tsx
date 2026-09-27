export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h2>Sign Up</h2>

      <input
        id="wd-signup-username"
        placeholder="username"
      />

      <br />

      <input
        id="wd-signup-password"
        type="password"
        placeholder="password"
      />

      <br />

      <input
        id="wd-signup-password-verify"
        type="password"
        placeholder="verify password"
      />

      <br />

      <button id="wd-signup-btn">
        Sign Up
      </button>

      <br />

      <a href="/account/signin">
        Sign In
      </a>

      <br />

      <a href="/account/profile">
        Profile
      </a>
    </div>
  );
}