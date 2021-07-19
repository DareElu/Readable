import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import detailsReducer from "./detailsReducer";

const allReducers = combineReducers({
    books: booksReducer,
    bookDetails: detailsReducer,
});

export default allReducers;
