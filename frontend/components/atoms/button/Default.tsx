import { ReactNode } from "react";

const DefaultButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <button className="w-full rounded py-1 font-semibold bg-gray2 text-blue2">
        {children}
      </button>
    </div>
  );
};

export default DefaultButton;
