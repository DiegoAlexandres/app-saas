import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = Roboto({subsets: ['latin'], weight: ['400', '500', '700'], variable: '--var-roboto'})

export const metadata: Metadata = {
  title: "OpenBI",
  description: "OpenBI Inteligencia e Estratégia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.variable}`}>
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
