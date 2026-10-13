import type { Metadata } from "next";

export const siteUrl = new URL("https://coolnestindustries.com");
export const siteName = "Coolnest Industries";
export const organizationId = new URL("/#organization", siteUrl).href;
export const businessId = new URL("/#business", siteUrl).href;
export const websiteId = new URL("/#website", siteUrl).href;
export const defaultSocialImage = "/images/pad-product-spotlight.webp";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      title,
      description,
      url: path,
      images: [{ url: image, alt: "Coolnest Industries honeycomb cooling pads" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
