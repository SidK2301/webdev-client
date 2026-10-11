export default function GridLayout() {
  return (
    <section id="wd-css-grid-layout" className="wd-lab-section">
      <h3>Grid layout with float</h3>
      <div className="wd-float-grid">
        <div className="wd-grid-third">One third</div>
        <div className="wd-grid-two-thirds">Two thirds</div>
      </div>
      <div className="wd-float-grid">
        <div className="wd-grid-half">One half</div>
        <div className="wd-grid-half">One half</div>
      </div>
      <div className="wd-float-grid">
        <div className="wd-grid-sidebar">Sidebar</div>
        <div className="wd-grid-main">Main content</div>
      </div>
      <div id="wd-ai-grid" className="wd-float-grid">
        <div className="wd-grid-third">AI · 1/3</div>
        <div className="wd-grid-two-thirds">AI · 2/3</div>
      </div>
    </section>
  );
}
