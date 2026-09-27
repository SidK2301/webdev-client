interface HighlightedParagraphProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

export default function HighlightedParagraph({
  text,
  color = "black",
  backgroundColor = "yellow",
}: HighlightedParagraphProps) {
  return (
    <p
      style={{
        color: color,
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </p>
  );
}