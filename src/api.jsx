//BASE URL
const base_url = "https://www.googleapis.com/books/v1/volumes";

//MY FAVOURITE AUTHOR
const favourite_series = "?q=sherlock+holmes";
const favourite_fiction_author = "?q=maya+angelou+inauthor";
const favourite_subject = "?q=JavaScript+subject";

//EXPORT FUNCTIONS THAT RETURN FETCH URL
export const favouriteSeriesURL = () => `${base_url}${favourite_series}`;
export const favouriteFictionalAuthorURL = () =>
    `${base_url}${favourite_fiction_author}`;
export const favouriteSubjectURL = () => `${base_url}${favourite_subject}`;
export const bookDetailsURL = (id) =>
    `${base_url}/${id}?key=${process.env.REACT_APP_MAPBOX_TOKEN_API}`;
export const searchBookURL = (query) => `${base_url}?q=${query}`;
