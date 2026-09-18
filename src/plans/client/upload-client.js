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
 * @param {File} file
 * @param {string} pathname  ruta destino, siempre bajo leads/<lote>/<tipo>/
 * @param {(pct:number)=>void} [onProgress]
 * @returns {Promise<{url:string}>}
 */
window.borsogaUpload = function (file, pathname, onProgress) {
  return upload(pathname, file, {
    access: "private",
    handleUploadUrl: ((window.BORSOGA_API || "") + "/api/blob-upload/"),
    contentType: file.type || "application/octet-stream",
    onUploadProgress: onProgress
      ? (e) => onProgress(Math.round(e.percentage || 0))
      : undefined,
  });
};
