import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "chrimes.dev - Website Design & Development",
  description: "Website design & development by chrimes.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
