// ─────────────────────────────────────────────────────────────────────────────
// Google reviews — curated snapshot of the studio's Google Business Profile.
//
// Deliberately hand-maintained rather than fetched: the site builds to static
// HTML (no adapter, GitHub Actions → `build` branch), and the Places API caps
// Place Details at 5 reviews. Transcribing them here removes the API key, the
// billing and the cap, at the cost of updating this file when a review lands.
//
// Every entry below is copied verbatim from the public profile
// (https://maps.google.com/?cid=6420475614081383704) — captured 2026-08-04,
// when the profile stood at 5.0 across 43 reviews, all of them five stars.
// Never edit a reviewer's wording: quote it or drop it.
//
// Rendered by src/components/GoogleReviews.astro on / and /our-clients.
// ─────────────────────────────────────────────────────────────────────────────

export interface GoogleReview {
  /** Reviewer's display name, exactly as it appears on Google. */
  name: string;
  /** Short qualifier under the name. Only set where the reviewer names the
   *  service themselves — Google carries no role field, so anything else would
   *  be a title we invented for a real, named person. Omitted → "GOOGLE REVIEW". */
  role?: string;
  /** 1–5. */
  rating: number;
  /** Month the review was posted, `YYYY-MM`. The card label is derived from
   *  this at build time (see `reviews` below) so "10 MONTHS AGO" can't go stale
   *  the way a hardcoded string would. */
  publishedAt: string;
  /** The review, verbatim. */
  text: string;
}

/** Public profile — target of "SEE ALL REVIEWS" and "OPEN ON GOOGLE".
 *  CID form: stable, survives name/address edits, and resolves straight to the
 *  Maps listing. */
export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=6420475614081383704";

/** The profile's REAL average and total, not the figures of the subset below —
 *  so "BASED ON 43 GOOGLE REVIEWS" stays truthful while the strip shows 14. */
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 43;

/** Google's own phrasing for a review's age, rebuilt at build time. */
function relativeAge(publishedAt: string): string {
  const [y, m] = publishedAt.split("-").map(Number);
  const now = new Date();
  const months =
    (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  if (months < 1) return "THIS MONTH";
  if (months === 1) return "1 MONTH AGO";
  if (months < 12) return `${months} MONTHS AGO`;
  if (months < 24) return "A YEAR AGO";
  return `${Math.floor(months / 12)} YEARS AGO`;
}

const entries: GoogleReview[] = [
  {
    name: "yenifer fernandez",
    role: "WEB PLATFORM",
    rating: 5,
    publishedAt: "2026-04",
    text: "Excellent work on my website. Very professional, fast, and always attentive to every detail. I recommend him 100%.",
  },
  {
    name: "Leonel Martinez",
    role: "BRAND IDENTITY",
    rating: 5,
    publishedAt: "2026-03",
    text: "Very pleased with the branding work done for my remodeling company; efficient and on time. Highly recommended.",
  },
  {
    name: "Danna González Millares",
    role: "BRAND IDENTITY",
    rating: 5,
    publishedAt: "2025-11",
    text: "Great job! They were very creative and knew how to adapt to the brand's needs, which were very challenging.",
  },
  {
    name: "Gabriela Gomez",
    role: "BRAND IDENTITY",
    rating: 5,
    publishedAt: "2025-11",
    text: "Very professional! He manages to capture the brand exactly as you dream it!",
  },
  {
    name: "Laura Loaiza",
    rating: 5,
    publishedAt: "2025-11",
    text: "The studio was impeccable and professional; I'm 100% satisfied with the results.",
  },
  {
    name: "Caterina Cafferata",
    role: "INTERIOR RENDERINGS",
    rating: 5,
    publishedAt: "2025-10",
    text: "I recently had interior renderings done for my new construction home, and I couldn’t be more impressed! The attention to detail, lighting, and overall realism were absolutely stunning. The visuals brought my design ideas to life and gave me a clear vision of how the finished space will look. Highly recommend for anyone looking to visualize their home before buying any furniture!",
  },
  {
    name: "Daniela Marichal",
    role: "BRAND IDENTITY",
    rating: 5,
    publishedAt: "2025-10",
    text: "Borsoga Studio truly understood my vision and brought it to life. They transformed my ideas into a visual identity that feels 100% me. Working with them was like watching my ideas come alive. I definitely recommend them and will be reaching out again soon to keep working together.",
  },
  {
    name: "manuel reyes",
    role: "ARCHITECTURAL RENDERING",
    rating: 5,
    publishedAt: "2025-10",
    text: "The quality and attention to detail is incredible. The renderings not only show you what you envisioned, they also tell a story that you don't even expected. I highly recommend their services.",
  },
  {
    name: "Ronald Marquez",
    rating: 5,
    publishedAt: "2025-10",
    text: "Wilfredo is a very talented architect and visionary. Devoted to his work and always delivering the upmost quality. Highly recommend his team, we’ve had a great experience. Top 5 in the state.",
  },
  {
    name: "kevin fernandez samper",
    role: "RENDERINGS & PLANS",
    rating: 5,
    publishedAt: "2025-10",
    text: "Excellent studio, specialized in realistic renderings, detailed plans, and graphic identities. They meet deadlines, understand your ideas, and transform them into high-level results.",
  },
  {
    name: "Katherina Bayer",
    role: "ARCHITECTURAL RENDERING",
    rating: 5,
    publishedAt: "2025-10",
    text: "Wil’s renders are exceptional! They really look like photos. He is very talented!",
  },
  {
    name: "Joe Abreu",
    role: "ARCHITECTURAL RENDERING",
    rating: 5,
    publishedAt: "2025-10",
    text: "Many thanks to Borsoga for helping us with our project. The service was very professional. The renders look amazing, and the process was always clear and pleasant. Highly recommended!",
  },
  {
    name: "Adrián Iglesias",
    rating: 5,
    publishedAt: "2025-10",
    text: "Their attention to detail and creativity made the design process smooth and enjoyable. The final design exceeded my expectations and truly reflects my vision. I highly recommend them to anyone in need of a premium design service",
  },
  {
    name: "Daniela Ocaña Perez",
    rating: 5,
    publishedAt: "2025-10",
    text: "My experience hiring Borsoga Studio was excellent. They delivered a creative and functional design of great quality, meeting deadlines and showing full professionalism.",
  },
];

export const reviews = entries.map((r) => ({
  ...r,
  date: relativeAge(r.publishedAt),
}));
