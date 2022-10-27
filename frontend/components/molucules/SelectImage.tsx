import useImageFile from "../../hooks/ImageFile";
import ImageInput from "../atoms/button/SelectImageButton";
import DeleteFile from "../atoms/DeleteFile";

const SelectImage = ({ control, watch }: any) => {
  const { image, setImage, handleChangeFile } = useImageFile();

  return (
    <div>
      {!watch().image_path && <ImageInput control={control} />}
      <>
        {watch().image_path && (
          <div className="aspect-[2/1] h-60 relative">
            <img src={watch().image_path} className="h-full w-full" />
            <div className="absolute bottom-2 right-0 z-10 flex space-x-2">
              <ImageInput control={control} />
              <DeleteFile control={control} />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SelectImage;
