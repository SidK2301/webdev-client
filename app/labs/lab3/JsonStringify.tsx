export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const myCourse = { student: "Siddhi Kore", course: "Web Development", credits: 4 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <p>myCourse = {JSON.stringify(myCourse)}</p>
      <p>sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}</p>
      <hr />
    </div>
  );
}
