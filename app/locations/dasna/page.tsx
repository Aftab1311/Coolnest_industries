import type { Metadata } from "next";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { CtaBand, Faq, PageHero } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import { company } from "@/lib/company";
import { businessId, pageMetadata, siteUrl, websiteId } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Honeycomb Cooling Pads in Dasna",
  description:
    "Enquire about honeycomb cooling pads, air cooler pads, 5090 and 7090 flute profiles, custom sizes and bulk supply for Dasna. Coolnest Industries manufactures in Hapur, Uttar Pradesh.",
  path: "/locations/dasna",
});

const faqs = [
  {
    q: "Can I order honeycomb cooling pads for Dasna?",
    a: "Yes, Dasna buyers can contact Coolnest Industries with their pad size, quantity and application. Ask our Hapur team to confirm dispatch availability, timing and price for your location.",
  },
  {
    q: "Are you a honeycomb pad manufacturer in Dasna?",
    a: `Coolnest Industries manufactures honeycomb cooling pads at its facility in ${company.location}. Dasna customers can enquire directly with the manufacturer about product specifications and supply to their address.`,
  },
  {
    q: "What details are needed for a cooling pad price quote?",
    a: "Share the height, width and thickness of the pad, flute profile if known (such as 5090 or 7090), required quantity, and whether it is for an air cooler or another evaporative cooling application.",
  },
  {
    q: "Do you supply custom-size or bulk cooling pads to Dasna?",
    a: "You can enquire about custom dimensions and bulk requirements. Include measurements, quantity and preferred delivery timing so the team can confirm feasibility and dispatch details.",
  },
];

export default function DasnaLocationPage() {
  const pageUrl = new URL("/locations/dasna", siteUrl).href;

  return (
    <main id="main">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Dasna", path: "/locations/dasna" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "Honeycomb Cooling Pads in Dasna | Coolnest Industries",
            description:
              "Cooling pad product and supply enquiries for Dasna from Coolnest Industries, a manufacturer based in Hapur, Uttar Pradesh.",
            about: { "@id": businessId },
            isPartOf: { "@id": websiteId },
            inLanguage: "en-IN",
          }).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="COOLING PADS FOR DASNA"
        title="Honeycomb Cooling Pads"
        accent="for Dasna Enquiries"
        text="Source honeycomb evaporative cooling media from Coolnest Industries, a manufacturer based in Hapur, Uttar Pradesh. Dasna buyers can share their dimensions and quantity to confirm product fit, price and dispatch availability."
      />

      <section className="section-pad" aria-labelledby="dasna-products-title">
        <div className="page-container">
          <SectionLabel>PRODUCTS &amp; SUPPLY</SectionLabel>
          <h2 id="dasna-products-title">Cooling Pad Options for Dasna Buyers</h2>
          <p>
            If you are looking for a honeycomb cooling pad supplier for Dasna,
            Coolnest makes evaporative cooling pads for air cooler replacement,
            commercial requirements and OEM enquiries. Ask about cellulose
            cooling media, 5090 and 7090 flute profiles, and custom-size pads.
            Product suitability depends on your cooler or installation, so
            share the existing pad measurements before ordering.
          </p>

          <div className="feature-cards">
            <article>
              <h3>Honeycomb Cooling Pads</h3>
              <p>
                Honeycomb cooling media for evaporative coolers. Enquire about
                pad thickness, dimensions and replacement requirements in Dasna.
              </p>
              <a className="text-button" href="/products#honeycomb-pad">
                View honeycomb pads
              </a>
            </article>
            <article>
              <h3>Air Cooler Cooling Pads</h3>
              <p>
                Discuss air cooler cooling pad sizes and compatible replacement
                profiles with our Hapur manufacturing team.
              </p>
              <a className="text-button" href="/products#air-cooler-pad">
                View air cooler pads
              </a>
            </article>
            <article>
              <h3>Custom &amp; Bulk Enquiries</h3>
              <p>
                Ask for a cooling pad quote for custom sizes, bulk orders or
                project supply to Dasna. Dispatch and lead time are confirmed
                against the requirement.
              </p>
              <a className="text-button" href="/contact?product=honeycomb-pad#quote-form">
                Request a price quote
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="dasna-order-title">
        <div className="page-container split-layout">
          <div>
            <SectionLabel>HOW TO ENQUIRE</SectionLabel>
            <h2 id="dasna-order-title">Get the Right Pad for Your Application</h2>
            <p>
              Buyers comparing cooling pad manufacturers near Dasna can start
              with the equipment measurements and application. This helps us
              check the required honeycomb cooling media profile before
              discussing cost, minimum quantity or delivery to Dasna.
          </p>
          <p>
            If you are searching for the best honeycomb cooling pad manufacturer
            in Dasna, compare the profile, dimensions and confirmed dispatch
            details for your specific requirement. Coolnest manufactures in
            Hapur, so contact the team to check supply options for Dasna.
            </p>
          </div>
          <ul className="check-list">
            <li>Pad height, width and thickness</li>
            <li>5090, 7090 or other known flute specification</li>
            <li>Air cooler, air washer or other evaporative cooling use</li>
            <li>Quantity and required delivery location in Dasna</li>
          </ul>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand
        title="Need honeycomb pads delivered to Dasna?"
        text="Send the size, profile and quantity. Coolnest Industries will confirm product fit, pricing and dispatch options from Hapur."
      />
    </main>
  );
}
