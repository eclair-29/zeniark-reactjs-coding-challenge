import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        questions: [],
        questionNo: 1,
        score: 0,
        loading: false,
        validation: "",
        questionIndex: 0,
        answers: [],
    },
    reducers: {
        getQuestionsSuccess: (state, action) => {
            state.questions = action.payload;
            state.loading = false;
        },
        getQuestionsFailure: (state, action) => {
            state.validation = action.payload;
            state.loading = false;
        },
        loadQuestions: (state) => {
            state.loading = true;
        },
        updateScore: (state, action) => {
            state.score = action.payload;
        },
        getNextQuestion: (state, action) => {
            state.questionIndex = action.payload;
        },
        getAnswers: (state, action) => {
            state.answers = action.payload;
        },
        resetChallenge: (state) => {
            state.answers = [];
            state.questionIndex = 0;
            state.score = 0;
            state.questionNo = 1;
        },
        updateQuestionNo: (state, action) => {
            state.questionNo = action.payload;
        },
    },
});

export const {
    getQuestionsFailure,
    getQuestionsSuccess,
    loadQuestions,
    updateScore,
    getNextQuestion,
    getAnswers,
    resetChallenge,
    updateQuestionNo,
} = quizSlice.actions;

export default quizSlice.reducer;
