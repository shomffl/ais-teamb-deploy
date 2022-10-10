import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import image from "../../assets/logo192.png";
import NewButton from "./NewButton";

const Header = ({ children }: { children?: any }) => {
  const [tab, setTab] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="h-20 w-screen grid grid-cols-2 content-center border-b">
        <div className="justify-self-start ml-6 flex items-center">
          <p className="font-bold text-2xl text-navy2">AppName</p>
          <div className=" ml-16 flex space-x-6">
            <div
              onClick={() => {
                setTab(0);
              }}
              className={`py-7 hover:border-b hover:text-blue2-light border-blue2 text-gray2 cursor-pointer ${
                tab === 0 && "border-b text-blue2"
              }`}
            >
              <p>My Events</p>
            </div>

            <div
              onClick={() => {
                setTab(1);
              }}
              className={`py-7 hover:border-b hover:text-blue2-light border-blue2 text-gray2 cursor-pointer ${
                tab === 1 && "border-b text-blue2"
              }`}
            >
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
          <div
            onClick={() => {
              setMenu(!menu);
            }}
            className="inline-flex items-center space-x-2 cursor-pointer relative"
          >
            <p>Names</p>
            <div className="pt-1">
              <AiFillCaretDown />
            </div>
            <div
              className={`absolute top-14 shadow rounded right-0 w-40 bg-white border-black divide-y text-left ${
                !menu && "invisible"
              }`}
            >
              <div
                onClick={() => {
                  setTab(2);
                }}
                className="p-4"
              >
                profile
              </div>
              <div className="p-4">Settings</div>
              <div className="p-4 text-red-500">Logout</div>
            </div>
          </div>
        </div>
      </div>
      {children[tab]}
    </>
  );
};

export default Header;
