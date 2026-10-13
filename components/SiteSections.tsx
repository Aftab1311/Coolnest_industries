import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, Droplets, Factory, Home, Layers3, Wind } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { products } from "@/lib/products";
import { company } from "@/lib/company";

export function ProductSpotlight() {
  const points = ["Honeycomb cooling pad product family", "For evaporative cooling applications", "Custom sizes by enquiry", "Bulk quantity enquiries welcome"];
  return <section className="spotlight section-pad" id="products" aria-labelledby="spotlight-title"><div className="page-container split-layout">
    <div className="spotlight-visual"><Image src="/images/pad-product-spotlight.webp" alt="Amber honeycomb cooling pads showing their deep paper channels and water absorption" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 48vw" /></div>
    <div className="section-copy"><SectionLabel>OUR PRODUCT FOCUS</SectionLabel><h2 id="spotlight-title">Honeycomb Cooling Pads</h2><p>Coolnest Industries manufactures honeycomb cooling pads for evaporative cooling applications. Buyers can share dimensions, flute profile, quantity and application so the team can respond to the specific requirement.</p><ul className="check-list">{points.map(point => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul><div className="button-row"><Link href="/products/honeycomb-cooling-pads" className="gold-button">View Product <ArrowRight aria-hidden="true" /></Link><a href="/contact?product=honeycomb-pad#quote-form" className="text-button">Discuss Your Requirement</a></div></div>
  </div></section>;
}

export function FeaturedPads() {
  const items = [
    { number: "01", badge: "HONEYCOMB", title: "Honeycomb Cooling Pads", label: "Evaporative cooling media", description: "Honeycomb cooling pads from Coolnest Industries in Hapur, Uttar Pradesh.", image: "/images/honeycomb-cooling-pad.webp", imageWidth: 720, imageHeight: 560, alt: "Brown honeycomb cooling pad profile", href: "/products/honeycomb-cooling-pads" },
    { number: "02", badge: "AIR COOLER", title: "Air Cooler Cooling Pads", label: "Cooling pad category", description: "Share equipment and dimensions to discuss air cooler pad fit and availability.", image: "/images/air-cooler-cooling-pad.webp", imageWidth: 720, imageHeight: 560, alt: "Blue air cooler cooling pad profile", href: "/products/air-cooler-cooling-pads" },
    { number: "03", badge: "CUSTOM SIZES", title: "Custom Cooling Pad Sizes", label: "Size by enquiry", description: "Send the required height, width and thickness for a size enquiry.", image: "/images/green-cooling-pad.webp", imageWidth: 720, imageHeight: 560, alt: "Green custom colour honeycomb cooling pad", href: "/contact#quote-form" },
    { number: "04", badge: "BULK ORDERS", title: "Bulk Cooling Pad Supply", label: "Quantity by enquiry", description: "Share your product type, quantity and delivery location for a bulk enquiry.", image: "/images/cooling-pad-range.webp", imageWidth: 720, imageHeight: 560, alt: "Cooling pad range prepared for bulk supply", href: "/contact#quote-form" },
  ];

  return <section className="featured-pads section-pad" aria-labelledby="featured-pads-title"><div className="page-container"><SectionLabel centered>COOLING PAD PRODUCT RANGE</SectionLabel><h2 className="center-title" id="featured-pads-title">Products and Order Enquiries</h2><p className="center-intro">Explore product categories and order options. Confirm flute profile details with the team for your requirement.</p><div className="featured-pads-grid">{items.map((item) => <article className="featured-pad-card" key={item.title}><div className="featured-pad-image"><span className="featured-pad-number">{item.number}</span><span className="featured-pad-badge">{item.badge}</span><Image src={item.image} alt={item.alt} width={item.imageWidth} height={item.imageHeight} sizes="(max-width: 540px) 85vw, (max-width: 1050px) 50vw, 25vw" /></div><div className="featured-pad-body"><span className="featured-pad-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><Link href={item.href} className="featured-pad-action">View Details <ArrowRight aria-hidden="true" /></Link></div></article>)}</div></div></section>;
}

export function FocusBanner() {
  return <section className="focus-banner"><div className="page-container focus-grid"><p className="focus-kicker">ONE PRODUCT. DEEPER ATTENTION.</p><h2>Everything we do starts with the honeycomb pad.</h2><p>From the honeycomb structure to sizing conversations and supply support, our focus stays clear.</p><a href="/about">Why we specialise <ArrowRight aria-hidden="true" /></a></div></section>;
}

export function Applications() {
  const items = [
    { icon: Home, title: "Air Cooler Replacement", text: "For replacing worn honeycomb media in compatible evaporative air coolers." },
    { icon: Building2, title: "Air Washer Pads", text: "For air washer cooling pad enquiries; share the system and required dimensions." },
    { icon: Factory, title: "Industrial Cooling Pads", text: "For industrial cooling pad requirements; share the system and required dimensions." },
  ];
  return <section className="applications section-pad" aria-labelledby="applications-title"><div className="page-container"><SectionLabel>WHERE PADS ARE USED</SectionLabel><div className="heading-row applications-heading"><h2 id="applications-title">Cooling Media in the Real World</h2><p>From air cooler replacement to industrial and air washer applications, equipment details help clarify an enquiry.</p></div><div className="applications-showcase"><div className="applications-image"><Image src="/images/greenhouse-cooling-v2.webp" alt="Honeycomb evaporative cooling pad wall installed in a bright greenhouse" width={1536} height={984} sizes="(max-width: 800px) 100vw, 67vw" /></div><div className="applications-list">{items.map(({ icon: Icon, title, text }, index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></div></section>;
}

export function HowItWorks() {
  const steps = [
    { icon: Droplets, number: "01", title: "Water wets the media", text: "Water wets the pad media as air passes through honeycomb channels." },
    { icon: Wind, number: "02", title: "Air passes through", text: "Warm air moves through the pad’s open channels." },
    { icon: Layers3, number: "03", title: "Evaporation cools", text: "As water evaporates, the passing air becomes cooler." },
  ];
  return <section className="process section-pad" aria-labelledby="process-title"><div className="page-container"><div className="heading-row"><div><SectionLabel>THE COOLING PRINCIPLE</SectionLabel><h2 id="process-title">Simple. Natural. Effective.</h2></div><p>Honeycomb pads support the heat-and-moisture exchange at the heart of an evaporative cooler.</p></div><div className="process-grid">{steps.map(({ icon: Icon, number, title, text }) => <article key={number}><span className="step-number">{number}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

export function ProductRange() {
  return <section className="range section-pad" aria-labelledby="range-title"><div className="page-container"><SectionLabel centered>OUR PRODUCT CATEGORIES</SectionLabel><h2 className="center-title" id="range-title">Honeycomb and Air Cooler Pads</h2><p className="center-intro">Choose the cooling pad family that matches your requirement, then share the dimensions, quantity and application with our team.</p><div className="category-grid">{products.map((product, index) => <article className="category-card" id={product.id} key={product.id}><div className="category-card-image"><Image src={product.image} alt={product.imageAlt} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="category-card-copy"><span className="category-index">0{index + 1} / 02</span><h3>{product.name}</h3><p>{product.description}</p><ul>{product.details.slice(0, 2).map(detail => <li key={detail}><Check aria-hidden="true" />{detail}</li>)}</ul><Link href={`/products/${product.slug}`} className="text-button">Product information <ArrowRight aria-hidden="true" /></Link><Link href={`/contact?product=${product.id}#quote-form`} className="text-button">Request this category <ArrowRight aria-hidden="true" /></Link></div></article>)}</div><div id="flute-profiles" className="flute-profile-note"><h3>Listed flute profiles</h3><p>Coolnest Industries lists 5090 and 7090 flute cooling pads. Contact the team to confirm dimensions, technical specifications and availability for your requirement.</p><Link href="/contact#quote-form" className="text-button">Ask about a flute profile <ArrowRight aria-hidden="true" /></Link></div></div></section>;
}

export function ProductSpecs() {
  return <section className="specs section-pad" aria-labelledby="specs-title"><div className="page-container"><SectionLabel centered>PRODUCT INFORMATION</SectionLabel><h2 className="center-title" id="specs-title">Confirm Sizes and Profiles by Enquiry</h2><p className="center-intro">Pad height, width, thickness and flute profile can be discussed for the application you are sourcing for.</p><div className="specs-grid">{products.map(product => <article key={product.id}><div className="specs-heading"><h3>{product.name}</h3><span>Available by enquiry</span></div><dl>{product.specs.map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></article>)}</div></div></section>;
}

export function FoundersSpotlight() {
  return (
    <section className="founders-section section-pad" aria-labelledby="founders-title">
      <div className="page-container">
        <SectionLabel centered>FOUNDERS &amp; LEADERSHIP</SectionLabel>
        <h2 className="center-title" id="founders-title">
          The Founders of <span>Coolnest Industries</span>
        </h2>
        <p className="center-intro wide">
          Coolnest Industries was established in 2026 by Mohd Imran and Abu Lais.
        </p>

        <div className="founders-grid">
          {company.founders.map((name) => (
            <article className="founder-card" key={name}>
              <div className="founder-header">
                <div className="founder-avatar" aria-hidden="true">
                  {name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div className="founder-meta">
                  <span className="founder-role-badge">Founder</span>
                  <h3>{name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyProfile() {
  return (
    <section className="company-profile section-pad" aria-labelledby="company-profile-title">
      <div className="page-container">
        <div className="company-profile-heading">
          <div>
            <SectionLabel>MANUFACTURING LOCATION</SectionLabel>
            <h2 id="company-profile-title">Manufacturing in Hapur.<br /><span>Cooling Pad Specialists.</span></h2>
          </div>
          <p>
            Coolnest Industries was established in {company.founded} by {company.founders.join(" and ")}. The company manufactures honeycomb cooling pads at F-720, MG Road Industrial Area, Hapur, Uttar Pradesh. Product enquiries include air cooler, evaporative and industrial cooling pads, listed flute profiles, and custom sizes.
          </p>
        </div>

        <div className="company-profile-main">
    <div className="company-profile-visual">
            <Image
              src="/images/pad-workshop-check.webp"
              alt="Cooling pad sheets being checked and stacked in a workshop setting"
              fill
              sizes="(max-width: 800px) 100vw, 42vw"
            />
            <div className="company-profile-image-note">
              <span>EST. {company.founded} · HAPUR, UTTAR PRADESH</span>
              <strong>Honeycomb Cooling Pad Manufacturer.<br />Hapur, India.</strong>
            </div>
          </div>

          <div className="company-profile-principles">
            <article>
              <span>01 / MANUFACTURING LOCATION</span>
              <h3>Hapur, Uttar Pradesh</h3>
              <p>Coolnest Industries manufactures honeycomb cooling pads at {company.address}.</p>
            </article>
            <article>
              <span>02 / ORDER ENQUIRIES</span>
              <h3>Bulk and custom-size requirements</h3>
              <p>Share the cooling pad type, dimensions, flute profile, quantity and application to discuss your order.</p>
            </article>
          </div>
        </div>

        <div className="company-profile-strengths-wrap">
          <div className="company-profile-strengths-heading">
            <span>PRODUCT SCOPE</span>
            <h3>Cooling pads and flute profiles</h3>
          </div>
          <ul className="company-profile-strengths">
            {["Honeycomb cooling pads", "Air cooler cooling pads", "Industrial and air washer pads", "Cellulose cooling pads", "5090 and 7090 flute profiles", "Custom sizes and bulk enquiries"].map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, accent, text }: { eyebrow: string; title: string; accent?: string; text: string }) {
  const visual = eyebrow.includes("ABOUT")
    ? { src: "/images/pad-about-workshop.webp", alt: "Honeycomb cooling pads arranged in a workshop" }
    : eyebrow === "COOLING WITH A NATURAL PRINCIPLE"
      ? { src: "/images/pad-greenhouse-evaporation.webp", alt: "Water wetting a honeycomb cooling pad beside greenhouse plants" }
      : eyebrow === "CONTACT COOLNEST"
        ? { src: "/images/pad-custom-enquiry.webp", alt: "Honeycomb cooling pad samples beside a measuring tape and notebook" }
        : { src: "/images/pad-product-lineup.webp", alt: "Three honeycomb air cooler cooling pads displayed together" };
  return <section className="page-hero"><div className="page-container page-hero-inner"><div><p className="hero-eyebrow">{eyebrow}</p><h1>{title} {accent && <span>{accent}</span>}</h1><p>{text}</p></div><div className="page-hero-art"><Image src={visual.src} alt={visual.alt} width={1536} height={1024} fetchPriority="high" sizes="(max-width: 800px) 100vw, 44vw" /></div></div></section>;
}

export function QualitySection() {
  const items = ["Product type or flute profile", "Required height, width and thickness", "Quantity and delivery location", "Equipment or application details"];
  return <section className="quality section-pad"><div className="page-container split-layout"><div className="section-copy"><SectionLabel>BUYER INFORMATION</SectionLabel><h2>Prepare a Clear Pad Enquiry</h2><p>Cooling pad fit and specification depend on the equipment and application. Share these details so Coolnest Industries can respond to the requirement you have.</p><ul className="check-list">{items.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div><div className="quality-image"><Image src="/images/pad-quality-measurement.webp" alt="Gloved hands measuring the thickness of honeycomb cooling media" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 48vw" /></div></div></section>;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return <section className="faq section-pad" aria-labelledby="faq-title"><div className="page-container narrow"><SectionLabel centered>GOOD TO KNOW</SectionLabel><h2 className="center-title" id="faq-title">Frequently Asked Questions</h2><div className="faq-list">{items.map(({ q, a }) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>;
}

export function CtaBand({ title = "Tell us the pad size you need.", text = "Share your dimensions, quantity and application. We’ll prepare an enquiry you can send to the Coolnest team." }: { title?: string; text?: string }) {
  return <section className="cta-band"><div className="page-container"><div><p>READY TO TALK?</p><h2>{title}</h2><span>{text}</span></div><a href="/contact?product=honeycomb-pad#quote-form" className="light-button">Request a Quote <ArrowRight aria-hidden="true" /></a></div></section>;
}
