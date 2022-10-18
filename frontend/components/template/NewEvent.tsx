import RichTextEditor from "@mantine/rte";
import { useState } from "react";
import TitleInput from "../atoms/title/input";
import Header from "../organisms/Header";

const NewEvent = () => {
  const [value, setValue] = useState("");
  const handleOnChange = (value: any) => {
    setValue(value);
    console.log(value);
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <TitleInput />
        <RichTextEditor
          classNames={{ root: "border-none caret-blue2" }}
          value={value}
          onChange={handleOnChange}
          id="rte"
          controls={[
            ["bold", "underline", "link"],
            ["image", "video"],
            ["unorderedList", "h1", "h2", "h3"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
        />
      </div>
    </div>
  );
};

export default NewEvent;
