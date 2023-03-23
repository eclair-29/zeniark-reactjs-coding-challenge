import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "./sagas";
import quizReducer from "./slices/quiz";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        quiz: quizReducer,
    },
    middleware: [saga],
    devTools: true,
});

saga.run(rootSaga);

export default store;
