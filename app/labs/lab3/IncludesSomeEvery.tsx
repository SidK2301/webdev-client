export default function IncludesSomeEvery() {
  const numbers = [1, 2, 3, 4, 5];
  const includes3 = numbers.includes(3);
  const includes8 = numbers.includes(8);
  const someGreaterThan4 = numbers.some((n) => n > 4);
  const everyGreaterThan0 = numbers.every((n) => n > 0);
  return (
    <div id="wd-includes-some-every">
      <h4>Includes, Some, Every</h4>
      includes(3) = {includes3 + ""}           <br />
      includes(8) = {includes8 + ""}           <br />
      some(n &gt; 4) = {someGreaterThan4 + ""} <br />
      every(n &gt; 0) = {everyGreaterThan0 + ""}
      <p>every(n &gt; 4) = {String(numbers.every((n) => n > 4))}</p>
      <p>some(n === 1) = {String(numbers.some((n) => n === 1))}</p>
      <p>includes(5) = {String(numbers.includes(5))}</p>
      <hr />
    </div>
  );
}
