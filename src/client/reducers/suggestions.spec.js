import suggestions from "./suggestions";

describe('suggestion reducer', () => {
  describe('RECEIVE_SUGGESTIONS', () => {
    it('sets suggestions', () => {
      const action = {
        type: 'RECEIVE_SUGGESTIONS',
        suggestions: [ 'hello', 'gekko', 'wecco' ],
      };
      const result = suggestions(undefined, action);

      expect(result).toEqual({
        suggestions: [ 'hello', 'gekko', 'wecco' ],
        suggestionIndex: 0
      });
    });

    it('resets suggestion index', () => {
      const action = {
        type: 'RECEIVE_SUGGESTIONS',
        suggestionIndex: [],
      };
      const result = suggestions({
        suggestions: [],
        suggestionIndex: 3
      }, action);

      expect(result).toEqual({
        suggestions: [],
        suggestionIndex: 0
      });
    });
  });

  describe('NEXT_SUGGESTION', () => {
    it('increases suggestion index', () => {
      const state = {
        suggestions: [ 'hello', 'gekko', 'wecco' ],
        suggestionIndex: 0
      };
      const action = { type: 'NEXT_SUGGESTION' };
      const result = suggestions(state, action);

      expect(result).toEqual({
        suggestions: [ 'hello', 'gekko', 'wecco' ],
        suggestionIndex: 1
      });
    });

    it('goes back to zero', () => {
      const state = {
        suggestions: [ 'hello', 'gekko', 'wecco' ],
        suggestionIndex: 2
      };
      const action = { type: 'NEXT_SUGGESTION' };
      const result = suggestions(state, action);

      expect(result).toEqual({
        suggestions: [ 'hello', 'gekko', 'wecco' ],
        suggestionIndex: 0
      });
    });

  });

  describe('unknown action', () => {
    it('returns state', () => {
      const state = {
        suggestions: ['a', 'b', 'c'],
        suggestionIndex: 1
      }
      const action = { type: 'unknown' };
      const result = suggestions(state, action);

      expect(result).toEqual(state);
    });
  })
});