import { company } from "@/lib/company";
import { businessId, organizationId, siteName, siteUrl, websiteId } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function SiteStructuredData() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: company.streetAddress,
    addressLocality: "Hapur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  };

  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteName,
        alternateName: ["CoolNest Industries"],
        url: siteUrl.href,
        logo: new URL("/favicon-512x512.png", siteUrl).href,
        founder: company.founders.map((name) => ({ "@type": "Person", name })),
        sameAs: [company.instagram],
      },
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: siteName,
        url: siteUrl.href,
        description: "Manufacturer of honeycomb evaporative cooling pads in Hapur, Uttar Pradesh.",
        image: new URL("/images/pad-product-spotlight.webp", siteUrl).href,
        telephone: company.phones[0],
        email: company.email,
        address,
        openingHours: ["Mo-Sa 09:00-21:00"],
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
        parentOrganization: { "@id": organizationId },
      },
    ],
  }} />;
}

export function HomepageWebSiteStructuredData() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl.href,
    name: siteName,
    alternateName: ["CoolNest Industries"],
    publisher: { "@id": organizationId },
    inLanguage: "en-IN",
  }} />;
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: new URL(path, siteUrl).href,
    })),
  }} />;
}
