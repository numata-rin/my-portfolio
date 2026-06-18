import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "沼田倫 | Portfolio",
    template: "%s | 沼田倫",
  },
  description:
    "岩手大学で情報工学を学ぶ学生エンジニア 沼田倫のポートフォリオサイト。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "沼田倫 Portfolio",
    title: "沼田倫 | Portfolio",
    description:
      "岩手大学で情報工学を学ぶ学生エンジニア 沼田倫のポートフォリオサイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1 pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
