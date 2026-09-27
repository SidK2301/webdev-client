export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h2>Profile</h2>

      <input
        id="wd-profile-username"
        placeholder="username"
      />

      <br />

      <input
        id="wd-profile-first-name"
        placeholder="first name"
      />

      <br />

      <input
        id="wd-profile-last-name"
        placeholder="last name"
      />

      <br />

      <input
        id="wd-profile-email"
        placeholder="email"
        type="email"
      />

      <br />

      <button id="wd-profile-save">
        Save
      </button>

      <br />

      <a href="/account/signin">
        Sign In
      </a>

      <br />

      <a href="/account/signup">
        Sign Up
      </a>
    </div>
  );
}