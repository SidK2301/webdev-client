export default function Flex() {
  return (
    <section id="wd-css-flex" className="wd-lab-section">
      <h3>Flex</h3>
      <div className="wd-flex-row">
        <div>One</div><div>Two</div><div>Three</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row">
        <div className="wd-flex-fixed">Fixed</div><div className="wd-flex-grow">Growing middle</div><div className="wd-flex-grow">Growing last</div>
      </div>
    </section>
  );
}
