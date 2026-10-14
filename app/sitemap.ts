import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/products",
    ...products.map((product) => `/products/${product.slug}`),
    "/about",
    "/sustainability",
    "/contact",
    "/dasna",
  ];

  return paths.map((path) => ({ url: path === "/" ? siteUrl.origin : new URL(path, siteUrl).href }));
}
