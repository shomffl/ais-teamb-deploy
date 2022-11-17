import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { createEvent, updateEvent } from "../../api/event";
import { messageState } from "../../atom/MessageAtom";
import BlackButton from "../atoms/button/BlackButton";
import TitleInput from "../atoms/input/title/input";
import RichTextEditor from "../atoms/RichText";
import SelectImage from "../molucules/SelectImage";
import Header from "../organisms/Header";

const ManageEvent = ({ eventData }: { eventData?: any }) => {
  const setMessage = useSetRecoilState(messageState);
  const { control, register, handleSubmit, watch } = useForm(
    eventData && {
      defaultValues: {
        name: eventData.name,
        image_path: eventData.image_path,
        detail: eventData.detail,
      },
    }
  );
  const onSubmit = (data: any) => {
    const createFormData = () => {
      const formData = new FormData();
      formData.append("event[image_path]", data.image_path);
      formData.append("event[name]", data.name);
      formData.append("event[detail]", data.detail);
      return formData;
    };

    const datai = createFormData();

    eventData
      ? updateEvent(eventData.id, datai, setMessage)
      : createEvent(datai, setMessage);
  };

  useEffect(() => {
    console.log(watch());
  });
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto p-20 space-y-4">
          <TitleInput props={register("name")} />
          <SelectImage control={control} watch={watch().image_path} />
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

export default ManageEvent;
