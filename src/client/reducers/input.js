const input = (state = [], action) => {
    switch(action.type) {
        case 'ADD_INPUT':
            return [
                ...state,
                action.input
            ];
    }

    return state;
};

export default input;