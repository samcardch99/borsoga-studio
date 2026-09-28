// Rules of the configurators (interior, AV), as data: which plan to recommend,
// which kind of answer the lead gets (call / range / mail) and which warnings
// to show. Edited in the admin panel; evaluated here in the page and, with the
// same semantics, on the server (borsoga-funnel/api/_reglas.ts). Change one,
// change the other.
//
// A rule holds when ALL its conditions hold. Rules are tried in order and the
// first that holds wins; `planDefecto` / `rutaDefecto` apply when none does.
//
// Conditions read "signals" the configurator computes from the answers
// ({s: 'unidades', op: '>', v: 6}, {s: 'estructural'}), or an answer directly
// ({s: 'campo', f: 'finish', op: 'es', v: 'Lujo'}).
(function (root) {
'use strict';

function lleno(v) {
  if (Array.isArray(v)) return v.length > 0;
  if (v && typeof v === 'object') return Object.keys(v).length > 0;
  return !!String(v == null ? '' : v).trim();
}

function una(c, sen, a) {
  if (c.s === 'campo') {
    var v = a[c.f];
    switch (c.op) {
      case 'es': return v === c.v;
      case 'no_es': return v !== c.v;
      case 'una_de': return (c.v || []).indexOf(v) > -1;
      case 'incluye': return Array.isArray(v) && v.indexOf(c.v) > -1;
      case 'lleno': return lleno(v);
      case 'vacio': return !lleno(v);
      default: return false;
    }
  }
  var x = sen[c.s];
  switch (c.op || 'si') {
    case 'si': return !!x;
    case 'no': return !x;
    case 'es': return x === c.v;
    case 'no_es': return x !== c.v;
    case '>': return typeof x === 'number' && x > c.v;
    case '>=': return typeof x === 'number' && x >= c.v;
    case '<': return typeof x === 'number' && x < c.v;
    case '<=': return typeof x === 'number' && x <= c.v;
    default: return false;
  }
}

function cumple(conds, sen, a) {
  return (conds || []).every(function (c) { return una(c, sen, a); });
}

function primera(lista, sen, a) {
  for (var i = 0; i < (lista || []).length; i++) if (cumple(lista[i].si, sen, a)) return lista[i];
  return null;
}

// {unidades}, {espacios}, {escenas}… come from the signals.
function rellena(s, sen) {
  return String(s == null ? '' : s).replace(/\{(\w+)\}/g, function (m, k) { return sen[k] != null ? sen[k] : m; });
}
var texto = function (par, lang, sen) { return par ? rellena(par[lang] || par.es, sen) : ''; };

function plan(R, sen, a) {
  var r = primera(R.plan, sen, a);
  return r ? r.plan : R.planDefecto;
}

/** [tipo, título, texto] in `lang`. */
function ruta(R, sen, a, lang) {
  var r = primera(R.ruta, sen, a) || R.rutaDefecto;
  return [r.tipo, texto(R.titulos[r.tipo], lang, sen), texto(r.texto, lang, sen)];
}

function aviso(R, sen, a, lang) {
  var r = primera(R.avisos, sen, a);
  return r ? texto(r.texto, lang, sen) : '';
}

var api = { cumple: cumple, plan: plan, ruta: ruta, aviso: aviso, rellena: rellena };
if (typeof module !== 'undefined' && module.exports) module.exports = api;
else root.BORSOGA_REGLAS = api;
})(typeof window !== 'undefined' ? window : this);
