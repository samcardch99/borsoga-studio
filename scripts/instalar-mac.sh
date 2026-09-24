#!/bin/bash
# -----------------------------------------------------------------------------
# Prepara un Mac para cambiar las páginas de planes con Claude.
#
# Uso, en Terminal:
#   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/samcardch99/borsoga-studio/main/scripts/instalar-mac.sh)"
#
# Se puede ejecutar tantas veces como haga falta: lo que ya está hecho se salta.
#
# Run it as above, not `curl … | bash`: Homebrew's installer asks for the Mac
# password, and that needs the terminal on stdin, which a pipe takes away.
# -----------------------------------------------------------------------------
set -euo pipefail

REPO="samcardch99/borsoga-studio"
# Overridable so the script can be tested without touching the real copy.
CARPETA="${BORSOGA_CARPETA:-$HOME/Documents/borsoga-studio}"

paso() { printf '\n\033[36m==> %s\033[0m\n' "$1"; }
aviso() { printf '\033[33m%s\033[0m\n' "$1"; }
error() { printf '\033[31m%s\033[0m\n' "$1"; exit 1; }
tiene() { command -v "$1" >/dev/null 2>&1; }

# 1. Programas --------------------------------------------------------------
if ! tiene brew; then
  paso "Instalando Homebrew (te pedirá la contraseña del Mac; al escribirla no se ve nada)"
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi
# Homebrew lives in /opt/homebrew on Apple Silicon and /usr/local on Intel.
# Load it here, and for every future Terminal window too.
for b in /opt/homebrew/bin/brew /usr/local/bin/brew; do
  if [ -x "$b" ]; then
    eval "$("$b" shellenv)"
    grep -qs "$b shellenv" "$HOME/.zprofile" || echo "eval \"\$($b shellenv)\"" >> "$HOME/.zprofile"
    break
  fi
done
tiene brew || error "No encuentro Homebrew. Cierra Terminal, ábrela otra vez y vuelve a ejecutar el comando."

paso "Instalando programas (Git, Node.js, GitHub CLI)"
for p in git node gh; do
  if tiene "$p"; then echo "  $p: ya instalado"; else echo "  Instalando $p..."; brew install "$p"; fi
done

# The site needs Node 22.12 or newer (package.json "engines").
if ! node -e 'const [a,b]=process.versions.node.split(".").map(Number);process.exit(a>22||(a===22&&b>=12)?0:1)'; then
  paso "Actualizando Node.js ($(node -v) es demasiado antiguo)"
  brew install node && brew link --overwrite node
  node -e 'const [a,b]=process.versions.node.split(".").map(Number);process.exit(a>22||(a===22&&b>=12)?0:1)' \
    || error "Sigue habiendo un Node.js antiguo delante. Avisa a Sam."
fi

# 2. GitHub -----------------------------------------------------------------
paso "Conectando con GitHub"
if ! gh auth status >/dev/null 2>&1; then
  echo "  Se abrirá el navegador y aparecerá un código de 8 caracteres."
  echo "  Inicia sesión como samcardch99 o pásale el código a Sam para que lo"
  echo "  autorice desde su ordenador en https://github.com/login/device"
  gh auth login --hostname github.com --git-protocol https --web
fi
usuario="$(gh api user --jq .login)"
if [ "$usuario" != "samcardch99" ]; then
  aviso "  GitHub está conectado como '$usuario', no como samcardch99."
  error "  Ejecuta 'gh auth logout' y vuelve a ejecutar este comando."
fi
gh auth setup-git
echo "  Conectado como $usuario"

# 3. Copia del repo ---------------------------------------------------------
paso "Descargando el sitio en $CARPETA"
if [ -d "$CARPETA/.git" ]; then
  git -C "$CARPETA" switch main
  git -C "$CARPETA" pull --ff-only
else
  gh repo clone "$REPO" "$CARPETA"
fi
git -C "$CARPETA" config user.name "Borsoga Studio"
git -C "$CARPETA" config user.email "borsogastudio@gmail.com"

paso "Instalando las dependencias del sitio (tarda un par de minutos)"
(cd "$CARPETA" && npm ci)

printf '\n\033[32mListo.\033[0m\n'
echo "Abre la app de Claude (si no la tienes: https://claude.ai/download),"
echo "entra en la pestaña 'Code' y elige la carpeta:"
echo "  $CARPETA"
