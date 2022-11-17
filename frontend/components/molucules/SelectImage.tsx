import ImageInput from "../atoms/button/SelectImageButton";
import DeleteFile from "../atoms/DeleteFile";

const SelectImage = ({ control, watch }: any) => {
  return (
    <div>
      {!watch && <ImageInput control={control} />}
      <>
        {watch && (
          <div className="aspect-[2/1] h-60 relative">
            <img src={`${watch}`} className="h-full w-full" />
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
