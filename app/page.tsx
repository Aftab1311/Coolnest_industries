import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Sustainability from "@/components/Sustainability";
import { Applications, CtaBand, FeaturedPads, FocusBanner, HowItWorks, ProductSpotlight } from "@/components/SiteSections";

export default function Home() {
  return <main id="main"><Hero /><FeaturedPads /><ProductSpotlight /><FocusBanner /><Advantages /><Applications /><HowItWorks /><About /><Sustainability /><CtaBand /></main>;
}
