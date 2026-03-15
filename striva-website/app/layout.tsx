import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Striva Software - Building software that matters",
  description: "Professional software development agency specializing in API & Backend, Web Platforms, and B2B Products.",
  keywords: "software development, API, backend, web platforms, B2B products, South Africa",
  authors: [{ name: "Striva Software" }],
  openGraph: {
    title: "Striva Software - Building software that matters",
    description: "Professional software development agency specializing in API & Backend, Web Platforms, and B2B Products.",
    url: "https://strivasoftware.co.za",
    siteName: "Striva Software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
