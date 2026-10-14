import type { Metadata } from "next";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { CtaBand, Faq, PageHero } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import { company } from "@/lib/company";
import { businessId, pageMetadata, siteUrl, websiteId } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Honeycomb Cooling Pads for Dasna",
  description:
    "Looking for honeycomb cooling pads in Dasna? Enquire about air cooler pads, 5090 and 7090 profiles, custom sizes and bulk orders. Confirm supply and dispatch for Dasna.",
  path: "/dasna",
});

const faqs = [
  {
    q: "Can I order honeycomb cooling pads for Dasna?",
    a: "Yes. Send Coolnest Industries your pad dimensions, quantity and application for a Dasna requirement. The team will confirm product fit, price, availability and dispatch details before you place an order.",
  },
  {
    q: "Can Dasna buyers order directly from a honeycomb cooling pad manufacturer?",
    a: `Coolnest Industries manufactures honeycomb cooling pads at its facility in ${company.location}. Dasna buyers can contact the manufacturer directly to discuss specifications and confirm supply and dispatch for their requirement.`,
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
  const pageUrl = new URL("/dasna", siteUrl).href;

  return (
    <main id="main">
      <BreadcrumbStructuredData
        items={[{ name: "Home", path: "/" }, { name: "Dasna", path: "/dasna" }]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "Honeycomb Cooling Pads for Dasna | Coolnest Industries",
            description:
              "Product and bulk order enquiries for Dasna buyers looking for honeycomb cooling pads, air cooler pads and custom sizes from Coolnest Industries.",
            about: { "@id": businessId },
            isPartOf: { "@id": websiteId },
            inLanguage: "en-IN",
          }).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="HONEYCOMB COOLING PADS FOR DASNA"
        title="Cooling Pad Supply"
        accent="for Dasna Buyers"
        text="Looking for honeycomb cooling pads in Dasna? Enquire about air cooler replacement pads, custom sizes and bulk quantities for your application. Coolnest Industries confirms product fit, supply and dispatch details for each order."
      />

      <section className="section-pad" aria-labelledby="dasna-products-title">
        <div className="page-container">
          <SectionLabel>PRODUCTS &amp; SUPPLY</SectionLabel>
          <h2 id="dasna-products-title">Honeycomb and Air Cooler Pads for Dasna</h2>
          <p>
            Dasna businesses and buyers can enquire about honeycomb evaporative
            cooling pads for air cooler replacements, commercial applications
            and OEM requirements. Ask about cellulose cooling media, 5090 and
            7090 flute profiles, custom dimensions and bulk quantities. Share
            the existing pad measurements so the team can confirm suitability.
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
                profiles for your Dasna requirement. Share the cooler model or
                existing pad measurements to check fit.
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
            <h2 id="dasna-order-title">Request a Cooling Pad Quote for Dasna</h2>
            <p>
              For a Dasna cooling pad enquiry, share the equipment dimensions,
              application and quantity. Coolnest Industries manufactures at
              its Hapur facility; the team can confirm product fit, pricing and
              dispatch options for your Dasna requirement.
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
        title="Need honeycomb cooling pads for Dasna?"
        text="Send your pad size, profile and quantity. Coolnest Industries will confirm product fit, pricing and dispatch availability for Dasna."
      />
    </main>
  );
}
