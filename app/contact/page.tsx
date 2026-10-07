import type { Metadata } from "next";
import { Camera, ClipboardList, Clock3, FileDown, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { CtaBand, Faq, PageHero } from "@/components/SiteSections";
import SectionLabel from "@/components/SectionLabel";
import QuoteEnquiryForm from "@/components/QuoteEnquiryForm";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Contact", description: "Prepare a honeycomb cooling pad enquiry for Coolnest Industries." };
const faqs = [
  { q: "What should I have ready?", a: "Your required pad dimensions, quantity, application and preferred timeline are the most useful starting details." },
  { q: "Does the form send my enquiry automatically?", a: "No. The current form creates a text file on your device so you can review and share it with the Coolnest team through your preferred channel." },
  { q: "Can dealers or manufacturers enquire?", a: "Yes. Include your business requirement, expected quantity and timing in the enquiry." },
];

export default function ContactPage() {
  return <main id="main"><PageHero eyebrow="CONTACT COOLNEST" title="Start With the" accent="Right Details" text="A clear cooling pad enquiry begins with dimensions, quantity and application. Prepare those details and we’ll keep the conversation focused." /><section id="quote-form" className="contact-section section-pad"><div className="page-container contact-layout"><QuoteEnquiryForm /><div className="contact-details"><SectionLabel>FACTORY &amp; CONTACT</SectionLabel><h2>Coolnest Industries</h2><p className="contact-address"><MapPin />{company.address}</p><a href={`tel:${company.phones[0].replaceAll(" ", "")}`}><Phone />{company.phones[0]}</a><a href={`tel:${company.phones[1].replaceAll(" ", "")}`}><Phone />{company.phones[1]}</a><a href={`mailto:${company.email}`}><Mail />{company.email}</a><p><Clock3 />{company.hours}</p><p><span>GST: {company.gst}</span></p><a href={company.instagram} target="_blank" rel="noreferrer"><Camera />Instagram</a><p className="map-note">Google Maps location link will be added soon.</p></div></div></section><section className="contact-process section-pad"><div className="page-container"><SectionLabel centered>HOW IT WORKS</SectionLabel><h2 className="center-title">Prepare. Review. Share.</h2><div className="contact-steps"><article><ClipboardList /><div><span>01</span><h3>Add the details</h3><p>Enter your dimensions, quantity, application and contact information.</p></div></article><article><FileDown /><div><span>02</span><h3>Download the enquiry</h3><p>Save a clean text summary to your device and review it.</p></div></article><article><MessageSquareText /><div><span>03</span><h3>Share it with Coolnest</h3><p>Send the prepared requirement through the business contact channel you use.</p></div></article></div></div></section><Faq items={faqs} /><CtaBand title="Ready to prepare your requirement?" /></main>;
}
