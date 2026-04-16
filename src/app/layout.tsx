import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Brighter Futures Recovery Homes — Where Recovery Transforms Into a Lifetime of Dignity",
  description:
    "Brighter Futures Recovery Homes provides a safe, structured, and compassionate sober living environment. Founded by people who have walked the path, we help individuals in recovery heal, rediscover purpose, and build lasting independence.",
  keywords: [
    "sober living",
    "recovery home",
    "recovery housing",
    "sober housing",
    "Brighter Futures Recovery Homes",
    "addiction recovery",
    "peer support",
  ],
  openGraph: {
    title: "Brighter Futures Recovery Homes",
    description:
      "Where Recovery Transforms Into a Lifetime of Dignity, Purpose, and Lasting Independence.",
    url: "https://betterfuture26.com",
    siteName: "Brighter Futures Recovery Homes",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://betterfuture26.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
