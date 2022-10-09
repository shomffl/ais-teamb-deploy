import { AiOutlinePlus } from "react-icons/ai";

const NewButton = () => {
  return (
    <>
      <button className="bg-navy2 text-white2 px-2 py-1 rounded-lg inline-flex items-center space-x-1">
        <span>New</span>
        <AiOutlinePlus />
      </button>
    </>
  );
};

export default NewButton;
