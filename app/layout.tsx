import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/app/ui";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davide Filippi",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-parchmentImg bg-cover text-text">
      <body className={`${inter.className} h-full`}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
