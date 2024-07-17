import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://unzet.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
