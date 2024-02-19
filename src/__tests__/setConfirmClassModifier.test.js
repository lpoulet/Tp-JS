import setConfirmClassModifier from '../setConfirmClassModifier';

describe.each([
  [false, 'confirm', 'confirm success'],
  [true, 'confirm', 'confirm disabled'],
  [false, 'custom', 'custom success'],
])('setConfirmClassModifier(%p, %p)', (hasErrors, classModifier, expected) => {
  test('returns "${expected}"', () => {
    const result = setConfirmClassModifier(hasErrors, classModifier);
    expect(result).toBe(expected);
  });
});