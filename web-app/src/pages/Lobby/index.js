import React from "react";
import { Link } from "react-router-dom";

import zeniarklogo from "../../images/zeniark-logo.png";

const Lobby = () => {
    return (
        <div className="page page-lobby">
            <div className="page-title">
                <img src={zeniarklogo} alt="zeniarklogo" id="lobbyLogo" />
                <h2>Welcome to the Trivia Challenge!</h2>
            </div>
            <div className="page-body">
                <p>You will be presented with 10 True or False questions.</p>
                <p>Can you score 10/10?</p>
            </div>
            <div className="page-control">
                <button>
                    <Link to="quiz">LET’S START!</Link>
                </button>
            </div>
        </div>
    );
};

export default Lobby;
