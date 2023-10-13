import {
  Inter,
  Baloo_Bhai_2,
  Montserrat,
  Noto_Sans_JP,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
//english font
export const baloo_bhai = Baloo_Bhai_2({ subsets: ["latin"] });
export const montserrat = Montserrat({
  weight: ["500"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

//japanese font
export const noto_sans_jp = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
});
