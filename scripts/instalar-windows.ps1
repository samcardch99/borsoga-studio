# -----------------------------------------------------------------------------
# Prepara un PC con Windows para cambiar las paginas de planes con Claude.
#
# Uso, en PowerShell (no hace falta ser administrador):
#   irm https://raw.githubusercontent.com/samcardch99/borsoga-studio/main/scripts/instalar-windows.ps1 | iex
#
# Se puede ejecutar tantas veces como haga falta: lo que ya esta hecho se salta.
# Deliberately ASCII-only: Windows PowerShell 5.1 misreads accented characters
# in scripts without a BOM, and a BOM breaks `irm | iex`.
# -----------------------------------------------------------------------------

# No $ErrorActionPreference = "Stop": in Windows PowerShell 5.1 it turns any
# stderr output of native tools (gh, git) into a terminating error. Exit codes
# are checked by hand instead.
$Repo = "samcardch99/borsoga-studio"
$Carpeta = Join-Path $HOME "Documents\borsoga-studio"

function Paso($texto) { Write-Host "`n==> $texto" -ForegroundColor Cyan }
function Tiene($cmd) { [bool](Get-Command $cmd -ErrorAction SilentlyContinue) }
function RefrescarPath {
  $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
              [Environment]::GetEnvironmentVariable("Path", "User")
}

if (-not (Tiene "winget")) {
  Write-Host "Falta 'winget' (App Installer). Instalalo desde Microsoft Store y vuelve a ejecutar esto." -ForegroundColor Red
  return
}

# 1. Programas --------------------------------------------------------------
Paso "Instalando programas (Git, Node.js, GitHub CLI)"
$programas = @(
  @{ Id = "Git.Git";           Cmd = "git"    },
  @{ Id = "OpenJS.NodeJS.LTS"; Cmd = "node"   },
  @{ Id = "GitHub.cli";        Cmd = "gh"     }
)
foreach ($p in $programas) {
  if (Tiene $p.Cmd) { Write-Host "  $($p.Id): ya instalado"; continue }
  Write-Host "  Instalando $($p.Id)..."
  winget install --id $p.Id -e --silent --accept-source-agreements --accept-package-agreements | Out-Null
}
RefrescarPath
foreach ($c in "git", "node", "gh") {
  if (-not (Tiene $c)) {
    Write-Host "No encuentro '$c'. Cierra esta ventana, abre otra de PowerShell y vuelve a ejecutar el comando." -ForegroundColor Red
    return
  }
}

# The site needs Node 22.12 or newer (package.json "engines").
$v = [version]((node -v).TrimStart("v"))
if ($v -lt [version]"22.12.0") {
  Paso "Actualizando Node.js ($v es demasiado antiguo)"
  winget upgrade --id OpenJS.NodeJS.LTS -e --silent --accept-source-agreements --accept-package-agreements | Out-Null
  RefrescarPath
}

# 2. GitHub -----------------------------------------------------------------
Paso "Conectando con GitHub"
gh auth status 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "  Se abrira el navegador y aparecera un codigo de 8 caracteres."
  Write-Host "  Inicia sesion como samcardch99 o pasale el codigo a Sam para que lo"
  Write-Host "  autorice desde su ordenador en https://github.com/login/device"
  gh auth login --hostname github.com --git-protocol https --web
}
$usuario = gh api user --jq .login
if ($usuario -ne "samcardch99") {
  Write-Host "  GitHub esta conectado como '$usuario', no como samcardch99." -ForegroundColor Yellow
  Write-Host "  Ejecuta 'gh auth logout' y vuelve a ejecutar este comando." -ForegroundColor Yellow
  return
}
gh auth setup-git
Write-Host "  Conectado como $usuario"

# 3. Copia del repo ---------------------------------------------------------
Paso "Descargando el sitio en $Carpeta"
if (Test-Path (Join-Path $Carpeta ".git")) {
  git -C $Carpeta switch main
  git -C $Carpeta pull --ff-only
} else {
  gh repo clone $Repo $Carpeta
  if ($LASTEXITCODE -ne 0) { Write-Host "No se pudo descargar el repo." -ForegroundColor Red; return }
}
git -C $Carpeta config user.name "Borsoga Studio"
git -C $Carpeta config user.email "borsogastudio@gmail.com"

Paso "Instalando las dependencias del sitio (tarda un par de minutos)"
Push-Location $Carpeta
try { npm ci } finally { Pop-Location }
if ($LASTEXITCODE -ne 0) { Write-Host "Fallo la instalacion de dependencias. Vuelve a ejecutar el comando." -ForegroundColor Red; return }

Write-Host "`nListo." -ForegroundColor Green
Write-Host "Abre la app de Claude (si no la tienes: https://claude.ai/download),"
Write-Host "entra en la pestana 'Code' y elige la carpeta:"
Write-Host "  $Carpeta"
Write-Host "y pide el cambio que quieras en las paginas de planes."
