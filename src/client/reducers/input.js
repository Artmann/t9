const input = (state = [], action) => {
  switch(action.type) {
    case 'ADD_INPUT':
      return [
        ...state,
        action.input
      ];
    case 'REMOVE_INPUT':
      return state.slice(0, -1);
  }

  return state;
};

export default input;