import BreadCrumb from "@/components/origin/blocks/BreadCrumb";
import Header from "@/components/origin/templates/Header";
import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlus = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "naotani-utils",
  description: "便利な機能を提供するWebサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mPlus.className + " relative"}>
        <Header />
        <main>
          <BreadCrumb />
          {children}
        </main>
      </body>
    </html>
  );
}
