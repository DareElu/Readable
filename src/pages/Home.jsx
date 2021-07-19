import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../actions/booksAction";
//COMPONENTS
import Book from "../components/Book";
import BookDetails from "../components/BookDetails";
//ANIMATION
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
    //USE LOCATION RETURNS THE CURRENT URL
    const location = useLocation();
    //THE SPLIT RETURNS AN ARRAY OF VALUES SEPERATED BY EACH / FOUND IN LOCATION
    const pathId = location.pathname.split("/")[2];

    //FETCH BOOKS
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooks());
    }, [dispatch]);

    const {
        favouriteFictionSeries,
        favouriteFictionAuthor,
        favouriteSubject,
        userSearchResult,
    } = useSelector((state) => state.books);

    return (
        <motion.div className="book-list">
            {pathId && <BookDetails />}
            {userSearchResult.length !== 0 && (
                <>
                    <h2>Search Results</h2>
                    <motion.div className="books">
                        {userSearchResult &&
                            userSearchResult.map((book) => (
                                <Book key={book.id} book={book} />
                            ))}
                    </motion.div>
                </>
            )}
            <h2>My Favourite Book Series</h2>
            <motion.div className="books">
                {favouriteFictionSeries &&
                    favouriteFictionSeries.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
            </motion.div>
            <h2>My Favourite Author</h2>
            <motion.div className="books">
                {favouriteFictionAuthor &&
                    favouriteFictionAuthor.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
            </motion.div>
            <h2>My Favourite Book Topic</h2>
            <motion.div className="books">
                {favouriteSubject &&
                    favouriteSubject.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
            </motion.div>
        </motion.div>
    );
};

export default Home;
