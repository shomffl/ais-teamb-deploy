import { AiOutlineClose } from "react-icons/ai";

const Message = () => {
  return (
    <div className="fixed bottom-8 right-8 border-2 bg-white border-gray2 w-56 h-14 rounded grid grid-cols-6 place-content-center place-items-center">
      <div className="col-span-3 col-start-2"></div>
      <div className="col-end-7">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Message;
