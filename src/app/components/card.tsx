import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border border-black shadow-[5px_5px_0px_black] px-3 py-4 mt-7">
      {children}
    </div>
  );
};

export default Card;
