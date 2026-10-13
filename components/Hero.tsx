import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const proof = [
    { value: "Custom", label: "Sizes by enquiry" },
    { value: "Bulk", label: "Order enquiries" },
    { value: "Hapur", label: "Uttar Pradesh" },
  ];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero-honeycomb-v2.webp"
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className="page-container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">COOLNEST INDUSTRIES <span>•</span> HAPUR, INDIA</p>
          <h1 id="hero-title">
            <span className="hero-title-primary">Honeycomb Cooling Pad</span>
            <span className="hero-title-accent">Manufacturer in Hapur</span>
          </h1>
          <p className="hero-description">Coolnest Industries manufactures honeycomb evaporative cooling pads in Hapur, Uttar Pradesh. Share the required size, flute profile, quantity and application for an enquiry.</p>
          <div className="hero-actions">
            <Link className="gold-button" href="/products">Explore Cooling Pads</Link>
            <Link className="outline-button" href="/contact#quote-form">Get a Custom Quote</Link>
          </div>
          <div className="hero-proof" role="list" aria-label="Product highlights">
            {proof.map((item) => <div role="listitem" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-tag"><span>ENGINEERED COOLING MEDIA</span><strong>High absorption.<br />Consistent airflow.</strong></div>
        </div>
      </div>
    </section>
  );
}
