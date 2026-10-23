export default function Add({ a, b, id = "wd-add" }: { a: number; b: number; id?: string }) {
  return (
    <div id={id} className="wd-add">
      <h4>Add</h4>
      a = {a}<br />
      b = {b}<br />
      a + b = {a + b}
      <hr />
    </div>
  );
}
