export default function Text() {
  return (
    <div id="wd-text-fields">
      <h4>Text Fields</h4>

      <label htmlFor="wd-text-field">Text Input</label>
      <input
        id="wd-text-field"
        type="text"
        placeholder="Enter text"
      />

      <br />

      <label htmlFor="wd-password-field">Password Input</label>
      <input
        id="wd-password-field"
        type="password"
        placeholder="Enter password"
      />

      <br />

      <label htmlFor="wd-number-field">Number Input</label>
      <input
        id="wd-number-field"
        type="number"
        placeholder="Enter number"
      />

      <br />

      <label htmlFor="wd-email-field">Email Input</label>
      <input
        id="wd-email-field"
        type="email"
        placeholder="Enter email"
      />
    </div>
  );
}