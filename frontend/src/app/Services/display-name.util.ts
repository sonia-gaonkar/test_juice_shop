/**
 * Formats a person's first and last name into a single display name.
 *
 * Trims surrounding whitespace and collapses missing parts gracefully so the
 * result never contains leading/trailing spaces. Pure and side-effect free.
 *
 * @param firstName - The given name (may be empty or whitespace).
 * @param lastName - The family name (may be empty or whitespace).
 * @returns The combined display name, or an empty string when no name is given.
 */
export function formatDisplayName(firstName: string, lastName: string): string {
  const first: string = (firstName ?? '').trim();
  const last: string = (lastName ?? '').trim();

  if (first.length === 0 && last.length === 0) {
    return '';
  }
  if (first.length === 0) {
    return last;
  }
  if (last.length === 0) {
    return first;
  }
  return `${first} ${last}`;
}