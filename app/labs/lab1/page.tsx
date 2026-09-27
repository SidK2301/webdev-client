import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      <HeadingTags />

      <ParagraphTag />

      <ListTags />

      <Tables />

      <Images />

      <Forms />

      <HighlightedParagraph
        text="This is my highlighted paragraph."
        color="blue"
        backgroundColor="lightyellow"
      />

      <HighlightedParagraph
        text="This is an AI-generated highlighted paragraph."
        color="purple"
        backgroundColor="lightgreen"
      />

      <HighlightedBox
        color="white"
        backgroundColor="darkblue"
      >
        <h3>Highlighted Box</h3>
        <p>This content is inside a highlighted box.</p>
      </HighlightedBox>

      <AnchorTag />
    </div>
  );
}