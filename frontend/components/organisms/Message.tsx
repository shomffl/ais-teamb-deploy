import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { messageState } from "../../atom/MessageAtom";

const Message = () => {
  const [message, setMessage] = useRecoilState(messageState);
  return (
    <div
      className={`fixed bottom-8 right-8 border-2 bg-white border-gray2 w-56 h-14 rounded grid grid-cols-6 place-content-center place-items-center ${
        message.open || "hidden"
      }`}
    >
      <div className="col-span-3 col-start-2">{message.text}</div>
      <div className="col-end-7">
        <AiOutlineClose
          onClick={() => {
            setMessage({ ...message, open: false });
          }}
        />
      </div>
    </div>
  );
};

export default Message;
