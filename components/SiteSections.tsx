import Image from "next/image";
import { ArrowRight, Building2, Check, Droplets, Factory, Home, Layers3, Wind } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { products } from "@/lib/products";
import { company } from "@/lib/company";

export function ProductSpotlight() {
  const points = ["Treated water-absorbing paper", "Structured honeycomb channels", "Made for evaporative coolers", "Dimensions and quantity by enquiry"];
  return <section className="spotlight section-pad" id="products" aria-labelledby="spotlight-title"><div className="page-container split-layout">
    <div className="spotlight-visual"><Image src="/images/pad-product-spotlight.webp" alt="Amber honeycomb cooling pads showing their deep paper channels and water absorption" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 48vw" /></div>
    <div className="section-copy"><SectionLabel>OUR ONLY PRODUCT</SectionLabel><h2 id="spotlight-title">Honeycomb Cooling Pads</h2><p>Evaporative cooling depends on the media at its core. CoolNest pads create a broad wetted surface through their honeycomb channels, helping air meet water across the pad as it moves through a cooler.</p><ul className="check-list">{points.map(point => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul><div className="button-row"><a href="/products#honeycomb-pad" className="gold-button">View Product <ArrowRight aria-hidden="true" /></a><a href="/contact?product=honeycomb-pad#quote-form" className="text-button">Discuss Your Requirement</a></div></div>
  </div></section>;
}

export function FeaturedPads() {
  const items = [
    { number: "01", badge: "MOST POPULAR", title: "Honeycomb Cooling Pad", label: "Natural kraft profile", description: "High water absorption, natural kraft material for efficient and long-lasting cooling performance.", image: "/images/honeycomb-cooling-pad.webp", alt: "Brown honeycomb cooling pad profile", productId: "honeycomb-pad" as const },
    { number: "02", badge: "WIDE APPLICATION", title: "Air Cooler Cooling Pad", label: "Blue profile option", description: "Designed for air coolers with dependable water absorption, cooling efficiency and consistent airflow.", image: "/images/air-cooler-cooling-pad.webp", alt: "Blue air cooler cooling pad profile", productId: "air-cooler-pad" as const },
    { number: "03", badge: "CUSTOM COLOURS", title: "Custom Colour Pads", label: "Made to specification", description: "Available in multiple colours and sizes to match your specific cooling and design requirements.", image: "/images/green-cooling-pad.webp", alt: "Green custom colour honeycomb cooling pad", productId: undefined },
    { number: "04", badge: "BULK / OEM", title: "Bulk / OEM Pad Range", label: "Ready for larger requirements", description: "Custom dimensions, thickness and colours available for bulk orders and OEM requirements.", image: "/images/cooling-pad-range.webp", alt: "Cooling pad range prepared for bulk supply", productId: undefined },
  ];

  return <section className="featured-pads section-pad" aria-labelledby="featured-pads-title"><div className="page-container"><SectionLabel centered>FEATURED COOLING PADS</SectionLabel><h2 className="center-title" id="featured-pads-title">Our Best-Selling Pad Profiles</h2><p className="center-intro">Choose a pad profile to explore, then share your required dimensions and quantity with our team.</p><div className="featured-pads-grid">{items.map((item) => <article className="featured-pad-card" key={item.title}><div className="featured-pad-image"><span className="featured-pad-number">{item.number}</span><span className="featured-pad-badge">{item.badge}</span><Image src={item.image} alt={item.alt} width={720} height={560} sizes="(max-width: 540px) 85vw, (max-width: 1050px) 50vw, 25vw" /></div><div className="featured-pad-body"><span className="featured-pad-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><a href={item.productId ? `/products#${item.productId}` : "/contact#quote-form"} className="featured-pad-action">View Details <ArrowRight aria-hidden="true" /></a></div></article>)}</div></div></section>;
}

export function FocusBanner() {
  return <section className="focus-banner"><div className="page-container focus-grid"><p className="focus-kicker">ONE PRODUCT. DEEPER ATTENTION.</p><h2>Everything we do starts with the honeycomb pad.</h2><p>From paper absorption and channel formation to sizing conversations and supply support, our focus stays clear.</p><a href="/about">Why we specialise <ArrowRight aria-hidden="true" /></a></div></section>;
}

export function Applications() {
  const items = [
    { icon: Home, title: "Air Cooler Replacement", text: "For replacing worn honeycomb media in compatible evaporative air coolers." },
    { icon: Building2, title: "Commercial Cooling", text: "For buyers sourcing cooling media for larger evaporative cooling requirements." },
    { icon: Factory, title: "OEM & Project Supply", text: "For manufacturers and project teams who can share dimensions, volume and application." },
  ];
  return <section className="applications section-pad" aria-labelledby="applications-title"><div className="page-container"><SectionLabel>WHERE PADS ARE USED</SectionLabel><div className="heading-row applications-heading"><h2 id="applications-title">Cooling Media in the Real World</h2><p>From replacement needs to larger growing and commercial environments, the application defines the requirement.</p></div><div className="applications-showcase"><div className="applications-image"><Image src="/images/greenhouse-cooling-v2.webp" alt="Honeycomb evaporative cooling pad wall installed in a bright greenhouse" width={1536} height={984} sizes="(max-width: 800px) 100vw, 67vw" /></div><div className="applications-list">{items.map(({ icon: Icon, title, text }, index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></div></section>;
}

export function HowItWorks() {
  const steps = [
    { icon: Droplets, number: "01", title: "Water wets the media", text: "Water is distributed over the absorbent honeycomb pad." },
    { icon: Wind, number: "02", title: "Air passes through", text: "Warm air moves through the pad’s open channels." },
    { icon: Layers3, number: "03", title: "Evaporation cools", text: "As water evaporates, the passing air becomes cooler." },
  ];
  return <section className="process section-pad" aria-labelledby="process-title"><div className="page-container"><div className="heading-row"><div><SectionLabel>THE COOLING PRINCIPLE</SectionLabel><h2 id="process-title">Simple. Natural. Effective.</h2></div><p>Honeycomb pads support the heat-and-moisture exchange at the heart of an evaporative cooler.</p></div><div className="process-grid">{steps.map(({ icon: Icon, number, title, text }) => <article key={number}><span className="step-number">{number}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

export function ProductRange() {
  return <section className="range section-pad" aria-labelledby="range-title"><div className="page-container"><SectionLabel centered>OUR PRODUCT CATEGORIES</SectionLabel><h2 className="center-title" id="range-title">Two Pad Categories. One Reliable Focus.</h2><p className="center-intro">Choose the cooling pad family that matches your requirement, then share the dimensions, quantity and application with our team.</p><div className="category-grid">{products.map((product, index) => <article className="category-card" id={product.id} key={product.id}><div className="category-card-image"><Image src={product.image} alt={product.imageAlt} width={900} height={620} sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="category-card-copy"><span className="category-index">0{index + 1} / 02</span><h3>{product.name}</h3><p>{product.description}</p><ul>{product.details.slice(0, 2).map(detail => <li key={detail}><Check aria-hidden="true" />{detail}</li>)}</ul><a href={`/contact?product=${product.id}#quote-form`} className="text-button">Request this category <ArrowRight aria-hidden="true" /></a></div></article>)}</div></div></section>;
}

export function ProductSpecs() {
  return <section className="specs section-pad" aria-labelledby="specs-title"><div className="page-container"><SectionLabel centered>PRODUCT SPECIFICATIONS</SectionLabel><h2 className="center-title" id="specs-title">Made to Your Requirement</h2><p className="center-intro">Pad height, width, thickness and colour can be discussed for the application you are sourcing for.</p><div className="specs-grid">{products.map(product => <article key={product.id}><div className="specs-heading"><h3>{product.name}</h3><span>Available by enquiry</span></div><dl>{product.specs.map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></article>)}</div></div></section>;
}

export function FoundersSpotlight() {
  return (
    <section className="founders-section section-pad" aria-labelledby="founders-title">
      <div className="page-container">
        <SectionLabel centered>FOUNDERS &amp; LEADERSHIP</SectionLabel>
        <h2 className="center-title" id="founders-title">
          The Leadership Behind <span>Coolnest Industries</span>
        </h2>
        <p className="center-intro wide">
          Established in 2026 by Mohd Imran and Abu Lais, Coolnest Industries unites hands-on manufacturing expertise with dedicated client service, ensuring every cooling pad is engineered to uncompromising industrial standards.
        </p>

        <div className="founders-grid">
          {company.foundersDetail.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-header">
                <div className="founder-avatar" aria-hidden="true">
                  {founder.initials}
                </div>
                <div className="founder-meta">
                  <span className="founder-role-badge">{founder.role}</span>
                  <h3>{founder.name}</h3>
                  <div className="founder-focus-pill">{founder.focus}</div>
                </div>
              </div>
              <p className="founder-bio">{founder.bio}</p>
              <blockquote className="founder-quote">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <div className="founders-commitment">
          <div className="founders-commitment-copy">
            <span className="commitment-kicker">OUR JOINT COMMITMENT</span>
            <h3>Direct Accountability From Factory Floor to Delivery</h3>
            <p>
              &ldquo;When you connect with Coolnest Industries, you are speaking directly with the founders who engineer the pads, supervise the resin and flute forming processes, and ensure your specifications are matched with absolute precision.&rdquo;
            </p>
          </div>
          <div className="founders-commitment-sign">
            <strong>Mohd Imran &amp; Abu Lais</strong>
            <span>Co-Founders &amp; Directors</span>
            <em>Hapur, Uttar Pradesh</em>
          </div>
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
            <SectionLabel>MANUFACTURING EXCELLENCE</SectionLabel>
            <h2 id="company-profile-title">Engineered in Hapur.<br /><span>Built For High Performance.</span></h2>
          </div>
          <p>
            Coolnest Industries is a specialized Indian manufacturing enterprise established in {company.founded} by {company.founders.join(" and ")}. Operating with registered GST compliance ({company.gst}) at F-720, MG Road Industrial Area, Hapur, Uttar Pradesh, we focus 100% of our production on high-grade honeycomb evaporative cooling media with proven water absorption and long-term structural durability.
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
              <span>EST. {company.founded} · HAPUR INDUSTRIAL AREA</span>
              <strong>Dedicated Manufacturing.<br />Nationwide &amp; Export Supply.</strong>
            </div>
          </div>

          <div className="company-profile-principles">
            <article>
              <span>01 / OUR MISSION</span>
              <h3>Quality that earns trust.</h3>
              <p>{company.mission}</p>
            </article>
            <article>
              <span>02 / OUR VISION</span>
              <h3>Leading India&apos;s cooling media market.</h3>
              <p>{company.vision}</p>
            </article>
          </div>
        </div>

        <div className="company-profile-strengths-wrap">
          <div className="company-profile-strengths-heading">
            <span>THE COOLNEST ADVANTAGE</span>
            <h3>Built around your requirement.</h3>
          </div>
          <ul className="company-profile-strengths">
            {company.usp.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}
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
  const items = ["Paper selection suited to water absorption", "Consistent honeycomb channel formation", "Attention to pad shape and handling", "Requirement-led sizing discussion"];
  return <section className="quality section-pad"><div className="page-container split-layout"><div className="section-copy"><SectionLabel>OUR APPROACH</SectionLabel><h2>Quality Starts With the Media</h2><p>A cooling pad is more than folded paper. Its ability to hold water, keep its structure and allow air to pass through all influence the cooler experience. Those fundamentals guide our product focus.</p><ul className="check-list">{items.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div><div className="quality-image"><Image src="/images/pad-quality-measurement.webp" alt="Gloved hands measuring the thickness of honeycomb cooling media" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 48vw" /></div></div></section>;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return <section className="faq section-pad" aria-labelledby="faq-title"><div className="page-container narrow"><SectionLabel centered>GOOD TO KNOW</SectionLabel><h2 className="center-title" id="faq-title">Frequently Asked Questions</h2><div className="faq-list">{items.map(({ q, a }) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>;
}

export function CtaBand({ title = "Tell us the pad size you need.", text = "Share your dimensions, quantity and application. We’ll prepare an enquiry you can send to the CoolNest team." }: { title?: string; text?: string }) {
  return <section className="cta-band"><div className="page-container"><div><p>READY TO TALK?</p><h2>{title}</h2><span>{text}</span></div><a href="/contact?product=honeycomb-pad#quote-form" className="light-button">Request a Quote <ArrowRight aria-hidden="true" /></a></div></section>;
}
