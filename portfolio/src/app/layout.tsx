import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal website to showcase projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <nav className="flex p-4 text-lg font-bold bg-gray-900">
          <div className="p-4">
            <Link href = "/" className="p-6 ">
              Home
            </Link>
          </div> 
          <div className="ml-auto p-4">
            <Link href = "/about" className="p-6">
            About
            </Link>
            <Link href = "/profile" className="p-6">
              Profile
            </Link>
            <Link href = "/projects" className="p-6">
              Projects
            </Link>
            <Link href="https://github.com/RadaanMadhan" className="inline-flex items-center ">
              <div className="ml-4 mr-4">
              <Image 
              src="/github.png" 
              width={30}
              height={30} 
              alt="github" 
              />
              </div>
              
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
