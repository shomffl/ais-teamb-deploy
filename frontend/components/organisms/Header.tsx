import Link from "next/link";
import NewButton from "../atoms/button/NewButton";
import Tab from "../molucules/Tab";
import UserMenu from "../molucules/UserMenu";

const Header = ({ page, genre }: { page?: number; genre?: string }) => {
  return (
    <div className="h-full relative">
      <div className="h-20 w-screen grid grid-cols-2 content-center border-b bg-white">
        <div className="justify-self-start ml-6 flex items-center">
          <Link href="/">
            <a className="font-bold text-2xl text-navy2">
              Young Career
              <span className="text-xs pl-1">{genre}</span>
            </a>
          </Link>

          <Tab tab={page} genre={genre}></Tab>
        </div>
        <div className="justify-self-end mr-6 items-center flex space-x-4">
          <div className="">
            <NewButton />
          </div>

          <div className="h-8 w-8 rounded-full bg-gray2 ">
            <img src="../../assets/railroad-163518__480.jpg" alt="" />
          </div>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
