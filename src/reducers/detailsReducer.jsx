const initialState = {
    bookDetails: {
        volumeInfo: {
            authors: [],
            imageLinks: {
                thumbnail: "",
            },
        },
    },
    isLoading: true,
};

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAILS":
            return {
                ...state,
                bookDetails: action.payload.bookDetails,
                isLoading: false,
            };
        case "LOADING_DETAILS":
            return { ...state, isLoading: true };
        default:
            return { ...state };
    }
};

export default detailsReducer;
