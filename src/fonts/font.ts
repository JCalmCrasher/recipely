import panchang from "next/font/local";
import { Nunito } from "next/font/google";

export const nunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});

export const panchangFont = panchang({
  src: "../fonts/Panchang-Variable.woff2",
  display: "swap",
  variable: "--font-panchang"
});
