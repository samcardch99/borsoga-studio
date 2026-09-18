// ─────────────────────────────────────────────────────────────────────────────
// Architectural visualization plans — data from the retired generator
// (borsoga-funnel/src/planes_av.py).
//
// Unlike the other plan pages this one addresses its copy by KEY (av_c1,
// av_r1, …) rather than by Spanish source string, so these are t() keys, not
// T() literals. Only COMPARE holds real text, because its rows are the table.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPARE = [
  ["Modelado 3D", true, true, true],
  ["Vistas por escena", "2", "4", "4"],
  ["Condiciones de luz", "1", "2", "2"],
  ["Ambientación", "Básica", "Completa", "Completa"],
  ["Detalles de materiales", false, true, true],
  ["Video de recorrido", false, true, true],
  ["Resolución", "Alta", "Impresión", "10K"],
  ["Dirección de arte", false, false, true],
  ["Video cinemático", false, false, true],
  ["Post-producción avanzada", false, false, true],
  ["Escena nocturna", false, false, true],
  ["Piezas verticales para redes", false, false, true],
  ["Revisiones", "2", "3", "4"],
] as const;

export const CONDICIONES = [
  ["donde_trabajamos", "av_c1"],
  ["av_c_need", "av_c2"],
  ["av_c_scenes", "av_c3"],
  ["los_archivos", "av_c4"],
  ["cuanto_tarda", "av_c5"],
  ["como_se_paga", "av_c6"],
  ["que_firmas", "av_c7"],
  ["lo_que_no_esta_en_tu", "av_c8"],
] as const;

export const REVISIONES = [
  ["1", "av_r1", "en_los_tres_planes"],
  ["2", "av_r2", "en_los_tres_planes"],
  ["3", "av_r3", "premium_y_edition"],
  ["4", "av_r4", "solo_edition"],
] as const;

export const EXTRAS = [
  ["extra_01", "borsoga_immersive", "av_x1_d", "av_x1_h"],
  ["extra_02", "tour_360", "av_x2_d", "av_x2_h"],
  ["av_extra_03", "av_x3_t", "av_x3_d", "av_x3_h"],
  ["av_extra_04", "av_x4_t", "av_x4_d", "av_x4_h"],
] as const;

export const PRUEBA = [
  ["Essential", "av_proof_d1", "av_slot1"],
  ["Premium", "av_proof_d2", "av_slot2"],
  ["Borsoga Edition", "av_proof_d3", "av_slot3"],
] as const;

