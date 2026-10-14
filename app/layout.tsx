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
const rootPageMetadata = pageMetadata({
  title: "Honeycomb Cooling Pad Manufacturer in Hapur",
  description: "Coolnest Industries manufactures honeycomb cooling pads in Hapur, Uttar Pradesh. Explore evaporative cooling pads, bulk supply and custom sizes.",
  path: "/",
});

export const metadata: Metadata = {
  ...rootPageMetadata,
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: `${siteName} | Honeycomb Cooling Pad Manufacturer in Hapur`,
    template: `%s | ${siteName}`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { ...rootPageMetadata.openGraph, siteName },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${inter.variable} antialiased`}><SiteStructuredData /><a href="#main" className="skip-link">Skip to content</a><Header />{children}<Footer /><WhatsAppButton /><SiteMotion /></body></html>;
}
