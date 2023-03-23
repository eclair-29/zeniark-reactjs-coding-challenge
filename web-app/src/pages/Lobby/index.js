import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import zeniarklogo from "../../images/zeniark-logo.png";
import { resetChallenge } from "../../redux/slices/quiz";

import "./styles.scss";

const Lobby = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetChallenge());
    }, [dispatch]);

    return (
        <div className="page page-lobby">
            <div className="page-title">
                <img src={zeniarklogo} alt="zeniarklogo" id="lobbyLogo" />
                <h2>Welcome to the Trivia Challenge!</h2>
            </div>
            <div className="page-body">
                <p>You will be presented with 5 True or False questions.</p>
                <p>Can you score 5/5?</p>
            </div>
            <div className="page-control">
                <Link to="quiz">LET’S START!</Link>
            </div>
        </div>
    );
};

export default Lobby;
