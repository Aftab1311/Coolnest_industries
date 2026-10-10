import type { Metadata } from "next";
import { Camera, ClipboardList, Clock3, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { CtaBand, Faq, PageHero } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import QuoteEnquiryForm from "@/components/QuoteEnquiryForm";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Contact", description: "Prepare a honeycomb cooling pad enquiry for Coolnest Industries." };
const faqs = [
  { q: "What should I have ready?", a: "Your product preference, quantity, application and preferred timeline are the most useful starting details." },
  { q: "Does the form send my enquiry automatically?", a: "Yes. Once you submit the required details, your enquiry is sent securely to the Coolnest Industries team by email." },
  { q: "Can dealers or manufacturers enquire?", a: "Yes. Include your business requirement, expected quantity and timing in the enquiry." },
];

export default function ContactPage() {
  return <main id="main"><PageHero eyebrow="CONTACT COOLNEST" title="Start With the" accent="Right Details" text="A clear cooling pad enquiry begins with your product, quantity and application. Send your requirements directly to the Coolnest team." /><section id="quote-form" className="contact-section section-pad"><div className="page-container contact-layout"><QuoteEnquiryForm /><div className="contact-details"><SectionLabel>FACTORY &amp; CONTACT</SectionLabel><h2>Coolnest Industries</h2><p className="contact-address"><MapPin />{company.address}</p><a href={`tel:${company.phones[0].replaceAll(" ", "")}`}><Phone />{company.phones[0]}</a><a href={`tel:${company.phones[1].replaceAll(" ", "")}`}><Phone />{company.phones[1]}</a><a href={`mailto:${company.email}`}><Mail />{company.email}</a><p><Clock3 />{company.hours}</p><p><span>GST: {company.gst}</span></p><a href={company.instagram} target="_blank" rel="noreferrer"><Camera />Instagram</a><p className="map-note">Google Maps location link will be added soon.</p></div></div></section><section className="contact-process section-pad"><div className="page-container"><SectionLabel centered>HOW IT WORKS</SectionLabel><h2 className="center-title">Prepare. Send. Connect.</h2><div className="contact-steps"><article><ClipboardList /><div><span>01</span><h3>Add the details</h3><p>Choose your product, quantity, application and contact information.</p></div></article><article><Mail /><div><span>02</span><h3>Send your enquiry</h3><p>Your completed form is emailed directly to Coolnest Industries.</p></div></article><article><MessageSquareText /><div><span>03</span><h3>Hear from Coolnest</h3><p>Our team reviews your requirement and follows up with the next steps.</p></div></article></div></div></section><Faq items={faqs} /><CtaBand title="Ready to send your requirement?" text="Share your product, quantity, application and delivery requirements with the Coolnest team." /></main>;
}
