import input from './input';

describe('Input Reducer', () => {
  describe('ADD_INPUT', () => {
    it('appends value to array', () => {
      const state = [1, 2, 3];
      const action = { type: 'ADD_INPUT', input: 2 };
      const result = input(state, action);

      expect(result).toEqual([1, 2, 3, 2]);
    });
  });

  describe('REMOVE_INPUT', () => {
    it('removes last value', () => {
      const state = [1, 2, 3];
      const action = { type: 'REMOVE_INPUT' };
      const result = input(state, action);

      expect(result).toEqual([1, 2]);
    });

    it('works on empty array', () => {
      const state = [];
      const action = { type: 'REMOVE_INPUT' };
      const result = input(state, action);

      expect(result).toEqual([]);
    });
  });

  describe('unkown action', () => {
    it('returns state', () => {
      const state = [1, 2, 3];
      const action = { type: 'UNKOWN' };
      const result = input(state, action);

      expect(result).toEqual([1, 2, 3]);
    });
  });
});