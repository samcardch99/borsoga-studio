// ─────────────────────────────────────────────────────────────────────────────
// Pre-sized WebP copies of project images.
//
// Project photos live in public/ (1–2 MB JPGs), which Astro serves untouched.
// The grids on the service pages, /press and the 404 use WebP copies saved
// next to them under public/projects/thumbs/, at 640 and 1280 px wide (hero images also at 1920):
//   /projects/X/1.jpg  →  /projects/thumbs/X/1-640.webp, …/1-1280.webp
// When a copy is missing (e.g. a project changed its cover image), these
// helpers fall back to the original file, so a page never shows a broken image.
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";

export const THUMB_WIDTHS = [640, 1280, 1920] as const;

function thumbUrl(src: string, width: number): string {
  return src
    .replace(/^\/projects\//, "/projects/thumbs/")
    .replace(/\.(jpe?g|png)$/i, `-${width}.webp`);
}

function existsInPublic(url: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", decodeURI(url)));
}

/** `src` + `srcset` for an <img>: the WebP copies when present, else the original. */
export function responsiveImage(src: string): { src: string; srcset?: string } {
  const available = THUMB_WIDTHS.map((w) => ({ w, url: thumbUrl(src, w) })).filter(
    ({ url }) => existsInPublic(url),
  );
  if (!available.length) return { src };
  return {
    src: available[0].url,
    srcset: available.map(({ w, url }) => `${url} ${w}w`).join(", "),
  };
}
