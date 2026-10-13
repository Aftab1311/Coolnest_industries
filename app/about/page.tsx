import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Layers, ShieldCheck, Truck } from "lucide-react";
import { CompanyProfile, CtaBand, FoundersSpotlight, PageHero } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import Breadcrumbs from "@/components/Breadcrumbs";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About the Hapur Cooling Pad Manufacturer",
  description: "Meet Coolnest Industries, a honeycomb cooling pad manufacturer in Hapur, Uttar Pradesh, founded in 2026 by Mohd Imran and Abu Lais.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="ABOUT COOLNEST INDUSTRIES"
        title="Honeycomb Cooling Pad"
        accent="Manufacturer in Hapur"
        text="Coolnest Industries manufactures honeycomb cooling pads in Hapur, Uttar Pradesh. Founded in 2026 by Mohd Imran and Abu Lais."
      />

      <section className="story section-pad" aria-labelledby="story-title">
        <div className="page-container split-layout">
          <div className="story-image">
            <Image src="/images/coolnest-interior.png" alt="Coolnest Industries corporate emblem and interior" width={1066} height={720} />
          </div>
          <div className="section-copy">
            <SectionLabel>OUR STORY &amp; IDENTITY</SectionLabel>
            <h2 id="story-title">Coolnest Industries</h2>
            <p>
              Coolnest Industries is a cooling pad manufacturer at F-720, MG Road Industrial Area, Hapur, Uttar Pradesh (GST: {company.gst}). The company was established in {company.founded} by {company.founders.join(" and ")}.
            </p>
            <p>
              Product enquiries include honeycomb, air cooler, evaporative, industrial, cellulose and air washer cooling pads, as well as 5090 and 7090 flute profiles. Share dimensions, application and quantity so the team can confirm the technical details for your order.
            </p>
            <div className="story-badges">
              <div className="story-badge"><Factory aria-hidden="true" /><span>Hapur Manufacturing</span></div>
              <div className="story-badge"><Layers aria-hidden="true" /><span>Custom Sizes by Enquiry</span></div>
              <div className="story-badge"><ShieldCheck aria-hidden="true" /><span>GST: {company.gst}</span></div>
              <div className="story-badge"><Truck aria-hidden="true" /><span>Bulk Order Enquiries</span></div>
            </div>
          </div>
        </div>
      </section>

      <FoundersSpotlight />
      <CompanyProfile />

      <section className="values section-pad" aria-labelledby="values-title">
        <div className="page-container">
          <SectionLabel centered>PRODUCT ENQUIRIES</SectionLabel>
          <h2 className="center-title" id="values-title">Share the Details for Your Order</h2>
          <p className="center-intro">The size, profile and application help identify the cooling pad requirement.</p>
          <div className="feature-cards">
            <article>
              <span className="feature-number"><Layers aria-hidden="true" /></span>
              <h3>Dimensions &amp; Profile</h3>
              <p>Share the required height, width, thickness and flute profile.</p>
            </article>
            <article>
              <span className="feature-number"><ShieldCheck aria-hidden="true" /></span>
              <h3>Product Application</h3>
              <p>Tell the team if the pad is for an air cooler, air washer or another application.</p>
            </article>
            <article>
              <span className="feature-number"><Truck aria-hidden="true" /></span>
              <h3>Quantity &amp; Location</h3>
              <p>Include order quantity and delivery location when asking about bulk supply.</p>
            </article>
          </div>
        </div>
      </section>
      <CtaBand title="Discuss your cooling pad requirement" />
    </main>
  );
}
