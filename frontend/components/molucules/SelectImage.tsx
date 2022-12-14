import { useState } from "react";
import ImageInput from "../atoms/button/SelectImageButton";
import DeleteFile from "../atoms/DeleteFile";

const SelectImage = ({ control, watch }: any) => {
  const [image, setImage] = useState("");
  console.log(watch);
  return (
    <div>
      {!watch && <ImageInput setImage={setImage} control={control} />}
      <>
        {watch && (
          <div className="aspect-[2/1] h-60 relative">
            <img
              src={`${image || "http://" + watch.split("://")[1]}`}
              className="h-full w-full"
            />
            <div className="absolute bottom-2 right-0 z-10 flex space-x-2">
              <ImageInput setImage={setImage} control={control} />
              <DeleteFile setImage={setImage} control={control} />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SelectImage;
