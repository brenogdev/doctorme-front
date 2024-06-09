import type { Metadata } from "next";
import { Inter, Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "DOCTORME",
  description: "Assistente pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${sourceSans3.variable}`}>
        {children}
      </body>
    </html>
  );
}
