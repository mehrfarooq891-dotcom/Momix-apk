import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Momix APK Download Official - Latest Version 2025 (100% Safe)",
    template: "%s | Momix APK"
  },
  description: "Download Momix APK latest version for Android. Watch movies, web series, and live TV for free with no ads. 100% safe and virus-free.",
  metadataBase: new URL("https://momixapk.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Momix APK Download Official - Latest Version 2025",
    description: "Watch movies, web series, and live TV for free with Momix APK. Ad-free streaming on Android.",
    url: "https://momixapk.example.com",
    siteName: "Momix APK",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momix APK Download Official",
    description: "Watch movies, web series, and live TV for free with Momix APK.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
