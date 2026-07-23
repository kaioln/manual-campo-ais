export interface LocalReadResult<T> {
  value: T;
  recovered: boolean;
}

export function readLocalJson<T>(
  key: string,
  fallback: T,
  validate: (value: unknown) => value is T
): LocalReadResult<T> {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return { value: fallback, recovered: false };
    const parsed: unknown = JSON.parse(raw);
    if (validate(parsed)) return { value: parsed, recovered: false };
    localStorage.removeItem(key);
    return { value: fallback, recovered: true };
  } catch {
    try {
      localStorage.removeItem(key);
    } catch {
      // Storage can be unavailable in private or restricted contexts.
    }
    return { value: fallback, recovered: true };
  }
}

export function writeLocalJson<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function isBooleanRecord(value: unknown): value is Record<string, boolean> {
  return Boolean(
    value
      && typeof value === "object"
      && !Array.isArray(value)
      && Object.values(value).every((entry) => typeof entry === "boolean")
  );
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}
