"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {ReduxProvider} from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Product Commission",
  description: "Created by Daniel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
