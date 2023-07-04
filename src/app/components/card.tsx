import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  shouldHover?: boolean;
  classNames?: string;
};
const Card = ({ classNames, children, shouldHover = true }: CardProps) => {
  return (
    <div
      className={clsx(
        `border border-[#3A2F2F] transition-all duration-300 ease-in-out px-3 py-4 mt-7`,
        shouldHover
          ? "hover:shadow-[5px_5px_0px_#3A2F2F]"
          : "shadow-[5px_5px_0px_#3A2F2F]",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default Card;
