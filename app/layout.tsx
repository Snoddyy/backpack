import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_components/fonts.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Backpack Legends",
  description: "Welcome to the Backpack Legends website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
