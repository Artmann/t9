const initialState = {
  suggestions: [],
  suggestionIndex: 0
};

const suggestions = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_SUGGESTIONS':
      return Object.assign({}, state, {
        suggestions: action.suggestions || [],
        suggestionIndex: 0
      });
    case 'NEXT_SUGGESTION':
      return Object.assign({}, state, {
        suggestionIndex: state.suggestionIndex < (state.suggestions.length - 1) ? state.suggestionIndex + 1 : 0
      });
  }

  return state;
};

export default suggestions;