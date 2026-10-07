import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Focus, ShieldCheck, UsersRound } from "lucide-react";
import SectionLabel from "./SectionLabel";

const values = [{ icon: Focus, title: <>Single-Product<br />Focus</> }, { icon: ShieldCheck, title: <>Quality<br />Mindset</> }, { icon: UsersRound, title: <>Customer-Led<br />Support</> }];

export default function About() {
  return <section className="about-section" aria-labelledby="about-title"><div className="about-inner">
    <div className="about-image"><Image src="/images/pad-handling-inspection.webp" alt="Workshop worker handling a honeycomb cooling pad" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 42vw" /></div>
    <div className="about-copy"><SectionLabel>ABOUT COOLNEST</SectionLabel><h2 id="about-title">Cooling Pad Specialists</h2><p>Coolnest Industries focuses exclusively on honeycomb cooling pads. Established in Hapur in 2026, we keep our attention on the paper media, honeycomb formation, fit requirements and supply needs that matter to cooler businesses and buyers.</p><Link href="/about" className="gold-button about-cta">Our Story <ArrowRight aria-hidden="true" /></Link></div>
    <div className="about-values">{values.map(({ icon: Icon, title }) => <div className="about-value" key={String(title)}><span className="outline-icon"><Icon aria-hidden="true" strokeWidth={1.25} /></span><span>{title}</span></div>)}</div>
  </div></section>;
}
