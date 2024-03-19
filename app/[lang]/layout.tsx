import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/app/ui";
import "../globals.css";
import { dir } from "i18next";

import parchment from "@/app/assets/images/old_parchment.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davide Filippi",
  description: "Web developer",
};

type Props = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};
export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html className="h-full text-text" lang={lang} dir={dir(lang)}>
      <body
        className={`${inter.className} h-full bg-cover flex flex-col`}
        style={{ backgroundImage: `url(${parchment.src})` }}
      >
        <Header lng={lang} />
        <main className="p-4 flex-grow">{children}</main>
        <Footer lng={lang} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
