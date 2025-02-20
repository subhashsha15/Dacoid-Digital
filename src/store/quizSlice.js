import { createSlice } from '@reduxjs/toolkit';
import { QuestionLists } from '../questions';

const initialState = {
    questions: QuestionLists,
    currentQuestionIndex: 0,
    userAnswers: {},
    score: 0,
    attemptHistory: [],
    timer: 30
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload;
            // Record answer only once per question
            if (!state.userAnswers[questionId]) {
                state.userAnswers[questionId] = answer;
                const question = state.questions.find(q => q.id === questionId);
                if (question) {
                    if (answer.trim().toUpperCase() === question.correctAnswer.trim().toUpperCase()) {
                        state.score += 1;
                    }
                }
            }
        },
        nextQuestion: (state) => {
            if (state.currentQuestionIndex < state.questions.length - 1) {
                state.currentQuestionIndex += 1;
                state.timer = 30;
            }
        },
    resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.userAnswers = {};
            state.score = 0;
            state.timer = 30;
        },
        tickTimer: (state) => {
            if (state.timer > 0) {
                state.timer -= 1;
            }
        },
        saveAttempt: (state) => {
            state.attemptHistory.push({
                date: new Date().toLocaleString(),
                score: state.score,
                total: state.questions.length,
                userAnswers: { ...state.userAnswers }
            });
        }
    }
});

export const { answerQuestion, nextQuestion, resetQuiz, tickTimer, saveAttempt } = quizSlice.actions;
export default quizSlice.reducer;
