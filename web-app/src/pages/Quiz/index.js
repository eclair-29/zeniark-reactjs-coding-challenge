import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../images/logo.png";
import { getAnswers, loadQuestions } from "../../redux/slices/quiz";

import "./styles.scss";

const Quiz = () => {
    const { questions, questionIndex, answers, questionNo } = useSelector(
        (state) => state.quiz
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAnswerControl = (answer) => {
        const answerList = [...answers, answer];

        if (questionNo !== questions.length) {
            dispatch(getAnswers(answerList));
            return;
        }

        dispatch(getAnswers(answerList));
        navigate("/result");
    };

    useEffect(() => {
        dispatch(loadQuestions());
    }, [dispatch]);

    const currentQuestion = questions[questionIndex];

    return (
        questions && (
            <div className="page page-quiz">
                <div className="page-title">
                    <div className="page-title-left">
                        <img src={logo} alt="zeniarklogo" id="quizlogo" />
                        <h4>Category: {currentQuestion?.category}</h4>
                    </div>
                    <p>
                        {questionIndex + 1}/{questions.length}
                    </p>
                </div>
                <div className="page-body">
                    <p>{currentQuestion?.question}</p>
                </div>
                <div className="page-control">
                    <button
                        className="page-control-button true"
                        onClick={() => handleAnswerControl(true)}
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                        </svg>
                        True
                    </button>
                    <button
                        className="page-control-button false"
                        onClick={() => handleAnswerControl(false)}
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        False
                    </button>
                </div>
            </div>
        )
    );
};

export default Quiz;
