import NewButton from "../atoms/button/NewButton";
import Tab from "../molucules/Tab";
import UserMenu from "../molucules/UserMenu";

const Header = ({ page }: { page?: number }) => {
  return (
    <div className="h-full relative">
      <div className="h-20 w-screen grid grid-cols-2 content-center border-b bg-white">
        <div className="justify-self-start ml-6 flex items-center">
          <p className="font-bold text-2xl text-navy2">AppName</p>
          <Tab tab={page}></Tab>
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
