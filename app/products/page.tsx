import { CtaBand, Faq, PageHero, ProductRange, ProductSpecs, ProductSpotlight, QualitySection } from "@/components/SiteSections";
import { HowItWorks } from "@/components/SiteSections";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Honeycomb & Air Cooler Cooling Pads", description: "Explore honeycomb and air cooler cooling pads from Coolnest Industries in Hapur. Ask about 5090 and 7090 flute profiles, custom sizes and bulk requirements.", path: "/products" });
const faqs = [
  { q: "What information should I include in an enquiry?", a: "Please share the pad height, width and thickness you need, the required quantity, and the cooler or application it will be used for." },
  { q: "Can I enquire for replacement cooling pads?", a: "Yes. Share the existing pad dimensions and, if possible, details of the compatible cooler so the requirement is clear." },
  { q: "Do you sell other cooler components?", a: "Coolnest Industries focuses on cooling pads. Contact the team about the product type and application you need." },
  { q: "How do honeycomb cooling pads work?", a: "Water wets the pad media while warm air passes through its channels. Evaporation removes heat from the passing air." },
];

export default function ProductsPage() { return <main id="main"><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]} /><PageHero eyebrow="HONEYCOMB COOLING PADS" title="Cooling Pads for" accent="Evaporative Applications" text="Explore Coolnest Industries honeycomb and air cooler cooling pads. Contact the Hapur team to discuss dimensions, flute profiles, quantity and application." /><ProductSpotlight /><ProductRange /><ProductSpecs /><QualitySection /><HowItWorks /><div id="faq"><Faq items={faqs} /></div><CtaBand /></main>; }
