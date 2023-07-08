import { nunitoFont, panchangFont } from "@/fonts/font";
import clsx from "clsx";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Recipely",
  description: "Find food recipes 🍔"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nunitoFont.variable, panchangFont.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
