export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h2>Sign In</h2>

      <input
        id="wd-username"
        placeholder="username"
      />

      <br />

      <input
        id="wd-password"
        type="password"
        placeholder="password"
      />

      <br />

      <button id="wd-signin-btn">
        Sign In
      </button>

      <br />

      <a href="/account/signup">
        Sign up
      </a>

      <br />

      <a href="/account/profile">
        Profile
      </a>
    </div>
  );
}