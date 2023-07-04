import React, { ReactNode } from "react";
import { SPACING as p } from "../utils/constants";


const Shell = ({ children }: { children: ReactNode }) => {
  return <main className={p}>{children}</main>;
};

export default Shell;
