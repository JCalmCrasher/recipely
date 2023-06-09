import panchang from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
const panchangFont = panchang({
  src: "../fonts/Panchang-Variable.woff2",
  display: "swap"
});

export const metadata = {
  title: "Recipely",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={panchangFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
