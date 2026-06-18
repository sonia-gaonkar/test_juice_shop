/**
 * Combines a first and last name into a display name.
 * Trims each part and omits any that are empty.
 *
 * @param {string} firstName - First name (optional).
 * @param {string} lastName - Last name (optional).
 * @returns {string} The combined display name.
 */
export function formatDisplayName(firstName: string = '', lastName: string = ''): string {
  return [firstName.trim(), lastName.trim()].filter(part => part.length > 0).join(' ');
}