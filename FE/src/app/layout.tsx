import type { Metadata } from "next";
import { Geist_Mono, Syne } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Decent Perfume",
    template: "%s · Decent Perfume",
  },
  description:
    "Shop curated niche and designer perfumes—Decent Perfume storefront and merchant tools.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Decent Perfume",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
