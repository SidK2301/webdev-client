import Link from "next/link";

const inputClass =
  "w-full rounded border border-neutral-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";
const fieldClass = "grid gap-1 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center";
const sectionClass = "space-y-4 border-b border-neutral-200 pb-5";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-3xl">
      <h1 className="mb-5 text-2xl font-semibold">Student Profile</h1>

      <section className={sectionClass}>
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <label htmlFor="wd-profile-first-name" className={fieldClass}>
          <span>First Name:</span>
          <input id="wd-profile-first-name" defaultValue="Siddhi" className={inputClass} />
        </label>
        <label htmlFor="wd-profile-last-name" className={fieldClass}>
          <span>Last Name:</span>
          <input id="wd-profile-last-name" defaultValue="Kore" className={inputClass} />
        </label>
        <label htmlFor="wd-profile-password" className={fieldClass}>
          <span>Password:</span>
          <input
            id="wd-profile-password"
            type="password"
            defaultValue="password123"
            className={inputClass}
          />
        </label>
      </section>

      <section className={`${sectionClass} mt-5`}>
        <h2 className="text-lg font-semibold">About Me</h2>
        <label htmlFor="wd-profile-about" className="block space-y-1">
          <span>Why are you taking this course?</span>
          <textarea
            id="wd-profile-about"
            rows={4}
            defaultValue="I am taking this course to improve my web development skills and learn how to build applications using HTML, Next.js, React, and Kambaz."
            className={inputClass}
          />
        </label>
      </section>

      <section className={`${sectionClass} mt-5`}>
        <h2 className="text-lg font-semibold">Class Standing</h2>
        <fieldset className="flex flex-wrap gap-x-5 gap-y-2">
          <legend className="mb-2 text-sm text-neutral-700">Class Standing:</legend>
          <label className="flex items-center gap-2"><input type="radio" name="class-standing" value="Graduate" defaultChecked />Graduate</label>
          <label className="flex items-center gap-2"><input type="radio" name="class-standing" value="Senior" />Senior</label>
          <label className="flex items-center gap-2"><input type="radio" name="class-standing" value="Junior" />Junior</label>
        </fieldset>
      </section>

      <section className={`${sectionClass} mt-5`}>
        <h2 className="text-lg font-semibold">Enrollment</h2>
        <fieldset className="flex flex-wrap gap-x-5 gap-y-2">
          <legend className="sr-only">Enrollment</legend>
          <label className="flex items-center gap-2"><input type="radio" name="enrollment" value="Full-time" defaultChecked />Full-time</label>
          <label className="flex items-center gap-2"><input type="radio" name="enrollment" value="Part-time" />Part-time</label>
        </fieldset>
      </section>

      <section className={`${sectionClass} mt-5`}>
        <h2 className="text-lg font-semibold">Interests</h2>
        <fieldset className="grid gap-2 sm:grid-cols-2">
          <legend className="sr-only">Interests</legend>
          <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Python" defaultChecked />Python</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="React" defaultChecked />React</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Cloud Computing" defaultChecked />Cloud Computing</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Artificial Intelligence" defaultChecked />Artificial Intelligence</label>
        </fieldset>
      </section>

      <section className={`${sectionClass} mt-5`}>
        <h2 className="text-lg font-semibold">Academic Information</h2>
        <label htmlFor="wd-profile-major" className={fieldClass}>
          <span>Major:</span>
          <select id="wd-profile-major" defaultValue="Computer Science" className={inputClass}>
            <option>Computer Science</option>
            <option>Data Science</option>
            <option>Information Systems</option>
            <option>Computer Engineering</option>
          </select>
        </label>
        <fieldset className="grid gap-2 sm:grid-cols-2">
          <legend className="mb-2 text-sm text-neutral-700">Topics I want to learn:</legend>
          <label className="flex items-center gap-2"><input type="checkbox" name="topics" value="Distributed Systems" defaultChecked />Distributed Systems</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="topics" value="Machine Learning" defaultChecked />Machine Learning</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="topics" value="Web Development" defaultChecked />Web Development</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="topics" value="Cloud Computing" defaultChecked />Cloud Computing</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="topics" value="Databases" defaultChecked />Databases</label>
        </fieldset>
      </section>

      <section className={`${sectionClass} mt-5`}>
        <h2 className="text-lg font-semibold">Additional Information</h2>
        <label htmlFor="wd-profile-email" className={fieldClass}>
          <span>School Email:</span>
          <input id="wd-profile-email" type="email" defaultValue="" placeholder="Kore.si@northeastern.edu" className={inputClass} />
        </label>
        <label htmlFor="wd-profile-graduation" className={fieldClass}>
          <span>Expected Graduation Year:</span>
          <input id="wd-profile-graduation" type="number" defaultValue="2028" className={inputClass} />
        </label>
        <label htmlFor="wd-profile-start-date" className={fieldClass}>
          <span>Program Start Date:</span>
          <input id="wd-profile-start-date" type="date" defaultValue="2026-01-05" className={inputClass} />
        </label>
        <label htmlFor="wd-profile-excitement" className={fieldClass}>
          <span>Course Excitement (0–10):</span>
          <input id="wd-profile-excitement" type="number" min="0" max="10" defaultValue="10" className={inputClass} />
        </label>
      </section>

      <div className="mt-5 flex flex-wrap gap-2">
        <button id="wd-profile-save" type="button" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Save</button>
        <button id="wd-profile-cancel" type="button" className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-800 hover:bg-neutral-200">Cancel</button>
        <Link href="/account/signin" id="wd-profile-signout" className="rounded bg-red-600 px-4 py-2 text-white no-underline hover:bg-red-700">Sign out</Link>
      </div>
    </div>
  );
}
