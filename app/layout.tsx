import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineAI Studio",
  description: "AI-powered video creation studio",
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
