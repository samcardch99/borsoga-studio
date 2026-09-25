// The questionnaires' content lives in the admin panel (admin.borsogastudio.com).
// The page asks the API for the published version every time it opens
// (client/brief-arranque.js), so publishing needs no rebuild. What is read here,
// at build time, is only the copy baked into the page for when the API doesn't
// answer.
//
// web.json / grafico.json are the schemas as they were when they left the code:
// the fallback of the fallback, for a build that can't reach the API.
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
    console.warn(`[forms] ${servicio}: sin conexión con el panel, uso la copia local (${(e as Error).message})`);
    return SEMILLA[servicio];
  }
}

/** The published schema, fetched once per build and shared by both languages. */
export function cargarEsquema(servicio: Servicio): Promise<Esquema> {
  if (!cache.has(servicio)) cache.set(servicio, pedir(servicio));
  return cache.get(servicio)!;
}
