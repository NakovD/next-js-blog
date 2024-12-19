import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "The best blog you will ever see.",
  creator: "David Nakov",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen grid grid-rows-body`}
    >
      <Header />
      <div className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">{children}</div>

      <Footer />
    </body>
  </html>
);

export default RootLayout;
