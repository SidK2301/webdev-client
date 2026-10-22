export default function VariableTypes() {
  const numberVariable = 123;
  const floatingPointNumber = 234.345;
  const stringVariable = "Hello World!";
  const booleanVariable = true;
  const isNumber = typeof numberVariable;
  const isString = typeof stringVariable;
  const isBoolean = typeof booleanVariable;
  const favoriteTopic = "JavaScript";
  const graduationYear = 2028;
  const sampleCount = 42;
  const sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}
      <p>favoriteTopic = {favoriteTopic}; typeof = {typeof favoriteTopic}</p>
      <p>graduationYear = {graduationYear}; typeof = {typeof graduationYear}</p>
      <p>sampleCount = {sampleCount}; typeof = {typeof sampleCount}</p>
      <p>sampleLabel = {sampleLabel}; typeof = {typeof sampleLabel}</p>
      <hr />
    </div>
  );
}
