import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Header from "@/components/origin/templates/Header";
import BreadCrumb from "@/components/origin/blocks/BreadCrumb";
import Footer from "@/components/origin/templates/Footer";

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
          <div className="flex items-center justify-start border-b border-gray-200 px-8 py-3 lg:px-16 lg:py-4">
            <BreadCrumb />
          </div>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
