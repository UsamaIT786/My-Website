import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Usama Muzammil | Portfolio",
  description: "Senior Full Stack Web Developer & AI Engineer",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "256x256" },
      { url: "/icon.png", sizes: "512x512" },
      { url: "/icon.png", sizes: "256x256" },
    ],
    apple: "/icon.png",
  },
};


export const viewport = {
  themeColor: "#8750f7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Preloader />
        <div className="mesh-bg" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

