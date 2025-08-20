import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClearRx - Voice-Activated Medication Management",
  description: "Voice-activated medication management for visually impaired and seniors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
