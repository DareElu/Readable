const initialState = {
    favouriteFictionSeries: [
        {
            volumeInfo: {
                authors: [],
                imageLinks: {
                    thumbnail: "",
                },
            },
        },
    ],
    favouriteFictionAuthor: [
        {
            volumeInfo: {
                authors: [],
                imageLinks: {
                    thumbnail: "",
                },
            },
        },
    ],
    favouriteSubject: [
        {
            volumeInfo: {
                authors: [],
                imageLinks: {
                    thumbnail: "",
                },
            },
        },
    ],
    userSearchResult: [],
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS":
            return {
                ...state,
                favouriteFictionSeries: action.payload.favouriteFictionSeries,
                favouriteFictionAuthor: action.payload.favouriteFictionAuthor,
                favouriteSubject: action.payload.favouriteSubject,
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                userSearchResult: action.payload.userSearchResult,
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                userSearchResult: [],
            };
        default:
            return { ...state };
    }
};

export default booksReducer;
