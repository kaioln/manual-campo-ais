const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path: string): string {
  if (/^(?:https?:|mailto:|tel:|data:|#)/.test(path)) return path;
  return `${base}${path.replace(/^\/+/, "")}`;
}
