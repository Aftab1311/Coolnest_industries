import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./motion.css";
import "@/components/dialogs.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteMotion from "@/components/SiteMotion";
import { SiteStructuredData } from "@/components/StructuredData";
import { pageMetadata, siteName, siteUrl } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Honeycomb Cooling Pad Manufacturer in Hapur",
    description: "Coolnest Industries manufactures honeycomb cooling pads in Hapur, Uttar Pradesh. Explore evaporative cooling pads, bulk supply and custom sizes.",
    path: "/",
  }),
  metadataBase: siteUrl,
  title: {
    default: `${siteName} | Honeycomb Cooling Pad Manufacturer in Hapur`,
    template: `%s | ${siteName}`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${inter.variable} antialiased`}><SiteStructuredData /><a href="#main" className="skip-link">Skip to content</a><Header />{children}<Footer /><WhatsAppButton /><SiteMotion /></body></html>;
}
