export default function BoxModel() {
  return (
    <section id="wd-css-box-model" className="wd-lab-section">
      <h3>Box model and sizing</h3>
      <div className="wd-box-model">
        <div className="wd-box-margin">
          <div className="wd-box-border-layer">
            <div className="wd-box-padding">
              <div className="wd-box-content-label">Content</div>
              <span className="wd-box-label wd-label-content">Content</span>
            </div>
            <span className="wd-box-label wd-label-padding">Padding</span>
          </div>
          <span className="wd-box-label wd-label-border">Border</span>
        </div>
        <span className="wd-box-label wd-label-margin">Margin</span>
      </div>
      <div className="wd-box-content">content-box: 220px content width</div>
      <div className="wd-box-border">border-box: 220px total width</div>
      <div className="wd-box-sizing-ai">AI sample: border-box comparison</div>
    </section>
  );
}
