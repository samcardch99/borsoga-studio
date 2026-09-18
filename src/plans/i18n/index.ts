// ─────────────────────────────────────────────────────────────────────────────
// Funnel translation runtime — the TypeScript port of the generator's
// `i18n_load.py`. Same two lookup styles, same fallback order.
//
//   t(key)   by key, for strings that have a name. Missing in the active
//            language → the source-language string (a real sentence beats a
//            hole), and finally ‹key› so a typo is visible instead of silent.
//   T(text)  gettext-style, indexed BY the Spanish string, for text that lives
//            inline in the page data and has no key. Spanish is the index, so
//            in Spanish it is already correct and returns untouched.
//
// The questionnaires deliberately keep Spanish values in the data — they are
// what `api/submit.ts` compares — and translate only at render time. So T()
// changes what is READ, never what is SENT.
// ─────────────────────────────────────────────────────────────────────────────

import esDict from "./es.js";
import enDict from "./en.js";
import dwDict from "./dw.js";
import gdDict from "./gd.js";
import { SOURCE_LANG, type Lang } from "../config";

type Branch = Record<string, string>;
interface Dict {
  name: string;
  locale: string;
  ui: Branch;
  msg: Branch;
  opt: Branch;
  plural: Branch;
}

/** The two long questionnaires ship their own tables, kept out of the main
 *  bundle so pages that don't use them don't pay for them. */
export const EXTRA = { dw: dwDict, gd: gdDict } as const;
export type ExtraName = keyof typeof EXTRA;

const DICTS: Record<Lang, Dict> = {
  es: (esDict as Record<string, Dict>).es,
  en: (enDict as Record<string, Dict>).en,
};

function merge(lang: Lang, extra?: ExtraName): Dict {
  const base = DICTS[lang];
  if (!extra) return base;
  const add = EXTRA[extra][lang] as Partial<Dict> | undefined;
  if (!add) return base;
  return {
    ...base,
    ui: { ...base.ui, ...(add.ui ?? {}) },
    msg: { ...base.msg, ...(add.msg ?? {}) },
    opt: { ...base.opt, ...(add.opt ?? {}) },
  };
}

export interface I18n {
  lang: Lang;
  locale: string;
  /** Look up by key across ui and msg. */
  t(key: string, fallback?: string): string;
  /** Translate a source-language (Spanish) string. */
  T(text: string): string;
  /** `{name}` interpolation. */
  fill(text: string, vars: Record<string, string | number>): string;
  /** Spanish singular → plural, for the space counters. */
  plural(word: string): string;
  /** Keys requested that exist in no dictionary — surfaced by the build. */
  missing(): string[];
}

export function createI18n(lang: Lang, extra?: ExtraName): I18n {
  const dict = merge(lang, extra);
  const source = merge(SOURCE_LANG, extra);
  const missing = new Set<string>();

  const find = (d: Dict, key: string): string | undefined =>
    d.ui[key] ?? d.msg[key];

  return {
    lang,
    locale: dict.locale,

    t(key, fallback) {
      const hit = find(dict, key);
      if (hit !== undefined) return hit;
      const base = find(source, key);
      missing.add(key);
      if (base !== undefined) return base;
      return fallback !== undefined ? fallback : `‹${key}›`;
    },

    T(text) {
      // Spanish IS the index — nothing to look up, and non-strings (the true /
      // false cells in the comparison tables) pass straight through.
      if (typeof text !== "string" || !text.trim() || lang === SOURCE_LANG) return text;
      const hit = dict.opt[text];
      if (hit !== undefined && hit !== text) return hit;
      return source.opt[text] ?? text;
    },

    fill(text, vars) {
      return String(text).replace(/\{(\w+)\}/g, (_, k: string) =>
        vars[k] != null ? String(vars[k]) : "",
      );
    },

    plural(word) {
      return dict.plural[word] ?? source.plural[word] ?? word;
    },

    missing: () => [...missing].sort(),
  };
}
