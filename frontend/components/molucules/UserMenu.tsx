import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const UserMenu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
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
          <Link href="/profile">
            <div className="p-4">profile</div>
          </Link>

          <div className="p-4">Settings</div>
          <div className="p-4 text-red-500">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
