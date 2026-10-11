export default function Positions() {
  return (
    <section id="wd-css-positions" className="wd-lab-section">
      <h3>Position</h3>
      <div className="wd-position-stage">
        <div className="wd-relative-box">Relative box (offset without moving the space around it)</div>
        <div className="wd-absolute-parent">
          Relative parent
          <div className="wd-absolute-box wd-absolute-one">Absolute box one</div>
          <div className="wd-absolute-box wd-absolute-two">Absolute box two</div>
          <div className="wd-absolute-box wd-absolute-three">Absolute box three</div>
          <span id="wd-ai-absolute">AI absolute: bottom right</span>
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
