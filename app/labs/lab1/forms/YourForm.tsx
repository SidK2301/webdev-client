export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Personal Information</h5>

      <label htmlFor="wd-first-name">First Name:</label>
      <input
        id="wd-first-name"
        type="text"
        defaultValue="Siddhi"
      />
      <br />

      <label htmlFor="wd-last-name">Last Name:</label>
      <input
        id="wd-last-name"
        type="text"
        defaultValue="Kore"
      />
      <br />

      <label htmlFor="wd-password">Password:</label>
      <input
        id="wd-password"
        type="password"
        defaultValue="password123"
      />
      <br />

      <h5>About Me</h5>

      <label htmlFor="wd-bio">Why are you taking this course?</label>
      <br />
      <textarea
        id="wd-bio"
        cols={40}
        rows={5}
        defaultValue="I am taking this course to improve my web development skills and learn how to build applications using HTML, Next.js, React, and Kambaz."
      />
      <br />

      <h5>Class Standing</h5>

      <label>Class Standing:</label>
      <br />

      <input
        type="radio"
        id="wd-graduate"
        name="class-standing"
        value="graduate"
        defaultChecked
      />
      <label htmlFor="wd-graduate">Graduate</label>
      <br />

      <input
        type="radio"
        id="wd-senior"
        name="class-standing"
        value="senior"
      />
      <label htmlFor="wd-senior">Senior</label>
      <br />

      <input
        type="radio"
        id="wd-junior"
        name="class-standing"
        value="junior"
      />
      <label htmlFor="wd-junior">Junior</label>
      <br />

      <h5>Enrollment</h5>

      <input
        type="radio"
        id="wd-full-time"
        name="enrollment"
        value="full-time"
        defaultChecked
      />
      <label htmlFor="wd-full-time">Full-time</label>
      <br />

      <input
        type="radio"
        id="wd-part-time"
        name="enrollment"
        value="part-time"
      />
      <label htmlFor="wd-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>

      <input
        type="checkbox"
        id="wd-python-interest"
        name="interests"
        value="python"
        defaultChecked
      />
      <label htmlFor="wd-python-interest">Python</label>
      <br />

      <input
        type="checkbox"
        id="wd-react-interest"
        name="interests"
        value="react"
        defaultChecked
      />
      <label htmlFor="wd-react-interest">React</label>
      <br />

      <input
        type="checkbox"
        id="wd-cloud-interest"
        name="interests"
        value="cloud"
        defaultChecked
      />
      <label htmlFor="wd-cloud-interest">Cloud Computing</label>
      <br />

      <input
        type="checkbox"
        id="wd-ai-interest"
        name="interests"
        value="ai"
        defaultChecked
      />
      <label htmlFor="wd-ai-interest">Artificial Intelligence</label>
      <br />

      <h5>Academic Information</h5>

      <label htmlFor="wd-major">Major:</label>
      <select id="wd-major" defaultValue="computer-science">
        <option value="computer-science">Computer Science</option>
        <option value="data-science">Data Science</option>
        <option value="information-systems">Information Systems</option>
        <option value="computer-engineering">Computer Engineering</option>
      </select>

      <br />

      <label htmlFor="wd-topics">Topics I want to learn:</label>
      <br />

      <select
        id="wd-topics"
        multiple
        defaultValue={[
          "distributed-systems",
          "machine-learning",
          "web-development",
          "cloud-computing",
          "databases",
        ]}
      >
        <option value="distributed-systems">
          Distributed Systems
        </option>
        <option value="machine-learning">
          Machine Learning
        </option>
        <option value="web-development">
          Web Development
        </option>
        <option value="cloud-computing">
          Cloud Computing
        </option>
        <option value="databases">
          Databases
        </option>
      </select>

      <br />

      <h5>Additional Information</h5>

      <label htmlFor="wd-email">School Email:</label>
      <input
        id="wd-email"
        type="email"
        defaultValue="Kore.si@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-graduation-year">
        Expected Graduation Year:
      </label>
      <input
        id="wd-graduation-year"
        type="number"
        min={2025}
        max={2035}
        defaultValue={2027}
      />
      <br />

      <label htmlFor="wd-start-date">Program Start Date:</label>
      <input
        id="wd-start-date"
        type="date"
        defaultValue="2026-01-05"
      />
      <br />

      <label htmlFor="wd-excitement">
        Course Excitement (0–10):
      </label>
      <input
        id="wd-excitement"
        type="range"
        min={0}
        max={10}
        defaultValue={8}
      />

      <br />

      <h5>Actions</h5>

      <button id="wd-save-button" type="submit">
        Save
      </button>

      <button id="wd-cancel-button" type="button">
        Cancel
      </button>
    </form>
  );
}