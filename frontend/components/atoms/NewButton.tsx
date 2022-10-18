import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

const NewButton = () => {
  return (
    <Link href="newevent">
      <button className="bg-navy2 text-white2 px-2 py-1 rounded-lg inline-flex items-center space-x-1">
        <span>New</span>
        <AiOutlinePlus />
      </button>
    </Link>
  );
};

export default NewButton;
