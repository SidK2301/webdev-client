export default function Positions() {
  return (
    <section id="wd-css-positions" className="wd-lab-section">
      <h3>Position</h3>
      <div className="wd-position-stage">
        <div className="wd-relative-box">Relative box (offset without moving the space around it)</div>
        <div id="wd-css-position-absolute">
          <h4>Absolute position</h4>
          <div className="wd-pos-relative" style={{ height: 150 }}>
            <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
            <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-dimension-landscape">Landscape</div>
            <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
            <span id="wd-ai-absolute">AI absolute: bottom right</span>
          </div>
        </div>
      </div>
      <div id="wd-ai-relative">AI relative: offset down and left.</div>
      <div className="wd-ai-absolute-parent"><span>Personal absolute-position sample, top left.</span></div>
      <p>Scroll the page to see both fixed-position samples remain in place.</p>
      <div className="wd-fixed-box">Fixed sample · lower right</div>
      <div id="wd-ai-fixed">Fixed sample</div>
    </section>
  );
}
