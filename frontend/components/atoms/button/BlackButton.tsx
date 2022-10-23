import { ReactNode } from "react";

const BlackButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button className="bg-navy2 text-white2 px-2 py-1 rounded-lg inline-flex items-center space-x-1">
        {children}
      </button>
    </>
  );
};

export default BlackButton;