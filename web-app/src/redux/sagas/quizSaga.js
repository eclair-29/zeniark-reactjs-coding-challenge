import { call, put, takeEvery, select } from "redux-saga/effects";
import {
    getNextQuestion,
    getQuestionsSuccess,
    updateQuestionNo,
    updateScore,
} from "../slices/quiz";

const api = "http://localhost:5000";

function* getQuestionsSaga() {
    const fetchedQuestions = yield call(() => fetch(`${api}/questions`));
    const questions = yield fetchedQuestions.json();

    yield put(getQuestionsSuccess(questions));
}

function* updateRecordSaga() {
    const answersState = yield select((state) => state.quiz.answers);
    const questionsState = yield select((state) => state.quiz.questions);
    const questionNoState = yield select((state) => state.quiz.questionNo);
    const questionIndexState = yield select(
        (state) => state.quiz.questionIndex
    );
    const scoreState = yield select((state) => state.quiz.score);

    const newScore =
        answersState[questionIndexState] ===
        questionsState[questionIndexState].answer
            ? scoreState + 1
            : scoreState;
    yield put(updateScore(newScore));
    console.log(newScore);

    yield put(getNextQuestion(questionIndexState + 1));
    yield put(updateQuestionNo(questionNoState + 1));
}

function* quizSaga() {
    yield takeEvery("quiz/loadQuestions", getQuestionsSaga);
    yield takeEvery("quiz/getAnswers", updateRecordSaga);
}

export default quizSaga;
