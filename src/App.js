import React, { useState } from "react";
import Home from "./pages/Home";
import "./styles/style.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

//INTRO JS
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

function App() {
    const [introState, setIntroState] = useState(false);
    const introJs = {
        stepsEnabled: introState,
        initialStep: 0,
        steps: [
            {
                element: ".tour-project",
                intro: "This project was created primarily using ReactJS, redux, sass and the google books api",
            },
            {
                element: ".image",
                intro: "Click on the book image to open a modal and read more details about the selected book",
            },
            {
                element: ".search input",
                intro: "Use the search bar to search for your favourite books",
            },
            {
                element: ".logo div",
                intro: "after generating your search you can use the readable logo to clear your search",
            },
        ],
    };
    const handleIntroExit = () => {
        setIntroState(false);
    };
    return (
        <div>
            <Steps
                enabled={introJs.stepsEnabled}
                steps={introJs.steps}
                initialStep={introJs.initialStep}
                onExit={handleIntroExit}
            />
            <Nav setIntroState={setIntroState} />
            <Route path={["/book/:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}

export default App;
