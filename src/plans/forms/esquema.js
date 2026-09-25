// Turns a questionnaire schema (the JSON the admin panel edits and publishes)
// into the spec `brief.js` paints. Plain script, no modules: it is inlined into
// the questionnaire pages, loaded by the admin preview, and required by the
// build-time check (scripts/esquema-check.mjs) — so it can't depend on a bundler.
//
// The schema is data only. What used to be functions in brief_web.js /
// brief_grafico.js is written out here once, for every questionnaire:
//
//   · `si`      a list of conditions, ALL of which must hold for a question to
//               show. {f, op, v} with op: filled | eq | ne | in | has.
//   · poda      an answer whose question is hidden doesn't exist: it is reset,
//               repeatedly, until nothing else changes (hiding one question can
//               hide the ones that depended on it).
//   · resumen   the closing summary is every visible question that carries a
//               `resumen` label, plus the fields in its `junto`, joined by " · ".
//
// Answers travel in Spanish (the option's `es`), whatever the page language:
// that is what the server stores and compares. Only what is READ is translated.
//
// The server evaluates `si` too (borsoga-funnel/api/_esquema.ts). Change the
// operators here and there together.
(function (root) {
'use strict';

var CONTACTO = { nombre: 'contactName', correo: 'email', telefono: 'phone', privacidad: 'privacy' };
var LISTAS = { checks: 1, chipchecks: 1, tope: 1 };

function lleno(v) {
  if (Array.isArray(v)) return v.length > 0;
  if (v && typeof v === 'object') return Object.keys(v).length > 0;
  return !!String(v == null ? '' : v).trim();
}

function cumple(conds, a) {
  return (conds || []).every(function (c) {
    var v = a[c.f];
    switch (c.op) {
      case 'filled': return lleno(v);
      case 'eq': return v === c.v;
      case 'ne': return v !== c.v;
      case 'in': return (c.v || []).indexOf(v) > -1;
      case 'has': return Array.isArray(v) && (c.v || []).some(function (x) { return v.indexOf(x) > -1; });
      default: return false;
    }
  });
}

function preguntas(schema) {
  return schema.pasos.reduce(function (all, p) { return all.concat(p.preguntas); }, []);
}

/** Every answer field a question owns, with its empty value. */
function campos(q) {
  var o = {};
  if (q.tipo === 'contacto') {
    o[CONTACTO.nombre] = ''; o[CONTACTO.correo] = ''; o[CONTACTO.telefono] = ''; o[CONTACTO.privacidad] = false;
    return o;
  }
  if (q.tipo === 'ejes') o[q.f] = {};
  else if (LISTAS[q.tipo]) o[q.f] = [];
  else if (q.tipo !== 'subida') o[q.f] = '';
  if (q.enlace) o[q.enlace] = '';
  if (q.area) o[q.area] = '';
  return o;
}

function vacio(schema) {
  var o = {};
  preguntas(schema).forEach(function (q) { Object.assign(o, campos(q)); });
  o.bot = '';
  return o;
}

function poda(schema, a) {
  a = Object.assign({}, a);
  var qs = preguntas(schema);
  for (var vuelta = 0; vuelta < qs.length + 1; vuelta++) {
    var cambio = false;
    qs.forEach(function (q) {
      if (!q.si || cumple(q.si, a)) return;
      var vacios = campos(q);
      Object.keys(vacios).forEach(function (k) {
        if (JSON.stringify(a[k]) !== JSON.stringify(vacios[k])) { a[k] = vacios[k]; cambio = true; }
      });
    });
    if (!cambio) break;
  }
  qs.forEach(function (q) {
    // "Ninguna por ahora" no convive con opciones concretas.
    if (q.solo && Array.isArray(a[q.f]) && a[q.f].indexOf(q.solo) > -1 && a[q.f].length > 1) a[q.f] = [q.solo];
    if (q.tipo === 'ejes') {
      var ax = {}, cur = a[q.f] || {};
      q.ejes.forEach(function (_, i) { if (cur[i] != null) ax[i] = cur[i]; });
      a[q.f] = ax;
    }
  });
  return a;
}

/**
 * The spec for brief.js, plus the strings it looks up by key. `lang` picks
 * which side of every {es, en} pair is shown.
 */
function compilar(schema, lang) {
  var ui = {};
  var n = 0;
  function k(par, nombre) {
    if (!par) return undefined;
    var clave = 'e_' + (nombre || ++n);
    ui[clave] = (par[lang] != null && par[lang] !== '') ? par[lang] : par.es;
    return clave;
  }
  var tx = schema.textos;
  var archivos = [];

  var pasos = schema.pasos.map(function (paso) {
    return {
      titulo: k(paso.titulo, 't_' + paso.id),
      preguntas: paso.preguntas.map(function (q) {
        var p = { f: q.f, tipo: q.tipo, q: k(q.q, 'q_' + q.f), h: k(q.h, 'h_' + q.f) };
        if (q.ph) p.ph = q.ph[lang] || q.ph.es;
        if (q.col) p.col = true;
        if (q.tope) p.tope = q.tope;
        if (q.enlace) p.enlace = q.enlace;
        if (q.area) p.area = q.area;
        if (q.solo) p.solo = q.solo;
        if (q.si) p.si = function (a) { return cumple(q.si, a); };
        if (q.ops) {
          p.ops = q.ops.map(function (o) { return o.es; });
          p.tr = {};
          q.ops.forEach(function (o) { p.tr[o.es] = o[lang] || o.es; });
        }
        if (q.tipo === 'subida') archivos.push(q.f);
        if (q.req) {
          // Referencias: capturas subidas o enlaces escritos, vale cualquiera.
          p.req = q.tipo === 'subida'
            ? function (a, F) { return (F[q.f] || []).length > 0 || (!!q.area && !!String(a[q.area] || '').trim()); }
            : true;
        }
        if (q.tipo === 'ejes') {
          p.ejes = q.ejes.map(function (e, i) { return [k(e.a, 'ax_' + q.f + i + 'a'), k(e.b, 'ax_' + q.f + i + 'b')]; });
          p.a11y = k(q.a11y, 'a11y_' + q.f);
        }
        if (q.tipo === 'contacto') {
          p.nombre = CONTACTO.nombre; p.correo = CONTACTO.correo;
          p.telefono = CONTACTO.telefono; p.privacidad = CONTACTO.privacidad;
          p.lbNombre = k(q.campos.nombre, 'lb_nombre');
          p.lbCorreo = k(q.campos.correo, 'lb_correo');
          p.lbTelefono = k(q.campos.telefono, 'lb_telefono');
        }
        return p;
      })
    };
  });

  var porCampo = {};
  pasos.forEach(function (paso) { paso.preguntas.forEach(function (p) { porCampo[p.f] = p; }); });
  var conResumen = preguntas(schema).filter(function (q) { return q.resumen; });
  conResumen.forEach(function (q) { k(q.resumen, 'sum_' + q.f); });

  function valor(f, a, h) {
    var p = porCampo[f], v = a[f];
    var tr = function (s) { return p && p.tr && p.tr[s] || s; };
    if (p && p.tipo === 'ejes') {
      return p.ejes.map(function (ax, i) {
        return v && v[i] ? h.t(ax[0]) + ' ' + v[i] + '/5 ' + h.t(ax[1]) : '';
      }).filter(Boolean).join(' · ');
    }
    if (p && p.tipo === 'subida') return p.area ? String(a[p.area] || '') : '';
    if (Array.isArray(v)) return v.map(tr).join(' · ');
    return v ? tr(String(v)) : '';
  }

  var spec = {
    servicio: schema.servicio,
    version: schema.version || null,
    planes: schema.planes || [],
    clave: schema.clave,
    total: pasos.length,
    contador: k(tx.contador, 'contador'),
    contadorTope: k(tx.tope, 'tope'),
    subir: k(tx.subir, 'subir'),
    enlace: k(tx.enlace, 'enlace'),
    guardado: k(tx.guardado, 'guardado'),
    archivos: archivos,
    contactoCampos: { correo: CONTACTO.correo },
    final: { titulo: k(tx.finalTitulo, 'final_t'), p1: k(tx.finalP1, 'final_1'), p2: k(tx.finalP2, 'final_2'),
             firma: k(tx.finalFirma, 'final_firma'), resumen: k(tx.resumen, 'final_resumen') },
    vacio: vacio(schema),
    poda: function (a) { return poda(schema, a); },
    pasos: pasos,
    resumen: function (a, h) {
      return conResumen.filter(function (q) { return !q.si || cumple(q.si, a); }).map(function (q) {
        var partes = [valor(q.f, a, h)].concat((q.junto || []).map(function (f) { return valor(f, a, h); }));
        return ['e_sum_' + q.f, partes.filter(Boolean).join(' · ')];
      }).filter(function (fila) { return fila[1]; });
    }
  };
  return { spec: spec, ui: ui };
}

var api = { compilar: compilar, cumple: cumple, vacio: vacio, poda: poda, preguntas: preguntas, campos: campos };
if (typeof module !== 'undefined' && module.exports) module.exports = api;
else root.BORSOGA_ESQUEMA = api;
})(typeof window !== 'undefined' ? window : this);
