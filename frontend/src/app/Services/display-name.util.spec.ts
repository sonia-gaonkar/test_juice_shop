import { formatDisplayName } from './display-name.util';

describe('formatDisplayName', () => {
  it('combines first and last name', () => {
    expect(formatDisplayName('Jane', 'Doe')).toBe('Jane Doe');
  });

  it('trims surrounding whitespace', () => {
    expect(formatDisplayName('  Jane  ', '  Doe  ')).toBe('Jane Doe');
  });

  it('returns only the available part when one is missing', () => {
    expect(formatDisplayName('Jane', '')).toBe('Jane');
    expect(formatDisplayName('', 'Doe')).toBe('Doe');
  });

  it('returns an empty string when both names are empty', () => {
    expect(formatDisplayName('   ', '')).toBe('');
  });
});
