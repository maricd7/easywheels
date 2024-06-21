import React from "react";
import { Inter } from "next/font/google";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Nav />
      {children}
    </div>
  );
}
