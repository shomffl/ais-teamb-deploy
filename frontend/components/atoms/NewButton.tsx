import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import BlackButton from "./BlackButton";

const NewButton = () => {
  return (
    <Link href="/newevent">
      <BlackButton>
        <span>New</span>
        <AiOutlinePlus />
      </BlackButton>
    </Link>
  );
};

export default NewButton;
