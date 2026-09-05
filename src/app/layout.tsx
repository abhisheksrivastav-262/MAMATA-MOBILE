import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mamata Mobile | Mobile Repair & Spare Parts in Grant Road Mumbai",
  description:
    "Mamata Mobile offers mobile repair services, spare parts, iSpare & Combo solutions and mobile accessories near Grant Road East, Mumbai. Platinum Mall, near Delhi Darbar Hotel.",
  keywords: ["Mamata Mobile", "Grant Road mobile repair", "Platinum Mall spare parts", "iSpare Combo Mumbai", "mobile accessories Grant Road"],
  openGraph: {
    title: "Mamata Mobile | iSpare & Combo | Grant Road Mumbai",
    description: "Premium mobile repair, genuine spare parts, iSpare & Combo solutions and accessories in Platinum Mall, Grant Road East, Mumbai.",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://mamatamobile.example.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
