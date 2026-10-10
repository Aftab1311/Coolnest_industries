"use client";

import { CheckCircle2, Send, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

const productNames = {
  "honeycomb-pad": "Honeycomb Cooling Pad",
  "air-cooler-pad": "Air Cooler Cooling Pad",
} as const;

type ProductId = keyof typeof productNames;

export default function QuoteEnquiryForm() {
  const [product, setProduct] = useState<ProductId>("honeycomb-pad");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const requestedProduct = new URLSearchParams(window.location.search).get("product");
    if (requestedProduct === "honeycomb-pad" || requestedProduct === "air-cooler-pad") setProduct(requestedProduct);
  }, []);

  async function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry.");
      setStatus("sent");
      form.reset();
      setProduct("honeycomb-pad");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "We could not send your enquiry. Please try again.");
    }
  }

  return (
    <div className="contact-quote-panel">
      <p className="section-label">REQUEST A QUOTE</p>
      <h2 id="quote-form-title">Tell Us What You Need</h2>
      <p>Share the pad details you need and we’ll send your enquiry directly to the Coolnest team.</p>

      <form className="enquiry-form contact-enquiry-form" onSubmit={sendEnquiry} aria-labelledby="quote-form-title">
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
        <label htmlFor="quote-quantity">Quantity <span>*</span><input id="quote-quantity" name="quantity" placeholder="e.g. 100 pieces" required /></label>
        <label htmlFor="quote-message">Additional requirements<textarea id="quote-message" name="message" placeholder="Add colour, flute profile, delivery timeline or any other requirement." /></label>
        <label className="honeypot-field" htmlFor="quote-website">Website<input id="quote-website" name="website" tabIndex={-1} autoComplete="off" /></label>
        <p className="enquiry-note">Fields marked <span>*</span> are required. Your enquiry will be emailed securely to Coolnestindustries@gmail.com.</p>
        <button type="submit" className="enquiry-submit" disabled={status === "sending"}>{status === "sending" ? "Sending Enquiry…" : "Send Enquiry"} <Send size={17} aria-hidden="true" /></button>
      </form>

      {status === "sent" && <div className="enquiry-success-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-success-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setStatus("idle"); }}><div className="enquiry-success-card"><button type="button" className="enquiry-success-close" aria-label="Close success message" onClick={() => setStatus("idle")}><X size={18} aria-hidden="true" /></button><span className="enquiry-success-icon"><CheckCircle2 size={30} aria-hidden="true" /></span><strong id="enquiry-success-title">Your enquiry has been sent</strong><p>Thank you. The Coolnest team will review your requirements and get back to you.</p><button type="button" className="enquiry-success-action" onClick={() => setStatus("idle")}>Close</button></div></div>}
      {status === "error" && <div className="enquiry-error" role="alert">{errorMessage}</div>}
    </div>
  );
}
