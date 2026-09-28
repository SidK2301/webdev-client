import TOC from "./TOC";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TOC />

      <main>
        {children}
      </main>
    </div>
  );
}