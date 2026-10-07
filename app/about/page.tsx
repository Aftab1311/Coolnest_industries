import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Layers, ShieldCheck, Truck } from "lucide-react";
import { CompanyProfile, CtaBand, FoundersSpotlight, PageHero } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us | Coolnest Industries",
  description: "Learn about Coolnest Industries, India's dedicated honeycomb cooling pad manufacturer in Hapur, Uttar Pradesh, founded by Mohd Imran and Abu Lais.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="ABOUT COOLNEST INDUSTRIES"
        title="Dedicated Manufacturers of"
        accent="Honeycomb Cooling Pads"
        text="Headquartered in Hapur, Uttar Pradesh, Coolnest Industries specializes exclusively in engineering high-performance honeycomb evaporative cooling media—built with treated water-absorbent paper for superior airflow, structural longevity, and reliable cooler performance."
      />

      <section className="story section-pad" aria-labelledby="story-title">
        <div className="page-container split-layout">
          <div className="story-image">
            <Image
              src="/images/coolnest-interior.png"
              alt="Coolnest Industries corporate emblem and interior"
              width={766}
              height={430}
            />
          </div>
          <div className="section-copy">
            <SectionLabel>OUR STORY &amp; IDENTITY</SectionLabel>
            <h2 id="story-title">100% Focused on Honeycomb Cooling Media</h2>
            <p>
              Coolnest Industries is a dedicated manufacturing enterprise located at F-720, MG Road Industrial Area, Hapur, Uttar Pradesh (GST: {company.gst}). Unlike generic traders or broad assemblers, we concentrate 100% of our production, engineering, and testing on one essential component: Honeycomb Cooling Pads.
            </p>
            <p>
              Founded by Mohd Imran and Abu Lais, our company was built to solve a key industry challenge: delivering consistently dense, sag-resistant, and high-absorption cooling media. By utilizing imported raw materials and precision flute forming (5 mm to 7 mm), our pads maximize water-to-air evaporation while maintaining low pressure drop.
            </p>
            <p>
              From custom-dimension replacements for residential and commercial coolers to large-scale bulk OEM contracts, Coolnest Industries stands for direct factory pricing, reliable supply, and personal accountability.
            </p>
            <div className="story-badges">
              <div className="story-badge"><Factory aria-hidden="true" /><span>Hapur Industrial Facility</span></div>
              <div className="story-badge"><Layers aria-hidden="true" /><span>5 mm to 7 mm Flute Profiles</span></div>
              <div className="story-badge"><ShieldCheck aria-hidden="true" /><span>Registered GST: {company.gst}</span></div>
              <div className="story-badge"><Truck aria-hidden="true" /><span>Pan-India &amp; Export Supply</span></div>
            </div>
          </div>
        </div>
      </section>

      <FoundersSpotlight />

      <CompanyProfile />

      <section className="values section-pad" aria-labelledby="values-title">
        <div className="page-container">
          <SectionLabel centered>HOW WE OPERATE</SectionLabel>
          <h2 className="center-title" id="values-title">From Factory Floor to Your Facility</h2>
          <p className="center-intro">
            We keep the supply process clear, technically accurate, and responsive from your first enquiry to final dispatch.
          </p>
          <div className="feature-cards">
            <article>
              <span className="feature-number"><Layers aria-hidden="true" /></span>
              <h3>Custom Sizing &amp; Flute Profile</h3>
              <p>We match your exact height, width, thickness, and 5mm–7mm flute requirement for seamless equipment compatibility.</p>
            </article>
            <article>
              <span className="feature-number"><ShieldCheck aria-hidden="true" /></span>
              <h3>Rigorous Batch Quality Checks</h3>
              <p>Every stack of cooling media is inspected for paper saturation rate, resin curing uniformity, and structural rigidity.</p>
            </article>
            <article>
              <span className="feature-number"><Truck aria-hidden="true" /></span>
              <h3>Direct &amp; Dependable Dispatch</h3>
              <p>Direct communication with the founders ensures priority production scheduling, secure packaging, and on-time shipment.</p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to partner with India's cooling pad specialists?" />
    </main>
  );
}
