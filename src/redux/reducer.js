const initialState = {
    movie: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                movie: [...state.movie, action.payload]
            }
        default:
            return state;
    }
};

export default reducer;