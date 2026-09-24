# Cambiar las páginas de planes con Claude

Guía para el equipo del estudio (Windows y Mac). Con esto puedes cambiar las páginas
de planes de `borsogastudio.com/plans/` y sus formularios hablando con Claude,
verlos en un enlace de prueba y publicarlos tú mismo cuando te gusten.

## Una sola vez: preparar el ordenador

**En Windows:** abre **PowerShell** (menú Inicio, escribe `PowerShell`; no hace
falta "como administrador"), pega esta línea (clic derecho pega) y pulsa Enter:

```
irm https://raw.githubusercontent.com/samcardch99/borsoga-studio/main/scripts/instalar-windows.ps1 | iex
```

**En Mac:** abre **Terminal** (Cmd+Espacio, escribe `Terminal`), pega esta línea
(Cmd+V) y pulsa Enter. Si te pide la contraseña del Mac, escríbela aunque no
se vea nada al teclear, y pulsa Enter:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/samcardch99/borsoga-studio/main/scripts/instalar-mac.sh)"
```

Después, en los dos casos:

1. Instala lo que falte (Git, Node.js y GitHub; la app de Claude ya la tienes).
2. En un momento se abrirá el navegador para conectar con GitHub y verás un
   **código de 8 caracteres**: mándaselo a Sam por WhatsApp para que lo
   autorice desde su ordenador en `github.com/login/device`. La conexión tiene
   que ser con la cuenta de Sam (`samcardch99`).
3. La primera vez descarga el sitio, que pesa bastante: puede tardar unos
   minutos.
4. Cuando ponga **"Listo."** ya está. Si algo falla, cierra la ventana, abre
   otra y vuelve a pegar la línea: lo que ya estaba hecho se salta.

## Cada vez que quieras cambiar algo

1. Abre la app de **Claude** y entra en la pestaña **Code**.
2. Elige la carpeta `borsoga-studio` dentro de **Documentos**.
3. Pide el cambio con tus palabras. Por ejemplo:

   > En el cuestionario de diseño web, quita Squarespace de las opciones de
   > plataforma. Dame el enlace de prueba.

4. Claude te pedirá permiso para usar algunas herramientas (git, npm, gh):
   **acéptalo**.
5. Te dará un **enlace de prueba** en inglés y en español. Tarda uno o dos
   minutos en estar listo. Lleva un aviso amarillo de "entorno de pruebas":
   ahí puedes rellenar y enviar los formularios, no se guarda nada.
6. ¿Algo no te convence? Díselo y lo ajusta: el mismo enlace se actualiza.
7. ¿Te gusta? Dile **"publícalo"**. En unos 3 minutos estará en
   `borsogastudio.com/plans/`. Si no lo ves, recarga con **Ctrl+F5** (Windows) o **Cmd+Shift+R** (Mac).

## Lo que no se puede hacer solo

Claude te avisará y tendrás que pedírselo a Sam si el cambio:

- toca algo fuera de las páginas de planes (el menú general, la portada, el
  resto de la web…);
- añade o quita una pregunta **obligatoria** de un formulario, o cambia cómo
  se guardan las respuestas, o cambia las opciones de los configuradores de
  interiorismo y AV (deciden qué plan se recomienda). Reescribir preguntas y
  textos, o quitar opciones en los cuestionarios de diseño web y de marca, sí
  lo puedes hacer tú. Si no estás seguro, pídelo igual: Claude te avisa.

Aunque se equivocara, GitHub no deja publicar un cambio que se salga de las
páginas de planes o que rompa la web: esas comprobaciones son automáticas.
