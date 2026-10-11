export default function Display() {
  return (
    <section id="wd-css-display" className="wd-lab-section">
      <h3>Display</h3>
      <p>Inline elements stay in the line: <span className="wd-display-inline">inline one</span> <span className="wd-display-inline">inline two</span>.</p>
      <span className="wd-display-inline-block">inline-block with width</span>
      <span className="wd-display-block">block element occupies its own line</span>
      <div id="wd-ai-display">AI sample: a block display box.</div>
    </section>
  );
}
