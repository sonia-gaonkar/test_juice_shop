/**
 * Formats a person's first and last name into a single display name.
 *
 * Trims surrounding whitespace and omits any missing part, so the result
 * never contains leading, trailing, or doubled spaces. Pure and side-effect free.
 *
 * @param firstName - The given name (optional; defaults to empty).
 * @param lastName - The family name (optional; defaults to empty).
 * @returns The combined display name, or an empty string when no name is given.
 */
export function formatDisplayName(firstName: string = '', lastName: string = ''): string {
  const first = firstName.trim();
  const last = lastName.trim();
  return [first, last].filter(Boolean).join(' ');
}