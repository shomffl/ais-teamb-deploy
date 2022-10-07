import image from "../../logo192.png";

const Header = () => {
  return (
    <div className="h-20 w-screen grid grid-cols-2 content-center border-b gap-y-0">
      <div className="justify-self-start ml-6 flex content-center">
        <p className="pt-6 font-bold text-2xl">AppName</p>
        <div className=" ml-16 flex space-x-6">
          <div className="pt-7 hover:border-b border-red-600">
            <p>My Events</p>
          </div>
          <div className="pt-7 hover:border-b border-red-600">
            <p>All Events</p>
          </div>
        </div>
      </div>
      <div className="justify-self-end mr-6">
        <div className="flex space-x-4 ">
          <button>New</button>
          <div className="py-6">
            <img className="h-8 w-8 rounded-full " src={image} alt="" />
          </div>
          <p className="py-7">Names</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
