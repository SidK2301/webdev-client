export default function VariablesAndConstants() {
  // var is intentional here to compare declaration scopes in the lab.
  // eslint-disable-next-line no-var
  var functionScoped = 2;
  // eslint-disable-next-line prefer-const
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let name = "Siddhi";
  name += " Kore";
  const greeting = `Hello, ${name}!`;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}
      <p>name = {name}</p><p>greeting = {greeting}</p><p>sampleSum = {sampleSum}</p>
      <hr />
    </div>
  );
}
