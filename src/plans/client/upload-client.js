// Ported verbatim from the retired generator (borsoga-funnel/src/upload-client.js).
// ONE change: the API calls are absolute. borsogastudio.com is static on
// Hostinger; the serverless functions stayed on Vercel, so these are
// cross-origin and the functions answer with the CORS headers.
//
// Reads window.BORSOGA_I18N / BORSOGA_LANG / BORSOGA_API, set by
// components/plans/I18nBundle.astro, which must run before this.

/**
 * Puente mínimo para subir archivos directo a Vercel Blob desde el navegador.
 *
 * Se empaqueta con esbuild a build/assets/upload.js y expone una sola función
 * global. El configurador es JS plano servido estático, sin bundler propio;
 * esto es lo único que necesita empaquetarse, y usa el SDK oficial en vez de
 * hablar a mano con el protocolo de Blob.
 */
import { upload } from "@vercel/blob/client";

/**
 * Tipo por extensión, para cuando el navegador no sabe tipar el archivo.
 *
 * `file.type` viene VACÍO más a menudo de lo que parece: un .heic sacado del
 * iPhone, un .ai o un .key según el sistema, cualquier cosa que el SO no tenga
 * registrada. Mandar `application/octet-stream` a ciegas hacía que el servidor
 * rechazara la subida con "Content type mismatch" — y el usuario veía "No
 * pudimos subir tus archivos" sin poder hacer nada al respecto.
 *
 * Deducirlo de la extensión manda un tipo honesto en vez de uno genérico. Si
 * ni así se sabe, se cae a octet-stream y el servidor ya lo tolera.
 */
const POR_EXTENSION = {
  heic: "image/heic", heif: "image/heif",
  jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp",
  gif: "image/gif", avif: "image/avif", tif: "image/tiff", tiff: "image/tiff",
  svg: "image/svg+xml",
  pdf: "application/pdf",
  psd: "image/vnd.adobe.photoshop", ai: "application/postscript", eps: "application/postscript",
  zip: "application/zip",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  key: "application/vnd.apple.keynote",
  m4a: "audio/mp4", mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg",
  opus: "audio/opus", aac: "audio/aac", amr: "audio/amr", "3gp": "audio/3gpp",
  webm: "audio/webm", mp4: "video/mp4",
};

function tipoDe(file) {
  if (file.type) return file.type;
  const ext = String(file.name || "").split(".").pop().toLowerCase();
  return POR_EXTENSION[ext] || "application/octet-stream";
}

/**
 * @param {File} file
 * @param {string} pathname  ruta destino, siempre bajo leads/<lote>/<tipo>/
 * @param {(pct:number)=>void} [onProgress]
 * @returns {Promise<{url:string}>}
 */
window.borsogaUpload = function (file, pathname, onProgress) {
  return upload(pathname, file, {
    access: "private",
    handleUploadUrl: ((window.BORSOGA_API || "") + "/api/blob-upload/"),
    contentType: tipoDe(file),
    onUploadProgress: onProgress
      ? (e) => onProgress(Math.round(e.percentage || 0))
      : undefined,
  });
};
