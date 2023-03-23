import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import Recap from "./components/Recap";

import "./styles.scss";

const Result = () => {
    const { score, questions } = useSelector((state) => state.quiz);

    return (
        <div className="page page-result">
            <div className="page-title">
                <img src={logo} alt="logo" id="resultlogo" />
                <h3>Final Results</h3>
                <div></div>
            </div>
            <div className="page-body">
                <div className="score">
                    <h1>
                        {score}/{questions.length}
                    </h1>
                    <p>Your Score</p>
                </div>
                <Recap />
            </div>
            <div className="page-control">
                <Link to="/">PLAY AGAIN</Link>
            </div>
        </div>
    );
};

export default Result;
