export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  const square = (n: number) => n * n;
  const divide = (a: number, b: number) => a / b;
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)}
      <p>square(9) = {square(9)}</p><p>divide(20, 4) = {divide(20, 4)}</p>
      <hr />
    </div>
  );
}
