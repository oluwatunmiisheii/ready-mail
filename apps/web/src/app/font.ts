import { Inter, Sora } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const sora = Sora({
  // weight: ["400", "500", "600", "700"],
  variable: "--sora",
  subsets: ["latin"],
  display: "swap",
});
