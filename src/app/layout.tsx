import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const cinematografica = localFont({
  src: "./fonts/Cinematografica.ttf"
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600']
});

const milanello = localFont({
  src: "./fonts/Milanello.otf",
}); 

export const metadata: Metadata = {
  title: "CineIDE",
  description: "Clássicos do terror, onde o pavor nunca sai de cena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${cairo.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
