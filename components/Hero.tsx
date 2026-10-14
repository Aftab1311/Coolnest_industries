import Image from "next/image";

export default function Hero() {
  const proof = [
    { value: "5–7 mm", label: "Flute profile" },
    { value: "Custom", label: "Sizes & colours" },
    { value: "Bulk", label: "OEM ready" },
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
            <span className="hero-title-primary">Honeycomb Cooling Pads</span>
            <span className="hero-title-accent">Built for Better Air.</span>
          </h1>
          <p className="hero-description">High-performance cooling media made with imported raw materials for strong water absorption, dependable airflow and lasting structure.</p>
          <div className="hero-actions">
            <a className="gold-button" href="/products">Explore Cooling Pads</a>
            <a className="outline-button" href="/contact#quote-form">Get a Custom Quote</a>
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
