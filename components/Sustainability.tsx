import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplet, Leaf, Wind } from "lucide-react";

const commitments = [{ icon: Leaf, title: <>Focused<br />Materials</> }, { icon: Droplet, title: <>Water-Based<br />Cooling</> }, { icon: Wind, title: <>Natural<br />Evaporation</> }];

export default function Sustainability() {
  return <section className="sustainability-section" aria-labelledby="sustainability-title"><div className="sustainability-leaves"><Image src="/images/sustainability-leaves.webp" alt="" width={157} height={112} /></div><div className="page-container sustainability-inner"><div className="sustainability-copy"><p className="commitment-label">THE COOLING PRINCIPLE</p><h2 id="sustainability-title">Air, Water &amp; Thoughtful Media.</h2><p>Honeycomb pads support cooling through evaporation—a direct exchange between moving air and water held in the pad media.</p><Link href="/sustainability">Our perspective <ArrowRight /></Link></div><div className="commitments">{commitments.map(({ icon: Icon, title }) => <div className="commitment" key={String(title)}><Icon aria-hidden="true" strokeWidth={1.25} /><span>{title}</span></div>)}</div></div></section>;
}
