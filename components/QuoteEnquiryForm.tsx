"use client";

import { CheckCircle2, Download } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

const productNames = {
  "honeycomb-pad": "Honeycomb Cooling Pad",
  "air-cooler-pad": "Air Cooler Cooling Pad",
} as const;

type ProductId = keyof typeof productNames;

export default function QuoteEnquiryForm() {
  const [product, setProduct] = useState<ProductId>("honeycomb-pad");
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    const requestedProduct = new URLSearchParams(window.location.search).get("product");
    if (requestedProduct === "honeycomb-pad" || requestedProduct === "air-cooler-pad") setProduct(requestedProduct);
  }, []);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "COOLNEST INDUSTRIES — QUOTE ENQUIRY",
      "",
      `Product: ${productNames[data.get("product") as ProductId]}`,
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Application: ${data.get("application")}`,
      `Required dimensions: ${data.get("dimensions")}`,
      `Quantity: ${data.get("quantity")}`,
      `Additional requirements: ${data.get("message") || "None"}`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "coolnest-quote-enquiry.txt";
    link.click();
    URL.revokeObjectURL(link.href);
    setPrepared(true);
  }

  return (
    <div className="contact-quote-panel">
      <p className="section-label">REQUEST A QUOTE</p>
      <h2 id="quote-form-title">Tell Us What You Need</h2>
      <p>Share the pad details you need. We’ll prepare a clear enquiry file for you to review and send to our team.</p>

      <form className="enquiry-form contact-enquiry-form" onSubmit={prepareEnquiry} aria-labelledby="quote-form-title">
        <div className="enquiry-row">
          <label htmlFor="quote-name">Your name <span>*</span><input id="quote-name" name="name" autoComplete="name" required /></label>
          <label htmlFor="quote-phone">Phone number <span>*</span><input id="quote-phone" name="phone" type="tel" autoComplete="tel" required /></label>
        </div>
        <div className="enquiry-row">
          <label htmlFor="quote-company">Company name<input id="quote-company" name="company" autoComplete="organization" /></label>
          <label htmlFor="quote-email">Email address<input id="quote-email" name="email" type="email" autoComplete="email" /></label>
        </div>
        <div className="enquiry-row">
          <label htmlFor="quote-product">Product <span>*</span><select id="quote-product" name="product" value={product} onChange={(event) => setProduct(event.target.value as ProductId)}><option value="honeycomb-pad">Honeycomb Cooling Pad</option><option value="air-cooler-pad">Air Cooler Cooling Pad</option></select></label>
          <label htmlFor="quote-application">Application <span>*</span><select id="quote-application" name="application" required defaultValue=""><option value="" disabled>Select an application</option><option>Air cooler</option><option>Evaporative cooling system</option><option>OEM / bulk requirement</option><option>Other</option></select></label>
        </div>
        <div className="enquiry-row">
          <label htmlFor="quote-dimensions">Required dimensions <span>*</span><input id="quote-dimensions" name="dimensions" placeholder="Height × Width × Thickness" required /></label>
          <label htmlFor="quote-quantity">Quantity <span>*</span><input id="quote-quantity" name="quantity" placeholder="e.g. 100 pieces" required /></label>
        </div>
        <label htmlFor="quote-message">Additional requirements<textarea id="quote-message" name="message" placeholder="Add colour, flute profile, delivery timeline or any other requirement." /></label>
        <p className="enquiry-note">Fields marked <span>*</span> are required. The enquiry file is downloaded to your device for review before you share it.</p>
        <button type="submit" className="enquiry-submit">Prepare Enquiry File <Download size={17} aria-hidden="true" /></button>
      </form>

      {prepared && <div className="enquiry-success" role="status"><CheckCircle2 size={20} aria-hidden="true" /><div><strong>Your enquiry file is ready.</strong><p>Please review it, then email it to Coolnestindustries@gmail.com or share it with the Coolnest team.</p></div></div>}
    </div>
  );
}
