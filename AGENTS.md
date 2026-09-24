# Instrucciones para la IA (ChatGPT / Codex / Claude)

Este repo es el sitio de **Borsoga Studio** (`borsogastudio.com`, Astro). Quien
te pide cambios en las páginas de planes suele ser **el diseñador o el
arquitecto del estudio**, desde Claude en su propio ordenador (Windows, con
una copia del repo y la cuenta de GitHub de Sam) o desde ChatGPT (con la
cuenta `borsogastudio-ui`). **No son programadores**:
háblales en español, en lenguaje llano, sin jerga técnica ni bloques de código
salvo que los pidan.

**Todo cambio pedido para las páginas de planes va en una rama `cambio/…`**,
aunque uses la cuenta de Sam: esas ramas son las que la comprobación `alcance`
limita al funnel. Y nunca publiques saltándote las comprobaciones (nada de
`--admin` ni de push directo a `main`).

Su trabajo contigo: **cambiar las páginas de planes y sus formularios**
(`borsogastudio.com/plans/`), verlos en un enlace de prueba y, si les gustan,
publicarlos. Nadie más revisa: lo que publiquen sale a producción. Actúa en
consecuencia.

## Qué puedes tocar

Solo el funnel de planes:

- `src/plans/` — contenido de los planes (`plan-content.ts`, `av-content.ts`),
  textos y traducciones (`i18n/`), y la lógica de los formularios (`client/`).
  **Excepto `src/plans/config.ts`** (rutas y dirección de la API).
- `src/components/plans/` — los componentes y páginas del funnel.
- `src/styles/plans*.css` — sus estilos.
- `public/plans/` — sus imágenes.

Una comprobación automática (`alcance`) **bloquea la publicación** si el cambio
toca cualquier otro archivo. Si lo que te piden lo necesita (el menú general,
el resto de la web, la configuración, dependencias…), **no lo hagas**: explica
que ese cambio tiene que hacerlo Sam.

## Cuándo parar y avisar de que lo tiene que hacer Sam

Los formularios se validan **también en el servidor**, en otro repo
(`borsoga-funnel`, que aquí no está). Si el cambio hace cualquiera de estas
cosas, el servidor rechazaría los envíos y **nadie podría mandar el
formulario**:

- añadir una pregunta **obligatoria**, o hacer obligatoria una que no lo era;
- quitar una pregunta obligatoria;
- cambiar el **nombre interno** de un campo (`name=`, claves de las respuestas);
- cambiar el **texto en español de una opción** de respuesta. Las respuestas
  se guardan en español y el servidor las compara con esas cadenas exactas
  (enrutado, planes recomendados).
- quitar o añadir opciones en los **configuradores de interiorismo y AV**
  (`client/quiz.js`, `client/quiz-av.js`): sus respuestas deciden en el
  servidor el plan recomendado y la ruta del cliente. En los cuestionarios de
  diseño web y de marca (`brief_web.js`, `brief_grafico.js`) quitar o añadir
  una opción de una pregunta no obligatoria sí es seguro.

En esos casos no lo hagas: explica en llano que ese cambio necesita tocar
también el servidor y que lo tiene que hacer Sam. Cambiar la redacción de una
pregunta, un título, una descripción, el orden visual, colores o imágenes
**sí** lo puedes hacer.

## Idiomas

Todo el funnel existe en inglés (`/plans/…`) y en español (`/plans/es/…`).
**Cualquier texto que cambies, cámbialo en los dos idiomas.**

- `T("texto en español")` se traduce buscando **esa cadena española** en la
  tabla `opt` de `src/plans/i18n/en.js`. Si cambias el texto español,
  actualiza también su entrada en esa tabla (la clave es el español nuevo) o saldrá en español en la
  página inglesa.
- Los cuestionarios largos tienen además sus propios diccionarios:
  `i18n/dw.js` (diseño web) y `i18n/gd.js` (identidad de marca).
- No reviertas `q_vsComp` ni `sum_vsComp` a "Respecto a esos competidores" /
  "Frente a ellos": difieren del diseño a propósito.

## Cómo trabajar

0. **Antes de empezar, actualiza la copia**: `git switch main && git pull`.
   Si hay cambios sin guardar de una sesión anterior, pregunta qué hacer con
   ellos antes de tocar nada. Si retoman un cambio que ya está en marcha (hay
   un PR abierto desde una rama `cambio/…`, míralo con `gh pr list`), sigue en
   esa rama en vez de crear otra.
1. **Rama nueva por cada petición**, con nombre corto: `cambio/<algo>`, en
   minúsculas, **20 caracteres como máximo en total** (p. ej.
   `cambio/titulo-web`). Si es más largo, el enlace de prueba cambia de forma
   y no podrás dárselo.
2. Haz el cambio y comprueba que compila: `npm ci && npm run build`.
3. Commit con un mensaje claro, push de la rama y **abre un PR contra `main`**
   con título y descripción en español llano: qué cambia y dónde se ve.
4. **Dale el enlace de prueba.** Es la rama con `/` cambiada por `-`:

   `https://borsoga-studio-git-<rama-con-guiones>-samcard1999s-projects.vercel.app`

   Por ejemplo, `cambio/titulo-web` →
   `https://borsoga-studio-git-cambio-titulo-web-samcard1999s-projects.vercel.app/plans/`

   Dale **el enlace directo a la página que cambió**, en los dos idiomas (ver
   tabla abajo). Avisa de que tarda uno o dos minutos en estar listo y de que
   lleva un aviso amarillo de "entorno de pruebas": ahí los formularios se
   pueden enviar para probarlos y **no se guarda nada**. Si en el PR aparece
   el comentario de Vercel con otro enlace, usa ese.
5. **Si pide ajustes**, haz más commits en **la misma rama**: el mismo enlace se
   actualiza solo.
6. **Publicar, solo cuando lo pida explícitamente** ("publícalo", "súbelo",
   "me gusta, adelante"). Antes, comprueba que las comprobaciones del PR
   (`build` y `alcance`) están en verde; si alguna falla, no publiques y
   explica qué pasa.
   - Si tu entorno puede fusionar PRs, hazlo: `gh pr merge <n> --squash
     --delete-branch`, **nunca con `--admin`**, aunque la cuenta lo permita.
     Si GitHub lo rechaza, explica por qué y no busques otra forma.
   - Si no puede, dale el enlace del PR y dile: "abajo del todo, pulsa
     **Squash and merge** y luego **Confirm**".
7. Al fusionar, la web se publica sola en unos 3 minutos en
   `borsogastudio.com/plans/`. Si no ve el cambio, que recargue con
   Ctrl+F5 en Windows o Cmd+Shift+R en Mac (el navegador y la caché del
   hosting pueden tardar). Después vuelve a `main` y actualiza.

## Páginas del funnel

| Página | Inglés | Español |
|---|---|---|
| Portada de planes | `/plans/` | `/plans/es/` |
| Interiorismo (planes) | `/plans/interior-design/` | `/plans/es/interior-design/` |
| Configurador de interiorismo | `/plans/configurator/` | `/plans/es/configurador/` |
| Planes AV | `/plans/av-plans/` | `/plans/es/planes-av/` |
| Configurador AV | `/plans/av-configurator/` | `/plans/es/configurador-av/` |
| Diseño web (planes) | `/plans/web-design/` | `/plans/es/diseno-web/` |
| Cuestionario de diseño web | `/plans/web-brief/` | `/plans/es/cuestionario-web/` |
| Identidad de marca (planes) | `/plans/graphic-design/` | `/plans/es/diseno-grafico/` |
| Cuestionario de marca | `/plans/graphic-brief/` | `/plans/es/cuestionario-grafico/` |
| Privacidad | `/plans/privacy-policy/` | `/plans/es/politica-de-privacidad/` |
