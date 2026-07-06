import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrisisLink",
  description: "Connecting people in crisis to shelter, food, housing, and medical help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
