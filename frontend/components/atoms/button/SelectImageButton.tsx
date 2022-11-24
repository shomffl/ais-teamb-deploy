import { ChangeEventHandler, useRef } from "react";
import { Controller } from "react-hook-form";
import { AiFillPicture } from "react-icons/ai";

const ImageInput = ({
  control,
  setImage,
}: {
  control: any;
  setImage: (arg: string) => void;
}) => {
  return (
    <>
      <label>
        <div className="w-fit text-xs inline-flex text-white2 py-2 pl-3 pr-4 rounded-full border-0 font-semibold bg-navy2 items-center space-x-1">
          <Controller
            name="image_path"
            control={control}
            render={({ field }) => {
              const imgref = useRef<HTMLInputElement>(null);
              const { onChange } = field;
              const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (
                e
              ) => {
                const img = e.target.files ? e.target.files[0] : null;
                onChange(img);
                const { files } = e.target;
                files && setImage(window.URL.createObjectURL(files[0]));
              };
              return (
                <input
                  ref={imgref}
                  accept="image/*"
                  type="file"
                  className="hidden"
                  onChange={handleChangeFile}
                />
              );
            }}
          ></Controller>

          <AiFillPicture size={20} />
          <span>画像を選択</span>
        </div>
      </label>
    </>
  );
};

export default ImageInput;
