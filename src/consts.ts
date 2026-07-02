// ─────────────────────────────────────────────────────────────────────────────
// Site-wide SEO / GEO constants — single source of truth for metadata, schema,
// contact and social links. Update the domain here if it ever changes.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://borsogastudio.com";
export const SITE_NAME = "Borsoga Studio";

/** Default (home) <title> — brand + primary service + market. */
export const SITE_TITLE =
  "Borsoga Studio — Architectural Visualization & 3D Rendering | Miami";

/** Default meta description (~155 chars) used on the home page and as fallback. */
export const SITE_DESCRIPTION =
  "Miami-based architectural visualization studio: photoreal 3D renders, CGI, immersive 360° tours, sales websites and branding for developers and architects.";

/** One-line positioning statement reused in schema and llms.txt. */
export const SITE_TAGLINE = "Digital spaces for the unbuilt imagination.";

/** Default social-share image (absolute path from site root). A dedicated
 *  1200×630 OG image is recommended long-term; this is a strong stand-in. */
export const DEFAULT_OG_IMAGE = "/projects/RAL-7006-COCONUT-GROVE-RESIDENCE/1.jpg";

export const CONTACT = {
  email: "info@borsogastudio.com",
  telephone: "+1-786-852-4847",
  whatsapp: "https://wa.me/17868524847",
  city: "Miami",
  region: "FL",
  country: "US",
  areaServed: "Worldwide",
  foundingYear: "2026",
} as const;

/** Social / external profiles — used for schema `sameAs`. */
export const SOCIAL = [
  "https://instagram.com/borsogastudio",
  "https://linkedin.com/company/borsogastudio",
  "https://www.facebook.com/profile.php?id=61581895641990",
];

/** Services offered — reused for schema `makesOffer` and GEO copy. */
export const SERVICES = [
  "Architectural Visualization & 3D Rendering",
  "CGI & Photorealistic Renders",
  "Immersive 360° Tours & Virtual Environments",
  "Architectural & Interior Photography",
  "Custom Sales Websites & Web Platforms",
  "Brand Identity & Visual Systems",
];
