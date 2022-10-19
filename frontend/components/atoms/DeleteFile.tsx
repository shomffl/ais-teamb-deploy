import { Dispatch, SetStateAction } from "react";
import { AiFillDelete } from "react-icons/ai";

const DeleteFile = ({
  onClick,
}: {
  onClick: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <button
        onClick={() => onClick("")}
        className="bg-navy2 text-white2 px-4 py-2 rounded-full inline-flex items-center space-x-1"
      >
        <span>
          <AiFillDelete className=""></AiFillDelete>
        </span>
      </button>
    </div>
  );
};

export default DeleteFile;
