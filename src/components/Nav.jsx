import React, { useState } from "react";
import { GiBookCover, GiDetour } from "react-icons/gi";

import { motion } from "framer-motion";

import { fetchSearch } from "../actions/booksAction";

import { useDispatch } from "react-redux";

const Nav = ({ setIntroState }) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(input));
        setInput("");
    };

    const clearSearch = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    };
    return (
        <motion.nav className="nav">
            <motion.div onClick={clearSearch} className="logo">
                <GiBookCover className="icon" />
                <h1>Readable</h1>
            </motion.div>
            <motion.form onSubmit={submitSearch} className="search">
                <input value={input} onChange={inputHandler} type="text" />
                <button type="submit" className="searchBtn">
                    Search
                </button>
            </motion.form>
            <motion.div className="tour-project">
                <button onClick={() => setIntroState((state) => !state)}>
                    Tour Project <GiDetour />
                </button>
            </motion.div>
        </motion.nav>
    );
};

export default Nav;
