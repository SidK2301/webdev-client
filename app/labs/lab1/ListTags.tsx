export default function ListTags() {
  return (
    <div id="wd-list-tag">
      <h4>List Tags</h4>

      <h5>Unordered List</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <h5>Ordered List</h5>
      <ol>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
      </ol>

      <h5>Nested List</h5>
      <ul>
        <li>
          Web Development
          <ul>
            <li>Frontend</li>
            <li>Backend</li>
          </ul>
        </li>
        <li>Database</li>
      </ul>
    </div>
  );
}