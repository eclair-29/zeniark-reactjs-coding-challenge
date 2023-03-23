import React from "react";
import { useSelector } from "react-redux";

const Recap = () => {
    const { questions, answers } = useSelector((state) => state.quiz);

    console.log(answers);

    return (
        <div className="recap">
            <table>
                <tbody>
                    {questions.map((question, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="qna">
                                        <p>{question.question}</p>
                                        <i>
                                            The correct answer is{" "}
                                            <i
                                                className={
                                                    question.answer
                                                        ? "true-answer-tag"
                                                        : "false-answer-tag"
                                                }
                                            >
                                                {question.answer.toString()}
                                            </i>
                                            . You answered{" "}
                                            <i
                                                className={
                                                    answers[index]
                                                        ? "true-answer-tag"
                                                        : "false-answer-tag"
                                                }
                                            >
                                                {answers[index].toString()}
                                            </i>
                                        </i>
                                    </div>
                                </td>
                                <td>
                                    {answers[index] === question.answer ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="lightgreen"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="orangered"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Recap;
