export default function AnchorTag() {
  return (
    <div id="wd-anchor-tags">
      <h4>Anchor Tag</h4>

      <a id="wd-your-link" href="https://www.google.com">
        Google
      </a>

      <br />

      <a
        id="wd-your-github"
        href="https://github.com/SidK2301/webdev-client"
        target="_blank"
      >
        My GitHub
      </a>

      <br />

      <a
        id="wd-ai-link"
        href="https://chatgpt.com"
        target="_blank"
      >
        AI
      </a>

      <br />

      <a href="https://www.northeastern.edu">
        Northeastern University
      </a>

      <br />

      <a href="https://www.northeastern.edu" target="_blank">
        Northeastern University - New Tab
      </a>

      <br />

      <a href="#wd-lab1">
        Back to Lab 1
      </a>
    </div>
  );
}