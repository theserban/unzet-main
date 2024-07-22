import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unzet.com"),
  keywords: ["startups", "tech"],
  title: {
    default: "Unzet - Your Potential",
    template: "%s",
  },
  description:
    "Everything we do, from helping startups achieve their goals to building our own stuff, it's done with a clear destination in mind, making people's lives more enjoyable.",
  openGraph: {
    description: `Everything we do, from helping startups achieve their goals to building our own stuff, it's done with a clear destination in mind, making people's lives more enjoyable.`,
    images: ["https://www.unzet.com/og.jpg"],
  },
  icons: {
    icon: "/photos/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black scroll-smooth ${dmSans.className}`}>
      <body>{children}</body>
    </html>
  );
}
