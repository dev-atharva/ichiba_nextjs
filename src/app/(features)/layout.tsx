import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Inter, Baloo_Bhai_2 } from "next/font/google";
import LoginModal from "../_components/Modals/LoginModal";
import RegisterModal from "../_components/Modals/RegisterModal";
import ToasterProvider from "../providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });
const baloo_bhai = Baloo_Bhai_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakuten new life",
  description: "Start your new life with curated lists from Rakuten ichiba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={baloo_bhai.className}>

      <RegisterModal />
      <LoginModal />
      {children}
    </html>
  );
}
