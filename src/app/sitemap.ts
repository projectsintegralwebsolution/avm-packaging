import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avmpackagingsystem.com";
  const now = new Date();

  // Root Homepage and Core Static Pages (Clean URLs)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/videogallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclamier`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Exclude redirected/consolidated slugs from sitemap so only authoritative canonical URLs are indexed
  const redirectedSlugs = new Set(["packing-machine", "vacuum-sealers", "vaccum-sealing-machine"]);

  const productRoutes: MetadataRoute.Sitemap = products
    .filter((product) => !redirectedSlugs.has(product.slug))
    .map((product) => ({
      url: `${baseUrl}/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [...staticRoutes, ...productRoutes];
}
