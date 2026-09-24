// ─────────────────────────────────────────────────────────────────────────────
// Test deployment vs. production.
//
// Every pull request gets its own test URL on Vercel so whoever asked for the
// change can see it before approving it. Those builds must never pass for the
// real site: they show a banner, stay out of search engines, and the forms do
// not reach the CRM or send email. The funnel API decides that on its own side
// too (by origin), so a test page cannot write a real lead even if this flag
// were wrong.
// ─────────────────────────────────────────────────────────────────────────────

export const IS_PREVIEW = import.meta.env.PUBLIC_DEPLOY_ENV === "preview";
