export default function BackgroundColors() {
  return (
    <section id="wd-css-background-colors" className="wd-lab-section">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This paragraph has a red background but <span className="wd-bg-color-green wd-fg-color-white">this text has a green background and white foreground</span>.
      </p>
      <p className="wd-bg-color-gray wd-fg-color-black">A light gray background with dark text.</p>
      <p className="wd-bg-color-yellow wd-fg-color-black">Personal sample: yellow background and black text.</p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">AI sample: yellow background and black text.</p>
    </section>
  );
}
