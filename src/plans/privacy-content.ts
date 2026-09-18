// ─────────────────────────────────────────────────────────────────────────────
// Privacy policy content, lifted verbatim from the retired Python generator
// (borsoga-funnel/src/privacidad.py).
//
// Written from what the Interior Design questionnaire actually collects: which
// fields are stored, where the files go, which providers they are shared with.
// If the processing changes — a new provider, a different retention period —
// it has to change HERE, because this is the only published description of it.
//
// Strings are Spanish: that is the translation index, so they go through T()
// at render time (see plans/i18n). Some carry inline HTML (links, <strong>)
// and are rendered with set:html.
// ─────────────────────────────────────────────────────────────────────────────

/** Paragraph (may contain HTML), sub-heading, or bullet list. */
export type PrivacyItem =
  | { kind: "p"; html: string }
  | { kind: "h"; text: string }
  | { kind: "ul"; items: string[] };

export interface PrivacySection {
  title: string;
  items: PrivacyItem[];
}

export const UPDATED = "27 de agosto de 2026";
export const MAIL = "borsogastudio@gmail.com";

export const SECTIONS: PrivacySection[] = [
  {
    title: "Quién trata tus datos",
    items: [
      { kind: "p", html: "Borsoga LLC, con domicilio en Miami, Florida (Estados Unidos), es responsable de la información que recoges y envías a través de este sitio. En este documento nos referimos a nosotros como «Borsoga Studio» o «el estudio»." },
      { kind: "p", html: "Para cualquier asunto relacionado con tus datos puedes escribirnos a <a href=\"mailto:borsogastudio@gmail.com\" style=\"border-bottom:1px solid rgba(0,0,0,.3)\">borsogastudio@gmail.com</a>." },
    ],
  },
  {
    title: "Qué información recogemos",
    items: [
      { kind: "p", html: "Solo pedimos lo que necesitamos para preparar tu propuesta y, si contratas, para redactar el contrato. No compramos bases de datos ni recogemos información por tu cuenta." },
      { kind: "h", text: "Datos de contacto e identificación" },
      { kind: "ul", items: ["Tu nombre legal completo, correo electrónico y teléfono.", "Si firmas como empresa: el nombre legal de la entidad, su estado de registro, quién firma y su cargo.", "Si no eres el dueño de la propiedad: el nombre y el correo del dueño, porque es quien tiene que firmar el contrato."] },
      { kind: "h", text: "Datos del proyecto" },
      { kind: "ul", items: ["La dirección del inmueble donde se haría el proyecto.", "Tus respuestas sobre el tipo de proyecto, los espacios, el tamaño, el nivel de acabado, los plazos y quién toma la decisión.", "El rango de inversión que nos indiques, si decides compartirlo. Es opcional.", "Si ya trabajas con un contratista o un arquitecto."] },
      { kind: "h", text: "Archivos que subes" },
      { kind: "ul", items: ["Fotografías del interior del inmueble.", "Planos, fichas técnicas de electrodomésticos y otros documentos que nos envíes."] },
      { kind: "h", text: "Datos técnicos" },
      { kind: "ul", items: ["Guardamos tus respuestas en el almacenamiento local de tu navegador para que puedas salir del cuestionario y retomarlo donde lo dejaste.", "Nuestro servidor registra datos de conexión habituales, como la dirección IP y el navegador, por seguridad y para detectar envíos automatizados."] },
    ],
  },
  {
    title: "Para qué usamos tu información",
    items: [
      { kind: "ul", items: ["Preparar el estimado y la propuesta de tu proyecto.", "Contactarte para resolver dudas o agendar una llamada o una visita.", "Redactar el contrato y gestionar el pago si decides contratarnos.", "Enviarte un enlace para retomar el cuestionario si lo dejas a medias.", "Evitar envíos automatizados, spam y usos abusivos del formulario."] },
      { kind: "p", html: "<strong>No usamos tus datos para publicidad ni te inscribimos en newsletters.</strong> Si en algún momento queremos escribirte por algo distinto de tu proyecto, te lo pediremos aparte." },
    ],
  },
  {
    title: "Las fotos de tu espacio",
    items: [
      { kind: "p", html: "Sabemos que son fotos del interior de tu casa o de tu local, así que las tratamos con el mismo cuidado que los datos de contacto." },
      { kind: "ul", items: ["Se guardan en almacenamiento privado, no en una carpeta pública ni indexable.", "Las ve únicamente el equipo de Borsoga Studio que trabaja en tu proyecto.", "No las compartimos con terceros, no las vendemos y no las usamos para entrenar sistemas de inteligencia artificial.", "No las publicamos en nuestro portafolio ni en redes sociales salvo que nos des permiso expreso. En el cuestionario te preguntamos por ello y lo confirmamos por escrito en el contrato. Puedes decir que no y no cambia nada del servicio."] },
    ],
  },
  {
    title: "Con quién la compartimos",
    items: [
      { kind: "p", html: "No vendemos tu información. La compartimos únicamente con proveedores que necesitamos para operar, y solo con lo imprescindible:" },
      { kind: "ul", items: ["Nuestro proveedor de alojamiento web y de correo, para almacenar la información y enviarte mensajes.", "Nuestro procesador de pagos, si contratas, para cobrar el anticipo. El estudio no guarda los números de tu tarjeta ni de tu cuenta.", "Nuestro proveedor de firma electrónica, si contratas, para que firmes el contrato.", "Un contratista, arquitecto o ingeniero, solo cuando tu proyecto lo requiera y únicamente si nos lo autorizas."] },
      { kind: "p", html: "También podríamos tener que entregar información si nos lo exige una autoridad o una orden judicial." },
    ],
  },
  {
    title: "Cuánto tiempo la guardamos",
    items: [
      { kind: "ul", items: ["Si nos escribes y no llegamos a trabajar juntos, conservamos tu consulta hasta <strong>24 meses</strong> y después la eliminamos.", "Si contratas, conservamos el expediente del proyecto mientras dure la relación y después el tiempo que exijan las obligaciones contables y fiscales aplicables en Florida.", "Puedes pedirnos que borremos tus datos antes de esos plazos, salvo que tengamos una obligación legal de conservarlos."] },
    ],
  },
  {
    title: "Cómo la protegemos",
    items: [
      { kind: "p", html: "El sitio se sirve por conexión cifrada (HTTPS). Los archivos que subes se guardan en un área privada con acceso restringido y las cuentas del estudio están protegidas con contraseñas propias. Ningún sistema es infalible: si llegara a producirse una brecha que afecte a tu información, te lo comunicaríamos." },
    ],
  },
  {
    title: "Tus derechos",
    items: [
      { kind: "p", html: "Escríbenos y te atendemos, vengas de donde vengas. Puedes pedirnos:" },
      { kind: "ul", items: ["Acceder a la información que tenemos sobre ti.", "Corregir cualquier dato incorrecto.", "Eliminar tu información.", "Una copia de tus datos en un formato que puedas reutilizar.", "Retirar tu consentimiento en cualquier momento, incluido el permiso para publicar tu proyecto."] },
      { kind: "p", html: "Respondemos en un plazo máximo de 30 días. No cobramos por ello y no te penalizamos por ejercer estos derechos." },
    ],
  },
  {
    title: "Cookies y almacenamiento local",
    items: [
      { kind: "p", html: "Este sitio no usa cookies de publicidad ni de seguimiento de terceros. El cuestionario usa el almacenamiento local de tu navegador para guardar tus respuestas a medida que avanzas, de modo que no las pierdas si cierras la página. Esa información se queda en tu dispositivo y puedes borrarla vaciando los datos del sitio en tu navegador." },
    ],
  },
  {
    title: "Menores",
    items: [
      { kind: "p", html: "Este sitio está dirigido a personas adultas. No recogemos deliberadamente información de menores de 18 años. Si detectamos que hemos recibido datos de un menor, los eliminamos." },
    ],
  },
  {
    title: "Cambios en esta política",
    items: [
      { kind: "p", html: "Si cambiamos algo, actualizamos la fecha del encabezado. Cuando el cambio sea significativo y afecte a proyectos en curso, lo avisamos por correo." },
    ],
  },
];
