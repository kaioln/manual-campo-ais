import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const mode = process.argv.includes("--mode")
  ? process.argv[process.argv.indexOf("--mode") + 1]
  : "audit";
const failures = [];
const notes = [];
const deploymentBase = `/${(process.env.PUBLIC_BASE_PATH || "").replace(/^\/+|\/+$/g, "")}`;

function withoutDeploymentBase(path) {
  if (deploymentBase === "/") return path;
  if (path === deploymentBase || path === `${deploymentBase}/`) return "/";
  return path.startsWith(`${deploymentBase}/`) ? path.slice(deploymentBase.length) : path;
}

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function text(path) {
  return readFileSync(path, "utf8");
}

function fail(message) {
  failures.push(message);
}

const sourceFiles = [
  ...walk(join(root, "src")),
  ...walk(join(root, "public")),
  ...walk(join(root, "docs", "catalog")),
  join(root, "AGENTS.md"),
  join(root, "PLANS.md"),
  join(root, "README.md")
].filter((path) => existsSync(path) && [".ts", ".astro", ".css", ".js", ".mjs", ".md", ".csv", ".json", ".svg", ".webmanifest"].includes(extname(path)));

const combined = sourceFiles.map((path) => text(path)).join("\n");
for (const pattern of [
  { regex: /\bLorem ipsum\b/i, label: "Lorem ipsum" },
  { regex: /\bTODO\b/, label: "TODO" },
  { regex: /adicionar depois/i, label: "placeholder 'adicionar depois'" }
]) {
  if (pattern.regex.test(combined)) fail(`Conteúdo provisório detectado: ${pattern.label}.`);
}

if (/tailwind|bootstrap/i.test(text(join(root, "package.json")))) {
  fail("Dependência visual proibida detectada.");
}
if (/<(?:script|link)[^>]+(?:src|href)=["']https?:\/\//i.test(combined)) {
  fail("Asset remoto obrigatório detectado em HTML.");
}

const sourceData = text(join(root, "src", "data", "sources.ts"));
const claimsData = text(join(root, "src", "data", "claims.ts"));
const modulesData = text(join(root, "src", "data", "modules.ts"));
const sourceIds = new Set([...sourceData.matchAll(/\bid:\s*"((?:SRC)-[^"]+)"/g)].map((match) => match[1]));
const claimIds = new Set([...claimsData.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]));
const referencedSources = [
  ...claimsData.matchAll(/\bsourceId:\s*"([^"]+)"/g),
  ...modulesData.matchAll(/"(SRC-[A-Z0-9-]+)"/g)
].map((match) => match[1]);
const referencedClaims = [
  ...modulesData.matchAll(/"((?:AIS|FA150|IEC61162)-[A-Z0-9-]+)"/g),
  ...walk(join(root, "src", "pages")).flatMap((path) => [...text(path).matchAll(/claimId=["']([^"']+)["']/g)])
].map((match) => match[1]);

referencedSources.forEach((id) => {
  if (!sourceIds.has(id)) fail(`Fonte referenciada e inexistente: ${id}.`);
});
referencedClaims.forEach((id) => {
  if (!claimIds.has(id)) fail(`Alegação referenciada e inexistente: ${id}.`);
});

for (const block of claimsData.split(/\n\s*\{\s*\n/).slice(1)) {
  if (/classification:\s*"(CONFIRMADO PELO MANUAL|CONFIRMADO POR NORMA|EXCLUSIVO DESTE MODELO)"/.test(block)) {
    if (!/sourceId:\s*"SRC-/.test(block)) fail("Alegação confirmada sem fonte.");
    if (/page:\s*""/.test(block)) fail("Alegação confirmada sem página/referência.");
  }
}

const ledger = text(join(root, "docs", "catalog", "claims-ledger.csv"));
const ledgerIds = ledger.split(/\r?\n/).slice(1).filter(Boolean).map((line) => line.split(",")[0]);
claimIds.forEach((id) => {
  if (!ledgerIds.includes(id)) fail(`Alegação ${id} não aparece no claims-ledger.csv.`);
});

for (const required of [
  "docs/catalog/document-inventory.md",
  "docs/catalog/model-document-matrix.md",
  "docs/catalog/source-registry.md",
  "docs/catalog/missing-information.md",
  "docs/catalog/source-conflicts.md",
  "docs/catalog/revision-history.md",
  "TECHNICAL_AUDIT.md",
  "SECURITY_AUDIT.md",
  "CONTENT_GAPS.md",
  "FINAL_VALIDATION.md"
]) {
  if (!existsSync(join(root, required))) fail(`Entregável obrigatório ausente: ${required}.`);
}

if (!/private\//.test(text(join(root, ".gitignore")))) fail("private/ não está no .gitignore.");
if (!/output:\s*"static"/.test(text(join(root, "astro.config.mjs")))) fail("Astro não está configurado para saída estática.");
if (!/@media print/.test(text(join(root, "src", "styles", "global.css")))) fail("CSS de impressão ausente.");
if (!/@media \(max-width:/.test(text(join(root, "src", "styles", "global.css")))) fail("Regras responsivas ausentes.");

if (mode === "audit") {
  const dist = join(root, "dist");
  if (!existsSync(dist)) fail("dist/ ausente; execute o build antes da auditoria.");
  else {
    const distFiles = walk(dist);
    const privateFiles = distFiles.filter((path) => /[\\/]private[\\/]/i.test(path));
    if (privateFiles.length) fail("Arquivo de private/ incluído no build.");

    const publicTextFiles = distFiles.filter((path) => [".html", ".js", ".json", ".xml", ".txt", ".css"].includes(extname(path)));
    const publicText = publicTextFiles.map((path) => text(path)).join("\n");
    const credentialPatterns = [
      /password\s*[:=]\s*["'][^"']{4,}["']/i,
      /senha\s*[:=]\s*["'][^"']{4,}["']/i,
      /\b(?:sk|api)[-_][a-z0-9]{20,}\b/i
    ];
    credentialPatterns.forEach((regex) => {
      if (regex.test(publicText)) fail(`Possível credencial pública detectada: ${regex}.`);
    });

    const htmlFiles = distFiles.filter((path) => extname(path) === ".html");
    for (const path of htmlFiles) {
      const html = text(path);
      const label = relative(dist, path);
      if (!/<html[^>]+lang="pt-BR"/i.test(html)) fail(`${label}: lang pt-BR ausente.`);
      if (!/<meta[^>]+name="viewport"/i.test(html)) fail(`${label}: viewport ausente.`);
      if (!/<h1[\s>]/i.test(html)) fail(`${label}: H1 ausente.`);
      if (!/class="skip-link"/.test(html)) fail(`${label}: skip link ausente.`);
      for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
        if (!/\balt=/.test(image[0])) fail(`${label}: imagem sem alt.`);
      }
      for (const button of html.matchAll(/<button\b[^>]*>/gi)) {
        if (!/\btype=/.test(button[0])) fail(`${label}: botão sem type.`);
      }
      for (const attr of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
        const value = attr[1];
        if (!value || /^(?:https?:|mailto:|tel:|data:|#)/.test(value)) continue;
        const clean = withoutDeploymentBase(value.split("#")[0].split("?")[0]);
        if (!clean.startsWith("/")) continue;
        const disk = clean.endsWith("/")
          ? join(dist, clean, "index.html")
          : join(dist, clean);
        if (!existsSync(disk)) fail(`${label}: link/recurso interno quebrado ${value}.`);
      }
    }

    const sw = text(join(root, "public", "sw.js"));
    const corePaths = [...sw.matchAll(/^\s*"([/][^"]+)",?$/gm)].map((match) => match[1]);
    corePaths.forEach((path) => {
      const disk = path.endsWith("/") ? join(dist, path, "index.html") : join(dist, path);
      if (!existsSync(disk)) fail(`Service worker referencia recurso ausente: ${path}.`);
    });
    notes.push(`${htmlFiles.length} páginas HTML auditadas.`);
  }
}

if (failures.length) {
  console.error("VALIDAÇÃO REPROVADA");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`VALIDAÇÃO APROVADA (${mode})`);
notes.forEach((message) => console.log(`- ${message}`));
