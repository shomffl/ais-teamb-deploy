import { AiFillCaretUp } from "react-icons/ai";

const ScrollToTop = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={returnTop} className="fixed bottom-8 right-12">
      <AiFillCaretUp />
    </div>
  );
};

export default ScrollToTop;
