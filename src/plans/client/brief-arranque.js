// Starts a questionnaire from its schema: compiles it (forms/esquema.js) for the
// page language, adds the strings it names to the i18n bundle, and hands the
// spec to brief.js. Load order: I18nBundle, brief.js, esquema.js, this.
//
// The schema is asked for live, to the API, every time the page opens: what is
// published in the admin panel shows up here at once, with no rebuild of the
// site and no CDN cache in the way. window.BORSOGA_FORM — the version that was
// published when the site was last built — is only the fallback for when the
// API doesn't answer in time.
//
// ?vista=1 is the admin panel's preview. The page is then inside an iframe of
// the panel and starts from the DRAFT the panel sends by postMessage, not from
// the published schema baked into the page. It never sends anything (brief.js
// stops at the thank-you screen) and keeps its progress under its own key.
(function () {
'use strict';

var PANEL = ['https://admin.borsogastudio.com', 'http://localhost:3000'];

function inicia(schema, vista) {
  var lang = window.BORSOGA_LANG || 'es';
  var c = window.BORSOGA_ESQUEMA.compilar(schema, lang);
  var d = (window.BORSOGA_I18N = window.BORSOGA_I18N || {})[lang] = window.BORSOGA_I18N[lang] || {};
  d.ui = Object.assign(d.ui || {}, c.ui);
  if (vista) {
    c.spec.vistaPrevia = true;
    c.spec.clave += '.vista';
    try { localStorage.removeItem(c.spec.clave); } catch (e) {}
  }
  window.BORSOGA_BRIEF(c.spec);
}

var ESPERA = 5000;

function publicado() {
  var reserva = window.BORSOGA_FORM, hecho = false;
  function una(schema) {
    if (hecho) return;
    hecho = true;
    inicia(schema, false);
  }
  var t = setTimeout(function () { una(reserva); }, ESPERA);
  fetch((window.BORSOGA_API || '') + '/api/forms/' + reserva.servicio + '/', { headers: { accept: 'application/json' } })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (j) {
      if (!j || !j.schema || !j.schema.pasos || !j.version) throw new Error('respuesta sin esquema');
      clearTimeout(t);
      una(Object.assign({}, j.schema, { version: j.version }));
    })
    .catch(function (e) {
      if (window.console) console.warn('[cuestionario] uso la copia de la página:', e && e.message);
      clearTimeout(t);
      una(reserva);
    });
}

if (!/[?&]vista=1(&|$)/.test(location.search) || window.parent === window) {
  return publicado();
}

var empezado = false;
window.addEventListener('message', function (e) {
  if (PANEL.indexOf(e.origin) < 0 || !e.data || e.data.tipo !== 'borsoga-esquema') return;
  // brief.js engancha sus eventos al documento: una segunda puesta en marcha
  // los duplicaría. Para ver otro borrador, el panel recarga el iframe.
  if (empezado) return;
  empezado = true;
  inicia(e.data.schema, true);
});
PANEL.forEach(function (o) {
  try { window.parent.postMessage({ tipo: 'borsoga-lista' }, o); } catch (e) {}
});
})();
