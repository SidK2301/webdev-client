interface HighlightedBoxProps {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}

export default function HighlightedBox({
  children,
  color = "black",
  backgroundColor = "lightblue",
}: HighlightedBoxProps) {
  return (
    <div
      style={{
        color: color,
        backgroundColor: backgroundColor,
        padding: "10px",
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
}