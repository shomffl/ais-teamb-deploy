import { useState } from "react";
import TitleInput from "../atoms/input/title/input";
import RichTextEditor from "../atoms/RichText";
import SelectImage from "../molucules/SelectImage";
import Header from "../organisms/Header";

const NewEvent = () => {
  const [value, setValue] = useState("<p>本文</p>");
  const handleOnChange = (value: any) => {
    setValue(value);
    console.log(value);
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto p-20 space-y-4">
        <TitleInput />
        <SelectImage />
        <RichTextEditor
          classNames={{ root: "border-none caret-blue2", toolbar: "pl-0" }}
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
