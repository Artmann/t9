export const addInput = input => ({
  type: 'ADD_INPUT',
  input
});

export const requestSuggestions = () => ({
  type: 'REQUEST_SUGGESTIONS'
});

export const receiveSuggestions = data => ({
  type: 'RECEIVE_SUGGESTIONS',
  suggestions: data.suggestions
});

export function fetchSuggestions(input) {
  return (dispatch) => {
    dispatch(requestSuggestions());

    return fetch(`/api/suggestions/${input.join('')}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSuggestions(json)));
  };
}

export const nextSuggestion = () => ({
  type: 'NEXT_SUGGESTION'
});