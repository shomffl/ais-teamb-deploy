import { ChangeEventHandler } from "react";

const ImageInput = ({
  handleFiles,
}: {
  handleFiles: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <label className="w-full text-xs text-white2 py-2 px-4 rounded-full border-0 font-semibold bg-navy2">
        <input
          onChange={handleFiles}
          accept="image/*"
          type="file"
          className="hidden 
    "
        />
        画像を選択
      </label>
    </div>
  );
};

export default ImageInput;
