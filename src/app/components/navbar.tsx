import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="p-8">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
    </header>
  );
};

export default Navbar;
