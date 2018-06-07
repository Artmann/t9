import * as actions from './index'

describe('input actions', () => {
  it('addInput should create ADD_INPUT action', () => {
    expect(actions.addInput(4)).toEqual({
      type: 'ADD_INPUT',
      input: 4
    });
  });
});

describe('suggestion actions', () => {
  it('requestSuggestions should create REQUEST_SUGGESTIONS action', () => {
    expect(actions.requestSuggestions()).toEqual({
      type: 'REQUEST_SUGGESTIONS'
    });
  });

  it('receiveSuggestions should create RECEIVE_SUGGESTIONS action', () => {
    expect(actions.receiveSuggestions({ suggestions: ['a', 'b', 'c'] })).toEqual({
      type: 'RECEIVE_SUGGESTIONS',
      suggestions: ['a', 'b', 'c']
    });
  });

  it('nextSuggestion should create NEXT_SUGGESTION action', () => {
    expect(actions.nextSuggestion()).toEqual({ type: 'NEXT_SUGGESTION' });
  });
});