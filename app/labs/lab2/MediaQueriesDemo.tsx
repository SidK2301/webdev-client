import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <section id="wd-css-media-queries" className="wd-lab-section">
      <h3>Media queries</h3>
      <p id="wd-mq-rule">The box and matching range are highlighted for the current viewport width.</p>
      <div className="wd-mq-layout">
        <div className="wd-mq-box" aria-label="Responsive color sample">Responsive color sample</div>
        <ul className="wd-mq-ranges">
          <li className="wd-mq-range-1">Default — green</li>
          <li className="wd-mq-range-2">750px to 999px — yellow</li>
          <li className="wd-mq-range-3">1000px to 1250px — blue</li>
          <li className="wd-mq-range-4">Wider than 1250px — red</li>
        </ul>
      </div>
      <p className="wd-mq-rule-ai">AI sample: purple with white text at widths up to 749px.</p>
    </section>
  );
}
