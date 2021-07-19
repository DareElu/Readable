import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
//USE HISTORY ALLOWS YOU TO MANIPULATE THE URL
import { useHistory } from "react-router-dom";
//IMPORT STARS
import emptyStar from "../img/star-empty.png";
import fullStar from "../img/star-full.png";

const BookDetails = () => {
    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.className === "card-shadow") {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    const { bookDetails, isLoading } = useSelector(
        (state) => state.bookDetails
    );
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(bookDetails.volumeInfo.averageRating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={fullStar} alt={`${rating}`} key={i} />);
            } else {
                stars.push(<img src={emptyStar} alt={`0`} key={i} />);
            }
        }

        return stars;
    };

    return (
        <>
            {!isLoading && (
                <motion.div className="card-shadow" onClick={exitDetailHandler}>
                    <motion.div className="detail">
                        <motion.div className="stats">
                            <div className="rating">
                                <h3>
                                    {bookDetails &&
                                        bookDetails.volumeInfo.title}
                                </h3>

                                {bookDetails &&
                                    bookDetails.volumeInfo.authors.map(
                                        (author, index) => {
                                            return (
                                                <p key={index}>
                                                    Author: {author}
                                                </p>
                                            );
                                        }
                                    )}
                            </div>
                            <motion.div className="info">
                                <p>{bookDetails && getStars()}</p>
                                <div className="rating-count">
                                    <h3>Rating Count</h3>
                                    <p>
                                        {(bookDetails &&
                                            bookDetails.volumeInfo
                                                .ratingsCount) ||
                                            0}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="media">
                            <img
                                src={
                                    bookDetails &&
                                    bookDetails.volumeInfo.imageLinks.thumbnail
                                }
                                alt={
                                    bookDetails && bookDetails.volumeInfo.title
                                }
                            />
                            <motion.div className="description">
                                <p>
                                    {bookDetails &&
                                        bookDetails.volumeInfo.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default BookDetails;
