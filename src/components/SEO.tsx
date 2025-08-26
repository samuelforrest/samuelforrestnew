import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
  robots?: string;
}

export const generateSEOMetadata = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage = "/logo-samuelforrestwebsite.png",
  canonicalUrl,
  robots = "index, follow"
}: SEOProps): Metadata => {
  const siteUrl = "https://samuelforrest.me";
  const fullTitle = `${title}`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return {
    title: fullTitle,
    description: description,
    keywords: keywords,
    authors: [{ name: "Samuel Forrest" }],
    robots: robots,
    alternates: {
      canonical: canonicalUrl || siteUrl,
    },
    openGraph: {
      type: ogType as any,
      title: finalOgTitle,
      description: finalOgDescription,
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: finalOgTitle,
        },
      ],
      url: canonicalUrl || siteUrl,
      siteName: "Samuel Forrest",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: finalOgTitle,
      description: finalOgDescription,
      images: [`${siteUrl}${ogImage}`],
      creator: "@samuelforrest",
    },
    other: {
      "rating": "General",
      "distribution": "global",
      "geo.region": "GB",
      "geo.placename": "London, UK",
      "language": "en",
    },
  };
};

// For backward compatibility, export a component that can be used in pages
// but recommend using generateSEOMetadata in layout.tsx or page.tsx files
export const SEO = (props: SEOProps) => {
  // This component is now deprecated in favor of generateSEOMetadata
  // It returns null as metadata should be handled at the page/layout level in Next.js 14
  console.warn("SEO component is deprecated. Use generateSEOMetadata in your page.tsx or layout.tsx instead.");
  return null;
};
