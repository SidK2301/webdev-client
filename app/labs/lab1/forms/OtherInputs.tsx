export default function OtherInputs() {
  return (
    <div id="wd-other-inputs">
      <h4>Other Input Types</h4>

      <label htmlFor="wd-date">Date:</label>
      <input id="wd-date" type="date" />

      <br />

      <label htmlFor="wd-time">Time:</label>
      <input id="wd-time" type="time" />

      <br />

      <label htmlFor="wd-color">Color:</label>
      <input id="wd-color" type="color" />

      <br />

      <label htmlFor="wd-file">File:</label>
      <input id="wd-file" type="file" />

      <br />

      <label htmlFor="wd-range">Range:</label>
      <input id="wd-range" type="range" min="0" max="100" />

      <br />

      <label htmlFor="wd-url">URL:</label>
      <input
        id="wd-url"
        type="url"
        placeholder="https://example.com"
      />
    </div>
  );
}