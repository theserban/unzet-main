import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./Scripts/cookie.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unzet",
  description: "Your Potential",
  openGraph: {
    title: "Unzet",
    type: "website",
    url: "https://www.unzet.com",
    description: "Your Potential",
    images: [
      {
        url: "https://www.unzet.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Unzet Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black ${dmSans.className}`}>
      <body>{children}</body>
    </html>
  );
}
