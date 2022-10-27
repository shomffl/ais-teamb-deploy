import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { createEvent } from "../../api/event";
import BlackButton from "../atoms/button/BlackButton";
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
  const { control, register, handleSubmit, watch } = useForm();
  const editorRef = useRef<any>();
  const onSubmit = (data: any) => createEvent(data);
  useEffect(() => {
    console.log(watch());
  });
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto p-20 space-y-4">
          <TitleInput props={register("name")} />
          <SelectImage control={control} watch={watch} />
          <Controller
            control={control}
            name="detail"
            render={({ field }) => {
              const { onChange, value } = field;
              return (
                <RichTextEditor
                  classNames={{
                    root: "border-none caret-blue2",
                    toolbar: "pl-0",
                  }}
                  id="rte"
                  controls={[
                    ["bold", "underline", "link"],
                    ["image", "video"],
                    ["unorderedList", "h1", "h2", "h3"],
                    ["alignLeft", "alignCenter", "alignRight"],
                  ]}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          ></Controller>

          <div>
            <BlackButton>
              作成
              <AiOutlinePlus />
            </BlackButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
