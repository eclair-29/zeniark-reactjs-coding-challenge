import { all, fork } from "redux-saga/effects";
import quizSaga from "./quizSaga";

function* rootSaga() {
    yield all([fork(quizSaga)]);
}

export default rootSaga;
