import React, { useEffect, useState } from "react";

const Home = () => {
    const [books, setBooks] = useState();

    const fetchMovies = async () => {
        const response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes"
        );

        const data = await response.json();

        console.log(data.items);
        setBooks(data.items);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Elevate</h1>
            {books &&
                books.map((book) => (
                    <div>
                        <h2>{book.volumeInfo.title}</h2>
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                    </div>
                ))}
        </div>
    );
};

export default Home;
