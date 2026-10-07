export type ProductId = "honeycomb-pad" | "air-cooler-pad";
export type Product = { id: ProductId; name: string; shortName: string; image: string; imageAlt: string; description: string; details: string[]; specs: { label: string; value: string }[]; };

const sharedSpecs = [
  { label: "Material", value: "Imported raw materials" }, { label: "Thickness", value: "Custom size available" },
  { label: "Height / width", value: "Custom size available" }, { label: "Flute / profile", value: "5 mm to 7 mm" },
  { label: "Colour", value: "All colours" }, { label: "Customization", value: "Available as per requirement" },
];

export const products: Product[] = [
  {
    id: "honeycomb-pad", name: "Honeycomb Cooling Pads", shortName: "Honeycomb Cooling Pad", image: "/images/honeycomb-cooling-pad.webp",
    imageAlt: "Brown honeycomb cooling pad with a dense folded paper structure",
    description: "High-performance honeycomb cooling pads designed for efficient water absorption, air cooling performance, durability and consistent quality.",
    details: ["Uniform honeycomb structure for good air-to-water contact.", "Custom sizes and specifications available by enquiry.", "Suitable for bulk and OEM requirements."], specs: sharedSpecs,
  },
  {
    id: "air-cooler-pad", name: "Air Cooler Cooling Pads", shortName: "Air Cooler Cooling Pad", image: "/images/air-cooler-cooling-pad.webp",
    imageAlt: "Blue air cooler cooling pad with a structured evaporative paper profile",
    description: "Cooling media made for air coolers and evaporative cooling applications, with a focus on water absorption, dependable airflow and reliable supply.",
    details: ["Suitable for various air-cooler applications.", "Available in custom sizes for replacement or new requirements.", "Bulk production and competitive pricing available by enquiry."], specs: sharedSpecs,
  },
];
