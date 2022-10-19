import useImageFile from "../../hooks/ImageFile";
import DeleteFile from "../atoms/DeleteFile";
import ImageInput from "../atoms/SelectImageButton";

const SelectImage = () => {
  const { image, setImage, handleChangeFile } = useImageFile();
  return (
    <div>
      {!image && <ImageInput handleFiles={handleChangeFile} />}
      <>
        {image && (
          <div className="aspect-[2/1] h-60 relative">
            <img src={image} className="h-full w-full" />
            <div className="absolute bottom-2 right-0 z-10 flex space-x-2">
              <ImageInput handleFiles={handleChangeFile} />
              <DeleteFile onClick={setImage} />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SelectImage;
