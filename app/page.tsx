import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Sustainability from "@/components/Sustainability";
import { Applications, CtaBand, FeaturedPads, FocusBanner, HowItWorks, ProductSpotlight } from "@/components/SiteSections";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Honeycomb Cooling Pad Manufacturer in Hapur",
    description: "Coolnest Industries manufactures honeycomb cooling pads in Hapur, Uttar Pradesh. Explore evaporative cooling pads, bulk supply and custom sizes.",
    path: "/",
  }),
  title: { absolute: "Coolnest Industries | Honeycomb Cooling Pad Manufacturer in Hapur" },
};

export default function Home() {
  return <main id="main"><Hero /><FeaturedPads /><ProductSpotlight /><FocusBanner /><Advantages /><Applications /><HowItWorks /><About /><Sustainability /><CtaBand /></main>;
}
