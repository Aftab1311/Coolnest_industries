export type ProductId = "honeycomb-pad" | "air-cooler-pad";
export type Product = { id: ProductId; slug: string; name: string; shortName: string; image: string; imageWidth: number; imageHeight: number; imageAlt: string; description: string; details: string[]; specs: { label: string; value: string }[]; };

const sharedSpecs = [
  { label: "Material", value: "Confirm for the selected product" }, { label: "Thickness", value: "Confirm for your requirement" },
  { label: "Height / width", value: "Custom sizes by enquiry" }, { label: "Flute / profile", value: "5090 and 7090 profiles listed; confirm specification" },
  { label: "Customization", value: "Discuss dimensions and profile with our team" },
];

export const products: Product[] = [
  {
    id: "honeycomb-pad", slug: "honeycomb-cooling-pads", name: "Honeycomb Cooling Pads", shortName: "Honeycomb Cooling Pad", image: "/images/honeycomb-cooling-pad.webp", imageWidth: 900, imageHeight: 620,
    imageAlt: "Brown honeycomb cooling pad with a dense folded paper structure",
    description: "Honeycomb cooling pads for evaporative cooling applications. Share the required size, flute profile and quantity when you enquire.",
    details: ["Honeycomb cooling pad product family.", "Custom sizes can be discussed by enquiry.", "Bulk quantity enquiries accepted."], specs: sharedSpecs,
  },
  {
    id: "air-cooler-pad", slug: "air-cooler-cooling-pads", name: "Air Cooler Cooling Pads", shortName: "Air Cooler Cooling Pad", image: "/images/air-cooler-cooling-pad.webp", imageWidth: 900, imageHeight: 620,
    imageAlt: "Blue air cooler cooling pad with a structured evaporative paper profile",
    description: "Air cooler cooling pads for evaporative cooling applications. Share the equipment, required dimensions and quantity so the team can discuss fit and availability.",
    details: ["Air cooler cooling pad product family.", "Custom sizes can be discussed by enquiry.", "Bulk quantity enquiries accepted."], specs: sharedSpecs,
  },
];
