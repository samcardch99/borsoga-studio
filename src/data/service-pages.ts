// ─────────────────────────────────────────────────────────────────────────────
// Service landing pages — /interior-design-miami/ and friends, EN + ES.
//
// One entry per service, with its English and Spanish copy side by side. The
// page files under src/pages are one line each; ServicePage.astro renders
// everything from here (visible copy, FAQ, Service/FAQPage/Breadcrumb JSON-LD
// and the hreflang pair), so the visible text and the structured data cannot
// drift apart.
//
// Facts come only from the approved sources: consts.ts, Faq.astro, llms.txt,
// the /plans content (plan-content.ts, av-content.ts, i18n) and the Google
// Business Profile service texts. No prices, no invented clients, locations
// or results, and never call the studio an "architect". Interior design
// drawings are reference drawings, not permit or construction documents.
// ─────────────────────────────────────────────────────────────────────────────

export type ServiceLang = "en" | "es";

export interface ServiceItem {
  title: string;
  text: string;
}

export interface ServicePlan {
  name: string;
  text: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceCopy {
  /** Public URL, with leading and trailing slash. */
  path: string;
  /** Short name for the footer, breadcrumbs and cross-links. */
  label: string;
  /** <title> without the " — Borsoga Studio" suffix Layout appends. */
  title: string;
  /** Meta description, ≤155 characters. */
  description: string;
  eyebrow: string;
  /** The H1, as [roman part, italic part]; read as one sentence. */
  h1: [string, string];
  lead: string;
  hero: { src: string; alt: string };
  intro: string[];
  includedTitle: string;
  included: ServiceItem[];
  processTitle: string;
  process: ServiceItem[];
  plansTitle: string;
  plansIntro: string;
  plans: ServicePlan[];
  plansNote?: string;
  plansLinks: { href: string; label: string }[];
  projectsTitle: string;
  projectsIntro?: string;
  faqs: ServiceFaq[];
  closingTitle: string;
  closingText: string;
  schema: { name: string; serviceType: string };
}

export interface ServicePageDef {
  /** Stable key = the English slug. Project .md files reference it. */
  key: string;
  /** Project content ids (file names in src/content/projects), in order. */
  projects: string[];
  /** schema.org areaServed. */
  areaServed: string[];
  en: ServiceCopy;
  es: ServiceCopy;
}

const LOCAL = ["Miami-Dade County, FL", "Florida"];
const REMOTE = ["Miami-Dade County, FL", "Florida", "Worldwide"];

/** Interface strings shared by every service page. */
export const SERVICE_UI = {
  en: {
    home: "Home",
    book: "Book a 30-minute discovery call",
    whatsapp: "WhatsApp",
    call: "Call",
    switchLabel: "Leer en español",
    eyebrowStudio: "The studio",
    eyebrowIncluded: "What's included",
    eyebrowProcess: "Process",
    eyebrowPlans: "Plans",
    eyebrowProjects: "Selected work",
    faqTitle: "Frequently asked questions",
    otherServices: "Other services",
    breadcrumb: "Breadcrumb",
  },
  es: {
    home: "Inicio",
    book: "Agenda una llamada de 30 minutos",
    whatsapp: "WhatsApp",
    call: "Llamar",
    switchLabel: "Read in English",
    eyebrowStudio: "El estudio",
    eyebrowIncluded: "Qué incluye",
    eyebrowProcess: "Proceso",
    eyebrowPlans: "Planes",
    eyebrowProjects: "Trabajo seleccionado",
    faqTitle: "Preguntas frecuentes",
    otherServices: "Otros servicios",
    breadcrumb: "Ruta de navegación",
  },
} as const;

/** Spanish names for the project disciplines shown on the cards. */
export const DISCIPLINE_ES: Record<string, string> = {
  "Interior Design, Architectural Visualization & 3D Modeling":
    "Diseño de interiores, visualización arquitectónica y modelado 3D",
  "Architectural Visualization & 3D Modeling": "Visualización arquitectónica y modelado 3D",
  "Architectural Visualization & Photography": "Visualización arquitectónica y fotografía",
  "Concept Design, Architectural Visualization & 3D Modeling":
    "Diseño conceptual, visualización arquitectónica y modelado 3D",
  "Brand Identity & Digital Design": "Identidad de marca y diseño digital",
  "Brand Identity & Corporate Design": "Identidad de marca y diseño corporativo",
  "Brand Identity & Visual System": "Identidad de marca y sistema visual",
};

export const SERVICE_PAGES: ServicePageDef[] = [
  // ── 1 · Interior design ──────────────────────────────────────────────────
  {
    key: "interior-design-miami",
    projects: [
      "RAL-8003-WOOD-VEIN-KITCHEN-CLOSET",
      "RAL-7013-GARDEN-VIEW-KITCHEN-DINING",
      "RAL-1011-FIVE-PARK-APARTMENT",
    ],
    areaServed: LOCAL,
    en: {
      path: "/interior-design-miami/",
      label: "Interior design in Miami",
      title: "Interior Designer in Miami: Homes & Commercial",
      description:
        "Miami interior design for homes and commercial spaces: layout, millwork, materials and lighting, approved in photoreal 3D before construction.",
      eyebrow: "Interior design · Miami-Dade & Florida",
      h1: ["Interior design in Miami,", "approved in 3D before you build"],
      lead: "We design kitchens, bathrooms, full homes and commercial interiors in Miami. You see every decision in photoreal 3D, from the layout to the last finish, before a wall is opened or a cabinet is ordered.",
      hero: {
        src: "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6458.jpg",
        alt: "Kitchen with walnut-tone millwork, a backlit veined stone wall and an island with bar stools",
      },
      intro: [
        "Borsoga Studio is an interior design and architectural visualization studio based in Miami. One team runs the whole project: measuring the space, testing layouts, designing the millwork, choosing materials and lighting, and producing the renderings and reference drawings. There are no handoffs between vendors, so the design you approve is the design your contractor receives.",
        "Projects go from a single room to a whole house, and commercial spaces such as salons, beauty schools and studios use the same plans. We work in English and Spanish.",
      ],
      includedTitle: "What the work covers",
      included: [
        {
          title: "Layout and space planning",
          text: "How the space is organized and how people move through it. It is the first review in every plan, before any material is discussed.",
        },
        {
          title: "Millwork and custom cabinetry",
          text: "Built-ins, cabinetry, paneling and custom pieces designed in standard shop dimensions and materials, so your carpenter can build what you approved.",
        },
        {
          title: "Materials and finishes",
          text: "Stone, wood, tile, metal and lighting chosen to work together. Premium delivers them as a material guide; Borsoga Edition adds on-site selection with suppliers.",
        },
        {
          title: "Lighting",
          text: "Where every light goes, shown in the renderings and, from Premium, in a ceiling and lighting plan.",
        },
        {
          title: "Photoreal 3D",
          text: "An accurate 3D model of your space and photoreal images of the result: 3 images for a small space, 5 for a medium one, 8 for a large one.",
        },
        {
          title: "Reference drawings",
          text: "Dimensioned floor plan, key elevations, ceiling and lighting plan, and floor and finish plan. They communicate the design to contractors; they are not permit or construction documents.",
        },
      ],
      processTitle: "How it works",
      process: [
        {
          title: "Discovery call or questionnaire",
          text: "Book a 30-minute call, or answer the questionnaire on the plans page. You receive an investment range for your project.",
        },
        {
          title: "Site visit and measurements",
          text: "We visit and measure the space, then build it in 3D. The final price is set after the meeting and the visit.",
        },
        {
          title: "Design in review rounds",
          text: "Each review has its own subject: layout and circulation first, then materials, finishes and lighting, then the drawings and the material guide.",
        },
        {
          title: "Delivery",
          text: "Final files you can open and share: images in JPG or PNG, drawings and documents in PDF, video in MP4.",
        },
      ],
      plansTitle: "Three plans, from one room to the whole house",
      plansIntro:
        "You choose how many spaces to design. The plan decides how far we take each one.",
      plans: [
        {
          name: "Essential",
          text: "See your space before you build it. Site visit and measurements in Miami-Dade, an accurate 3D model, photoreal images and two review rounds.",
        },
        {
          name: "Premium",
          text: "Everything in Essential, plus four reference drawings, a material guide and a project presentation, with three review rounds. So your contractor and your carpenter don't have to guess.",
        },
        {
          name: "Borsoga Edition",
          text: "Everything in Premium, plus a conceptual narrative, more detailed drawings, a cinematic animation and an explainer video, material selection with suppliers and furniture options. Four review rounds, two in person, anywhere in Florida with no travel charge.",
        },
      ],
      plansNote:
        "No plan includes buying or moving materials and furniture, construction supervision, or engineering and permits. Each project has a fixed fee by phases, set after the meeting and site visit.",
      plansLinks: [{ href: "/plans/interior-design/", label: "Compare the interior design plans" }],
      projectsTitle: "Selected interiors",
      faqs: [
        {
          q: "Do you only work in Miami?",
          a: "Essential and Premium cover Miami-Dade, with a travel option outside the county. Borsoga Edition covers all of Florida. If your project is outside Miami-Dade, we settle the scope and the travel on the first call.",
        },
        {
          q: "Can I hire you for a single room?",
          a: "Yes. There is no minimum: every plan works from one room to the whole house, and commercial spaces use the same plans.",
        },
        {
          q: "Are your drawings valid for permits?",
          a: "No. Our drawings are reference drawings that communicate the design to contractors and fabricators; they are not permit or construction documents. Moving structural walls or changing the façade needs a licensed architect or engineer, which no plan includes; we can coordinate with yours.",
        },
        {
          q: "Do you buy the furniture or supervise construction?",
          a: "No. No plan includes buying or moving materials and furniture, construction supervision, or engineering and permits. Borsoga Edition includes furniture options and material selection with suppliers, with where to get each piece.",
        },
        {
          q: "What files will I receive?",
          a: "Final deliverables only: images in JPG or PNG, drawings in PDF and videos in MP4. 3D models and editable files are not included.",
        },
      ],
      closingTitle: "Start with a 30-minute call",
      closingText: "Tell us about the space. We'll tell you which plan fits and what happens next.",
      schema: { name: "Interior design in Miami", serviceType: "Interior design" },
    },
    es: {
      path: "/es/diseno-de-interiores-miami/",
      label: "Diseño de interiores en Miami",
      title: "Diseño de interiores en Miami: casas y comercios",
      description:
        "Diseño de interiores en Miami para casas y comercios: distribución, carpintería, materiales e iluminación, aprobados en 3D fotorrealista antes de la obra.",
      eyebrow: "Diseño de interiores · Miami-Dade y Florida",
      h1: ["Diseño de interiores en Miami,", "aprobado en 3D antes de construir"],
      lead: "Diseñamos cocinas, baños, casas completas e interiores comerciales en Miami. Ves cada decisión en 3D fotorrealista, desde la distribución hasta el último acabado, antes de abrir una pared o encargar un gabinete.",
      hero: {
        src: "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6458.jpg",
        alt: "Cocina con carpintería en tono nogal, una pared de piedra veteada retroiluminada y una isla con bancos",
      },
      intro: [
        "Borsoga Studio es un estudio de diseño de interiores y visualización arquitectónica con base en Miami. Un solo equipo lleva todo el proyecto: mide el espacio, prueba distribuciones, diseña la carpintería, elige materiales e iluminación y produce los renders y los planos de referencia. No hay traspasos entre proveedores, así que el diseño que apruebas es el mismo que recibe tu contratista.",
        "Trabajamos desde una sola habitación hasta la casa completa, y los espacios comerciales, como salones, escuelas de belleza o estudios, usan los mismos planes. Te atendemos en español o en inglés.",
      ],
      includedTitle: "Qué incluye el trabajo",
      included: [
        {
          title: "Distribución del espacio",
          text: "Cómo se organiza el espacio y cómo se recorre. Es la primera revisión en todos los planes, antes de hablar de materiales.",
        },
        {
          title: "Carpintería y gabinetes a medida",
          text: "Empotrados, gabinetes, paneles y piezas especiales, diseñados con medidas y materiales estándar de taller para que tu carpintero construya lo que aprobaste.",
        },
        {
          title: "Materiales y acabados",
          text: "Piedra, madera, cerámica, metal e iluminación elegidos para funcionar juntos. Premium los entrega en una guía de materiales; Borsoga Edition suma la selección en persona con proveedores.",
        },
        {
          title: "Iluminación",
          text: "Dónde va cada luz, visible en los renders y, desde Premium, en un plano de techos e iluminación.",
        },
        {
          title: "3D fotorrealista",
          text: "Un modelo 3D preciso de tu espacio e imágenes fotorrealistas del resultado: 3 imágenes para un espacio pequeño, 5 para uno mediano y 8 para uno grande.",
        },
        {
          title: "Planos de referencia",
          text: "Planta con medidas, alzados principales, plano de techos e iluminación y plano de pisos y acabados. Sirven para comunicar el diseño a contratistas; no son planos para permisos ni documentos de construcción.",
        },
      ],
      processTitle: "Cómo trabajamos",
      process: [
        {
          title: "Llamada o cuestionario",
          text: "Agenda una llamada de 30 minutos o responde el cuestionario en la página de planes. Recibes un rango de inversión para tu proyecto.",
        },
        {
          title: "Visita y medidas",
          text: "Visitamos y medimos el espacio y lo levantamos en 3D. El precio final se define después de la reunión y la visita.",
        },
        {
          title: "Diseño por revisiones",
          text: "Cada revisión tiene su tema: primero distribución y circulación, luego materiales, acabados e iluminación, y después los planos y la guía de materiales.",
        },
        {
          title: "Entrega",
          text: "Archivos finales que puedes abrir y compartir: imágenes en JPG o PNG, planos y documentos en PDF, video en MP4.",
        },
      ],
      plansTitle: "Tres planes, de una habitación a la casa completa",
      plansIntro:
        "Tú eliges cuántos espacios diseñar. El plan decide qué tan lejos llevamos cada uno.",
      plans: [
        {
          name: "Essential",
          text: "Ve tu espacio antes de construirlo. Visita y medidas en Miami-Dade, modelo 3D preciso, imágenes fotorrealistas y dos rondas de revisión.",
        },
        {
          name: "Premium",
          text: "Todo lo de Essential, más cuatro planos de referencia, guía de materiales y presentación del proyecto, con tres rondas de revisión. Para que tu contratista y tu carpintero no tengan que adivinar.",
        },
        {
          name: "Borsoga Edition",
          text: "Todo lo de Premium, más la idea del proyecto por escrito, planos con más detalle, un video hecho como película y otro que explica el proyecto, selección de materiales con proveedores y opciones de mobiliario. Cuatro revisiones, dos en persona, en toda Florida sin costo de traslado.",
        },
      ],
      plansNote:
        "Ningún plan incluye la compra o el traslado de materiales y mobiliario, la supervisión de obra ni la ingeniería y los permisos. Cada proyecto tiene un honorario fijo por fases, que se cierra después de la reunión y la visita.",
      plansLinks: [
        { href: "/plans/es/interior-design/", label: "Compara los planes de diseño de interiores" },
      ],
      projectsTitle: "Interiores seleccionados",
      faqs: [
        {
          q: "¿Solo trabajan en Miami?",
          a: "Essential y Premium cubren Miami-Dade, con opción de traslado fuera del condado. Borsoga Edition cubre toda Florida. Si tu proyecto está fuera de Miami-Dade, definimos el alcance y el traslado en la primera llamada.",
        },
        {
          q: "¿Puedo contratarlos para una sola habitación?",
          a: "Sí. No hay mínimo: todos los planes funcionan desde una habitación hasta la casa completa, y los espacios comerciales usan los mismos planes.",
        },
        {
          q: "¿Sus planos sirven para sacar permisos?",
          a: "No. Son planos de referencia para comunicar el diseño a contratistas y fabricantes; no son planos para permisos ni documentos de construcción. Mover muros estructurales o cambiar la fachada requiere un arquitecto o ingeniero con licencia, que ningún plan incluye; podemos coordinarnos con el tuyo.",
        },
        {
          q: "¿Compran los muebles o supervisan la obra?",
          a: "No. Ningún plan incluye la compra o el traslado de materiales y mobiliario, la supervisión de obra ni la ingeniería y los permisos. Borsoga Edition incluye opciones de mobiliario y selección de materiales con proveedores, con dónde conseguir cada pieza.",
        },
        {
          q: "¿Qué archivos recibo?",
          a: "Solo los entregables finales: imágenes en JPG o PNG, planos en PDF y videos en MP4. Los modelos 3D y los archivos editables no se incluyen.",
        },
      ],
      closingTitle: "Empieza con una llamada de 30 minutos",
      closingText:
        "Cuéntanos sobre el espacio. Te decimos qué plan le corresponde y cuáles son los siguientes pasos.",
      schema: { name: "Diseño de interiores en Miami", serviceType: "Diseño de interiores" },
    },
  },

  // ── 2 · Kitchen design ───────────────────────────────────────────────────
  {
    key: "kitchen-design-miami",
    projects: [
      "RAL-8001-CURVED-WOOD-KITCHEN",
      "RAL-1002-DOUBLE-ISLAND-KITCHEN",
      "RAL-7022-UMBRA-STONE-KITCHEN",
      "RAL-7013-GARDEN-VIEW-KITCHEN-DINING",
    ],
    areaServed: LOCAL,
    en: {
      path: "/kitchen-design-miami/",
      label: "Kitchen design in Miami",
      title: "Kitchen Designer in Miami, Seen in 3D First",
      description:
        "Kitchen design in Miami: layout, island, cabinetry, appliances, materials and lighting, in photoreal 3D with reference drawings for your contractor.",
      eyebrow: "Kitchen design · Miami-Dade & Florida",
      h1: ["Kitchen design in Miami,", "seen in 3D before construction"],
      lead: "We plan the layout, the island, the cabinetry, the appliances, the materials and the lighting of your kitchen, and you see all of it in photoreal 3D before demolition starts.",
      hero: {
        src: "/projects/KITCHEN-VIII/1.jpg",
        alt: "Kitchen with brown-grey millwork, a grey veined stone backsplash and an island facing garden windows",
      },
      intro: [
        "A kitchen is the room where small decisions cost the most to change later: the width of an aisle, the height of the island, where the sink and the ovens go. We resolve those decisions in a 3D model of your actual space, then document them in reference plans and elevations your contractor and cabinetmaker can follow.",
        "The same team designs the kitchen and produces the images, so what you approve on screen is what goes into the drawings.",
      ],
      includedTitle: "What we design",
      included: [
        {
          title: "Layout and island",
          text: "Work zones, circulation and the island: its size, its seating and what goes in it. The first review round is always about how the kitchen is organized.",
        },
        {
          title: "Cabinetry and millwork",
          text: "Base and tall cabinets, display cabinets, pantry walls and paneling, designed in standard shop dimensions and materials.",
        },
        {
          title: "Appliance planning",
          text: "Appliance sizes shape all the cabinetry, so it is worth choosing them before we start. If you haven't decided yet, appliance guidance comes with your proposal.",
        },
        {
          title: "Water and drain lines",
          text: "Moving them costs more in construction, but sometimes it is what makes the kitchen work. We show you both options before you commit.",
        },
        {
          title: "Materials and lighting",
          text: "Countertops, backsplash, hood, flooring and finishes, plus task, accent and display lighting, reviewed together in the renderings.",
        },
        {
          title: "Reference plans and elevations",
          text: "From Premium: a dimensioned floor plan, an elevation of every wall that matters, a ceiling and lighting plan, and a floor and finish plan.",
        },
      ],
      processTitle: "From first call to final drawings",
      process: [
        {
          title: "Tell us about the kitchen",
          text: "Book a 30-minute call or answer the questionnaire. If you already picked appliances, send the list or the spec sheets.",
        },
        {
          title: "Visit and 3D model",
          text: "We measure the kitchen and build it in 3D. In new construction, we work from the drawings of the development.",
        },
        {
          title: "Review rounds",
          text: "Layout and circulation first; then materials, finishes and lighting; from Premium, the drawings and the material guide.",
        },
        {
          title: "Delivery",
          text: "High-resolution images, plus drawings and a material guide in PDF from Premium.",
        },
      ],
      plansTitle: "Kitchen plans",
      plansIntro:
        "Kitchens use the same three interior design plans. If you are aiming for a high-end or luxury finish, your contractor will ask for drawings and a material guide, and those start at Premium.",
      plans: [
        {
          name: "Essential",
          text: "Visit, measurements, a 3D model and photoreal images of the kitchen, with two review rounds. In Miami-Dade.",
        },
        {
          name: "Premium",
          text: "Adds the reference drawings, the material guide and a project presentation, with three review rounds.",
        },
        {
          name: "Borsoga Edition",
          text: "Adds the project concept, more detailed drawings, a cinematic video and an explainer video, material selection with suppliers, and four review rounds, two in person. Across Florida.",
        },
      ],
      plansLinks: [{ href: "/plans/interior-design/", label: "See the interior design plans" }],
      projectsTitle: "Kitchens from the studio",
      faqs: [
        {
          q: "Do you also design bathrooms?",
          a: "Yes. Bathrooms follow the same process: layout, vanities, tile and stone, fixtures and lighting, visualized in photoreal 3D with reference drawings for your contractor.",
        },
        {
          q: "Do I need to choose appliances before we start?",
          a: "It helps. Appliance sizes define the cabinetry, so the design is more precise with them decided. If you haven't chosen them, we include appliance guidance in your proposal.",
        },
        {
          q: "Can my contractor build from your drawings?",
          a: "Premium and Borsoga Edition include dimensioned plans and elevations made for contractors and carpenters. They are reference drawings, not permit or construction documents; final construction documents are quoted separately.",
        },
        {
          q: "Will I see the kitchen before it is built?",
          a: "Yes. Every plan includes an accurate 3D model of your space and photoreal images of the design. With the Borsoga Immersive extra, you can also walk the kitchen at real scale in a virtual reality headset.",
        },
        {
          q: "Do you work on new construction as well as remodels?",
          a: "Yes. In a remodel we visit and measure the existing kitchen. In new construction there is nothing to photograph yet, so we work from the drawings or the material the developer provided.",
        },
      ],
      closingTitle: "Start with a 30-minute call",
      closingText: "Tell us what you want to change in your kitchen and we'll tell you which plan fits.",
      schema: { name: "Kitchen design in Miami", serviceType: "Kitchen design" },
    },
    es: {
      path: "/es/diseno-de-cocinas-miami/",
      label: "Diseño de cocinas en Miami",
      title: "Diseño de cocinas en Miami, visto en 3D",
      description:
        "Diseño de cocinas en Miami: distribución, isla, gabinetes, electrodomésticos, materiales e iluminación, en 3D fotorrealista y con planos de referencia.",
      eyebrow: "Diseño de cocinas · Miami-Dade y Florida",
      h1: ["Diseño de cocinas en Miami,", "en 3D antes de la obra"],
      lead: "Planificamos la distribución, la isla, los gabinetes, los electrodomésticos, los materiales y la iluminación de tu cocina, y lo ves todo en 3D fotorrealista antes de empezar la demolición.",
      hero: {
        src: "/projects/KITCHEN-VIII/1.jpg",
        alt: "Cocina con carpintería gris pardo, salpicadero de piedra gris veteada y una isla frente a ventanales al jardín",
      },
      intro: [
        "La cocina es el espacio donde las decisiones pequeñas cuestan más cambiar después: el ancho de un pasillo, la altura de la isla, dónde van el fregadero y los hornos. Resolvemos esas decisiones en un modelo 3D de tu espacio real y luego las dejamos en plantas y alzados de referencia que tu contratista y tu ebanista pueden seguir.",
        "El mismo equipo diseña la cocina y produce las imágenes, así que lo que apruebas en pantalla es lo que llega a los planos.",
      ],
      includedTitle: "Qué diseñamos",
      included: [
        {
          title: "Distribución e isla",
          text: "Zonas de trabajo, circulación y la isla: su tamaño, sus asientos y lo que va dentro. La primera ronda de revisión siempre trata de cómo se organiza la cocina.",
        },
        {
          title: "Gabinetes y carpintería",
          text: "Gabinetes bajos y de columna, vitrinas, despensas y paneles, diseñados con medidas y materiales estándar de taller.",
        },
        {
          title: "Electrodomésticos",
          text: "Sus medidas definen todos los gabinetes, así que conviene tenerlos elegidos antes de empezar. Si todavía no lo decides, la orientación sobre electrodomésticos llega con tu propuesta.",
        },
        {
          title: "Puntos de agua y desagüe",
          text: "Moverlos cuesta más en obra, pero a veces es lo que hace que la cocina funcione. Te mostramos las dos opciones antes de decidir.",
        },
        {
          title: "Materiales e iluminación",
          text: "Encimeras, salpicadero, campana, pisos y acabados, junto con la luz de trabajo, la de ambiente y la de las vitrinas, revisados juntos en los renders.",
        },
        {
          title: "Plantas y alzados de referencia",
          text: "Desde Premium: planta con medidas, alzado de cada pared importante, plano de techos e iluminación y plano de pisos y acabados.",
        },
      ],
      processTitle: "De la primera llamada a los planos",
      process: [
        {
          title: "Cuéntanos de tu cocina",
          text: "Agenda una llamada de 30 minutos o responde el cuestionario. Si ya elegiste electrodomésticos, mándanos la lista o las fichas técnicas.",
        },
        {
          title: "Visita y modelo 3D",
          text: "Medimos la cocina y la levantamos en 3D. En obra nueva trabajamos con los planos del desarrollo.",
        },
        {
          title: "Rondas de revisión",
          text: "Primero distribución y circulación; después materiales, acabados e iluminación; desde Premium, los planos y la guía de materiales.",
        },
        {
          title: "Entrega",
          text: "Imágenes en alta resolución y, desde Premium, planos y guía de materiales en PDF.",
        },
      ],
      plansTitle: "Planes para tu cocina",
      plansIntro:
        "Las cocinas usan los mismos tres planes de diseño de interiores. Si buscas un acabado de alta gama o de lujo, tu contratista va a pedir planos y guía de materiales, y eso entra a partir de Premium.",
      plans: [
        {
          name: "Essential",
          text: "Visita, medidas, modelo 3D e imágenes fotorrealistas de la cocina, con dos rondas de revisión. En Miami-Dade.",
        },
        {
          name: "Premium",
          text: "Suma los planos de referencia, la guía de materiales y la presentación del proyecto, con tres rondas de revisión.",
        },
        {
          name: "Borsoga Edition",
          text: "Suma la idea del proyecto, planos con más detalle, un video hecho como película y otro que explica el proyecto, selección de materiales con proveedores y cuatro revisiones, dos en persona. En toda Florida.",
        },
      ],
      plansLinks: [
        { href: "/plans/es/interior-design/", label: "Ver los planes de diseño de interiores" },
      ],
      projectsTitle: "Cocinas del estudio",
      faqs: [
        {
          q: "¿También diseñan baños?",
          a: "Sí. Los baños siguen el mismo proceso: distribución, muebles de baño, cerámica y piedra, grifería e iluminación, en 3D fotorrealista y con planos de referencia para tu contratista.",
        },
        {
          q: "¿Tengo que elegir los electrodomésticos antes de empezar?",
          a: "Ayuda mucho. Sus medidas definen los gabinetes, así que el diseño sale más preciso si ya están decididos. Si no los has elegido, incluimos la orientación sobre electrodomésticos en tu propuesta.",
        },
        {
          q: "¿Mi contratista puede construir con sus planos?",
          a: "Premium y Borsoga Edition incluyen plantas y alzados con medidas pensados para contratistas y carpinteros. Son planos de referencia, no planos para permisos ni documentos de construcción; los documentos de construcción finales se cotizan aparte.",
        },
        {
          q: "¿Voy a ver la cocina antes de construirla?",
          a: "Sí. Todos los planes incluyen un modelo 3D preciso de tu espacio e imágenes fotorrealistas del diseño. Con el extra Borsoga Immersive, además, puedes recorrer la cocina a escala real con unos lentes de realidad virtual.",
        },
        {
          q: "¿Trabajan en obra nueva y en remodelaciones?",
          a: "Sí. En una remodelación visitamos y medimos la cocina existente. En obra nueva todavía no hay nada que fotografiar, así que trabajamos con los planos o el material que te entregó el desarrollador.",
        },
      ],
      closingTitle: "Empieza con una llamada de 30 minutos",
      closingText:
        "Cuéntanos qué quieres cambiar en tu cocina y te decimos qué plan le corresponde.",
      schema: { name: "Diseño de cocinas en Miami", serviceType: "Diseño de cocinas" },
    },
  },

  // ── 3 · Custom millwork ──────────────────────────────────────────────────
  {
    key: "custom-millwork-design-miami",
    projects: [
      "RAL-8003-WOOD-VEIN-KITCHEN-CLOSET",
      "RAL-8001-CURVED-WOOD-KITCHEN",
      "RAL-1002-DOUBLE-ISLAND-KITCHEN",
    ],
    areaServed: LOCAL,
    en: {
      path: "/custom-millwork-design-miami/",
      label: "Custom millwork & cabinetry",
      title: "Custom Millwork & Cabinetry Design in Miami",
      description:
        "Custom millwork and cabinetry design in Miami: built-ins, closets, vanities and paneling in standard shop dimensions, approved in 3D before cutting.",
      eyebrow: "Millwork & custom cabinetry · Miami",
      h1: ["Custom millwork and cabinetry design", "in Miami"],
      lead: "Built-ins, kitchen cabinets, closets, bathroom vanities, wall panels and bookcases, designed in standard shop dimensions and materials so your carpenter can build exactly what you approved.",
      hero: {
        src: "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6461.jpg",
        alt: "Walk-in closet with dark glass doors, black frames, linear lighting and a veined stone island",
      },
      intro: [
        "Custom millwork is where an interior stops looking bought and starts looking designed. It is also where vague drawings get expensive. We design each piece inside a 3D model of your space, show it to you in photoreal renderings, and then document it so the shop doesn't have to guess.",
        "We also work with millwork and carpentry shops: the finished piece rendered in the client's actual room before a board is cut, visual proposals that back up a premium quote, and the shop's own identity and website.",
      ],
      includedTitle: "What we design",
      included: [
        {
          title: "Kitchen cabinetry",
          text: "Base, wall and tall cabinets, pantry walls, illuminated display cabinets and islands, coordinated with the appliances and the lighting.",
        },
        {
          title: "Closets and dressing rooms",
          text: "Hanging space, shelving and drawers, glass fronts and integrated lighting, planned around what will be stored.",
        },
        {
          title: "Bathroom vanities",
          text: "Vanities, storage and mirrors, resolved together with the tile, stone and fixtures around them.",
        },
        {
          title: "Wall paneling and built-ins",
          text: "Paneling, bookcases, media walls and custom pieces that tie the room together.",
        },
        {
          title: "Materials and finishes",
          text: "Wood, stone, glass and metal chosen together and shown in the renderings, with a material guide from Premium.",
        },
        {
          title: "Reference elevations",
          text: "From Premium, dimensioned elevations of every wall that matters, for your carpenter to quote and build from.",
        },
      ],
      processTitle: "From the first call to the shop",
      process: [
        {
          title: "Call or questionnaire",
          text: "Tell us which spaces get custom-built pieces: kitchen, closets, vanities, wall panels or bookcases.",
        },
        {
          title: "Measure and model",
          text: "We measure the space and model it in 3D, including the pieces you already have and want to keep.",
        },
        {
          title: "Design and review",
          text: "Layout first, then materials, finishes and lighting, then the drawings.",
        },
        {
          title: "Hand-off to the shop",
          text: "Images and, from Premium, dimensioned drawings in PDF that your carpenter can price and build from.",
        },
      ],
      plansTitle: "Millwork within the interior design plans",
      plansIntro:
        "Millwork is designed within the interior design plans. Drawings start at Premium, the plan most custom cabinetry projects need.",
      plans: [
        {
          name: "Essential",
          text: "Visit, measurements, a 3D model and photoreal images of the pieces, with two review rounds.",
        },
        {
          name: "Premium",
          text: "Adds a dimensioned floor plan and elevations, a ceiling and lighting plan, a floor and finish plan, a material guide and a presentation. Three review rounds.",
        },
        {
          name: "Borsoga Edition",
          text: "Adds more detailed drawings, a cinematic video, material selection with suppliers and furniture options. Four review rounds, across Florida.",
        },
      ],
      plansNote:
        "For millwork shops, renderings of your pieces are quoted under the architectural visualization plans.",
      plansLinks: [
        { href: "/plans/interior-design/", label: "Interior design plans" },
        { href: "/plans/av-plans/", label: "Visualization plans" },
      ],
      projectsTitle: "Millwork from the studio",
      faqs: [
        {
          q: "Will my carpenter be able to build from your design?",
          a: "That is what the drawings are for. Pieces are designed in standard shop dimensions and materials, and Premium includes dimensioned elevations. They are reference drawings for fabrication, not permit or construction documents.",
        },
        {
          q: "Do you build or install the millwork?",
          a: "No. We design it and document it; your carpenter or millwork shop builds and installs it. Construction supervision is not included in any plan.",
        },
        {
          q: "Can you design around furniture I already have?",
          a: "Yes. Pieces that are staying are modeled from day one, so the design fits around them.",
        },
        {
          q: "I run a millwork shop. Can you render my pieces for clients?",
          a: "Yes. We render the finished piece in the client's actual room before a board is cut, and we design workshop identities and portfolio websites. Renderings follow the architectural visualization plans.",
        },
        {
          q: "Which spaces can you design?",
          a: "Kitchens, closets and dressing rooms, bathroom vanities, wall panels, bookcases and other built-ins, in homes and in commercial spaces such as salons and studios.",
        },
      ],
      closingTitle: "Start with a 30-minute call",
      closingText: "Tell us which pieces you need and where they go. We'll tell you which plan fits.",
      schema: {
        name: "Custom millwork and cabinetry design in Miami",
        serviceType: "Millwork and custom cabinetry design",
      },
    },
    es: {
      path: "/es/carpinteria-a-medida-miami/",
      label: "Carpintería a medida",
      title: "Carpintería y gabinetes a medida en Miami",
      description:
        "Diseño de carpintería y gabinetes a medida en Miami: empotrados, clósets, muebles de baño y paneles con medidas estándar de taller, aprobados en 3D.",
      eyebrow: "Carpintería a medida · Miami",
      h1: ["Carpintería y gabinetes a medida", "en Miami"],
      lead: "Empotrados, gabinetes de cocina, clósets, muebles de baño, paneles y libreros, diseñados con medidas y materiales estándar de taller para que tu carpintero construya exactamente lo que aprobaste.",
      hero: {
        src: "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6461.jpg",
        alt: "Vestidor con puertas de vidrio oscuro, marcos negros, iluminación lineal y una isla de piedra veteada",
      },
      intro: [
        "La carpintería a medida es lo que hace que un interior se vea diseñado y no comprado. También es donde un plano poco claro sale caro. Diseñamos cada pieza dentro de un modelo 3D de tu espacio, te la mostramos en renders fotorrealistas y luego la documentamos para que el taller no tenga que adivinar.",
        "También trabajamos con talleres de carpintería y ebanistería: la pieza terminada renderizada en el espacio real del cliente antes de cortar una tabla, propuestas visuales que respaldan una cotización premium, y la identidad y el sitio web del propio taller.",
      ],
      includedTitle: "Qué diseñamos",
      included: [
        {
          title: "Gabinetes de cocina",
          text: "Gabinetes bajos, altos y de columna, despensas, vitrinas iluminadas e islas, coordinados con los electrodomésticos y la iluminación.",
        },
        {
          title: "Clósets y vestidores",
          text: "Zonas para colgar, repisas y cajones, frentes de vidrio e iluminación integrada, pensados según lo que se va a guardar.",
        },
        {
          title: "Muebles de baño",
          text: "Muebles, almacenamiento y espejos, resueltos junto con la cerámica, la piedra y la grifería que los rodean.",
        },
        {
          title: "Paneles y empotrados",
          text: "Paneles de pared, libreros, muros de TV y piezas especiales que unen el espacio.",
        },
        {
          title: "Materiales y acabados",
          text: "Madera, piedra, vidrio y metal elegidos en conjunto y visibles en los renders, con guía de materiales desde Premium.",
        },
        {
          title: "Alzados de referencia",
          text: "Desde Premium, alzados con medidas de cada pared importante, para que tu carpintero cotice y construya.",
        },
      ],
      processTitle: "De la primera llamada al taller",
      process: [
        {
          title: "Llamada o cuestionario",
          text: "Cuéntanos en qué espacios va carpintería a medida: cocina, clósets, muebles de baño, paneles o libreros.",
        },
        {
          title: "Medidas y modelo",
          text: "Medimos el espacio y lo levantamos en 3D, incluidas las piezas que ya tienes y quieres conservar.",
        },
        {
          title: "Diseño y revisiones",
          text: "Primero la distribución, después materiales, acabados e iluminación, y luego los planos.",
        },
        {
          title: "Entrega al taller",
          text: "Imágenes y, desde Premium, planos con medidas en PDF para que tu carpintero cotice y construya.",
        },
      ],
      plansTitle: "La carpintería, dentro de los planes de interiores",
      plansIntro:
        "La carpintería se diseña dentro de los planes de diseño de interiores. Los planos empiezan en Premium, el plan que necesita la mayoría de los proyectos de gabinetes a medida.",
      plans: [
        {
          name: "Essential",
          text: "Visita, medidas, modelo 3D e imágenes fotorrealistas de las piezas, con dos rondas de revisión.",
        },
        {
          name: "Premium",
          text: "Suma planta y alzados con medidas, plano de techos e iluminación, plano de pisos y acabados, guía de materiales y presentación. Tres rondas de revisión.",
        },
        {
          name: "Borsoga Edition",
          text: "Suma planos con más detalle, un video hecho como película, selección de materiales con proveedores y opciones de mobiliario. Cuatro rondas de revisión, en toda Florida.",
        },
      ],
      plansNote:
        "Para talleres de carpintería, los renders de sus piezas se cotizan con los planes de visualización arquitectónica.",
      plansLinks: [
        { href: "/plans/es/interior-design/", label: "Planes de diseño de interiores" },
        { href: "/plans/es/planes-av/", label: "Planes de visualización" },
      ],
      projectsTitle: "Carpintería del estudio",
      faqs: [
        {
          q: "¿Mi carpintero va a poder construir con su diseño?",
          a: "Para eso son los planos. Las piezas se diseñan con medidas y materiales estándar de taller, y Premium incluye alzados con medidas. Son planos de referencia para fabricación, no planos para permisos ni documentos de construcción.",
        },
        {
          q: "¿Ustedes fabrican o instalan la carpintería?",
          a: "No. Nosotros la diseñamos y la documentamos; tu carpintero o tu taller la fabrica y la instala. La supervisión de obra no está incluida en ningún plan.",
        },
        {
          q: "¿Pueden diseñar alrededor de muebles que ya tengo?",
          a: "Sí. Las piezas que se quedan se modelan desde el primer día, para que el diseño se adapte a ellas.",
        },
        {
          q: "Tengo un taller de carpintería. ¿Pueden renderizar mis piezas para mis clientes?",
          a: "Sí. Renderizamos la pieza terminada en el espacio real del cliente antes de cortar una tabla, y diseñamos identidades y sitios web de portafolio para talleres. Los renders siguen los planes de visualización arquitectónica.",
        },
        {
          q: "¿Qué espacios pueden diseñar?",
          a: "Cocinas, clósets y vestidores, muebles de baño, paneles de pared, libreros y otros empotrados, en casas y en espacios comerciales como salones y estudios.",
        },
      ],
      closingTitle: "Empieza con una llamada de 30 minutos",
      closingText:
        "Cuéntanos qué piezas necesitas y dónde van. Te decimos qué plan le corresponde.",
      schema: {
        name: "Carpintería y gabinetes a medida en Miami",
        serviceType: "Diseño de carpintería y gabinetes a medida",
      },
    },
  },

  // ── 4 · 3D rendering / architectural visualization ───────────────────────
  {
    key: "3d-rendering-miami",
    projects: [
      "RAL-9016-WATERFRONT-VILLA",
      "RAL-1015-POOL-PAVILION",
      "RAL-7006-COCONUT-GROVE-RESIDENCE",
      "RAL-1013-CRYSTAL-RIVER-RESIDENCE",
    ],
    areaServed: REMOTE,
    en: {
      path: "/3d-rendering-miami/",
      label: "3D rendering & visualization",
      title: "3D Rendering & Architectural Visualization Miami",
      description:
        "Photoreal 3D rendering from Miami: exterior and interior renderings, animation and 360° tours for developers, architects and builders, anywhere.",
      eyebrow: "Architectural visualization · Miami & worldwide",
      h1: ["3D rendering and architectural visualization in Miami,", "for projects anywhere"],
      lead: "Exterior and interior renderings, animation and 360° tours for developers, architects, builders and homeowners. We model from your drawings and deliver images with real light and real materials.",
      hero: {
        src: "/projects/RAL-1015-POOL-PAVILION/1.jpg",
        alt: "Photoreal render of a pool area with an ivory pavilion, lounge chairs and palm trees",
      },
      intro: [
        "Architectural visualization turns drawings and 3D models into images anyone can understand at a glance. Developers use them to sell before construction; architects and builders use them to get a design approved; manufacturers use them to show products in any finish.",
        "We work from Miami for projects anywhere, in English and Spanish. There is no site visit: send the drawings, the model and your references, and we take it from there. Our renderings are built with V-Ray and Rhino.",
      ],
      includedTitle: "What we produce",
      included: [
        {
          title: "Exterior rendering",
          text: "Homes, condos and mixed-use buildings in their context, for pre-construction sales, investor presentations and marketing.",
        },
        {
          title: "Interior rendering",
          text: "Residences, model units and amenities, with real materials and lighting.",
        },
        {
          title: "Aerial views",
          text: "Developments in their real surroundings, for site plans, sales brochures and investor presentations.",
        },
        {
          title: "Animation and video",
          text: "A short walkthrough video from Premium; a scripted and edited cinematic video in Borsoga Edition.",
        },
        {
          title: "360° tours and VR",
          text: "Tour 360 opens in any browser and shares with a link. With Borsoga Immersive we bring the model into a VR headset at your sales gallery, office or trade show. Both are quoted separately.",
        },
        {
          title: "Virtual staging",
          text: "Photoreal furnishing of empty spaces for listings, model units and pre-construction marketing.",
        },
      ],
      processTitle: "How a visualization project runs",
      process: [
        {
          title: "Send the project",
          text: "Drawings in PDF or CAD, elevations and sections, and your material and style references. We work with SKP, RVT, 3DM, FBX, OBJ and MAX models.",
        },
        {
          title: "Proposal by scenes",
          text: "A scene is a space we model, light and dress; a view is one more camera inside it. The plan applies to each scene you hire.",
        },
        {
          title: "Review rounds",
          text: "Framing and composition first, then materials, light and set dressing; then post-production, and in Borsoga Edition the narrative and the video pieces.",
        },
        {
          title: "Delivery",
          text: "Final images and video. The 3D model and working files stay with the studio. If you have a launch date, we work against it.",
        },
      ],
      plansTitle: "Three plans, applied to each scene",
      plansIntro:
        "You define how many scenes you need. The plan decides how far we take each one.",
      plans: [
        {
          name: "Essential",
          text: "The right image. 3D modeling from your drawings, 2 views per scene, one lighting condition, basic set dressing and high-resolution stills for web and presentation. Two review rounds.",
        },
        {
          name: "Premium",
          text: "The image that sells. 4 views per scene, two lighting conditions, full set dressing with furniture, planting, people and context, material close-ups, a short walkthrough video and large-format print resolution. Three review rounds.",
        },
        {
          name: "Borsoga Edition",
          text: "The authored piece. Art direction for the project, a scripted and edited cinematic video, 10K renders, advanced post-production, an additional night scene and vertical pieces for social and pre-sale. Four review rounds.",
        },
      ],
      plansLinks: [{ href: "/plans/av-plans/", label: "Compare the visualization plans" }],
      projectsTitle: "Recent visualization work",
      faqs: [
        {
          q: "Do you work on projects outside Miami?",
          a: "Yes. Visualization is delivered remotely, for projects anywhere, in English and Spanish. There is no site visit.",
        },
        {
          q: "What do you need from me to start?",
          a: "Drawings in PDF or CAD, elevations and sections, and your material and style references. If you have a 3D model (SKP, RVT, 3DM, FBX, OBJ or MAX), send it or a download link.",
        },
        {
          q: "What is the difference between a scene and a view?",
          a: "A scene is a space that has to be modeled, lit and dressed. A view is one more camera inside a scene that is already built, so it costs far less than a new scene.",
        },
        {
          q: "Do I get the 3D model?",
          a: "No. You receive the final images and videos; the 3D model and the working files stay with the studio.",
        },
        {
          q: "What if the interior isn't designed yet?",
          a: "Resolving an interior is design work, not visualization. We can design it under our interior design service, quoted separately, or work with the design you hand us.",
        },
      ],
      closingTitle: "Tell us about the project",
      closingText: "We'll send back a proposal with the plan and the number of scenes.",
      schema: {
        name: "3D rendering and architectural visualization",
        serviceType: "Architectural visualization",
      },
    },
    es: {
      path: "/es/renders-3d-miami/",
      label: "Renders 3D y visualización",
      title: "Renders 3D y visualización arquitectónica, Miami",
      description:
        "Renders 3D fotorrealistas desde Miami: exteriores, interiores, animación y tours 360° para desarrolladores, arquitectos y constructores, donde estén.",
      eyebrow: "Visualización arquitectónica · Miami y el mundo",
      h1: ["Renders 3D y visualización arquitectónica en Miami,", "para proyectos en cualquier lugar"],
      lead: "Renders de exteriores e interiores, animación y tours 360° para desarrolladores, arquitectos, constructores y propietarios. Modelamos a partir de tus planos y entregamos imágenes con luz real y materiales reales.",
      hero: {
        src: "/projects/RAL-1015-POOL-PAVILION/1.jpg",
        alt: "Render fotorrealista de un área de piscina con un pabellón marfil, tumbonas y palmeras",
      },
      intro: [
        "La visualización arquitectónica convierte planos y modelos 3D en imágenes que cualquiera entiende de un vistazo. Los desarrolladores las usan para vender antes de construir; arquitectos y constructores, para que les aprueben un diseño; los fabricantes, para mostrar sus productos en cualquier acabado.",
        "Trabajamos desde Miami para proyectos en cualquier lugar, en español y en inglés. No hay visita: nos envías los planos, el modelo y tus referencias, y seguimos desde ahí. Nuestros renders se producen con V-Ray y Rhino.",
      ],
      includedTitle: "Qué producimos",
      included: [
        {
          title: "Renders de exteriores",
          text: "Casas, condominios y edificios de uso mixto en su contexto, para preventa, presentaciones a inversionistas y marketing.",
        },
        {
          title: "Renders de interiores",
          text: "Residencias, unidades modelo y amenidades, con materiales e iluminación reales.",
        },
        {
          title: "Vistas aéreas",
          text: "Desarrollos en su entorno real, para planos de conjunto, folletos de venta y presentaciones a inversionistas.",
        },
        {
          title: "Animación y video",
          text: "Un video corto de recorrido desde Premium; un video cinemático con guion y edición en Borsoga Edition.",
        },
        {
          title: "Tours 360° y realidad virtual",
          text: "Tour 360 se abre en cualquier navegador y se comparte con un link. Con Borsoga Immersive llevamos el modelo a unos lentes de realidad virtual en tu sala de ventas, tu oficina o una feria. Ambos se cotizan aparte.",
        },
        {
          title: "Amueblado virtual",
          text: "Amueblado fotorrealista de espacios vacíos para listados, unidades modelo y marketing de preventa.",
        },
      ],
      processTitle: "Cómo funciona un proyecto de visualización",
      process: [
        {
          title: "Envíanos el proyecto",
          text: "Planos en PDF o CAD, alzados y cortes, y tus referencias de materiales y estilo. Trabajamos con modelos SKP, RVT, 3DM, FBX, OBJ y MAX.",
        },
        {
          title: "Propuesta por escenas",
          text: "Una escena es un espacio que modelamos, iluminamos y ambientamos; una vista es una cámara más dentro de ella. El plan se aplica a cada escena que contratas.",
        },
        {
          title: "Rondas de revisión",
          text: "Primero encuadre y composición, luego materiales, luz y ambientación; después la postproducción y, en Borsoga Edition, la narrativa y las piezas de video.",
        },
        {
          title: "Entrega",
          text: "Imágenes y video finales. El modelo 3D y los archivos de trabajo se quedan en el estudio. Si tienes fecha de lanzamiento, trabajamos contra ella.",
        },
      ],
      plansTitle: "Tres planes, aplicados a cada escena",
      plansIntro:
        "Tú defines cuántas escenas necesitas. El plan decide qué tan lejos llevamos cada una.",
      plans: [
        {
          name: "Essential",
          text: "La imagen correcta. Modelado 3D a partir de tus planos, 2 vistas por escena, una condición de luz, ambientación básica e imágenes en alta resolución para web y presentación. Dos rondas de revisión.",
        },
        {
          name: "Premium",
          text: "La imagen que vende. 4 vistas por escena, dos condiciones de luz, ambientación completa con mobiliario, vegetación, personas y contexto, detalles de materiales, un video corto de recorrido y resolución para impresión en gran formato. Tres rondas de revisión.",
        },
        {
          name: "Borsoga Edition",
          text: "La pieza de autor. Dirección de arte del proyecto, un video cinemático con guion y edición, renders en 10K, postproducción avanzada, una escena nocturna adicional y piezas verticales para redes y preventa. Cuatro rondas de revisión.",
        },
      ],
      plansLinks: [{ href: "/plans/es/planes-av/", label: "Compara los planes de visualización" }],
      projectsTitle: "Visualización reciente",
      faqs: [
        {
          q: "¿Trabajan en proyectos fuera de Miami?",
          a: "Sí. La visualización se entrega a distancia, para proyectos en cualquier lugar, en español y en inglés. No hay visita al sitio.",
        },
        {
          q: "¿Qué necesitan de mí para empezar?",
          a: "Planos en PDF o CAD, alzados y cortes, y tus referencias de materiales y estilo. Si tienes un modelo 3D (SKP, RVT, 3DM, FBX, OBJ o MAX), envíalo o pega un link de descarga.",
        },
        {
          q: "¿Qué diferencia hay entre una escena y una vista?",
          a: "Una escena es un espacio que hay que modelar, iluminar y ambientar. Una vista es una cámara más dentro de una escena ya construida, así que cuesta mucho menos que una escena nueva.",
        },
        {
          q: "¿Me entregan el modelo 3D?",
          a: "No. Recibes las imágenes y los videos finales; el modelo 3D y los archivos de trabajo se quedan en el estudio.",
        },
        {
          q: "¿Y si el interior todavía no está diseñado?",
          a: "Resolver un interior es trabajo de diseño, no de visualización. Podemos diseñarlo con nuestro servicio de diseño de interiores, cotizado aparte, o trabajar con el diseño que nos entregues.",
        },
      ],
      closingTitle: "Cuéntanos sobre el proyecto",
      closingText: "Te enviamos una propuesta con el plan y el número de escenas.",
      schema: {
        name: "Renders 3D y visualización arquitectónica",
        serviceType: "Visualización arquitectónica",
      },
    },
  },

  // ── 5 · Branding ─────────────────────────────────────────────────────────
  {
    key: "real-estate-branding",
    projects: ["RAL-9005-REFRAME", "RAL-5002-PEAK-VISION", "RAL-4005-EPSI-NEST"],
    areaServed: REMOTE,
    en: {
      path: "/real-estate-branding/",
      label: "Real estate branding",
      title: "Branding for Real Estate & Construction",
      description:
        "Brand identity, social media design and marketing pieces for real estate developments, developers, builders and construction companies.",
      eyebrow: "Branding · Real estate & construction",
      h1: ["Branding for", "real estate & construction"],
      lead: "Name, logo, palette, typography and brand guidelines for developments, developers, builders and construction companies, plus the sales and social pieces that carry the brand. Designed by the same team that designs and visualizes the space.",
      hero: {
        src: "/projects/branding/reframe/2.jpg",
        alt: "Street posters from the Reframe brand identity on a city wall",
      },
      intro: [
        "A development has to look like something before it exists. The brand is what buyers, brokers and lenders see first: on the banner around the site, in the pitch deck, on the sales website and in every post. When the same studio designs the identity and produces the renderings, the images and the brand speak with one voice.",
        "We work remotely for projects anywhere, in English and Spanish, with three lines: Brand Identity, Social Media Design, and Marketing & Graphic Design.",
      ],
      includedTitle: "What we design",
      included: [
        {
          title: "Brand identity",
          text: "Primary logo and variations, color palette, typography system, graphic language and brand guidelines, delivered as organized final files for digital and print.",
        },
        {
          title: "Naming and concept",
          text: "The project name and the brand concept behind the identity, for developments and companies starting from zero.",
        },
        {
          title: "Sales collateral",
          text: "Pitch decks, company profiles, brochures, catalogs and proposal templates.",
        },
        {
          title: "Campaign and site graphics",
          text: "Digital ads, launch graphics, signage and event graphics.",
        },
        {
          title: "Social media design",
          text: "Monthly posts, carousels, stories, reels and motion built on your identity, with custom templates.",
        },
      ],
      processTitle: "How a brand project runs",
      process: [
        {
          title: "Call or brief",
          text: "Book a 30-minute call or answer the brand questionnaire. Borsoga Edition starts with a strategy session and a map of the visual needs.",
        },
        {
          title: "Concept and identity",
          text: "We develop the identity and present it for review: one round in Essentials, two in Premium, three in Borsoga Edition.",
        },
        {
          title: "Applications",
          text: "The identity is applied to what the project needs: stationery, signage, presentations, social templates.",
        },
        {
          title: "Delivery",
          text: "Organized final files for digital use and print, with guidelines that let anyone apply the brand.",
        },
      ],
      plansTitle: "Three lines, each with its own plans",
      plansIntro:
        "Brand Identity and Social Media Design each have three plans; marketing pieces are hired per piece or as a campaign.",
      plans: [
        {
          name: "Brand Essentials",
          text: "Logo, variations, palette, typography, profile assets, basic graphic language and basic guidelines. One review round.",
        },
        {
          name: "Brand Premium",
          text: "Adds the brand concept, an extended visual system, patterns, iconography, image direction, brand applications, a social media starter kit and extended guidelines. Two review rounds.",
        },
        {
          name: "Brand Borsoga Edition",
          text: "Adds visual strategy, creative and art direction, an advanced graphic system, digital and physical applications, social and presentation template systems, and a complete documented identity. Three review rounds.",
        },
        {
          name: "Social Media Design",
          text: "Essential: up to 8 pieces a month, posts and stories. Premium: 12 to 16 pieces with carousels, reels, basic motion and custom templates. Borsoga Edition: monthly creative direction, campaign concepts, motion graphics and a custom template system.",
        },
        {
          name: "Marketing & Graphic Design",
          text: "Pitch decks, company profiles, brochures, catalogs, digital ads, launch graphics, signage and event graphics, per piece or as a campaign system.",
        },
      ],
      plansLinks: [{ href: "/plans/graphic-design/", label: "See the branding plans" }],
      projectsTitle: "Identities from the studio",
      faqs: [
        {
          q: "Do you only work with real estate companies?",
          a: "Our branding is focused on real estate and construction: developments, developers, builders, construction companies and design businesses such as millwork shops.",
        },
        {
          q: "Can you name a new development?",
          a: "Yes. Naming is part of our brand work for developments that start from zero, together with the logo, palette, typography and guidelines.",
        },
        {
          q: "Does social media design include posting and ads?",
          a: "No. We design the content. Community management, paid media, on-site filming, photography, strategic copywriting and influencer management are quoted as additional services.",
        },
        {
          q: "Can you also make the renderings and the website?",
          a: "Yes. Architectural visualization and web and app design are the studio's other services, so the identity, the images and the sales site come from one team.",
        },
        {
          q: "Do you work outside Miami?",
          a: "Yes. Branding is delivered remotely, for projects anywhere, in English and Spanish.",
        },
      ],
      closingTitle: "Start with a 30-minute call",
      closingText:
        "Tell us about the project or the company and we'll tell you which line and plan fit.",
      schema: {
        name: "Branding for real estate and construction",
        serviceType: "Brand identity design",
      },
    },
    es: {
      path: "/es/branding-inmobiliario/",
      label: "Branding inmobiliario",
      title: "Branding inmobiliario y para la construcción",
      description:
        "Identidad de marca, diseño para redes sociales y piezas de marketing para desarrollos inmobiliarios, desarrolladores, constructores y constructoras.",
      eyebrow: "Branding · Real estate y construcción",
      h1: ["Branding para", "real estate y construcción"],
      lead: "Nombre, logo, paleta, tipografía y manual de marca para desarrollos, desarrolladores, constructores y empresas de construcción, más las piezas de venta y de redes que llevan la marca. Lo diseña el mismo equipo que diseña y visualiza el espacio.",
      hero: {
        src: "/projects/branding/reframe/2.jpg",
        alt: "Afiches callejeros de la identidad de marca de Reframe en una pared urbana",
      },
      intro: [
        "Un desarrollo tiene que verse como algo antes de existir. La marca es lo primero que ven compradores, brokers y bancos: en la lona de la obra, en la presentación, en el sitio de ventas y en cada publicación. Cuando el mismo estudio diseña la identidad y produce los renders, las imágenes y la marca hablan con una sola voz.",
        "Trabajamos a distancia para proyectos en cualquier lugar, en español y en inglés, con tres líneas: Brand Identity, Social Media Design y Marketing & Graphic Design.",
      ],
      includedTitle: "Qué diseñamos",
      included: [
        {
          title: "Identidad de marca",
          text: "Logo principal y variaciones, paleta de color, sistema tipográfico, lenguaje gráfico y manual de marca, entregados en archivos finales ordenados para digital e impresión.",
        },
        {
          title: "Nombre y concepto",
          text: "El nombre del proyecto y el concepto detrás de la identidad, para desarrollos y empresas que empiezan desde cero.",
        },
        {
          title: "Material de ventas",
          text: "Presentaciones comerciales, perfiles corporativos, folletos, catálogos y plantillas de propuesta.",
        },
        {
          title: "Piezas de campaña y de obra",
          text: "Anuncios digitales, gráficos de lanzamiento, señalización y gráficos para eventos.",
        },
        {
          title: "Diseño para redes sociales",
          text: "Posts, carruseles, historias, reels y motion cada mes, construidos sobre tu identidad y con plantillas propias.",
        },
      ],
      processTitle: "Cómo avanza un proyecto de marca",
      process: [
        {
          title: "Llamada o cuestionario",
          text: "Agenda una llamada de 30 minutos o responde el cuestionario de marca. Borsoga Edition empieza con una sesión estratégica y un mapa de necesidades visuales.",
        },
        {
          title: "Concepto e identidad",
          text: "Desarrollamos la identidad y la presentamos para revisión: una ronda en Essentials, dos en Premium y tres en Borsoga Edition.",
        },
        {
          title: "Aplicaciones",
          text: "Aplicamos la identidad a lo que el proyecto necesita: papelería, señalización, presentaciones, plantillas para redes.",
        },
        {
          title: "Entrega",
          text: "Archivos finales ordenados para uso digital e impresión, con el manual que permite a cualquiera aplicar la marca.",
        },
      ],
      plansTitle: "Tres líneas, cada una con sus planes",
      plansIntro:
        "Brand Identity y Social Media Design tienen tres planes cada una; las piezas de marketing se contratan por pieza o como campaña.",
      plans: [
        {
          name: "Brand Essentials",
          text: "Logo, variaciones, paleta, tipografía, recursos para perfiles, lenguaje gráfico básico y manual básico. Una ronda de revisión.",
        },
        {
          name: "Brand Premium",
          text: "Suma el concepto de marca, un sistema visual ampliado, patrones, iconografía, dirección de imagen, aplicaciones de marca, un kit inicial para redes y un manual extendido. Dos rondas de revisión.",
        },
        {
          name: "Brand Borsoga Edition",
          text: "Suma estrategia visual, dirección creativa y de arte, un sistema gráfico avanzado, aplicaciones digitales y físicas, sistemas de plantillas para redes y presentaciones, y una identidad completa y documentada. Tres rondas de revisión.",
        },
        {
          name: "Social Media Design",
          text: "Essential: hasta 8 piezas al mes, posts e historias. Premium: de 12 a 16 piezas con carruseles, reels, motion básico y plantillas propias. Borsoga Edition: dirección creativa mensual, conceptos de campaña, motion graphics y un sistema de plantillas a medida.",
        },
        {
          name: "Marketing & Graphic Design",
          text: "Presentaciones, perfiles corporativos, folletos, catálogos, anuncios digitales, gráficos de lanzamiento, señalización y gráficos para eventos, por pieza o como sistema de campaña.",
        },
      ],
      plansLinks: [{ href: "/plans/es/diseno-grafico/", label: "Ver los planes de branding" }],
      projectsTitle: "Identidades del estudio",
      faqs: [
        {
          q: "¿Solo trabajan con empresas inmobiliarias?",
          a: "Nuestro branding está enfocado en real estate y construcción: desarrollos, desarrolladores, constructores, empresas de construcción y negocios de diseño como talleres de carpintería.",
        },
        {
          q: "¿Pueden ponerle nombre a un desarrollo nuevo?",
          a: "Sí. El nombre es parte de nuestro trabajo de marca para desarrollos que empiezan desde cero, junto con el logo, la paleta, la tipografía y el manual.",
        },
        {
          q: "¿El diseño para redes incluye publicar y pautar?",
          a: "No. Diseñamos el contenido. Community management, pauta publicitaria, grabación presencial, fotografía, copywriting estratégico y gestión de influencers se cotizan como servicios adicionales.",
        },
        {
          q: "¿También pueden hacer los renders y el sitio web?",
          a: "Sí. La visualización arquitectónica y el diseño web y de apps son los otros servicios del estudio, así que la identidad, las imágenes y el sitio de ventas salen de un solo equipo.",
        },
        {
          q: "¿Trabajan fuera de Miami?",
          a: "Sí. El branding se entrega a distancia, para proyectos en cualquier lugar, en español y en inglés.",
        },
      ],
      closingTitle: "Empieza con una llamada de 30 minutos",
      closingText:
        "Cuéntanos sobre el proyecto o la empresa y te decimos qué línea y qué plan le corresponden.",
      schema: {
        name: "Branding para real estate y construcción",
        serviceType: "Diseño de identidad de marca",
      },
    },
  },

  // ── 6 · Web & apps ───────────────────────────────────────────────────────
  {
    key: "real-estate-web-design",
    projects: ["RAL-4005-EPSI-NEST"],
    areaServed: REMOTE,
    en: {
      path: "/real-estate-web-design/",
      label: "Real estate web & apps",
      title: "Real Estate & Construction Websites and Apps",
      description:
        "Websites, web apps and iOS apps for real estate projects, developers and construction companies: original design, custom code, SEO, English and Spanish.",
      eyebrow: "Web & apps · Real estate & construction",
      h1: ["Websites and apps for", "real estate & construction"],
      lead: "Sales sites, company websites, client portals, configurators and iOS sales apps for developments, developers and construction companies, designed and built in-house with original design and fast custom code.",
      hero: {
        src: "/projects/branding/epsi-nest/4.jpg",
        alt: "Laptop showing the Epsi Nest investment-tracking interface",
      },
      intro: [
        "A development's website does a different job from a portfolio. It has to present units that don't exist yet, carry the renderings at full quality, capture leads in two languages and connect to the tools the sales team already uses. We design and build it ourselves, with no templates and no generic builders.",
        "Because the same studio produces the renderings and the brand, the site is planned around the images from the first wireframe. We work remotely for projects anywhere, in English and Spanish.",
      ],
      includedTitle: "What we build",
      included: [
        {
          title: "Sales and company websites",
          text: "Original design, truly responsive layouts, technical SEO, and domain, hosting and SSL set up and delivered working.",
        },
        {
          title: "Bilingual content",
          text: "English and Spanish versions from Web Premium, with a blog or projects section you can edit yourself.",
        },
        {
          title: "Lead capture and integrations",
          text: "Contact forms connected to email or WhatsApp; from Premium, integrations with Instagram, Google Business or a booking system, and a campaign landing page.",
        },
        {
          title: "Web apps",
          text: "Client portals, configurators and budget calculators, ecommerce, a custom CMS, users and roles, and digital contracts with online deposits.",
        },
        {
          title: "iOS apps",
          text: "Sales apps for presentation centers, client portals and dashboards, connected to your CRM. Apps are scoped and quoted per project.",
        },
        {
          title: "Care and Care+",
          text: "Security updates, automatic backups, uptime monitoring, monthly content changes and performance reports. Care+ adds ongoing SEO and priority support.",
        },
      ],
      processTitle: "From brief to launch",
      process: [
        {
          title: "Brief",
          text: "Book a 30-minute call or answer the web questionnaire on the plans page.",
        },
        {
          title: "Structure and design",
          text: "Site map, content structure and original design, reviewed in rounds: one in Web Essential, two in Premium, three in Borsoga Edition.",
        },
        {
          title: "Build and launch",
          text: "Custom code, SEO, Analytics and Search Console installed, and the domain, hosting and SSL configured.",
        },
        {
          title: "Support",
          text: "30 days of post-launch support in Essential and Premium, six months in Borsoga Edition, then optional Care or Care+ maintenance.",
        },
      ],
      plansTitle: "Three web plans, plus maintenance",
      plansIntro:
        "Every plan is designed from scratch. Care and Care+ maintenance can be added to any of them.",
      plans: [
        {
          name: "Web Essential",
          text: "An original website of up to 5 pages: custom code, responsive design, technical SEO, a contact form connected to email or WhatsApp, domain, hosting and SSL, Analytics and Search Console, and 30 days of support.",
        },
        {
          name: "Web Premium",
          text: "Up to 12 pages, animations, a self-editable blog or projects section, English and Spanish versions, advanced SEO, integrations, a campaign landing page and a basic metrics dashboard.",
        },
        {
          name: "Web Borsoga Edition",
          text: "Custom platforms: web apps with client portals, configurators or budget calculators, ecommerce, a custom CMS, CRM and WhatsApp automations, digital contracts with online deposits and custom analytics. Six months of support and Care+ for the first year.",
        },
      ],
      plansLinks: [{ href: "/plans/web-design/", label: "Compare the web plans" }],
      projectsTitle: "Digital design from the studio",
      projectsIntro:
        "Identity and interface design for Epsi Nest, a platform for real estate market analysis and investment tracking.",
      faqs: [
        {
          q: "Do you use templates or website builders?",
          a: "No. Every site is designed from scratch and built in our own code, with no purchased templates or themes.",
        },
        {
          q: "Can the site be in English and Spanish?",
          a: "Yes. Multilingual sites in English and Spanish are included from Web Premium.",
        },
        {
          q: "Do you build iOS apps?",
          a: "Yes. We build web and iOS apps for real estate and construction, such as sales apps for presentation centers, client portals, configurators and budget calculators, connected to your CRM. Apps are scoped and quoted per project.",
        },
        {
          q: "What happens after launch?",
          a: "Web Essential and Premium include 30 days of post-launch support; Borsoga Edition includes six months plus Care+ for the first year. After that, Care and Care+ cover updates, backups, monitoring, content changes and reports.",
        },
        {
          q: "Can I update the content myself?",
          a: "From Web Premium, the blog or projects section is self-editable through a lightweight CMS. Borsoga Edition can include a custom CMS built around how your team works.",
        },
      ],
      closingTitle: "Start with a 30-minute call",
      closingText:
        "Tell us what you need to present or sell and we'll tell you which plan fits.",
      schema: {
        name: "Websites and apps for real estate and construction",
        serviceType: "Web design and development",
      },
    },
    es: {
      path: "/es/diseno-web-inmobiliario/",
      label: "Web y apps inmobiliarias",
      title: "Diseño web inmobiliario y apps para construcción",
      description:
        "Sitios web, apps web y apps iOS para proyectos inmobiliarios, desarrolladores y constructoras: diseño original, código propio, SEO, en español e inglés.",
      eyebrow: "Web y apps · Real estate y construcción",
      h1: ["Sitios web y apps para", "real estate y construcción"],
      lead: "Sitios de ventas, webs corporativas, portales de clientes, configuradores y apps iOS de ventas para desarrollos, desarrolladores y empresas de construcción, diseñados y programados por nosotros, con diseño original y código propio y rápido.",
      hero: {
        src: "/projects/branding/epsi-nest/4.jpg",
        alt: "Laptop con la interfaz de seguimiento de inversiones de Epsi Nest",
      },
      intro: [
        "El sitio de un desarrollo hace un trabajo distinto al de un portafolio. Tiene que presentar unidades que todavía no existen, mostrar los renders con toda su calidad, captar contactos en dos idiomas y conectarse con las herramientas que el equipo de ventas ya usa. Lo diseñamos y lo programamos nosotros, sin plantillas ni constructores genéricos.",
        "Como el mismo estudio produce los renders y la marca, el sitio se planifica alrededor de las imágenes desde el primer boceto. Trabajamos a distancia para proyectos en cualquier lugar, en español y en inglés.",
      ],
      includedTitle: "Qué desarrollamos",
      included: [
        {
          title: "Sitios de ventas y corporativos",
          text: "Diseño original, responsive de verdad, SEO técnico, y dominio, hosting y SSL configurados y entregados funcionando.",
        },
        {
          title: "Contenido bilingüe",
          text: "Versiones en español e inglés desde Web Premium, con un blog o una sección de proyectos que tú mismo puedes editar.",
        },
        {
          title: "Captación e integraciones",
          text: "Formularios conectados a correo o WhatsApp; desde Premium, integración con Instagram, Google Business o un sistema de reservas, y una landing para campañas.",
        },
        {
          title: "Aplicaciones web",
          text: "Portales de clientes, configuradores y calculadoras de presupuesto, ecommerce, un CMS a medida, usuarios y roles, y contratos digitales con cobro de anticipos en línea.",
        },
        {
          title: "Apps iOS",
          text: "Apps de ventas para salas de exhibición, portales de clientes y dashboards, conectadas a tu CRM. Las apps se definen y cotizan por proyecto.",
        },
        {
          title: "Care y Care+",
          text: "Actualizaciones de seguridad, backups automáticos, monitoreo de uptime, cambios de contenido mensuales y reportes de rendimiento. Care+ suma SEO continuo y soporte prioritario.",
        },
      ],
      processTitle: "Del brief al lanzamiento",
      process: [
        {
          title: "Brief",
          text: "Agenda una llamada de 30 minutos o responde el cuestionario web en la página de planes.",
        },
        {
          title: "Estructura y diseño",
          text: "Mapa del sitio, estructura de contenidos y diseño original, revisados por rondas: una en Web Essential, dos en Premium y tres en Borsoga Edition.",
        },
        {
          title: "Desarrollo y lanzamiento",
          text: "Código propio, SEO, Analytics y Search Console instalados, y dominio, hosting y SSL configurados.",
        },
        {
          title: "Soporte",
          text: "30 días de soporte después del lanzamiento en Essential y Premium, seis meses en Borsoga Edition, y después mantenimiento opcional con Care o Care+.",
        },
      ],
      plansTitle: "Tres planes web, más mantenimiento",
      plansIntro:
        "Todos los planes se diseñan desde cero. El mantenimiento Care o Care+ se puede sumar a cualquiera.",
      plans: [
        {
          name: "Web Essential",
          text: "Un sitio original de hasta 5 páginas: código propio, diseño responsive, SEO técnico, formulario conectado a correo o WhatsApp, dominio, hosting y SSL, Analytics y Search Console, y 30 días de soporte.",
        },
        {
          name: "Web Premium",
          text: "Hasta 12 páginas, animaciones, blog o sección de proyectos autoeditable, versiones en español e inglés, SEO avanzado, integraciones, una landing de campaña y un dashboard básico de métricas.",
        },
        {
          name: "Web Borsoga Edition",
          text: "Plataformas a medida: aplicaciones web con portales de clientes, configuradores o calculadoras de presupuesto, ecommerce, CMS a medida, automatizaciones con CRM y WhatsApp, contratos digitales con cobro de anticipos y analítica a medida. Seis meses de soporte y Care+ el primer año.",
        },
      ],
      plansLinks: [{ href: "/plans/es/diseno-web/", label: "Compara los planes web" }],
      projectsTitle: "Diseño digital del estudio",
      projectsIntro:
        "Identidad y diseño de interfaz para Epsi Nest, una plataforma de análisis de mercado y seguimiento de inversiones inmobiliarias.",
      faqs: [
        {
          q: "¿Usan plantillas o constructores de sitios?",
          a: "No. Cada sitio se diseña desde cero y se programa con código propio, sin plantillas ni temas comprados.",
        },
        {
          q: "¿El sitio puede estar en español y en inglés?",
          a: "Sí. Los sitios multiidioma en español e inglés están incluidos desde Web Premium.",
        },
        {
          q: "¿Desarrollan apps iOS?",
          a: "Sí. Desarrollamos apps web e iOS para real estate y construcción, como apps de ventas para salas de exhibición, portales de clientes, configuradores y calculadoras de presupuesto, conectadas a tu CRM. Las apps se definen y cotizan por proyecto.",
        },
        {
          q: "¿Qué pasa después del lanzamiento?",
          a: "Web Essential y Premium incluyen 30 días de soporte; Borsoga Edition, seis meses más Care+ el primer año. Después, Care y Care+ cubren actualizaciones, backups, monitoreo, cambios de contenido y reportes.",
        },
        {
          q: "¿Puedo actualizar el contenido yo mismo?",
          a: "Desde Web Premium, el blog o la sección de proyectos se edita con un CMS ligero. Borsoga Edition puede incluir un CMS a medida, construido alrededor de cómo trabaja tu equipo.",
        },
      ],
      closingTitle: "Empieza con una llamada de 30 minutos",
      closingText:
        "Cuéntanos qué necesitas presentar o vender y te decimos qué plan le corresponde.",
      schema: {
        name: "Sitios web y apps para real estate y construcción",
        serviceType: "Diseño y desarrollo web",
      },
    },
  },
];

export function getServicePage(key: string): ServicePageDef | undefined {
  return SERVICE_PAGES.find((p) => p.key === key);
}
