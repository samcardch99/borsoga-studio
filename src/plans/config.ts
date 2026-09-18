// ─────────────────────────────────────────────────────────────────────────────
// Funnel (/plans) — routing, languages and the API origin.
//
// Ported from the retired Python generator (borsoga-funnel/src/shell.py). Two
// things that look like one and are NOT:
//
//   SOURCE_LANG  the language the translation tables are INDEXED by, and the
//                language the questionnaire values are STORED in. `api/submit.ts`
//                compares against those Spanish values, so this must stay "es"
//                no matter what the URLs look like.
//   DEFAULT_LANG the language served at the bare /plans/ prefix. English, to
//                match the rest of borsogastudio.com.
//
// The old generator conflated them (it rendered Spanish at the root because
// Spanish was also the index). Keep them apart here.
// ─────────────────────────────────────────────────────────────────────────────

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];

/** Index for T() / plural lookups and the canonical stored value. Never change. */
export const SOURCE_LANG: Lang = "es";

/** Language served at /plans/ with no language segment. */
export const DEFAULT_LANG: Lang = "en";

export const BASE = "/plans";

export const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_US" };

/**
 * Serverless functions stay on Vercel — borsogastudio.com is static on
 * Hostinger and cannot run them. Minting a Vercel Blob upload token needs a
 * private token, and the file links are HMAC-signed, so neither can move to the
 * client. Pages call these cross-origin; the functions send the CORS headers.
 */
export const API_ORIGIN = "https://plans.borsogastudio.com";
export const api = (path: string) => `${API_ORIGIN}/api/${path.replace(/^\/+/, "")}`;

/** Every funnel page, with its slug per language. English is the base. */
export const ROUTES = {
  home: { en: "", es: "" },
  interior: { en: "interior-design", es: "interior-design" },
  configurator: { en: "configurator", es: "configurador" },
  avPlans: { en: "av-plans", es: "planes-av" },
  avConfigurator: { en: "av-configurator", es: "configurador-av" },
  webDesign: { en: "web-design", es: "diseno-web" },
  graphicDesign: { en: "graphic-design", es: "diseno-grafico" },
  webBrief: { en: "web-brief", es: "cuestionario-web" },
  graphicBrief: { en: "graphic-brief", es: "cuestionario-grafico" },
  privacy: { en: "privacy-policy", es: "politica-de-privacidad" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

/** Public URL of a route in a language, always with a trailing slash. */
export function route(key: RouteKey, lang: Lang): string {
  const slug = ROUTES[key][lang];
  const prefix = lang === DEFAULT_LANG ? BASE : `${BASE}/${lang}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** The same page in every language — for hreflang and the language switcher. */
export function alternates(key: RouteKey): { lang: Lang; href: string }[] {
  return LANGS.map((lang) => ({ lang, href: route(key, lang) }));
}
