import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing & Stephen",
  description: "Blessing & Stephen — Saturday, 28 November 2026. Our love story, registry and photos.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Blessing & Stephen",
    type: "website",
  },
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
