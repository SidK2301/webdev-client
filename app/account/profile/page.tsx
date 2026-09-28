export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h2>Profile</h2>

      <input
        id="wd-profile-username"
        placeholder="username"
        defaultValue="siddhi23"
      />

      <br />

      <input
        id="wd-profile-first-name"
        placeholder="first name"
        defaultValue="Siddhi"
      />

      <br />

      <input
        id="wd-profile-last-name"
        placeholder="last name"
        defaultValue="Kore"
      />

      <br />

      <input
        id="wd-profile-email"
        placeholder="email"
        type="email"
        defaultValue="Kore.si@northeastern.edu"
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