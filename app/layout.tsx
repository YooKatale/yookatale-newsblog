"use client";

// import type { Metadata } from "next";

import { RecoilRoot, useRecoilValue } from "recoil";
import { Raleway } from "next/font/google";

import "./globals.css";
import Topbar from "@components/Topbar";
import Footer from "@components/Footer";
import { SideMenuState } from "@lib/atoms";
import Sidebar from "@components/Sidebar";

const raleway = Raleway({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "yookatale client dashboard",
//   description: "Fresh Food Products Supplier in Kampala and surrounding areas",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={raleway.className+"bg-slate-100"} >
          <Sidebar />
          <Topbar />
          {children}
          <Footer />
        </body>
      </html>
    </RecoilRoot>
  );
}
