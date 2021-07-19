import {
    favouriteSeriesURL,
    favouriteFictionalAuthorURL,
    favouriteSubjectURL,
    searchBookURL,
} from "../api";

export const loadBooks = () => async (dispatch) => {
    //FETCH
    const seriesData = await fetch(favouriteSeriesURL());
    const favouriteFictionSeries = await seriesData.json();
    const authorData = await fetch(favouriteFictionalAuthorURL());
    const favouriteFictionAuthor = await authorData.json();
    const subjectData = await fetch(favouriteSubjectURL());
    const favouriteSubject = await subjectData.json();
    dispatch({
        type: "FETCH_BOOKS",
        payload: {
            favouriteFictionSeries: favouriteFictionSeries.items,
            favouriteFictionAuthor: favouriteFictionAuthor.items,
            favouriteSubject: favouriteSubject.items,
        },
    });
};

export const fetchSearch = (book_name) => async (dispatch) => {
    const searchData = await fetch(searchBookURL(book_name));
    const userSearchResult = await searchData.json();
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            userSearchResult: userSearchResult.items,
        },
    });
};
