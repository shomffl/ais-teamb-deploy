import { Controller } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";

const DeleteFile = ({ control }: { control: any }) => {
  return (
    <div>
      <Controller
        control={control}
        name="image"
        render={({ field }) => {
          const { onChange } = field;
          return (
            <button
              onClick={() => onChange("")}
              className="bg-navy2 text-white2 px-4 py-2 rounded-full inline-flex items-center space-x-1"
            >
              <span>
                <AiFillDelete className=""></AiFillDelete>
              </span>
            </button>
          );
        }}
      ></Controller>
    </div>
  );
};

export default DeleteFile;
