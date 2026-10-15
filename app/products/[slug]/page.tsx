import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

type RouteProps = { params: Promise<{ slug: string }> };

function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};

  const title = `${product.shortName} Manufacturer in Hapur`;
  const description = product.id === "honeycomb-pad"
    ? "Enquire about honeycomb evaporative cooling pads manufactured by Coolnest Industries in Hapur, Uttar Pradesh. Share your size, flute profile and quantity."
    : "Enquire about air cooler cooling pads from Coolnest Industries in Hapur, Uttar Pradesh. Share your dimensions, application and quantity for a response.";

  return pageMetadata({ title, description, path: `/products/${product.slug}`, image: product.image });
}

export default async function ProductPage({ params }: RouteProps) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const otherProduct = products.find((candidate) => candidate.id !== product.id);
  const pagePath = `/products/${product.slug}`;

  return <main id="main">
    <Breadcrumbs items={[
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: product.name, path: pagePath },
    ]} />
    <section className="product-detail section-pad">
      <div className="page-container product-detail-grid">
        <div className="product-detail-image">
          <Image src={product.image} alt={product.imageAlt} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 800px) 100vw, 48vw" priority />
        </div>
        <div className="product-detail-copy">
          <SectionLabel>COOLNEST INDUSTRIES · HAPUR, UTTAR PRADESH</SectionLabel>
          <h1>{product.shortName} Manufacturer in Hapur</h1>
          <p>{product.description} Coolnest Industries manufactures cooling pads in Hapur, Uttar Pradesh. Contact the team to discuss a product and order requirement.</p>
          <ul className="check-list">
            {product.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <a className="gold-button" href={`/contact?product=${product.id}#quote-form`}>Enquire about this cooling pad</a>
        </div>
      </div>
    </section>

    <section className="product-information section-pad" aria-labelledby="product-specifications-title">
      <div className="page-container product-information-grid">
        <div>
          <SectionLabel>PRODUCT INFORMATION</SectionLabel>
          <h2 id="product-specifications-title">Share your fit and order details</h2>
          <p>Cooling pad requirements depend on the equipment and application. Send the required height, width, thickness, flute profile, quantity and application so the team can respond to the specific requirement.</p>
          <p>For a bulk enquiry, include the expected order quantity and delivery destination. Confirm final dimensions, material and availability with Coolnest Industries before placing an order.</p>
          {otherProduct && <p>Also see <Link className="text-button" href={`/products/${otherProduct.slug}`}>{otherProduct.name.toLowerCase()}</Link>.</p>}
          <Link className="text-button" href="/products">View all cooling pad categories</Link>
        </div>
        <dl className="product-spec-list">
          {product.specs.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>

    <section className="product-faq section-pad" aria-labelledby="product-faq-title">
      <div className="page-container narrow">
        <SectionLabel centered>BUYER QUESTIONS</SectionLabel>
        <h2 className="center-title" id="product-faq-title">Enquiring about {product.shortName.toLowerCase()}s</h2>
        <div className="faq-list">
          <details><summary>What should I include in a product enquiry?<span>+</span></summary><p>Share the dimensions, flute profile if known, quantity, application and delivery location. A photo of the current pad or equipment can help clarify a replacement requirement.</p></details>
          <details><summary>Can I ask about a custom size or bulk quantity?<span>+</span></summary><p>Yes. Send your dimensions and quantity to the team for confirmation of fit and availability.</p></details>
          <details><summary>Does the page list every technical specification?<span>+</span></summary><p>No. Confirm the exact material, dimensions, profile and other technical requirements with Coolnest Industries before ordering.</p></details>
        </div>
      </div>
    </section>
    <CtaBand title={`Enquire about ${product.shortName.toLowerCase()}s`} text="Send dimensions, flute profile, quantity and application to the Coolnest Industries team." />
  </main>;
}
