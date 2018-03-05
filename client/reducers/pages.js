const initialState = [];

const pages = (state = initialState, action) => {
    switch (action.type) {
        case 'PAGE_ONE':
            return [
                ...state,
                action.pages
            ];
        default:
            return state;
    }
};

export default pages;