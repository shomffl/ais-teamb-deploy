import { ReactNode } from "react";

const BlackButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-navy2 text-white2 px-2 py-1 rounded-lg inline-flex items-center space-x-1"
      >
        {children}
      </button>
    </>
  );
};

export default BlackButton;
