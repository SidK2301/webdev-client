export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h2>Student Profile</h2>

      <h3>Personal Information</h3>

      <label htmlFor="wd-profile-first-name">First Name:</label>
      <input
        id="wd-profile-first-name"
        type="text"
        defaultValue="Siddhi"
      />

      <br />

      <label htmlFor="wd-profile-last-name">Last Name:</label>
      <input
        id="wd-profile-last-name"
        type="text"
        defaultValue="Kore"
      />

      <br />

      <label htmlFor="wd-profile-password">Password:</label>
      <input
        id="wd-profile-password"
        type="password"
      />

      <h3>About Me</h3>

      <label htmlFor="wd-profile-about">
        Why are you taking this course?
      </label>

      <br />

      <textarea
        id="wd-profile-about"
        rows={4}
        cols={50}
        defaultValue="I am taking this course to learn web development and build practical skills using HTML, Next.js, React, and Kambaz."
      />

      <h3>Class Standing</h3>

      <label htmlFor="wd-profile-standing">
        Class Standing:
      </label>

      <select
        id="wd-profile-standing"
        defaultValue="Graduate"
      >
        <option value="Graduate">Graduate</option>
        <option value="Senior">Senior</option>
        <option value="Junior">Junior</option>
      </select>

      <h3>Enrollment</h3>

      <label>
        <input
          type="radio"
          name="enrollment"
          value="Full-time"
          defaultChecked
        />
        Full-time
      </label>

      <label>
        <input
          type="radio"
          name="enrollment"
          value="Part-time"
        />
        Part-time
      </label>

      <h3>Interests</h3>

      <label>
        <input
          type="checkbox"
          name="interests"
          value="Python"
          defaultChecked
        />
        Python
      </label>

      <label>
        <input
          type="checkbox"
          name="interests"
          value="React"
          defaultChecked
        />
        React
      </label>

      <label>
        <input
          type="checkbox"
          name="interests"
          value="Cloud Computing"
          defaultChecked
        />
        Cloud Computing
      </label>

      <label>
        <input
          type="checkbox"
          name="interests"
          value="Artificial Intelligence"
          defaultChecked
        />
        Artificial Intelligence
      </label>

      <h3>Academic Information</h3>

      <label htmlFor="wd-profile-major">
        Major:
      </label>

      <select
        id="wd-profile-major"
        defaultValue="Computer Science"
      >
        <option value="Computer Science">
          Computer Science
        </option>
        <option value="Data Science">
          Data Science
        </option>
        <option value="Information Systems">
          Information Systems
        </option>
        <option value="Computer Engineering">
          Computer Engineering
        </option>
      </select>

      <br />

      <label>Topics I want to learn:</label>

      <br />

      <label>
        <input
          type="checkbox"
          name="topics"
          value="Distributed Systems"
          defaultChecked
        />
        Distributed Systems
      </label>

      <label>
        <input
          type="checkbox"
          name="topics"
          value="Machine Learning"
          defaultChecked
        />
        Machine Learning
      </label>

      <label>
        <input
          type="checkbox"
          name="topics"
          value="Web Development"
          defaultChecked
        />
        Web Development
      </label>

      <label>
        <input
          type="checkbox"
          name="topics"
          value="Cloud Computing"
          defaultChecked
        />
        Cloud Computing
      </label>

      <label>
        <input
          type="checkbox"
          name="topics"
          value="Databases"
          defaultChecked
        />
        Databases
      </label>

      <h3>Additional Information</h3>

      <label htmlFor="wd-profile-email">
        School Email:
      </label>

      <input
        id="wd-profile-email"
        type="email"
        defaultValue="Kore.si@northeastern.edu"
      />

      <br />

      <label htmlFor="wd-profile-graduation">
        Expected Graduation Year:
      </label>

      <input
        id="wd-profile-graduation"
        type="number"
        defaultValue="2027"
      />

      <br />

      <label htmlFor="wd-profile-start-date">
        Program Start Date:
      </label>

      <input
        id="wd-profile-start-date"
        type="date"
        defaultValue="2026-01-05"
      />

      <br />

      <label htmlFor="wd-profile-excitement">
        Course Excitement (0–10):
      </label>

      <input
        id="wd-profile-excitement"
        type="number"
        min="0"
        max="10"
        defaultValue="8"
      />

      <h3>Actions</h3>

      <button id="wd-profile-save" type="button">
        Save
      </button>

      {" "}

      <button id="wd-profile-cancel" type="button">
        Cancel
      </button>
    </div>
  );
}