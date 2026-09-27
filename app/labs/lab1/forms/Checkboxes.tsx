export default function Checkboxes() {
  return (
    <div id="wd-checkboxes">
      <h4>Checkboxes</h4>

      <label>Favorite Topics:</label>

      <br />

      <input
        type="checkbox"
        id="wd-html"
        name="topics"
        value="HTML"
      />
      <label htmlFor="wd-html">HTML</label>

      <br />

      <input
        type="checkbox"
        id="wd-css"
        name="topics"
        value="CSS"
      />
      <label htmlFor="wd-css">CSS</label>

      <br />

      <input
        type="checkbox"
        id="wd-javascript-checkbox"
        name="topics"
        value="JavaScript"
      />
      <label htmlFor="wd-javascript-checkbox">JavaScript</label>
    </div>
  );
}