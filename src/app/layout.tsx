import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doãn Quốc Hiếu | Mobile Developer",
  description:
    "Portfolio của Doãn Quốc Hiếu - Mobile Developer chuyên React Native và Next.js. Xây dựng ứng dụng mobile hiện đại và website chất lượng cao.",
  keywords: [
    "React Native",
    "Next.js",
    "Mobile Developer",
    "Portfolio",
    "Doãn Quốc Hiếu",
  ],
  authors: [{ name: "Doãn Quốc Hiếu" }],
  openGraph: {
    title: "Doãn Quốc Hiếu | Mobile Developer",
    description:
      "Portfolio của Doãn Quốc Hiếu - Mobile Developer chuyên React Native và Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
