import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lobby from "./pages/Lobby";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import "./styles/main.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Lobby />} index />
                    <Route element={<Quiz />} path="quiz" />
                    <Route element={<Result />} path="result" />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
