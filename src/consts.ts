// ─────────────────────────────────────────────────────────────────────────────
// Site-wide SEO / GEO constants — single source of truth for metadata, schema,
// contact and social links. Update the domain here if it ever changes.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://borsogastudio.com";
export const SITE_NAME = "Borsoga Studio";

/** Default (home) <title> — brand + primary service + market. */
export const SITE_TITLE =
  "Borsoga Studio — Interior Design & Architectural Visualization | Miami";

/** Default meta description (~155 chars) used on the home page and as fallback.
 *  Leads with interior design to match the Google Business Profile's primary
 *  category ("Interior designer"). */
export const SITE_DESCRIPTION =
  "Miami interior design and architectural visualization studio: kitchens, homes and commercial interiors in photoreal 3D, plus renders, 360° tours and branding.";

/** One-line positioning statement reused in schema and llms.txt. */
export const SITE_TAGLINE = "Digital spaces for the unbuilt imagination.";

/** Default social-share image (absolute path from site root). A dedicated
 *  1200×630 OG image is recommended long-term; this is a strong stand-in. */
export const DEFAULT_OG_IMAGE = "/projects/RAL-7006-COCONUT-GROVE-RESIDENCE/1.jpg";

// Telephone and WhatsApp match the Google Business Profile (primary line
// 786-778-3409). foundingYear matches the profile's opening date (2024-02-28).
export const CONTACT = {
  email: "info@borsogastudio.com",
  telephone: "+1-786-778-3409",
  whatsapp: "https://wa.me/17867783409",
  city: "Miami",
  region: "FL",
  country: "US",
  // Interior design plans: Miami-Dade (Essential, Premium) and all of Florida
  // (Borsoga Edition). Renderings for developers and architects: anywhere.
  areaServed: [
    "Miami-Dade County, FL",
    "Broward County, FL",
    "Palm Beach County, FL",
    "Florida",
    "Worldwide",
  ],
  foundingYear: "2024",
} as const;

/** Social / external profiles — used for schema `sameAs`. */
export const SOCIAL = [
  "https://instagram.com/borsogastudio",
  "https://linkedin.com/company/borsogastudio",
  "https://www.facebook.com/profile.php?id=61581895641990",
  "https://www.youtube.com/channel/UCJmTM1qEQ1CCGLoCfUdE6Jw",
];

/** Services offered — reused for schema `makesOffer` and GEO copy. */
export const SERVICES = [
  "Interior Design — Residential & Commercial",
  "Kitchen & Bathroom Design",
  "Millwork & Custom Cabinetry Design",
  "Material & Finish Direction",
  "Architectural Visualization & 3D Rendering",
  "CGI & Photorealistic Renders",
  "Immersive 360° Tours & Virtual Environments",
  "Architectural & Interior Photography",
  "Custom Sales Websites & Web Platforms",
  "Web & iOS Apps for Real Estate",
  "Website Care & Maintenance",
  "Brand Identity & Visual Systems",
  "Social Media Design for Real Estate & Construction",
  "Marketing & Graphic Design",
];
