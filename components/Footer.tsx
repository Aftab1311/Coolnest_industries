import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { company } from "@/lib/company";

export default function Footer() {
  return <footer className="site-footer"><div className="page-container footer-main">
    <div className="footer-brand"><Logo footer /><p>Specialists in honeycomb evaporative cooling pads made for cooler air and dependable supply.</p></div>
    <div><h2>Explore</h2><Link href="/">Home</Link><Link href="/products">Cooling Pads</Link><Link href="/about">About Us</Link><Link href="/sustainability">Sustainability</Link></div>
    <div><h2>Contact</h2><p><MapPin />{company.address}</p><a href={`mailto:${company.email}`}><Mail />{company.email}</a>{company.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}><Phone />{phone}</a>)}<p className="footer-hours">{company.hours}<br />{company.closed}</p></div>
    <div><h2>Social Links</h2><a href={company.instagram} target="_blank" rel="noreferrer"><ExternalLink />Instagram</a><p><ExternalLink />Facebook under process</p></div>
  </div><div className="footer-bottom"><div className="page-container"><p>© 2026 Coolnest Industries. All rights reserved.</p><p>Honeycomb cooling pad manufacturer · Hapur</p></div></div></footer>;
}
