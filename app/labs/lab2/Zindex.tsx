export default function Zindex() {
  return (
    <section id="wd-css-z-index" className="wd-lab-section">
      <h3>Z-index</h3>
      <div className="wd-stack-stage">
        <div className="wd-stack-box wd-stack-one">1 · behind</div>
        <div className="wd-stack-box wd-stack-two">2 · middle</div>
        <div className="wd-stack-box wd-stack-three">3 · in front</div>
        <div id="wd-ai-zindex" className="wd-stack-box wd-stack-ai">AI · top layer</div>
      </div>
    </section>
  );
}
