import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lobby from "./pages/Lobby";

import "./styles/main.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Lobby />} path="/" />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
