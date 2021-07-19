import { bookDetailsURL } from "../api";

export const loadBookDetails = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAILS",
    });

    const data = await fetch(bookDetailsURL(id));
    const bookDetails = await data.json();
    dispatch({
        type: "GET_DETAILS",
        payload: {
            bookDetails: bookDetails,
        },
    });
};
