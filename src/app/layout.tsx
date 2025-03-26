import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accel | Business banking for International Businesses",
  description: "A modern banking platform, powered by stablecoins and backed by U.S. Treasuries, to make global finance faster, seamless, and secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
