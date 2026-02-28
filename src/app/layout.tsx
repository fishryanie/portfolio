import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import { PwaRegister } from "@/components/ui/pwa-register";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Senior Mobile & Fullstack Engineer",
  description:
    "Portfolio cá nhân với case study chi tiết về React Native và Next.js projects.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Quan Portfolio",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/pwa/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#132531",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
