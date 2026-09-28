export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h2>Student Profile</h2>

      <h3>Personal Information</h3>

      <label>First Name:</label>
      <input
        id="wd-profile-first-name"
        defaultValue="Siddhi"
      />
      <br />

      <label>Last Name:</label>
      <input
        id="wd-profile-last-name"
        defaultValue="Kore"
      />
      <br />

      <label>Password:</label>
      <input
        id="wd-profile-password"
        type="password"
        defaultValue="password123"
      />
      <br />

      <h3>About Me</h3>

      <label>Why are you taking this course?</label>
      <br />
      <textarea
        id="wd-profile-about"
        defaultValue="I am taking this course to improve my web development skills and learn how to build applications using HTML, Next.js, React, and Kambaz."
      />
      <br />

      <h3>Class Standing</h3>

      <label>Class Standing:</label>
      <br />

      <input
        type="radio"
        name="class-standing"
        value="Graduate"
        defaultChecked
      />
      Graduate
      <br />

      <input
        type="radio"
        name="class-standing"
        value="Senior"
      />
      Senior
      <br />

      <input
        type="radio"
        name="class-standing"
        value="Junior"
      />
      Junior
      <br />

      <h3>Enrollment</h3>

      <input
        type="radio"
        name="enrollment"
        value="Full-time"
        defaultChecked
      />
      Full-time
      <br />

      <input
        type="radio"
        name="enrollment"
        value="Part-time"
      />
      Part-time
      <br />

      <h3>Interests</h3>

      <input
        type="checkbox"
        name="interests"
        value="Python"
        defaultChecked
      />
      Python
      <br />

      <input
        type="checkbox"
        name="interests"
        value="React"
        defaultChecked
      />
      React
      <br />

      <input
        type="checkbox"
        name="interests"
        value="Cloud Computing"
        defaultChecked
      />
      Cloud Computing
      <br />

      <input
        type="checkbox"
        name="interests"
        value="Artificial Intelligence"
        defaultChecked
      />
      Artificial Intelligence
      <br />

      <h3>Academic Information</h3>

      <label>Major:</label>
      <select
        id="wd-profile-major"
        defaultValue="Computer Science"
      >
        <option>Computer Science</option>
        <option>Data Science</option>
        <option>Information Systems</option>
        <option>Computer Engineering</option>
      </select>
      <br />

      <label>Topics I want to learn:</label>
      <br />

      <input
        type="checkbox"
        name="topics"
        value="Distributed Systems"
        defaultChecked
      />
      Distributed Systems
      <br />

      <input
        type="checkbox"
        name="topics"
        value="Machine Learning"
        defaultChecked
      />
      Machine Learning
      <br />

      <input
        type="checkbox"
        name="topics"
        value="Web Development"
        defaultChecked
      />
      Web Development
      <br />

      <input
        type="checkbox"
        name="topics"
        value="Cloud Computing"
        defaultChecked
      />
      Cloud Computing
      <br />

      <input
        type="checkbox"
        name="topics"
        value="Databases"
        defaultChecked
      />
      Databases
      <br />

      <h3>Additional Information</h3>

      <label>School Email:</label>
      <input
        id="wd-profile-email"
        type="email"
        defaultValue=""
        placeholder="Kore.si@northeastern.edu"
      />
      <br />

      <label>Expected Graduation Year:</label>
      <input
        id="wd-profile-graduation"
        type="number"
        defaultValue="2027"
      />
      <br />

      <label>Program Start Date:</label>
      <input
        id="wd-profile-start-date"
        type="date"
        defaultValue="2026-01-05"
      />
      <br />

      <label>Course Excitement (0–10):</label>
      <input
        id="wd-profile-excitement"
        type="number"
        min="0"
        max="10"
        defaultValue="10"
      />
      <br />

      <h3>Actions</h3>

      <button id="wd-profile-save">
        Save
      </button>

      <button id="wd-profile-cancel">
        Cancel
      </button>
    </div>
  );
}