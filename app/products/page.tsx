import { pageMetadata } from "@/lib/seo";
import { CtaBand, Faq, PageHero, ProductRange, ProductSpecs, ProductSpotlight, QualitySection } from "@/components/SiteSections";
import { HowItWorks } from "@/components/SiteSections";

export const metadata = pageMetadata({ title: "Honeycomb & Air Cooler Cooling Pads", description: "Explore honeycomb and air cooler cooling pads from Coolnest Industries in Hapur. Ask about 5090 and 7090 flute profiles, custom sizes and bulk requirements.", path: "/products" });
const faqs = [
  { q: "What information should I include in an enquiry?", a: "Please share the pad height, width and thickness you need, the required quantity, and the cooler or application it will be used for." },
  { q: "Can I enquire for replacement cooling pads?", a: "Yes. Share the existing pad dimensions and, if possible, details of the compatible cooler so the requirement is clear." },
  { q: "Do you sell other cooler components?", a: "No. CoolNest Industries focuses only on honeycomb evaporative cooling pads." },
  { q: "How do honeycomb cooling pads work?", a: "Water wets the absorbent paper media while warm air passes through its channels. Evaporation removes heat from the passing air." },
];

export default function ProductsPage() { return <main id="main"><PageHero eyebrow="HONEYCOMB COOLING PADS" title="The Cooling Media at the" accent="Heart of the Cooler" text="Two focused pad categories made for air coolers and evaporative cooling applications." /><ProductSpotlight /><ProductRange /><ProductSpecs /><QualitySection /><HowItWorks /><div id="faq"><Faq items={faqs} /></div><CtaBand /></main>; }
