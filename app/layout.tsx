import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./motion.css";
import "@/components/dialogs.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "CoolNest Industries | Honeycomb Cooling Pads", template: "%s | CoolNest Industries" },
  description: "High-quality honeycomb evaporative cooling pads made with treated water-absorbing paper for reliable, efficient cooler performance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} antialiased`}><a href="#main" className="skip-link">Skip to content</a><Header />{children}<Footer /><WhatsAppButton /></body></html>;
}
