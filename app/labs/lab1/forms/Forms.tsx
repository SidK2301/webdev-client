import Text from "./Text";
import Textarea from "./Textarea";
import Radio from "./Radio";
import Checkboxes from "./Checkboxes";
import Select from "./Select";
import OtherInputs from "./OtherInputs";
import Buttons from "./Buttons";
import YourForm from "./YourForm";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Forms</h4>

      <form>
        <Text />

        <Textarea />

        <Radio />

        <Checkboxes />

        <Select />

        <OtherInputs />

        <Buttons />
      </form>

      <YourForm />
    </div>
  );
}