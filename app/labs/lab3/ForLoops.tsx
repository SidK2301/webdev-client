export default function ForLoops() {
  const stringArray1 = ["string1", "string3"];
  const stringArray2: string[] = [];
  const lowercase: string[] = [];
  const stringLengths: number[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    lowercase.push(string1.toLowerCase());
    stringLengths.push(string1.length);
    stringArray2.push(string1.toUpperCase());
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2}
      <p>lowercase = {JSON.stringify(lowercase)}</p>
      <p>stringLengths = {JSON.stringify(stringLengths)}</p>
      <hr />
    </div>
  );
}
