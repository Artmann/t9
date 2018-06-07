import arrayEqual from "./ArrayEqual";

describe('ArrayEqual', () => {
  it('returns true for empty arrays', () => {
    expect(arrayEqual([], [])).toBeTruthy();
  });

  it('returns false for arrays of different lengths', () => {
    expect(arrayEqual([1], [1, 2])).toBeFalsy();
  });

  it('returns true for equal arrays', () => {
    expect(arrayEqual([1], [1])).toBeTruthy();
    expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(arrayEqual(['a', 'b', 'c'], ['a', 'b', 'c'])).toBeTruthy();
  });

  it('takes order into account', () => {
    expect(arrayEqual([3, 2, 1], [1, 2, 3])).toBeFalsy();
  });
});