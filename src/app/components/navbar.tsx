import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { SPACING as p } from "../@variable";

const Navbar = () => {
  return (
    <header className={p}>
      <div className="flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <nav className="hidden sm:flex gap-7">
          <NavLink href="/home">home</NavLink>
          <NavLink href="/">recipes</NavLink>
          <NavLink href="/">features</NavLink>
        </nav>
        <div className="uppercase hidden sm:inline-flex gap-3">
          <NavButton>signin</NavButton>
          <NavButton>signup</NavButton>
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

type NavButtonProps = {
  children: ReactNode;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
};
const NavButton = ({ children, ...props }: NavButtonProps) => {
  return (
    <button
      className="uppercase bg-primary text-white p-[10px] rounded"
      {...props}
    >
      {children}
    </button>
  );
};
