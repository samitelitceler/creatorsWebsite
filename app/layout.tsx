import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Creators",
  description: "Creators Website",
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
        {/* You can also use PNG: <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
