import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import LenisProvider from "../components/LenisProvider";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/images/CFavicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
