import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Carbon + Tailwind Example",
  description: "Integration of Carbon Design System with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
