import { ChangeEventHandler } from "react";
import { AiFillPicture } from "react-icons/ai";

const ImageInput = ({
  handleFiles,
}: {
  handleFiles: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <label>
        <div className="w-fit text-xs inline-flex text-white2 py-2 pl-3 pr-4 rounded-full border-0 font-semibold bg-navy2 items-center space-x-1">
          <input
            onChange={handleFiles}
            accept="image/*"
            type="file"
            className="hidden 
    "
          />
          <AiFillPicture size={20} />
          <span>画像を選択</span>
        </div>
      </label>
    </>
  );
};

export default ImageInput;
