/**
 * Formats a person's first and last name into a single display name.
 *
 * Each part is coerced to a string and trimmed; empty parts are omitted so the
 * result has no leading or trailing spaces. Internal whitespace within a name is
 * left as-is. Pure and side-effect free.
 *
 * @param firstName - The given name.
 * @param lastName - The family name.
 * @returns The combined display name, or an empty string when no name is given.
 */
export function formatDisplayName(firstName: string = '', lastName: string = ''): string {
  const first = String(firstName ?? '').trim();
  const last = String(lastName ?? '').trim();
  return [first, last].filter(Boolean).join(' ');
}