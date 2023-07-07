import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { SPACING as p } from "../utils/constants";
import clsx from "clsx";

const Navbar = () => {
  return (
    <header className={clsx(p, "font-panchang")}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <nav className="flex gap-4 md:gap-7 mt-4 md:mt-0">
          <NavLink href="/">home</NavLink>
          <NavLink href="/recipes">recipes</NavLink>
        </nav>
        <div className="uppercase hidden sm:inline-flex gap-3">
          <NavButton disabled>signin</NavButton>
          <NavButton disabled>signup</NavButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

type NavLinkProps = {
  children: ReactNode;
  props?: typeof Link;
  href: string;
};
const NavLink = ({ children, href = "", ...props }: NavLinkProps) => {
  return (
    <Link href={href} className="uppercase" {...props}>
      {children}
    </Link>
  );
};

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  // props?: ButtonHTMLAttributes<HTMLButtonElement>;
}
const NavButton = ({ className, children, ...props }: NavButtonProps) => {
  return (
    <button
      className={`disabled:cursor-not-allowed disabled:bg-gray-400 uppercase bg-primary text-white p-[10px] rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
