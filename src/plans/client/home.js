// Funnel home page behaviour — ported verbatim from the retired generator
// (borsoga-funnel/src/servicios.py, SCRIPT block), with ONE change: the submit
// endpoint is now absolute. borsogastudio.com is static on Hostinger and the
// serverless functions stayed on Vercel, so this is a cross-origin POST and the
// function answers with the CORS headers.
//
// Reads window.BORSOGA_I18N / BORSOGA_LANG / BORSOGA_API, all set by
// components/plans/I18nBundle.astro, which must run before this.

(function () {
  'use strict';
  var T = (window.BORSOGA_I18N || {})[window.BORSOGA_LANG || 'es'] || { ui: {}, msg: {} };
  var t = function (k) { return (T.ui && T.ui[k]) || (T.msg && T.msg[k]) || ''; };
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var TYPOS = {'gmial.com':'gmail.com','gmai.com':'gmail.com','gmail.co':'gmail.com','gmail.con':'gmail.com',
   'gmil.com':'gmail.com','gnail.com':'gmail.com','hotmial.com':'hotmail.com','hotmai.com':'hotmail.com',
   'hotmail.co':'hotmail.com','yahooo.com':'yahoo.com','yaho.com':'yahoo.com','outlok.com':'outlook.com',
   'outlook.co':'outlook.com','icoud.com':'icloud.com'};
  var sug = function (e) { var p = String(e||'').split('@');
    var f = p.length > 1 ? TYPOS[p[1].trim().toLowerCase()] : null; return f ? p[0] + '@' + f : ''; };
  var fill = function (s, v) { return String(s||'').replace(/\{(\w+)\}/g, function (m,k) { return v[k]!=null?v[k]:''; }); };
  var $ = function (id) { return document.getElementById(id); };

  document.documentElement.classList.add('js');
  [].forEach.call(document.querySelectorAll('.bs-fade'), function (el) { el.classList.add('on'); });

  // ---------- cortina: el negro llega al pie del titular y se disuelve antes
  // del párrafo. Se mide en vez de fijarse porque el titular reflowea con el
  // ancho y con la carga de la tipografía.
  var curtain = $('bs-curtain'), h1 = $('bs-h1'), hero = $('bs-hero');
  var navzone = $('bs-navzone');
  var lastT = 0, lastB = 0;

  // El final del degradado se traza con smootherstep en vez de tres paradas
  // sueltas. La curva entra y sale plana, así que no se ve la costura donde
  // acaba el negro ni el borde donde el degradado toca el blanco: las dos
  // uniones eran justo lo que hacía que el acabado se notara duro. Se muestrea
  // en 14 paradas, suficientes para que no aparezcan bandas en pantallas de 8
  // bits, y la cola se alarga por debajo del párrafo —el último 3% de negro
  // repartido en 80px es lo que hace que el remate se lea suave.
  function rampa(desde, largo) {
    var s = [];
    for (var i = 0; i <= 14; i++) {
      var p = i / 14, ss = p * p * p * (p * (p * 6 - 15) + 10);
      s.push('rgba(0,0,0,' + (1 - ss).toFixed(3) + ') ' +
             Math.round(desde + largo * p) + 'px');
    }
    return s.join(',');
  }
  function medir() {
    if (!curtain || !hero) return;
    var curtainRect = curtain.getBoundingClientRect();
    // getBoundingClientRect() devuelve píxeles ya ampliados por `zoom`. Si se
    // escriben directamente como medidas CSS, el breakpoint 4K los amplía una
    // segunda vez y la cortina termina tapando el párrafo. Volvemos primero a
    // unidades CSS usando la relación entre el ancho visual y offsetWidth.
    var escala = curtain.offsetWidth ? curtainRect.width / curtain.offsetWidth : 1;
    if (!isFinite(escala) || escala <= 0) escala = 1;
    var cero = curtainRect.top;
    var total = Math.round((hero.getBoundingClientRect().top - cero) / escala);
    var negro = h1
      ? Math.round((h1.getBoundingClientRect().bottom - cero) / escala + 14)
      : Math.round(total * 0.72);
    if (total > 300 && (total !== lastT || negro !== lastB)) {
      lastT = total; lastB = negro;
      var b = Math.min(negro, Math.round(total * 0.86));
      var cola = total - b;
      curtain.style.height = (b + cola) + 'px';
      curtain.firstElementChild.style.background =
        'linear-gradient(to bottom,#000 0,#000 ' + b + 'px,' + rampa(b, cola) + ')';

      // Keep the navbar's dark zone ending at the middle of the fade. The
      // curtain starts ABOVE the page box, so this is measured from the page
      // itself rather than assuming that offset. The site navbar re-queries
      // [data-navbar-dark] on every scroll, so resizing this is enough to make
      // it flip.
      if (navzone && navzone.parentElement) {
        var medio = cero + (b + cola * 0.5) * escala;
        var arribaPagina = navzone.parentElement.getBoundingClientRect().top;
        navzone.style.height =
          Math.max(0, Math.round((medio - arribaPagina) / escala)) + 'px';
      }
    }
  }
  addEventListener('resize', medir);
  medir(); setTimeout(medir, 400);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);

  // ---------- header: transparente sobre el negro, blanco al bajar
  //
  // The generator's own sticky header did this by hand. The page now uses the
  // real site navbar, which does the same thing natively from the
  // data-navbar-dark / data-navbar-transparent markers on the hero — so this
  // block only runs if that old header is still in the page. Kept rather than
  // deleted so the script also works if it is ever mounted standalone.
  var header = $('bs-header'), lb = $('bs-logo-b'), lw = $('bs-logo-w'),
      lang = $('bs-lang'), arriba = null;
  if (header && lb && lw) {
    var scroll = function () {
      var top = (scrollY || 0) < 40;
      if (top === arriba) return;
      arriba = top;
      header.style.background = top ? 'transparent' : '#fff';
      header.style.borderBottomColor = top ? 'rgba(255,255,255,.14)' : 'rgba(0,0,0,.12)';
      lb.style.opacity = top ? '0' : '1';
      lw.style.opacity = top ? '1' : '0';
      if (lang) lang.style.color = top ? '#fff' : '#000';
    };
    addEventListener('scroll', scroll, { passive: true });
    scroll();
  }

  // ---------- servicios: el nombre se cruza con su descripción
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-toggle]');
    if (!b) return;
    var fila = b.closest('.srv-row');
    fila.dataset.open = fila.dataset.open === 'true' ? 'false' : 'true';
  });
  [].forEach.call(document.querySelectorAll('.srv-row'), function (fila) {
    fila.addEventListener('mouseenter', function () { fila.dataset.open = 'true'; });
    fila.addEventListener('mouseleave', function () { fila.dataset.open = 'false'; });
  });

  // ---------- formulario
  var modal = $('bs-modal'), servicio = '';
  function etiqueta(s) {
    if (s === 'developer') return t('srv_service_developer');
    if (s === 'meeting') return t('srv_meet_subject');
    return t(s);
  }
  function abrir(s) {
    servicio = s || '';
    $('bs-svc-l').textContent = etiqueta(servicio);
    $('bs-svc').hidden = !servicio;
    if (servicio === 'meeting') {
      var p = modal.querySelector('[name=project]');
      if (!p.value) p.value = t('srv_meet_subject');
    }
    $('bs-form').hidden = false; $('bs-sent').hidden = true; $('bs-err').hidden = true;
    hecho = false; $('bs-mark').classList.remove('on');
    precargar();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var n = modal.querySelector('[name=name]'); if (n) n.focus();
  }
  function cerrar() { modal.hidden = true; document.body.style.overflow = ''; }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-form]');
    if (b) { e.preventDefault(); return abrir(b.dataset.form); }
    if (e.target === modal || e.target.closest('#bs-close')) return cerrar();
    if (e.target.closest('#bs-fix')) {
      var el = modal.querySelector('[name=email]');
      el.value = sug(el.value); return revisar();
    }
  });
  addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) cerrar(); });

  function datos() {
    var o = {};
    [].forEach.call(modal.querySelectorAll('[name]'), function (i) { o[i.name] = i.value.trim(); });
    return o;
  }
  function revisar() {
    var f = datos(), s = sug(f.email);
    $('bs-bad').hidden = !(f.email && !EMAIL_RE.test(f.email));
    $('bs-sug').hidden = !s;
    if (s) $('bs-sug-t').textContent = fill(t('srv_did_you_mean'), { email: s });
  }
  modal.addEventListener('input', revisar);


  // ---------- acuse: la marca de Borsoga se traza y el punto central se
  // convierte en palomita. GSAP y sus dos plugins se piden al abrir el
  // formulario, no al cargar la página: quien nunca lo abre no paga tres
  // peticiones, y quien lo abre tarda en rellenarlo más de lo que tardan en
  // llegar. Si el CDN falla la marca se muestra ya terminada —por eso el `d`
  // del centro se escribe como palomita en el HTML y no como círculo.
  var CDN = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/';
  var CIRCULO = 'M60,45C68.28,45,75,51.72,75,60C75,68.28,68.28,75,60,75C51.72,75,45,68.28,45,60C45,51.72,51.72,45,60,45Z', PALOMITA = 'M44.5,59L53.5,68L76.5,45L82,50.5L53.5,79L39,64.5Z';
  var listo = null, espera = [], hecho = false;   // null = sin pedir, false = no hay GSAP

  function guion(srcs, cb) {
    var i = 0;
    (function sig() {
      if (i >= srcs.length) return cb();
      var e = document.createElement('script');
      e.src = CDN + srcs[i++];
      e.onload = sig;
      e.onerror = cb;            // si uno cae, se resuelve sin GSAP y se acabó
      document.head.appendChild(e);
    })();
  }
  function precargar() {
    if (listo !== null) return;
    listo = 'pidiendo';
    guion(['gsap.min.js', 'MorphSVGPlugin.min.js', 'DrawSVGPlugin.min.js'], function () {
      listo = !!(window.gsap && window.MorphSVGPlugin && window.DrawSVGPlugin);
      if (listo) gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);
      espera.splice(0).forEach(function (f) { f(); });
    });
  }
  function mostrarMarca() { hecho = true; $('bs-mark').classList.add('on'); }

  function animarMarca() {
    if (hecho) return;
    if (matchMedia('(prefers-reduced-motion:reduce)').matches || listo === false)
      return mostrarMarca();
    if (listo !== true) {                       // todavía en vuelo: se espera
      espera.push(animarMarca); precargar();
      return setTimeout(function () { if (!hecho) mostrarMarca(); }, 900);
    }
    mostrarMarca();
    gsap.timeline()
      .set('#bs-mk-c', { morphSVG: CIRCULO, scale: 0, transformOrigin: '50% 50%' })
      .from('#bs-sent', { autoAlpha: 0, y: 12, duration: .5, ease: 'power2.out' })
      .fromTo('#bs-mk-ring', { drawSVG: '50% 50%' },
              { drawSVG: '0% 100%', duration: 1.05, ease: 'power2.inOut' }, .1)
      .fromTo(['#bs-mk-l', '#bs-mk-r'], { drawSVG: '50% 50%' },
              { drawSVG: '0% 100%', duration: .8, ease: 'power2.out', stagger: .1 }, .2)
      .to('#bs-mk-c', { scale: 1, duration: .5, ease: 'back.out(2.2)' }, .6)
      .to('#bs-mk-c', { morphSVG: PALOMITA, duration: .55, ease: 'power2.inOut' }, 1.1)
      .from(['#bs-sent-t', '#bs-sent-s'],
            { autoAlpha: 0, y: 10, duration: .55, stagger: .1, ease: 'power2.out' }, .8);
  }
  function acusar(email) {
    $('bs-form').hidden = true;
    $('bs-sent').hidden = false;
    $('bs-sent-t').textContent = t('srv_sent_title');
    $('bs-sent-s').textContent = fill(t('srv_sent_sub'), { email: email });
    animarMarca();
  }

  $('bs-send').addEventListener('click', function () {
    var f = datos(), falta = [];
    if (!f.name) falta.push(t('f_name'));
    if (!EMAIL_RE.test(f.email)) falta.push(t('f_email'));
    if (!f.phone) falta.push(t('f_phone'));
    if (!f.project) falta.push(t('f_project'));
    if (falta.length) {
      $('bs-err').hidden = false;
      $('bs-err').textContent = t('err_missing') + ' ' + falta.join(', ') + '.';
      return revisar();
    }
    if (f.bot) return acusar(f.email);   // trampa para robots: acuse falso

    $('bs-err').hidden = true;
    var btn = $('bs-send'), original = btn.textContent;
    btn.disabled = true; btn.textContent = t('sending');
    fetch((window.BORSOGA_API || '') + '/api/submit/', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        service: 'contacto',
        answers: { name: f.name, email: f.email, phone: f.phone, project: f.project,
                   servicio: etiqueta(servicio) || 'Portada de servicios',
                   servicioClave: servicio, privacy: true },
        derived: { origen: 'servicios' }, files: []
      })
    })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (j) {
        btn.disabled = false; btn.textContent = original;
        if (!j || !j.ok) {
          $('bs-err').hidden = false;
          $('bs-err').textContent = (j && j.error) || t('err_send');
          return;
        }
        acusar(f.email);
      })
      .catch(function () {
        btn.disabled = false; btn.textContent = original;
        $('bs-err').hidden = false;
        $('bs-err').textContent = t('err_net');
      });
  });

  // Los CTA de otras páginas abren el formulario con el asunto ya puesto.
  try {
    var q = new URLSearchParams(location.search).get('form');
    if (q) abrir(q);
  } catch (e) {}
})();
