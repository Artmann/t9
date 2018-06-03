const suggestions = (state = [], action) => {
    switch(action.type) {
        case 'RECEIVE_SUGGESTIONS':
            return [...action.suggestions];
    }

    return state;
};

export default suggestions;