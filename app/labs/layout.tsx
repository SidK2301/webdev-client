import TOC from "./TOC";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-labs-layout">
      <aside id="wd-labs-toc">
        <TOC />
      </aside>

      <main id="wd-labs-content">
        {children}
      </main>
    </div>
  );
}