// ─────────────────────────────────────────────────────────────────────────────
// Plan-page content, lifted verbatim from the retired Python generator
// (borsoga-funnel/src/content.py).
//
// Strings are Spanish because Spanish is the translation index — they go
// through T() at render time (see plans/i18n). In the comparison tables a cell
// is `true` (a dot: included), `false` (a dash: not included), or a string.
//
// The studio account can approve changes to this file on its own (CODEOWNERS),
// and an approved PR goes straight to production — check the PR's test URL
// in both languages before approving.
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND_APLICACIONES = [
  "Business cards y papelería",
  "Firmas de correo y documentos corporativos",
  "Presentación institucional o sales deck base",
  "Social media covers, avatars y templates iniciales",
  "Señalización, packaging o piezas físicas según el proyecto",
] as const;

export const BRAND_EDITION_GROUPS = [
  [
    "Estrategia y dirección",
    [
      "Visual Strategy — definición de territorios visuales y criterios de posicionamiento",
      "Creative Direction — dirección creativa transversal para la marca",
      "Art Direction — lenguaje visual para campañas, fotografía, video y aplicaciones",
      "Complete Brand Identity — sistema de identidad completo y documentado",
    ],
  ],
  [
    "Sistema visual avanzado",
    [
      "Advanced Graphic System — recursos modulares y reglas de composición",
      "Extended Iconography, patterns y elementos de apoyo",
      "Digital Applications — piezas clave para canales digitales",
      "Physical Applications — aplicaciones seleccionadas para entornos físicos",
      "Social Media Template System — sistema de templates coherente con la identidad",
      "Presentation / Proposal System — base visual para documentos y presentaciones",
    ],
  ],
  [
    "Acompañamiento",
    [
      "Sesión estratégica inicial y mapa de necesidades visuales antes de diseñar",
      "3 rondas de revisiones",
      "Entrega organizada del sistema completo y sus aplicaciones",
      "Contacto directo con el estudio, sin intermediarios",
    ],
  ],
] as const;

export const BRAND_ESSENTIALS = [
  "Primary Logo — diseño de logotipo principal",
  "Logo Variations — versiones horizontales, verticales y reducidas según necesidad",
  "Color Palette — paleta principal y combinaciones de uso",
  "Typography System — tipografías y jerarquías básicas",
  "Profile / Favicon Assets — recursos para perfiles y usos digitales",
  "Basic Graphic Language — criterios básicos de composición y uso visual",
  "Basic Brand Guidelines — guía compacta de aplicación",
  "Archivos finales organizados para uso digital e impresión",
  "1 ronda de revisiones",
] as const;

export const BRAND_INHERIT_EDITION = "Brand Concept · Extended Visual System · Graphic Language · Patterns & Supporting Graphics · Iconography · Photography / Image Direction · Brand Applications · Social Media Starter Kit · Extended Brand Guidelines" as const;

export const BRAND_INHERIT_PREMIUM = "Primary Logo · Logo Variations · Color Palette · Typography System · Profile / Favicon Assets · Basic Graphic Language · Basic Brand Guidelines · Archivos finales organizados" as const;

export const BRAND_PREMIUM = [
  "Brand Concept — concepto visual y dirección de la identidad",
  "Extended Visual System — sistema gráfico ampliado y modular",
  "Graphic Language — reglas de composición, formas, recursos y estilo visual",
  "Patterns & Supporting Graphics — patrones y elementos secundarios",
  "Iconography — lenguaje de iconos cuando el proyecto lo requiere",
  "Photography / Image Direction — criterios para selección y tratamiento de imágenes",
  "Brand Applications — aplicaciones seleccionadas según el tipo de negocio",
  "Social Media Starter Kit — base visual para perfiles y contenido social",
  "Extended Brand Guidelines — documento de uso más completo",
  "2 rondas de revisiones",
] as const;

export const COMERCIALIZACION = [
  "Puede contratarse como pieza individual o como conjunto de entregables para una campaña.",
  "El alcance se define por número de páginas, formatos, adaptaciones, complejidad y nivel de dirección de arte.",
  "Cuando varias piezas forman parte de una misma campaña, se recomienda cotizarlas como sistema y no como diseños aislados.",
] as const;

export const INT_COMPARE = [
  ["Visita y medidas", true, true, true],
  ["Tu espacio en 3D", true, true, true],
  ["Imágenes de tu proyecto", true, true, true],
  ["Plano con medidas", false, true, true],
  ["Vista frontal de cada pared", false, true, true],
  ["Techos e iluminación", false, true, true],
  ["Pisos y acabados", false, true, true],
  ["Guía de materiales", false, true, true],
  ["Presentación del proyecto", false, true, true],
  ["La idea del proyecto", false, false, true],
  ["Planos con más detalle", false, false, true],
  ["Presentación para tus clientes", false, false, true],
  ["Video hecho como película", false, false, true],
  ["Video que explica el proyecto", false, false, true],
  ["Acompañamiento a ver materiales", false, false, true],
  ["Opciones de mobiliario", false, false, true],
  ["Dónde trabajamos", "Miami-Dade", "Miami-Dade", "Florida"],
  ["Revisiones presentadas en persona", false, false, "2"],
  ["Revisiones", "2", "3", "4"],
] as const;

export const INT_CONDICIONES = [
  [
    "Dónde trabajamos",
    "Essential y Premium en Miami-Dade. Borsoga Edition en toda Florida, sin cobrarte el viaje.",
  ],
  [
    "Cuántos espacios",
    "Desde una habitación hasta la casa completa. No hay mínimo: puedes contratar un solo espacio.",
  ],
  [
    "Cuántas imágenes",
    "Depende del tamaño de cada espacio, no del plan: 3 imágenes para un espacio pequeño, 5 para uno mediano, 8 para uno grande.",
  ],
  [
    "Los archivos",
    "Todo llega en formatos que puedes abrir y compartir: imágenes en JPG o PNG, planos y documentos en PDF, videos en MP4.",
  ],
  ["Cuánto tarda", "Por confirmar"],
  [
    "Cómo se paga",
    "Pagas el 50% para arrancar. <span style=\"color:rgba(0,0,0,.45)\">El resto, por confirmar.</span>",
  ],
  [
    "Qué firmas",
    "Un contrato digital que firmas en línea antes de empezar. <span style=\"color:rgba(0,0,0,.45)\">Detalles por confirmar.</span>",
  ],
  [
    "Lo que no está en tu plan",
    "Ningún plan incluye la compra o el traslado del material y el mobiliario, la supervisión de obra, ni la ingeniería y los permisos.",
  ],
] as const;

export const INT_EDITION_NO = "La compra y el traslado del mobiliario · El montaje y la decoración final · Supervisión de obra · Ingeniería y permisos" as const;

export const INT_EDITION_RECIBES = [
  "Todo lo del plan Premium",
  "La idea del proyecto, escrita (PDF)",
  "Tus planos con más detalle (PDF)",
  "La presentación para tus clientes (PDF)",
  "El video hecho como película (MP4)",
  "El video que explica el proyecto (MP4)",
  "La lista de materiales y las opciones de mobiliario, con dónde conseguirlos (PDF)",
] as const;

export const INT_EDITION_SUMA = [
  "Trabajamos en toda Florida, sin cobrarte el viaje",
  "La idea que sostiene el proyecto: por qué este material, por qué esta luz, por qué el espacio se siente así",
  "Planos con más detalle",
  "Presentación para tus clientes",
  "Un video de tu proyecto, hecho como una película",
  "Un video que explica el proyecto",
  "Vamos juntos a ver los materiales, con proveedores de aquí y de fuera",
  "Opciones de mobiliario elegidas para tu espacio",
  "2 de las revisiones se presentan en persona",
  "Revisión 4 — la idea y los videos",
] as const;

export const INT_ESSENTIAL_INCLUYE = [
  "Vamos a tu espacio y lo medimos (Miami-Dade)",
  "Levantamos tu espacio en 3D",
  "Imágenes de cómo se va a ver tu proyecto",
  "Revisión 1 — cómo se organiza el espacio",
  "Revisión 2 — materiales, acabados e iluminación",
] as const;

export const INT_ESSENTIAL_NO = "Presentación · Planos de ningún tipo · Guía de materiales · Proveedores · Mobiliario · Plan de iluminación" as const;

export const INT_ESSENTIAL_RECIBES = ["Las imágenes de tu proyecto en alta resolución (JPG / PNG)"] as const;

export const INT_EXTRAS = [
  [
    "Extra 01",
    "Borsoga Immersive",
    "Camina tu espacio antes de que exista. Llevamos tu proyecto a unos lentes de realidad virtual, con la última tecnología de Meta, y vamos a donde estés. Te paras en tu cocina, miras hacia arriba, te acercas a un gabinete. A escala real.",
    "Sesión presencial donde estés. Los lentes los ponemos nosotros.",
  ],
  [
    "Extra 02",
    "Tour 360",
    "Tu proyecto, navegable desde cualquier pantalla. Un recorrido que se mueve, hecho con fotos 360 de tu proyecto. Se abre en cualquier navegador y lo compartes por link.",
    "Un link que abres en el navegador.",
  ],
] as const;

export const INT_INHERIT_EDITION = "Visita y medidas · Tu espacio en 3D · Imágenes en alta resolución · Plano con medidas · Vista frontal de cada pared · Iluminación · Pisos y acabados · Guía de materiales · Presentación del proyecto · Revisiones 1 a 3" as const;

export const INT_INHERIT_PREMIUM = "Visita y medidas · Tu espacio en 3D · Imágenes de tu proyecto en alta resolución · Revisión 1 y Revisión 2" as const;

export const INT_PREMIUM_NO = "Proveedores · La compra del material o el mobiliario · Planos para sacar permisos · Supervisión de obra" as const;

export const INT_PREMIUM_RECIBES = [
  "Las imágenes en alta resolución (JPG / PNG)",
  "Tus planos: el espacio con medidas, la vista frontal de cada pared, techos e iluminación, pisos y acabados (PDF)",
  "La guía de materiales (PDF)",
  "La presentación del proyecto (PDF)",
] as const;

export const INT_PREMIUM_SUMA = [
  "Un plano de tu espacio con medidas",
  "Una vista frontal de cada pared que importa",
  "Dónde va cada luz",
  "Dónde va cada piso y cada acabado",
  "Guía de materiales: qué material va en cada lugar, sin decir el proveedor",
  "Presentación del proyecto",
  "Revisión 3 — los planos y los materiales",
] as const;

export const INT_REVISIONES = [
  ["1", "Cómo se organiza el espacio: distribución y circulación", "En los tres planes"],
  ["2", "Materiales, acabados e iluminación", "En los tres planes"],
  ["3", "Los planos y la guía de materiales", "Premium y Edition"],
  ["4", "La idea del proyecto y los videos", "Solo Edition"],
] as const;

export const MARKETING_GROUPS = [
  [
    "Sales & Presentations",
    [
      "Presentations / Pitch Decks",
      "Company Profiles",
      "Brochures",
      "Catalogs",
      "Proposal Templates",
    ],
  ],
  [
    "Digital & Campaigns",
    [
      "Digital Ads",
      "Email Graphics",
      "Web / Campaign Banners",
      "Launch Graphics",
      "Campaign Key Visuals",
    ],
  ],
  [
    "Print & Physical",
    [
      "Business Cards",
      "Flyers",
      "Signage",
      "Packaging",
      "Print Materials",
      "Event Graphics",
      "Promotional Materials",
    ],
  ],
] as const;

export const SOCIAL_EDITION_GROUPS = [
  [
    "Dirección creativa",
    [
      "Creative Direction mensual para la presencia digital",
      "Art Direction para campañas, lanzamientos y contenido especial",
      "Campaign Concepts — concepto visual de campañas seleccionadas",
      "Feed Direction y evolución continua del lenguaje visual",
    ],
  ],
  [
    "Producción visual",
    [
      "Static Content, Carousels y Stories",
      "Reels / Short-Form Video",
      "Motion Graphics",
      "Advertising Graphics y piezas de campaña",
      "Custom Template System",
      "Cross-platform Adaptations para canales seleccionados",
    ],
  ],
  [
    "Integración de marca",
    [
      "Revisión continua de consistencia con la identidad visual",
      "Coordinación de piezas sociales con campañas, web y materiales comerciales",
      "Biblioteca organizada de recursos visuales y templates",
      "Contacto directo con el estudio, sin intermediarios",
    ],
  ],
] as const;

export const SOCIAL_ESSENTIAL = [
  "Hasta 8 piezas de contenido visual al mes",
  "Combinación de Static Posts y Stories",
  "Adaptaciones de tamaño para formatos equivalentes",
  "Implementación de la identidad visual existente",
  "Sistema básico de composición para mantener consistencia",
  "Organización mensual de entregables",
  "1 ronda de revisiones por pieza",
] as const;

export const SOCIAL_INHERIT = "Static Posts y Stories · Adaptaciones de tamaño · Implementación de la identidad visual · Sistema básico de composición · Organización mensual de entregables" as const;

export const SOCIAL_PREMIUM = [
  "Hasta 12–16 piezas mensuales, según combinación de formatos",
  "Static Posts, Carousels y Stories",
  "Reels / Short-Form Video dentro del mix mensual",
  "Basic Motion Graphics cuando el contenido lo requiera",
  "Custom Templates — plantillas diseñadas específicamente para la marca",
  "Feed Direction — criterio visual para mantener coherencia entre publicaciones",
  "Monthly Visual Direction — revisión de consistencia y evolución del sistema",
  "2 rondas de revisiones por pieza",
] as const;

export const SOCIAL_PRODUCTS = [
  [
    "Producto 01",
    "Static Post",
    "Pieza gráfica individual para una publicación. Composición, tipografía, imagen y adaptación a la identidad de marca.",
  ],
  [
    "Producto 02",
    "Carousel",
    "Contenido de múltiples slides organizado como una narrativa visual coherente, con jerarquía y continuidad entre láminas.",
  ],
  [
    "Producto 03",
    "Story",
    "Pieza vertical para Stories. Puede ser independiente o adaptación de una campaña o publicación principal.",
  ],
  [
    "Producto 04",
    "Reel / Short-Form Video",
    "Edición y diseño de video vertical: ritmo, textos, gráficos, transiciones y recursos visuales.",
  ],
  [
    "Producto 05",
    "Motion Post",
    "Pieza gráfica animada o motion graphic sin necesidad de partir de una grabación de video.",
  ],
  [
    "Producto 06",
    "Social Media Templates",
    "Sistema reutilizable de plantillas para que la marca mantenga consistencia visual en publicaciones futuras.",
  ],
] as const;

export const WEB_CARE = [
  ["Precio mensual", "$100 / mes", "$200 / mes"],
  ["Precio anual · 2 meses gratis", "$1,000 / año", "$2,000 / año"],
  ["Actualizaciones y parches de seguridad", true, true],
  ["Backups automáticos", "Semanal", "Diario"],
  ["Monitoreo de uptime", true, true],
  ["Horas de cambios de contenido", "1 h / mes", "4 h / mes"],
  ["Reporte de rendimiento y tráfico", "Trimestral", "Mensual"],
  ["Optimización SEO continua", false, true],
  ["Soporte prioritario", false, true],
] as const;

export const WEB_COMPARE = [
  ["Diseño 100% original", true, true, true],
  ["Páginas / secciones", "Hasta 5", "Hasta 12", "A medida"],
  ["Código propio y rápido", true, true, true],
  ["Responsive real", true, true, true],
  ["SEO técnico base", true, true, true],
  ["Dominio, hosting y SSL", true, true, true],
  ["Analytics + Search Console", true, true, true],
  ["Animaciones y microinteracciones", false, true, true],
  ["Blog o proyectos autoeditable (CMS)", false, true, true],
  ["Multiidioma (ES / EN)", false, true, true],
  ["SEO avanzado", false, true, true],
  ["Integraciones externas", false, true, true],
  ["Dashboard de métricas", false, "Básico", "A medida"],
  ["Aplicación web personalizada", false, false, true],
  ["Ecommerce completo", false, false, true],
  ["CMS a medida", false, false, true],
  ["Usuarios, roles y permisos", false, false, true],
  ["Contratos, firma digital y cobros", false, false, true],
  ["CRM y automatizaciones", false, false, true],
  ["A/B testing", false, false, true],
  ["Design system documentado", false, false, true],
  ["Motion y piezas 3D integradas", false, false, true],
  ["Sesión estratégica inicial", false, false, true],
  ["Rondas de revisiones", "1", "2", "3"],
  ["Soporte post-lanzamiento", "30 días", "30 días", "6 meses"],
  ["Mantenimiento Care+ incluido", false, false, "Primer año"],
] as const;

export const WEB_EDITION_GROUPS = [
  [
    "Plataforma y producto",
    [
      "Aplicación web personalizada (áreas privadas, portales de cliente, configuradores, calculadoras de presupuesto)",
      "Ecommerce completo: catálogo, carrito, pagos (Stripe / PayPal), envíos, inventario, cupones",
      "CMS a medida — construido en torno a cómo trabaja el cliente, no al revés",
      "Sistema de usuarios, roles y permisos",
      "Contratos y firma digital + cobro de anticipos en línea",
    ],
  ],
  [
    "Automatización e integraciones",
    [
      "Conexión con CRM (HubSpot, Twenty, Airtable u otro)",
      "Automatizaciones de WhatsApp Business: confirmaciones, seguimiento, recordatorios, notificaciones internas",
      "Flujos de email automatizados (bienvenida, carrito abandonado, post-venta)",
      "Integraciones API con facturación, calendarios, logística o herramientas internas",
    ],
  ],
  [
    "Datos e inteligencia",
    [
      "Dashboard de analítica a medida: embudo, conversión, valor de cliente, fuentes de venta",
      "Tracking de eventos y atribución de campañas",
      "Reportes automáticos periódicos por correo",
      "A/B testing sobre secciones clave",
    ],
  ],
  [
    "Diseño y marca",
    [
      "Sistema de diseño propio (design system) documentado y reutilizable",
      "Motion design y piezas 3D / visualización integradas al sitio",
    ],
  ],
  [
    "Acompañamiento",
    [
      "Sesión estratégica inicial y mapa de la arquitectura antes de diseñar",
      "3 rondas de revisiones",
      "6 meses de soporte y evolución incluidos",
      "Mantenimiento Care+ incluido el primer año",
      "Contacto directo con el estudio, sin intermediarios",
    ],
  ],
] as const;

export const WEB_ESSENTIAL_INCLUYE = [
  "Diseño 100% original — sin templates ni themes comprados",
  "Hasta 5 secciones / páginas (Home, Servicios, Proyectos, Sobre, Contacto)",
  "Código propio, ligero y rápido (Lighthouse 90+ en performance)",
  "Responsive real: diseñado para móvil, tablet y desktop, no solo adaptado",
  "SEO técnico base: metadatos, Open Graph, sitemap, schema, indexación",
  "Formulario de contacto conectado a correo o WhatsApp",
  "Dirección de arte: tipografía, color y jerarquía definidos por el estudio",
  "Dominio, hosting y certificado SSL configurados y entregados funcionando",
  "Google Analytics + Search Console instalados",
  "1 ronda de revisiones",
  "30 días de soporte post-lanzamiento",
] as const;

export const WEB_INHERIT_EDITION = "Hasta 12 páginas y estructura escalable · Animaciones y microinteracciones · CMS ligero · Multiidioma · SEO avanzado · Integraciones · Landing de campaña · Dashboard de métricas" as const;

export const WEB_INHERIT_PREMIUM = "Diseño 100% original · Código propio y rápido · Responsive real · SEO técnico base · Formulario de contacto · Dirección de arte · Dominio, hosting y SSL · Analytics y Search Console" as const;

export const WEB_PREMIUM_SUMA = [
  "Hasta 12 páginas / secciones + estructura escalable",
  "Animaciones y microinteracciones (scroll, transiciones, motion de marca)",
  "Blog o sección de proyectos autoeditable (CMS ligero)",
  "Multiidioma (ES / EN)",
  "SEO avanzado: investigación de keywords, copy optimizado, velocidad afinada",
  "Integración con Instagram, Google Business, Calendly o sistema de reservas",
  "Página de captura / landing adicional para campañas",
  "Dashboard básico de métricas (visitas, origen de tráfico, conversiones)",
  "2 rondas de revisiones",
  "30 días de soporte post-lanzamiento",
] as const;

