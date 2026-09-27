export default function Radio() {
  return (
    <div id="wd-radio-buttons">
      <h4>Radio Buttons</h4>

      <label>Favorite Language:</label>

      <br />

      <input
        type="radio"
        id="wd-java"
        name="language"
        value="JAVA"
      />
      <label htmlFor="wd-java">Java</label>

      <br />

      <input
        type="radio"
        id="wd-python"
        name="language"
        value="PYTHON"
      />
      <label htmlFor="wd-python">Python</label>

      <br />

      <input
        type="radio"
        id="wd-javascript"
        name="language"
        value="JAVASCRIPT"
      />
      <label htmlFor="wd-javascript">JavaScript</label>
    </div>
  );
}