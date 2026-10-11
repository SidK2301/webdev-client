import "./index.css";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import Margins from "./Margins";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
import Padding from "./Padding";
import Positions from "./Positions";
import Zindex from "./Zindex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <section id="wd-css-style-attribute" className="wd-lab-section">
        <h3>Style attribute and CSS imports</h3>
        <p style={{ backgroundColor: "blue", color: "white" }}>
          Inline styles apply directly to one element; a stylesheet is easier to maintain across a page.
        </p>
        <p style={{ backgroundColor: "green", color: "yellow" }}>
          Personal sample: green background and yellow text.
        </p>
        <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
          AI sample: purple background and white text.
        </p>
      </section>

      <section id="wd-css-selectors" className="wd-lab-section">
        <h3>Selectors</h3>
        <div id="wd-css-id-selectors">
          <h4>ID selectors</h4>
          <p id="wd-id-selector-1">An ID selector targets one specific paragraph.</p>
          <p id="wd-id-selector-2">A second ID has a different appearance.</p>
          <p id="wd-id-selector-3">Personal sample: a third individually styled paragraph.</p>
          <p id="wd-ai-id-selector">AI sample: a fourth individually styled paragraph.</p>
        </div>
        <div id="wd-css-class-selectors">
          <h4>Class selectors</h4>
          <p className="wd-class-selector">A shared class can style different element types.</p>
          <h4 className="wd-class-selector">This heading shares the class.</h4>
          <p className="wd-your-class">Personal class on a paragraph.</p>
          <h4 className="wd-your-class">Personal class on a heading.</h4>
          <p className="wd-ai-class-selector">AI class on a paragraph.</p>
          <h4 className="wd-ai-class-selector">AI class on a heading.</h4>
        </div>
        <div id="wd-css-document-structure">
          <h4>Document structure selectors</h4>
          <div className="wd-selector-1">
            <div className="wd-selector-2">
              <p className="wd-selector-3">A descendant selector styles this nested paragraph. <span className="wd-selector-4">A direct-child selector styles this span.</span> <span id="wd-ai-selector-5">AI sample: another descendant span.</span></p>
              <div><p className="wd-structure-extra">Extra nested sample demonstrates descendant matching.</p></div>
            </div>
          </div>
        </div>
        <div id="wd-css-cascade">
          <h4>Cascade and specificity</h4>
          <p id="wd-ai-cascade" className="wd-cascade-class">The ID rule wins over the tag and class rules.</p>
        </div>
      </section>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />

      <p className="wd-lab-tailwind-link">
        Continue to <a href="/labs/lab2/tailwind">the Tailwind CSS samples</a>.
      </p>
    </div>
  );
}
