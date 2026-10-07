import { Dumbbell, Droplets, Gauge, Handshake, History, Layers3, Leaf, ShieldCheck, Sparkles, Wind } from "lucide-react";
import SectionLabel from "./SectionLabel";

const advantages = [
  { icon: Droplets, title: "Strong Water Absorption", description: "Supports even wetting across the pad." },
  { icon: Leaf, title: "Evaporative Cooling", description: "A natural and efficient cooling principle." },
  { icon: Layers3, title: "Open Honeycomb Structure", description: "Effective air and water contact." },
  { icon: ShieldCheck, title: "Treated Paper Media", description: "Made for dependable cooler use." },
  { icon: Wind, title: "Low-Pressure Drop", description: "Moves air efficiently with less resistance." },
  { icon: Layers3, title: "Compact Design", description: "Fits a wide range of cooler applications." },
  { icon: Gauge, title: "Cooling Efficiency", description: "Supports effective water-to-air contact." },
  { icon: Dumbbell, title: "High Structure Strength", description: "Holds its shape through repeated wetting." },
  { icon: History, title: "Longer Life Cycle", description: "Built for reliable, repeatable service." },
  { icon: Sparkles, title: "Dirt Resistant", description: "Maintains dependable performance in everyday use." },
];

export default function Advantages() {
  return (
    <section className="advantages-section" aria-labelledby="advantages-title">
      <div className="page-container">
        <SectionLabel centered>FEATURES OF AIR COOLING PAD</SectionLabel>
        <h2 id="advantages-title">Features of <span>Air Cooling Pads</span></h2>
        <p className="advantages-subtitle">Engineered for higher cooling efficiency, longer life and reliable performance.</p>
        <div className="advantages-grid">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div className="advantage" key={title}>
              <span className="outline-icon">
                <Icon aria-hidden="true" strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
