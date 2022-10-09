import { AiFillCaretDown } from "react-icons/ai";
import image from "../../assets/logo192.png";
import NewButton from "./NewButton";

const Header = () => {
  return (
    <div className="h-20 w-screen grid grid-cols-2 content-center border-b">
      <div className="justify-self-start ml-6 flex items-center">
        <p className="font-bold text-2xl text-navy2">AppName</p>
        <div className=" ml-16 flex space-x-6">
          <div className="py-7 hover:border-b hover:text-blue2 border-blue2 text-gray2 cursor-pointer">
            <p>My Events</p>
          </div>
          <div className="py-7 hover:border-b border-blue2 text-gray2 hover:text-blue2 cursor-pointer">
            <p>All Events</p>
          </div>
        </div>
      </div>
      <div className="justify-self-end mr-6 items-center flex space-x-4">
        <div className="">
          <NewButton />
        </div>

        <div className="h-8 w-8 rounded-full bg-gray2 ">
          <img src={image} alt="" />
        </div>
        <div className="inline-flex items-center space-x-2 cursor-pointer">
          <p>Names</p>
          <div className="pt-1">
            <AiFillCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
