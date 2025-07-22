import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import LenisProvider from "../components/LenisProvider";
import localFont from 'next/font/local';

// Load custom fonts
const neueMachina = localFont({
  src: [
    {
      path: '../public/fonts/NeueMachina-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-InktrapUltrabold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-machina',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Creators",
  description: "Creators Website",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={neueMachina.variable}>
      <head>
        <link rel="icon" href="/images/CFavicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* You can also use PNG: <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
