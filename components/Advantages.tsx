import { Building2, Check, Droplets, Factory, Layers3, Wind } from "lucide-react";
import SectionLabel from "./SectionLabel";

const productScope = [
  { icon: Layers3, title: "Honeycomb Cooling Pads", description: "The core product family for evaporative cooling applications." },
  { icon: Wind, title: "Air Cooler Pads", description: "Cooling pads for air cooler requirements and replacements." },
  { icon: Factory, title: "Industrial & Air Washer Pads", description: "Enquire about pads for industrial and air washer applications." },
  { icon: Droplets, title: "5090 & 7090 Flute Profiles", description: "Ask the team to confirm dimensions and specifications for your order." },
  { icon: Building2, title: "Cellulose Cooling Pads", description: "Share the media and equipment details for a product enquiry." },
  { icon: Check, title: "Custom Sizes & Bulk Enquiries", description: "Send the dimensions and quantity so the team can confirm the requirement." },
];

export default function Advantages() {
  return (
    <section className="advantages-section" aria-labelledby="advantages-title">
      <div className="page-container">
        <SectionLabel centered>COOLNEST PRODUCT SCOPE</SectionLabel>
        <h2 id="advantages-title">Cooling Pad Products and Profiles</h2>
        <p className="advantages-subtitle">Share your application, dimensions and quantity with Coolnest Industries in Hapur.</p>
        <div className="advantages-grid">
          {productScope.map(({ icon: Icon, title, description }) => (
            <article className="advantage" key={title}>
              <span className="outline-icon"><Icon aria-hidden="true" strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
