// Questionnaire spec, verbatim from the retired generator (borsoga-funnel/src/brief_grafico.js).
// Pure data: the constants stay in Spanish on purpose — they are the canonical
// value that travels to the server AND the index `opt` looks the translation up by.
// Calls window.BORSOGA_BRIEF, so brief.js must load first.

/**
 * Cuestionario de Diseño Gráfico (identidad de marca) — 11 pasos.
 *
 * Portado del artboard 'Cuestionario Diseno Grafico'. Igual que el de diseño
 * web: las constantes se quedan en español porque son el valor canónico que
 * viaja al servidor, y las pinta `brief.js`.
 */
(function () {
'use strict';

var YES = 'Sí';
var NO = 'No';
var UNSURE = 'No estoy seguro';
var YES_NO = [YES, NO];
var YES_NO_UNSURE = [YES, NO, UNSURE];

var SCRATCH = 'Crear una identidad visual desde cero';
var REDESIGN = 'Rediseñar completamente una identidad existente';
var REFRESH = 'Actualizar/refrescar una identidad existente';
var EXTEND = 'Ampliar un sistema de identidad que ya existe';
var PROJECT_TYPES = [SCRATCH, REDESIGN, REFRESH, EXTEND];

var SEVERAL = 'Tenemos varias opciones';
var NAME_DEFINED = [YES, NO, SEVERAL];

var IDENTITY_AGE = ['Menos de 1 año', '1–3 años', '3–5 años', 'Más de 5 años', 'No lo sé'];
var CHANGE_REASON = ['La empresa evolucionó', 'Se siente anticuada', 'No representa correctamente nuestro posicionamiento', 'No funciona bien digitalmente', 'No tiene suficiente consistencia', 'Queremos llegar a un nuevo público', 'Estamos entrando en nuevos mercados', 'Estamos cambiando de nombre', 'Estamos lanzando nuevos productos/servicios', 'Otro'];

var CATEGORY = ['Servicios profesionales', 'Tecnología', 'Salud', 'Real Estate / Desarrollo inmobiliario', 'Arquitectura / Construcción', 'Hospitality', 'Retail', 'Alimentos y bebidas', 'Moda / Lifestyle', 'Producto de consumo', 'E-commerce', 'Marca personal', 'Nonprofit', 'Otro'];
var STAGE = ['Próxima a lanzarse', 'Recién lanzada', 'En crecimiento', 'Empresa establecida', 'En expansión hacia nuevos mercados', 'En proceso de transformación/rebranding'];
var VS_COMP = ['Verse más premium', 'Verse más moderna', 'Verse más confiable', 'Verse más accesible/cercana', 'Verse más innovadora', 'Verse más especializada', 'Verse más sólida/corporativa', 'Diferenciarse completamente', 'Otro'];

var B2C = 'Consumidores — B2C';
var B2B = 'Empresas — B2B';
var BOTH = 'Ambos';
var SELLS_TO = [B2C, B2B, BOTH, 'Otro'];

var TRAITS = ['Elegante', 'Moderna', 'Sofisticada', 'Premium', 'Cercana', 'Humana', 'Profesional', 'Confiable', 'Innovadora', 'Audaz', 'Minimalista', 'Técnica', 'Exclusiva', 'Artesanal', 'Dinámica', 'Juvenil', 'Atemporal', 'Disruptiva', 'Seria', 'Cálida'];
var AXES = [['ax1a', 'ax1b'], ['ax2a', 'ax2b'], ['ax3a', 'ax3b'], ['ax4a', 'ax4b'], ['ax5a', 'ax5b'], ['ax6a', 'ax6b']];

var COLORS_KEEP = 'Sí, debemos conservarlos';
var COLORS_OPEN = 'Sí, pero estamos abiertos a cambiarlos';
var BRAND_COLORS = [COLORS_KEEP, COLORS_OPEN, NO, UNSURE];

var PACKAGING = 'Packaging';
var PREMISES = 'Local comercial / oficinas';
var SIGNAGE = 'Señalización';
var TOUCHPOINTS = ['Sitio web', 'Redes sociales', 'Aplicaciones / plataformas digitales', 'Presentaciones', 'Papelería', SIGNAGE, PREMISES, 'Uniformes', 'Vehículos', PACKAGING, 'Productos físicos', 'Material publicitario', 'Impresos', 'Merchandising', 'Otro'];
var UNDEFINED_YET = 'Todavía no está definido';
var PACKAGING_SCOPE = [YES, NO, UNDEFINED_YET];
var SPACES = ['Uno', 'Varios', UNDEFINED_YET];
var LANGUAGES = ['Inglés', 'Español', 'Inglés + Español', 'Otro'];
var APPROVERS = ['Una persona', 'Dos personas', 'Tres o más personas', 'Un equipo/directiva'];

var conIdentidad = function (a) {
  return a.projectType === REDESIGN || a.projectType === REFRESH || a.projectType === EXTEND;
};
var esNueva = function (a) { return a.projectType === SCRATCH; };
var tiene = function (a, campo, v) { return (a[campo] || []).indexOf(v) > -1; };

window.BORSOGA_BRIEF({
  servicio: 'grafico',
  planes: ['Brand-Essentials', 'Brand-Premium', 'Brand-Edition',
           'Social-Essential', 'Social-Premium', 'Social-Edition'],
  clave: 'borsoga.cuestionario.gd.v2',
  contador: 'gd_step_counter',
  contadorTope: 'gd_picked',
  subir: 'gd_upload',
  enlace: 'gd_link',
  guardado: 'gd_save_note',
  archivos: ['currentFiles', 'refFiles', 'spaceFiles'],
  contactoCampos: { correo: 'email' },
  final: { titulo: 'gd_final_title', p1: 'gd_final_p1', p2: 'gd_final_p2',
           firma: 'gd_final_sig', resumen: 'gd_sum_title' },

  vacio: {
    company: '', webSocial: '', projectType: '', nameDefined: '', needsNaming: '',
    identityAge: '', changeReason: [], keepWhat: '', changeWhat: '', currentLink: '',
    whatDoes: '', products: '', mainProduct: '', category: '', stage: '',
    problem: '', diff: '', vsComp: [],
    sellsTo: '', idealCompanies: '',
    personality: [], axes: {},
    meaning: '', meaningWhich: '', avoidElements: '', brandColors: '', whichColors: '',
    avoidColors: '', whichAvoidColors: '',
    refBrands: '', hasRefs: '', refsText: '', refsWhy: '',
    touchpoints: [], packagingType: '', packagingScope: '', spaces: '',
    languages: [], restrictions: '',
    approvers: '', anythingElse: '',
    contactName: '', email: '', phone: '', privacy: false, bot: ''
  },

  poda: function (a) {
    a = Object.assign({}, a);
    if (!esNueva(a)) { a.nameDefined = ''; a.needsNaming = ''; }
    if (a.nameDefined === YES) a.needsNaming = '';
    if (!conIdentidad(a)) {
      a.identityAge = ''; a.changeReason = []; a.keepWhat = ''; a.changeWhat = ''; a.currentLink = '';
    }
    if (a.sellsTo !== B2B && a.sellsTo !== BOTH) a.idealCompanies = '';
    if (a.meaning !== YES) a.meaningWhich = '';
    if (a.brandColors !== COLORS_KEEP && a.brandColors !== COLORS_OPEN) a.whichColors = '';
    if (a.avoidColors !== YES) a.whichAvoidColors = '';
    if (a.hasRefs !== YES) { a.refsText = ''; a.refsWhy = ''; }
    if (!tiene(a, 'touchpoints', PACKAGING)) { a.packagingType = ''; a.packagingScope = ''; }
    if (!tiene(a, 'touchpoints', PREMISES) && !tiene(a, 'touchpoints', SIGNAGE)) a.spaces = '';
    var ax = {};
    AXES.forEach(function (_, i) { if (a.axes && a.axes[i] != null) ax[i] = a.axes[i]; });
    a.axes = ax;
    return a;
  },

  pasos: [
    { titulo: 'gd_s1', preguntas: [
      { f: 'company', q: 'q_company', tipo: 'texto', req: true },
      { f: 'webSocial', q: 'q_webSocial', h: 'h_webSocial', tipo: 'texto', ph: 'borsoga.studio' },
      { f: 'projectType', q: 'q_projectType', tipo: 'cards', ops: PROJECT_TYPES, req: true, col: true },
      { f: 'nameDefined', q: 'q_nameDefined', tipo: 'chips', ops: NAME_DEFINED, req: true, si: esNueva },
      { f: 'needsNaming', q: 'q_needsNaming', tipo: 'chips', ops: YES_NO_UNSURE, req: true,
        si: function (a) { return esNueva(a) && !!a.nameDefined && a.nameDefined !== YES; } },
      { f: 'identityAge', q: 'q_identityAge', tipo: 'chips', ops: IDENTITY_AGE, req: true, si: conIdentidad },
      { f: 'changeReason', q: 'q_changeReason', tipo: 'checks', ops: CHANGE_REASON, req: true, si: conIdentidad },
      { f: 'keepWhat', q: 'q_keepWhat', tipo: 'area', si: conIdentidad },
      { f: 'changeWhat', q: 'q_changeWhat', tipo: 'area', si: conIdentidad },
      { f: 'currentFiles', q: 'q_currentIdentity', h: 'h_currentIdentity', tipo: 'subida',
        enlace: 'currentLink', si: conIdentidad }
    ] },

    { titulo: 'gd_s2', preguntas: [
      { f: 'whatDoes', q: 'q_whatDoes', h: 'h_whatDoes', tipo: 'area', req: true },
      { f: 'products', q: 'q_products', tipo: 'area' },
      { f: 'mainProduct', q: 'q_mainProduct', tipo: 'texto' },
      { f: 'category', q: 'q_category', tipo: 'chips', ops: CATEGORY, req: true },
      { f: 'stage', q: 'q_stage', tipo: 'cards', ops: STAGE, req: true }
    ] },

    { titulo: 'gd_s3', preguntas: [
      { f: 'problem', q: 'q_problem', tipo: 'area', req: true },
      { f: 'diff', q: 'q_diff', h: 'h_diff', tipo: 'area', req: true },
      { f: 'vsComp', q: 'q_vsComp', tipo: 'checks', ops: VS_COMP }
    ] },

    { titulo: 'gd_s4', preguntas: [
      { f: 'sellsTo', q: 'q_sellsTo', tipo: 'chips', ops: SELLS_TO, req: true },
      { f: 'idealCompanies', q: 'q_idealCompanies', tipo: 'area', req: true,
        si: function (a) { return a.sellsTo === B2B || a.sellsTo === BOTH; } }
    ] },

    { titulo: 'gd_s5', preguntas: [
      { f: 'personality', q: 'q_personality', h: 'h_personality', tipo: 'tope', ops: TRAITS, tope: 5, req: true },
      { f: 'axes', q: 'q_axes', tipo: 'ejes', ejes: AXES, a11y: 'ax_a11y', req: true }
    ] },

    { titulo: 'gd_s6', preguntas: [
      { f: 'meaning', q: 'q_meaning', h: 'h_meaning', tipo: 'chips', ops: YES_NO_UNSURE, req: true },
      { f: 'meaningWhich', q: 'q_meaningWhich', tipo: 'area', req: true,
        si: function (a) { return a.meaning === YES; } },
      { f: 'avoidElements', q: 'q_avoidElements', tipo: 'area' },
      { f: 'brandColors', q: 'q_brandColors', tipo: 'cards', ops: BRAND_COLORS, req: true },
      { f: 'whichColors', q: 'q_whichColors', tipo: 'texto', req: true,
        si: function (a) { return a.brandColors === COLORS_KEEP || a.brandColors === COLORS_OPEN; } },
      { f: 'avoidColors', q: 'q_avoidColors', tipo: 'chips', ops: YES_NO, req: true },
      { f: 'whichAvoidColors', q: 'q_whichAvoidColors', tipo: 'texto', req: true,
        si: function (a) { return a.avoidColors === YES; } }
    ] },

    { titulo: 'gd_s7', preguntas: [
      { f: 'refBrands', q: 'q_refBrands', h: 'h_refBrands', tipo: 'area', req: true },
      { f: 'hasRefs', q: 'q_hasRefs', h: 'h_hasRefs', tipo: 'chips', ops: YES_NO, req: true },
      { f: 'refFiles', q: 'q_refs', h: 'h_refs', tipo: 'subida', area: 'refsText',
        si: function (a) { return a.hasRefs === YES; },
        req: function (a, F) { return !!String(a.refsText).trim() || F.refFiles.length > 0; } },
      { f: 'refsWhy', q: 'q_refsWhy', h: 'h_refsWhy', tipo: 'area',
        si: function (a) { return a.hasRefs === YES; } }
    ] },

    { titulo: 'gd_s8', preguntas: [
      { f: 'touchpoints', q: 'q_touchpoints', tipo: 'checks', ops: TOUCHPOINTS, req: true },
      { f: 'packagingType', q: 'q_packagingType', tipo: 'area',
        si: function (a) { return tiene(a, 'touchpoints', PACKAGING); } },
      { f: 'packagingScope', q: 'q_packagingScope', tipo: 'chips', ops: PACKAGING_SCOPE, req: true,
        si: function (a) { return tiene(a, 'touchpoints', PACKAGING); } },
      { f: 'spaces', q: 'q_spaces', tipo: 'chips', ops: SPACES, req: true,
        si: function (a) { return tiene(a, 'touchpoints', PREMISES) || tiene(a, 'touchpoints', SIGNAGE); } },
      { f: 'spaceFiles', q: 'q_spaceFiles', tipo: 'subida',
        si: function (a) { return tiene(a, 'touchpoints', PREMISES) || tiene(a, 'touchpoints', SIGNAGE); } }
    ] },

    { titulo: 'gd_s9', preguntas: [
      { f: 'languages', q: 'q_languages', tipo: 'chipchecks', ops: LANGUAGES, req: true },
      { f: 'restrictions', q: 'q_restrictions', h: 'h_restrictions', tipo: 'area' }
    ] },

    { titulo: 'gd_s11', preguntas: [
      { f: 'approvers', q: 'q_approvers', tipo: 'cards', ops: APPROVERS, req: true }
    ] },

    { titulo: 'gd_s12', preguntas: [
      { f: 'anythingElse', q: 'q_anythingElse', tipo: 'area' },
      { f: 'contacto', q: 'gd_contact', tipo: 'contacto', req: true,
        nombre: 'contactName', correo: 'email', telefono: 'phone', privacidad: 'privacy',
        lbNombre: 'gd_lb_name', lbCorreo: 'gd_lb_email', lbTelefono: 'gd_lb_phone' }
    ] }
  ],

  resumen: function (a, h) {
    var tr = h.tr, lista = h.lista, raya = '—';
    var val = function (v) { return tr(v) || raya; };
    var filas = [
      ['sum_company', a.company || raya],
      ['sum_projectType', val(a.projectType)]
    ];
    if (a.needsNaming) filas.push(['sum_naming', tr(a.needsNaming)]);
    if (conIdentidad(a)) {
      filas.push(['sum_identityAge', val(a.identityAge)]);
      filas.push(['sum_changeReason', lista(a.changeReason) || raya]);
    }
    filas.push(['sum_whatDoes', a.whatDoes || raya]);
    filas.push(['sum_category', val(a.category)]);
    filas.push(['sum_stage', val(a.stage)]);
    filas.push(['sum_diff', a.diff || raya]);
    if (a.vsComp.length) filas.push(['sum_vsComp', lista(a.vsComp)]);
    filas.push(['sum_sellsTo', val(a.sellsTo)]);
    filas.push(['sum_personality', lista(a.personality) || raya]);
    filas.push(['sum_axes', AXES.map(function (ax, i) {
      return a.axes[i] ? h.t(ax[0]) + ' ' + a.axes[i] + '/5 ' + h.t(ax[1]) : '';
    }).filter(Boolean).join(' · ') || raya]);
    if (a.meaningWhich) filas.push(['sum_meaning', a.meaningWhich]);
    filas.push(['sum_colors', val(a.brandColors) + (a.whichColors ? ' · ' + a.whichColors : '')]);
    filas.push(['sum_refBrands', a.refBrands || raya]);
    if (a.refsText) filas.push(['sum_refs', a.refsText]);
    filas.push(['sum_touchpoints', lista(a.touchpoints) || raya]);
    filas.push(['sum_languages', lista(a.languages) || raya]);
    filas.push(['sum_approvers', val(a.approvers)]);
    return filas;
  }
});
})();
