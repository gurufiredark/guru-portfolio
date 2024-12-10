import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

//componentes
import Header from '../components/Header';

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Guru",
  description: "Portfólio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
