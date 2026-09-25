// The questionnaires' content lives in the admin panel (admin.borsogastudio.com)
// and is read here, at build time, from the published version. Publishing in the
// panel starts a new build of this site; that's how a change reaches the page.
//
// web.json / grafico.json are the schemas as they were when they left the code.
// They are only a fallback for building locally without network — in CI a
// failed fetch fails the build, so a stale schema can never be published over a
// newer one.
import { api } from "../config";
import web from "./web.json";
import grafico from "./grafico.json";

export type Servicio = "web" | "grafico";
export type Esquema = typeof web & { version?: number };

const SEMILLA: Record<Servicio, Esquema> = { web, grafico: grafico as unknown as Esquema };
const cache = new Map<Servicio, Promise<Esquema>>();

async function pedir(servicio: Servicio): Promise<Esquema> {
  try {
    const r = await fetch(api(`forms/${servicio}/`), { headers: { accept: "application/json" } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const j = await r.json();
    if (!j?.schema?.pasos || !j.version) throw new Error("respuesta sin esquema");
    return { ...j.schema, version: j.version };
  } catch (e) {
    if (process.env.CI) {
      throw new Error(`No se pudo leer el cuestionario publicado (${servicio}): ${(e as Error).message}`);
    }
    console.warn(`[forms] ${servicio}: sin conexión con el panel, uso la copia local (${(e as Error).message})`);
    return SEMILLA[servicio];
  }
}

/** The published schema, fetched once per build and shared by both languages. */
export function cargarEsquema(servicio: Servicio): Promise<Esquema> {
  if (!cache.has(servicio)) cache.set(servicio, pedir(servicio));
  return cache.get(servicio)!;
}
