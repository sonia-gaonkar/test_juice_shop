/**
 * Combines a first and last name into a display name.
 * Trims each part and omits any that are empty.
 */
export function formatDisplayName(firstName: string = '', lastName: string = ''): string {
  return [firstName.trim(), lastName.trim()].filter(Boolean).join(' ');
}