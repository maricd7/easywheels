import React from "react";
import { Inter } from "next/font/google";
import { Nav } from "../components/Nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className={inter.className}>
        <Nav />
        {children}
      </div>
    </ClerkProvider>
  );
}
