import { ReactNode } from "react";


const Shell = ({ children }: { children: ReactNode }) => {
  return <main className='px-8 pb-8'>{children}</main>;
};

export default Shell;
