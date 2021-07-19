import React from "react";
import { motion } from "framer-motion";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadBookDetails } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    //Load Detail
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadBookDetails(book.id));
    };

    return (
        <motion.div className="styled-book">
            <h3>{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors.map((author, index) => {
                return <p key={index}>{author}</p>;
            })}
            <div className="image">
                <Link to={`/book/${book.id}`}>
                    <img
                        onClick={loadDetailHandler}
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                    />
                </Link>
            </div>
        </motion.div>
    );
};

export default Book;
