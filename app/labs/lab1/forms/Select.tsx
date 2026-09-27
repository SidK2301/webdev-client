export default function Select() {
  return (
    <div id="wd-select">
      <h4>Dropdowns</h4>

      <label htmlFor="wd-select-course">Choose a course:</label>

      <select id="wd-select-course">
        <option value="cs4550">Web Development</option>
        <option value="cs5010">Program Design Paradigms</option>
        <option value="cs5800">Algorithms</option>
        <option value="cs5200">Database Management</option>
      </select>
    </div>
  );
}